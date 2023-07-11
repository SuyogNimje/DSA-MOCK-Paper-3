const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'block';
  document.body.classList.add('modal-open');
});

closeModalBtn.addEventListener('click', () => {
  closeModal();
});

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

function closeModal() {
  modalOverlay.style.display = 'none';
  document.body.classList.remove('modal-open');
}
