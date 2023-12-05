const submitSuccess = () => {
  document.getElementById('submitted').innerHTML = 'Submitted!';
  setTimeout(() => {
    document.getElementById('submitted').innerHTML = '';
  }, 700);
};

export default submitSuccess;
