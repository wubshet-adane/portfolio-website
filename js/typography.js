document.addEventListener("DOMContentLoaded", function () {
    const typography = document.getElementById("typeWriter");
    const text = "Software Engineer ...";
    let index = 0;
    let isDeleting = false;
    const speed = 300;
    const delay = 1000; // Pause before erasing

    function typeEffect() {
        if (!isDeleting) {
            typography.innerHTML = text.substring(0, index) + '<span class="cursor">|</span>';
            index++;
            if (index > text.length) {
                isDeleting = true;
                setTimeout(typeEffect, delay);
                return;
            }
        } else {
            typography.innerHTML = text.substring(0, index) + '<span class="cursor">|</span>';
            index--;
            if (index < 0) {
                isDeleting = false;
            }
        }
        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
