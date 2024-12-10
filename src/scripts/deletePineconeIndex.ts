import { Pinecone } from '@pinecone-database/pinecone';

const PINECONE_API_KEY = 'pcsk_knrit_GEE2PiFqLFZEAF6szsBiQLkbYa4NiMp5e57VsWLS7m46fHgdsdKxU9WPPEYx3oS';

async function deleteIndex() {
  try {
    const pinecone = new Pinecone({
      apiKey: PINECONE_API_KEY
    });

    await pinecone.deleteIndex('resume-chat');
    console.log('Successfully deleted Pinecone index!');
  } catch (error) {
    console.error('Error deleting index:', error);
  }
}

deleteIndex(); 