const shareButton = document.getElementById('share-button');
const shareModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modalContainer = document.querySelector('.modal-container');
const buttonHover = document.querySelector('.share-button:hover');

shareButton.addEventListener('click', toggleButton);
closeModal.addEventListener('click', close);
modalContainer.addEventListener('click', close);

ifTouchDevice();


function openModal() {
    modalContainer.style.display = 'block';
    shareModal.style.display = 'block';

    if (window.innerWidth >= 768) {
        shareButton.style.zIndex = '1';
    } else {
        shareButton.style.zIndex = '0';
    }
    
}

function close() {
    shareModal.style.display = 'none';
    modalContainer.style.display = 'none';
    shareButton.style.zIndex = '1';
    
}

function toggleButton() {
    if (shareModal.style.display === 'none' || shareModal.style.display === '') {
        openModal();
    } else {
        close();
    }
}


function isTouchDevice() {
  return (('ontouchstart' in window) ||
          (navigator.maxTouchPoints > 0) ||
          (navigator.msMaxTouchPoints > 0));
}

function ifTouchDevice() {
    if (isTouchDevice()) {
        shareButton.classList.add('no-hover');
    } else {
        shareButton.classList.remove('no-hover');
    }
}
