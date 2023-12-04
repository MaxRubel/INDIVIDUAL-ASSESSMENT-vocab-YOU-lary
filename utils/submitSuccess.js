const submitSuccess = () => {
  document.getElementById('submitted').innerHTML = 'Submitted!';
  setTimeout(() => {
    document.getElementById('submitted').innerHTML = '';
  }, 500);
};

export default submitSuccess;
