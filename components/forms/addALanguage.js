import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
import backButton from '../shared/backButton';

const addLanguageForm = (user) => {
  clearDom();
  const domString = `<div id="showCards"><button id="showCards" type="button" class="btn btn-light">Show Cards</button></div>
  <form id="submitCard">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
   <input type="text" class="form-control" id="language" placeholder="Language" required>
   <label for="private">Keep Private?</label>
    <input type="checkbox" id="private" value="private?" />
    <div id="submitButton"><button type="submit" id="submitLangButton" class="btn btn-primary mt-3">Add Language</button></div>
    <div id="submitted">  
   </div>
  </div>
  </form>
</div>`;
  renderToDom('#form-container', domString);
  backButton(user);
};

export default addLanguageForm;