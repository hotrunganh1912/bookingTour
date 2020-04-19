export function formatDate(time) {
  let current_datetime = new Date(time);
  return `${(current_datetime.getDate() < 10
    ? `0${current_datetime.getDate()}`
    : current_datetime.getDate()) +
    "-" +
    (current_datetime.getMonth() + 1 < 10
      ? `0${current_datetime.getMonth() + 1}`
      : current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getFullYear()}`;
}
export function formCurencyVN(price) {
  return price.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND"
  });
}
export function priceForChildren(price) {
  let priceForChildren = (price / 100) * 75;
  return priceForChildren.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND"
  });
}
