import { unsubscribe } from '@/core/socket';
import { subscribeNotifications } from '@/domain/notification/socket';
import { Notification } from '@/domain/notification/types';
import './style.css';

export const renderNotifications = async (container: HTMLDivElement) => {
  let notificationAmount = 0;

  const update = (notification: Notification) => {
    if (notificationAmount === 0) render();

    notificationAmount += 1;

    const notificationNameDiv = document.getElementById('notification-name')!;
    notificationNameDiv.innerHTML = `${notification.username}`;

    if (notificationAmount > 9) notificationAmount = 9;
    const notificationAmountDiv = document.getElementById('notification-amount')!;
    notificationAmountDiv.innerHTML = `${notificationAmount}`;
  }

  let webSocket = subscribeNotifications(update);

  const render = () => {
    container.innerHTML = `
      <div class="notification-content">
        <figure>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/filled-appointment-reminders.png"
            alt="Notification Bell"
          />
          <div id="notification-amount" class="notification-amount"></div>
        </figure>
        <p>New document added by</p>
        <strong id="notification-name"></strong> 
        <button id="notification-toggle">Turn off</button>
      </div>`;

    const button = document.getElementById('notification-toggle');

    if (button) {
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
  };
}
