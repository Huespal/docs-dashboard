import { checkTimeTravel, getRelativeDate } from '@/core/helpers';
import { Document } from '@/domain/document/types';
import './style.css';

export const renderDocument = ({
  title,
  version,
  contributors,
  attachments,
  createdAt,
  updatedAt
}: Document) => `
  <div class="document">
    <div>
      <strong>${title}</strong>
      <p>Version ${version}</p>
    </div>
    <div>
      ${contributors.reduce(
  (acc, contributor) => acc + `<p>${contributor.name}</p>`, '')}
    </div>
    <div>
      ${attachments.reduce(
    (acc, attachment) => acc + `<p>${attachment}</p>`, '')}
    </div>
    <div>
      <p>${getRelativeDate(createdAt)}</p>
      <p>Last update: ${getRelativeDate(updatedAt)}</p>
      <p>${checkTimeTravel(createdAt, updatedAt)}</p>
    </div>
  </div> `;
