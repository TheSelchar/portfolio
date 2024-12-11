import 'dotenv/config';
import { Pinecone } from '@pinecone-database/pinecone';

async function createIndex() {
  try {
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!
    });

    await pinecone.createIndex({
      name: 'resume-chat',
      dimension: 1536,
      waitUntilReady: true,
      spec: {
        serverless: {
          cloud: 'aws',
          region: 'us-east-1'
        }
      }
    });

    console.log('Successfully created Pinecone index!');
  } catch (error) {
    console.error('Error creating index:', error);
  }
}

createIndex(); 