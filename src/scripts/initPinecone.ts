import 'dotenv/config';
import { config } from 'dotenv';
import path from 'path';
import { processResume } from '../utils/pdfProcessor';
import { initVectorStore } from '../utils/openai';

// Load both .env and .env.local
config({ path: path.resolve(process.cwd(), '.env') });
config({ path: path.resolve(process.cwd(), '.env.local') });

// Add console.log to verify
console.log('Script using OpenAI Key:', process.env.OPENAI_API_KEY?.slice(-4));

async function main() {
  try {
    console.log('Processing resume...');
    const documents = await processResume();

    console.log('Initializing vector store...');
    await initVectorStore(documents);

    console.log('Successfully initialized Pinecone!');
  } catch (error) {
    console.error('Error initializing Pinecone:', error);
  }
}

main(); 