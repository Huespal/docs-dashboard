import { api } from '@/core/api';
import { formatDocument } from '@/domain/document/helpers';
import { Document } from '@/domain/document/types';

export const getDocuments = async (): Promise<Document[]> => {
  const data = await api('/documents', 'GET');
  const documents = data ?? [];
  return documents?.map(formatDocument);
}