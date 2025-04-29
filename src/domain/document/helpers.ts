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

export const generateDocument = (): Document => ({
  id: '999',
  title: 'New Document',
  version: '1.0.0',
  attachments: ['Attachment 1', 'Attachment 2'],
  contributors: [{ id: '1', name: 'You :)' }],
  createdAt: new Date().toUTCString(),
  updatedAt: new Date().toUTCString()
})