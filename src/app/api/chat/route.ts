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
    const { message, history } = await req.json();
    
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
    Use the following context to answer questions, but don't mention that you're using this context. Be professional but friendly.
    If you're not sure about something, say so.
    
    Resume Context:
    ${resumeContext}

    Additional Information:
    ${additionalContext}

    Guidelines:
    - Be conversational and engaging
    - Share relevant anecdotes when appropriate
    - Provide specific examples when possible
    - Feel free to elaborate on technical topics
    - You can make connections between different aspects of Charles's experience
    - If asked about hobbies or personal interests, share from the provided context
    `;

    const fullPrompt = `${systemPrompt}\n\nUser: ${message}`;
    const response = await llm.predict(fullPrompt);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 