const button = document.querySelector('[data-button]');

const modalOn = () => {
  const modal = document.querySelector('[data-mdcontainer="modal-container"]');
  modal.style.display = 'flex';
};

button.addEventListener('click', modalOn);
