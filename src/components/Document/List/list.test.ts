import { renderDocuments } from '@/components/Document/List';
import { generateDocument } from '@/domain/document/helpers';
import { getByText } from '@testing-library/dom';
import { describe, expect, test, vi } from 'vitest';

vi.mock('@/domain/document/api', () => ({
  getDocuments: () => new Promise((resolve) =>
    resolve([generateDocument()])
  )
}));

describe.skip('Document > List', () => {
  const container = document.createElement('div');

  test('Renders component successfully given required properties', () => {

    renderDocuments(container);

    expect(getByText(container, 'Documents'));
    expect(getByText(container, 'Name'));
    expect(getByText(container, 'Contributors'));
    expect(getByText(container, 'Date'));

    expect(getByText(container, '+ Add document'));
  });

  test('Adds a new document successfully given \'Add\' button click', () => {
    const container = document.createElement('div');
    renderDocuments(container);

    const btnEl = getByText(container, '+ Add document');
    btnEl.click();
    expect(getByText(container, 'New Document')).toHaveLength(2);
  });
});
