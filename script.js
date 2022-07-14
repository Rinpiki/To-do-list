const button = document.querySelector('[data-button]');
const modal = document.querySelector('[data-mdcontainer="modal-container"]');
const formBtn = document.querySelector('[data-formbtn=""]');
const remove = document.querySelector('[data-remove="svg"]');

const modalOn = () => {
  modal.style.display = 'flex';
};

const modalOff = (e) => {
  if (e.target.id === 'mdc') {
    modal.style.display = 'none';
  }
};

const sendForm = (e) => {
  e.preventDefault();
  modal.style.display = 'none';
  const texto1 = document.getElementById('input1');
  const texto2 = document.getElementById('input2');
  const input1 = texto1.value;
  const input2 = texto2.value;
  const box = document.createElement('div');
  box.innerHTML = `<div class="box" id="${input1 + 1}">
              <div class="text-tag" >
                <h2>${input1}</h2>
                <span>${input2}</span>
              </div>
              <div class="edit-remove">
                <img class="svg-edit" src="img/edit.svg" />
                <img src="img/remove.svg" data-remove="remove" id="${input1}"/>
              </div>
              </div>`;
  document.getElementById('box-list').appendChild(box);
  box.addEventListener('click', removeOn);
};
const removeOn = (e) => {
  console.log(e.target.id);
  const id = e.target.id;
  if (e.target.id == id) {
    const box = document.getElementById(id + 1);
    box.remove();
  }
};

button.addEventListener('click', modalOn);
modal.addEventListener('click', modalOff);
formBtn.addEventListener('click', sendForm);
