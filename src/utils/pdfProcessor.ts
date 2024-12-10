import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { Document } from '@langchain/core/documents';

export async function processResume(): Promise<Document[]> {
  // Load PDF
  const loader = new PDFLoader('public/docs/CharlesLGrahamResume_Full.pdf');
  const docs = await loader.load();

  // Split text into chunks
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const splitDocs = await textSplitter.splitDocuments(docs);
  return splitDocs;
} 