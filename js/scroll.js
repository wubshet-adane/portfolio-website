document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".col-12s");
    const container = document.querySelector(".scroll-container");

    if (boxes.length === 0 || !container) return;

    let ticking = false;

    function adjustBoxSizes() {
        let containerWidth = container.offsetWidth;
        let containerScrollLeft = container.scrollLeft;
        let containerCenterX = containerScrollLeft + containerWidth / 2;

        boxes.forEach(box => {
            let boxRect = box.getBoundingClientRect();
            let boxCenterX = boxRect.left + boxRect.width / 2;
            let distanceFromCenterX = Math.abs(containerCenterX - boxCenterX);
            let maxDistance = containerWidth / 2;

            let scaleFactor;
            if (distanceFromCenterX < containerWidth * 0.1) {
                scaleFactor = 1; // Keep original size near the center
            } else if (boxCenterX < containerWidth * 0.25 || boxCenterX > containerWidth * 0.75) {
                scaleFactor = Math.max(0.7, 1 - (distanceFromCenterX / maxDistance) * 0.3);
            } else {
                scaleFactor = 1; // Restore normal size when scrolling to the center
            }

            box.style.transform = `scale(${scaleFactor})`;
        });

        ticking = false;
    }

    function requestUpdate() {
        if (!ticking) {
            requestAnimationFrame(adjustBoxSizes);
            ticking = true;
        }
    }

    // Listen for horizontal scroll within the container
    container.addEventListener("scroll", requestUpdate);

    // Initialize AOS (Optional: only for animation)
    AOS.init({
        disable: 'mobile', 
        once: true,          
        startEvent: "scroll",
    });

    // Trigger once for initial scaling adjustments
    setTimeout(adjustBoxSizes, 100); 
});
