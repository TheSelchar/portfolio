import 'dotenv/config';
import { Pinecone } from '@pinecone-database/pinecone';

async function deleteIndex() {
  try {
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!
    });

    await pinecone.deleteIndex('resume-chat');
    console.log('Successfully deleted Pinecone index!');
  } catch (error) {
    console.error('Error deleting index:', error);
  }
}

deleteIndex(); 