import { renderDocument } from '@/components/Document';
import { generateDocument } from '@/domain/document/helpers';
import { getByText } from '@testing-library/dom';
import { describe, expect, test } from 'vitest';

describe('Document', () => {
  const requiredProps = generateDocument();

  test('Renders component successfully given required properties', () => {
    const container = document.createElement('div');
    container.innerHTML = renderDocument(requiredProps);

    expect(getByText(container, requiredProps.title));
    expect(getByText(container, 'Version ' + requiredProps.version));
    requiredProps.contributors.forEach(contributor => {
      expect(getByText(container, contributor.name));
    })
    requiredProps.attachments.forEach(attachment => {
      expect(getByText(container, attachment));
    })
  });
});
