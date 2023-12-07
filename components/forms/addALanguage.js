import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
import backButtonLang from '../shared/showLanguagesButton';

const addLanguageForm = (user) => {
  clearDom();
  const domString = `<div id="showLangs"><button id="showLangs" type="button" class="btn btn-light">Show Languages</button></div><form id="submitCard">
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
  backButtonLang(user);
};

export default addLanguageForm;
