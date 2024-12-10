import { processResume } from '../utils/pdfProcessor';
import { initVectorStore } from '../utils/openai';

async function main() {
  try {
    console.log('Processing resume...');
    const documents = await processResume();

    console.log('Initializing vector store...');
    await initVectorStore(documents);

    console.log('Successfully loaded resume into Pinecone!');
  } catch (error) {
    console.error('Error initializing Pinecone:', error);
  }
}

main(); 