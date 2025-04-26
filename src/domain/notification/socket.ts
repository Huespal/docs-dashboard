import { subscribe } from '@/core/socket';
import { formatNotification } from '@/domain/notification/helpers';
import { Notification, SocketNotification } from '@/domain/notification/types';

export const subscribeNotifications = (
  callback: (notification: Notification) => void
) => {
  const onMessage = (msg: SocketNotification) => {
    const notification = formatNotification(msg);
    callback(notification);
  }

  return subscribe<SocketNotification>('/notifications', onMessage);
}
