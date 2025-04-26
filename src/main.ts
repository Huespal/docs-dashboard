import { renderDocuments } from '@/components/Document/List';
import { renderNotifications } from '@/components/Notification';
import './style.css';

const root = document.querySelector<HTMLDivElement>('#app');
if (root) {
  root.innerHTML = `
    <div id="notifications"></div>
    <h1>Documents</h1>
    <div>
      <div>Filter</div>
      <div>Display format</div>
    </div>
    <div id="documents-list"></div>
    <button>+ Add document</button>
  `
}

renderNotifications(document.querySelector<HTMLDivElement>('#notifications')!)
renderDocuments(document.querySelector<HTMLDivElement>('#documents-list')!)