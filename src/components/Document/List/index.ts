import { getDocuments } from '@/domain/document/api';

export const renderDocuments = async (container: HTMLDivElement) => {
  const documents = await getDocuments();

  container.innerHTML = `<div>
    ${documents.map(document =>
    `<div>${document.title}</div>`)
    }</div>`;
}
