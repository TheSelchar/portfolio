import { Pinecone } from '@pinecone-database/pinecone';

const PINECONE_API_KEY = 'pcsk_knrit_GEE2PiFqLFZEAF6szsBiQLkbYa4NiMp5e57VsWLS7m46fHgdsdKxU9WPPEYx3oS';

async function createIndex() {
  try {
    const pinecone = new Pinecone({
      apiKey: PINECONE_API_KEY
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