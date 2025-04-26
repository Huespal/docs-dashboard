import { unsubscribe } from '@/core/socket';
import { subscribeNotifications } from '@/domain/notification/socket';
import { Notification } from '@/domain/notification/types';

export const renderNotifications = async (container: HTMLDivElement) => {
  const update = (notification: Notification) => {
    const notificationDiv = document.getElementById('notification-name')!;
    notificationDiv.innerHTML = `${notification.username}`;
  }

  let webSocket = subscribeNotifications(update);

  container.innerHTML = `
    <div id="notification-name"></div>
    <button id="toggle-notifications">Turn off</button>
  `;

  const button = document.getElementById('toggle-notifications')!;

  const onToggle = () => {
    const isOn = button.innerText === 'Turn off';
    if (isOn) {
      unsubscribe(webSocket);
      button.innerText = `Turn on`;
    } else {
      webSocket = subscribeNotifications(update);
      button.innerText = `Turn off`;
    }
  }

  button.addEventListener('click', onToggle);
}
