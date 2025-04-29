import { renderDocuments } from '@/components/Document/List';
import { renderNotifications } from '@/components/Notification';
import './style.css';

const root = document.querySelector<HTMLDivElement>('#app');

if (root) {
  root.innerHTML = `
    <div id="notifications"></div>
    <div id="documents"></div>`;

  renderNotifications(document.querySelector<HTMLDivElement>('#notifications')!)
  renderDocuments(document.querySelector<HTMLDivElement>('#documents')!)
}
