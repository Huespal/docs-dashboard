import { APIDocument, Document } from '@/domain/document/types';

export const formatDocument = (document: APIDocument): Document => ({
  id: document.ID ?? '',
  title: document.Title ?? '',
  version: document.Version ?? '',
  attachments: document.Attachments ?? [],
  contributors: document.Contributors.map(contributor => ({
    id: contributor.ID ?? '',
    name: contributor.Name ?? ''
  })) ?? [],
  createdAt: document.CreatedAt ?? '',
  updatedAt: document.UpdatedAt ?? ''
});