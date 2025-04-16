document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector(['[data-modal]']);
  const openModalButtons = document.querySelectorAll('[data-modal-open]');
  const closeModalButtons = document.querySelectorAll('[data-modal-close]');
  const menuRight = document.querySelector('[data-modal-menu');
  let isClosing = false;

  // Open the modal with a class to enable animations
  function openModal() {
    if (isClosing) return;
    modal.showModal();
    modal.classList.add('open');
  }

  // Close the modal with animations
  function closeModal() {
    if (isClosing) return;
    isClosing = true;
    modal.classList.remove('open');

    setTimeout(() => {
      modal.close();
      isClosing = false;
    }, 500);
  }

  // Event delegation for nav links inside .menu-right
  menuRight.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'A') {
      closeModal();
    }
  });

  closeModalButtons.forEach((button) =>
    button.addEventListener('click', closeModal)
  );

  openModalButtons.forEach((button) =>
    button.addEventListener('click', openModal)
  );

  modal.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeModal();
  });
});
