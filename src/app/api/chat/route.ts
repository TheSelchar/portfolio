import { NextResponse } from 'next/server';
import { createOpenAIChain } from '@/utils/openai';
import { Pinecone } from '@pinecone-database/pinecone';
import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';
import { additionalContext } from '@/data/aiContext';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY!;

export async function POST(req: Request) {
  try {
    const { message, history, options } = await req.json();
    
    // Initialize Pinecone
    const pinecone = new Pinecone({
      apiKey: PINECONE_API_KEY
    });

    const index = pinecone.index('resume-chat');

    // Create vector store
    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings(),
      { pineconeIndex: index }
    );

    // Search for relevant context
    const results = await vectorStore.similaritySearch(message, 3);
    const resumeContext = results.map(doc => doc.pageContent).join('\n');

    const llm = createOpenAIChain();
    const systemPrompt = `You are an AI assistant that answers questions about Charles Graham based on his resume, experience, and additional information. 

    Resume Context:
    ${resumeContext}

    Additional Information:
    ${additionalContext}

    Response Guidelines:
    - Provide complete, focused answers to the specific question asked
    - Don't try to share everything at once - stick to what's most relevant
    - Use natural breaks between different points
    - Be conversational and professional
    - For technical topics, give one clear example that fully illustrates the point
    - For experience questions, share one complete story or example
    - Use emojis sparingly to add personality
    - For repeated questions, provide different perspectives or examples each time
    - If a response needs multiple parts, make each part complete but focused

    Remember: 
    - Answer the question fully, but don't add unnecessary information
    - Keep responses focused on the specific question
    - It's better to give one complete example than many partial ones
    - Use the current timestamp ${Date.now()} to help vary responses for repeated questions`;

    const fullPrompt = `${systemPrompt}\n\nUser: ${message}\nTimestamp: ${Date.now()}`;
    let response = await llm.predict(fullPrompt);

    // Format the response while preserving complete thoughts
    if (options?.concise) {
      // Split response only on clear breaks between thoughts
      response = response
        .split(/(?:\r?\n){2,}/)
        .map(chunk => chunk.trim())
        .filter(chunk => chunk.length > 0)
        .map(chunk => {
          // Preserve complete sentences within lists
          if (chunk.includes('\n')) {
            return chunk.split('\n')
              .map(line => line.trim())
              .filter(line => line.length > 0)
              .join('\n');
          }
          return chunk;
        })
        .join('\n\n');

      // Don't truncate responses, but ensure they're properly formatted
      response = response
        .split('\n\n')
        .map(chunk => chunk.trim())
        .filter(chunk => chunk.length > 0)
        .join('\n\n');
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 