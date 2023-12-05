const timeSubmitted = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const month = date.getMonth() + 1;
  const monthF = month.toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return [`${month}${day}${year} ${hours}${minutes}${seconds}`, `${monthF}/${day}/${year} ${hours}:${minutes}:${seconds}`];
};

export default timeSubmitted;
