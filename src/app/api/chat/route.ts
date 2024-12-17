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
    // Validate environment variables
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not configured');
      console.error('OPENAI_API_KEY is not configured');
    }
    if (!PINECONE_API_KEY) {
      throw new Error('PINECONE_API_KEY is not configured');
      console.error('PINECONE_API_KEY is not configured');
    }

    const { message, history, options } = await req.json();
    
    // Initialize Pinecone with error handling
    let pinecone;
    try {
      pinecone = new Pinecone({
        apiKey: PINECONE_API_KEY
      });
    } catch (error) {
      console.error('Pinecone initialization error:', error);
      throw new Error('Failed to initialize Pinecone');
    }

    const index = pinecone.index('resume-chat');

    // Create vector store with error handling
    let vectorStore;
    try {
      vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        { pineconeIndex: index }
      );
    } catch (error) {
      console.error('Vector store error:', error);
      throw new Error('Failed to create vector store');
    }

    // Search for relevant context with error handling
    let resumeContext;
    try {
      const results = await vectorStore.similaritySearch(message, 3);
      resumeContext = results.map(doc => doc.pageContent).join('\n');
    } catch (error) {
      console.error('Search error:', error);
      throw new Error('Failed to search for context');
    }

    // Create and use LLM chain with error handling
    let response;
    try {
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
      response = await llm.predict(fullPrompt);
    } catch (error) {
      console.error('LLM error:', error);
      throw new Error('Failed to generate response');
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error in chat route:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
} 