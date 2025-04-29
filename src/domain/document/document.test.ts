import { formatDocument, generateDocument } from '@/domain/document/helpers';
import { APIDocument } from '@/domain/document/types';
import { describe, expect, test } from 'vitest';

describe('Document helpers', () => {
  test('Returns a document object given API document data', () => {
    const apiDoc: APIDocument = {
      ID: '1',
      Title: 'Test',
      Version: '1.0.0',
      Attachments: ['Attachment 1', 'Attachment 2'],
      Contributors: [{
        ID: '1',
        Name: 'Test contributor'
      }],
      CreatedAt: '1997-08-28T14:14:02.473886584Z',
      UpdatedAt: '1997-08-28T14:14:03.473886584Z'
    }
    const doc = formatDocument(apiDoc);
    expect(doc).toEqual({
      id: '1',
      title: 'Test',
      version: '1.0.0',
      attachments: ['Attachment 1', 'Attachment 2'],
      contributors: [{ id: '1', name: 'Test contributor' }],
      createdAt: '1997-08-28T14:14:02.473886584Z',
      updatedAt: '1997-08-28T14:14:03.473886584Z'
    });
  });

  test('Generates a document object successfully given no properties', () => {
    const doc = generateDocument();
    expect(doc).toEqual({
      id: '999',
      title: 'New Document',
      version: '1.0.0',
      attachments: ['Attachment 1', 'Attachment 2'],
      contributors: [{ id: '1', name: 'You :)' }],
      createdAt: new Date().toUTCString(),
      updatedAt: new Date().toUTCString()
    });
  });
});
