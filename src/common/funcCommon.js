export function formatDate(time) {
  let current_datetime = new Date(time);
  return `${current_datetime.getDate() +
    " - " +
    (current_datetime.getMonth() + 1) +
    " - " +
    current_datetime.getFullYear()}`;
}
