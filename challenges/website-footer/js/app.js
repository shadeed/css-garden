let fieldset = document.querySelector('form > div');
let body = document.querySelector('body');

fieldset.addEventListener('click', function(e){
  if(e.target.type != undefined) {
    let option = e.target.id;
    let optionID = option.match(/\d+/)[0];
    
    body.setAttribute("class", "");
    body.classList.add(`option-${optionID}`);
  }
});