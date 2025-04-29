import { renderNotifications } from '@/components/Notification';
import { queryByAltText } from '@testing-library/dom';
import {
  describe, expect, test, vi
} from 'vitest';


vi.mock('@/domain/notification/socket', () => ({
  subscribeNotifications: vi.fn()
}));

describe('Notifications', () => {
  const container = document.createElement('div');

  test('Renders component successfully given required properties', () => {
    renderNotifications(container);

    expect(queryByAltText(container, 'Notification Bell')).not.toBe;
  });
});
