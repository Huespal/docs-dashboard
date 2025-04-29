import { renderDocument } from '@/components/Document';
import { renderDocumentsControls } from '@/components/Document/List/Control';
import { getDocuments } from '@/domain/document/api';
import { generateDocument } from '@/domain/document/helpers';
import './style.css';

export const renderDocuments = async (container: HTMLDivElement) => {
  let documents = await getDocuments();

  const renderList = () => documents.reduce(
    (acc, document) => acc + `${renderDocument(document)}`, '');

  container.innerHTML = `
    <div>
      <h1>Documents</h1>
      <div id="documents-controls"></div>
      <div id="documents-list">
        <header>
          <p>Name</p>
          <p>Contributors</p>
          <p>Attachments</p>
          <p>Date</p>
        </header>
        ${renderList()}
      </div>
      <button id="documents-add-btn">+ Add document</button>
    </div>`;


  const updateUI = () => {
    const list = document.getElementById('documents-list')!;
    const header = document.getElementsByTagName('header')?.[0]!;
    list.innerHTML = header.outerHTML + renderList();
    window.scrollBy({ top: -999, behavior: 'smooth' });
  }

  // Document sorting
  const sort = (sortKey: string) => {
    documents = documents.sort((a, b) => {
      switch (sortKey) {
        case 'title':
          return a.title < b.title ? -1 : 1;
        case 'version':
          return parseFloat(a.version) - parseFloat(b.version);
        case 'createdAt':
          const aDate = new Date(a.createdAt);
          const bDate = new Date(b.createdAt);
          return bDate.getTime() - aDate.getTime();
        default:
          return 1;
      }
    })
    updateUI();
  };

  // Document creation
  const addBtn = document.getElementById('documents-add-btn');
  addBtn?.addEventListener('click', () => {
    const doc = generateDocument();
    documents.unshift(doc);
    updateUI();
  });

  const controlsEl = document
    .querySelector<HTMLDivElement>('#documents-controls');
  if (controlsEl) renderDocumentsControls(controlsEl, sort);
}
