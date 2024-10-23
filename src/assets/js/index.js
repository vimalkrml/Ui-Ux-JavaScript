/** This only for dropdown */
const input = document.getElementById('error-country');
const dropdown = document.querySelector('.c-input-group__dropdown');
const items = document.querySelectorAll('.c-input-group__dropdown-item');
const arrow = document.getElementById('dropdown-arrow');

input.addEventListener('focus', () => {
    dropdown.style.display = 'block';
    arrow.classList.add('open');
});

items.forEach(item => {
    item.addEventListener('click', (e) => {
        input.value = e.target.textContent;
        dropdown.style.display = 'none';
        arrow.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.c-input-group')) {
        dropdown.style.display = 'none';
        arrow.classList.remove('open');
    }
});

document.getElementById('submitButton').addEventListener('click', function (e) {
    e.preventDefault();
    validateAndSubmit(e);
});

function validateAndSubmit(event) {
    const inputs = document.querySelectorAll('.c-input-group__input');
    let hasError = false;

    if (event.type === 'click' && document.activeElement.tagName !== 'INPUT') {
        inputs[0].focus();
    }

    inputs.forEach(input => {
        const errorMessage = document.querySelector(`#${input.id}-error`);
        const label = document.querySelector(`label[for="${input.name}"]`);

        errorMessage.style.display = 'none';
        input.classList.remove('error');
        label.classList.remove('error-text');

        if (document.activeElement === input && input.value.trim() === '') {
            hasError = true;
            errorMessage.textContent = "This field can't be empty. Please fill it in.";
            errorMessage.style.display = 'block';
            input.classList.add('error');
            label.classList.add('error-text');
        }
    });

    if (!hasError) {
        window.location.href = "thankyou.html";
    } else {
        setTimeout(() => {
            inputs.forEach(input => {
                const errorMessage = document.querySelector(`#${input.id}-error`);
                const label = document.querySelector(`label[for="${input.name}"]`);

                errorMessage.style.display = 'none';
                input.classList.remove('error');
                label.classList.remove('error-text');
            });
        }, 3000);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.c-play_btn');
    const videoPopup = document.getElementById('videoPopup');
    const videoPlayer = document.getElementById('videoPlayer');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');

    // Show the video popup and play the video
    playButton.addEventListener('click', function () {
        videoPopup.style.display = 'flex';
        videoPlayer.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    });

    document.getElementById('closePopup').addEventListener('click', closeVideoPopup);

    videoPopup.addEventListener('click', function (event) {
        if (event.target === this) {
            closeVideoPopup();
        }
    });

    function closeVideoPopup() {
        videoPopup.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('triggerPlayButton');
    const videoPopup = document.getElementById('popupVideoContainer');
    const videoPlayer = document.getElementById('popupVideoPlayer');
    const playIcon = document.getElementById('start-icon');
    const pauseIcon = document.getElementById('stop-icon');

    playButton.addEventListener('click', function () {
        videoPopup.style.display = 'flex';
        videoPlayer.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    });

    document.getElementById('closePopupButton').addEventListener('click', closeVideoPopup);

    videoPopup.addEventListener('click', function (event) {
        if (event.target === this) {
            closeVideoPopup();
        }
    });

    function closeVideoPopup() {
        videoPopup.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
});

document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('mobileMenu').classList.toggle('active');
});
