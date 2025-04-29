export const getRelativeDate = (date: string, now?: string) => {
  const pastDate = new Date(date).getTime();
  const currentDate = now
    ? new Date(now).getTime()
    : new Date().getTime();
  const dayMs = 1000 * 60 * 60 * 24;
  const daysDiff = Math.abs(Math.ceil((pastDate - currentDate) / dayMs));

  if (daysDiff > 365) {
    const yearsDiff = Math.ceil(daysDiff / 365);
    return `${yearsDiff} year${yearsDiff > 1 ? 's' : ''} ago`;
  }
  if (daysDiff > 30) {
    const monthsDiff = Math.ceil(daysDiff / 30);
    return `${monthsDiff} month${monthsDiff > 1 ? 's' : ''} ago`;
  }
  if (daysDiff === 1) return 'yesterday';
  if (daysDiff < 1) return 'today';

  return `${daysDiff} day${daysDiff > 1 ? 's' : ''} ago`;
}

export const checkTimeTravel = (createdAt: string, updatedAt: string) => {
  const createdDate = new Date(createdAt);
  const updatedDate = new Date(updatedAt);
  return createdDate > updatedDate
    ? 'Time travel!'
    : '';
}