import './style.css';

const root = document.querySelector<HTMLDivElement>('#app');
if (root) {
  root.innerHTML = `
    <div>Notification</div>
    <h1>Documents</h1>
    <div>
      <div>Filter</div>
      <div>Display format</div>
    </div>
    <div>Documents List</div>
    <button>+ Add document</button>
  `
}