const clearDom = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#addCardButton').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#languages').innerHTML = '';
};

export default clearDom;
