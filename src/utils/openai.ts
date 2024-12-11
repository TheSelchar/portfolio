import { OpenAI } from '@langchain/openai';
import { Pinecone } from '@pinecone-database/pinecone';
import { Document } from '@langchain/core/documents';
import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';

export const initVectorStore = async (documents: Document[]) => {
  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!
  });

  const index = pinecone.index('resume-chat');
  
  const vectorStore = await PineconeStore.fromDocuments(
    documents,
    new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY! }),
    { pineconeIndex: index }
  );

  return vectorStore;
};

export const createOpenAIChain = () => {
  return new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY!,
    modelName: 'gpt-4',
    temperature: 0.7
  });
};