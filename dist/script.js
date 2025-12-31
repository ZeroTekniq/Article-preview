const shareButton = document.getElementById('share-button');
const shareModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modalContainer = document.querySelector('.modal-container');

shareButton.addEventListener('click', openModal);
closeModal.addEventListener('click', close);
modalContainer.addEventListener('click', close);


function openModal() {
    shareModal.style.display = 'block';
    shareButton.style.zIndex = '0';
}
function close() {
    shareButton.style.zIndex = '1';
    shareModal.style.display = 'none';
}