import { renderDocumentsControls } from '@/components/Document/List/Control';
import { getByAltText, getByRole, getByText } from '@testing-library/dom';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

describe('Document > List > Control', () => {
  const container = document.createElement('div');
  const onSort = vi.fn();

  test('Renders component successfully given required properties', () => {
    renderDocumentsControls(container, onSort);

    expect(getByText(container, 'Sort by'));
    expect(getByAltText(container, 'Display documents as list'));
    expect(getByAltText(container, 'Display documents as grid'));
  });

  test.skip('Fires \'onSort\' method successfully given option selection',
    () => {
      renderDocumentsControls(container, onSort);

      const selectEl = getByRole(container, 'combobox');
      const optionEl = getByRole(container, 'option', { name: 'Version' });
      userEvent.selectOptions(selectEl, optionEl);
      expect(onSort).toHaveBeenCalled();
    });
});
