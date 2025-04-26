import { Notification, SocketNotification } from '@/domain/notification/types';

export const formatNotification = (
  document: SocketNotification
): Notification => ({
  timestamp: document.Timestamp ?? '',
  userId: document.UserID ?? '',
  username: document.UserName ?? '',
  documentId: document.DocumentID ?? '',
  documentTitle: document.DocumentTitle ?? ''
});