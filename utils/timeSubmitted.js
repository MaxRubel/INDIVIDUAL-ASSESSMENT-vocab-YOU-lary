const timeSubmitted = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month + 1}/${day}/${year} ${hours}:${minutes}`;
};

export default timeSubmitted;
