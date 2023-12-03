const submitSuccess = () => {
  document.getElementById('submitted').innerHTML = 'Submitted!';
  setTimeout(() => {
    document.getElementById('submitted').innerHTML = '';
  }, 800);
};

export default submitSuccess;
