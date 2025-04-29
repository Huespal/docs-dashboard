import './style.css';

export const renderDocumentsControls = async (
  container: HTMLDivElement,
  onSort: (sortKey: string) => void
) => {
  container.innerHTML = `
    <div class="document-controls">
      <div class="document-controls-sort">
        <p>Sort by</p>
        <select>
          <option selected disabled hidden>Select one...</option>
          <option value="title">Name</option>
          <option value="version">Version</option>
          <option value="createdAt">Date (recent)</option>
        </select>
      </div>
      <div>
      <button id="documents-list-btn" class="disabled">
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios-filled/50/grid-3.png"
          alt="Display documents as list"
        />
      </button>
      <button id="documents-grid-btn">
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios-filled/50/view-module.png"
          alt="Display documents as grid"
        />
      </button>
      </div>
    </div>`;

  // Layout display
  const list = document.getElementById('documents-list')!;
  const listBtn = document.getElementById('documents-list-btn');
  const gridBtn = document.getElementById('documents-grid-btn');

  if (list && listBtn && gridBtn) {
    listBtn.addEventListener('click', () => {
      list.className = "";
      gridBtn.className = "";
      listBtn.className = "disabled";
    });

    gridBtn.addEventListener('click', () => {
      list.className = "display-grid";
      gridBtn.className = "disabled";
      listBtn.className = "";
    });
  }

  // Sorting
  const select = document.getElementsByTagName('select')?.[0];
  select?.addEventListener('change', ({ target }) => {
    const value = (target as HTMLSelectElement)?.value ?? '';
    onSort(value);
  });

}
