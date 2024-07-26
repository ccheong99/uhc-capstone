document.addEventListener('DOMContentLoaded', function() {
    // Initialize fullPage.js
    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: false,
        navigation: false,
        scrollBar: true,
        afterLoad: function(origin, destination, direction) {
            // Hide all captions
            document.querySelectorAll('.caption').forEach(caption => {
                caption.style.opacity = 0;
            });

            // Show the caption for the current section after a delay
            const currentCaption = document.querySelector(`#fullpage .section:nth-child(${destination.index + 1}) .caption`);
            if (currentCaption) {
                setTimeout(() => {
                    currentCaption.style.opacity = 1;
                }, 300); // 0.2 seconds delay
            }
        },
        onLeave: function(origin, destination, direction) {
            // Optionally hide the caption when leaving the section
            const leavingCaption = document.querySelector(`#fullpage .section:nth-child(${origin.index + 1}) .caption`);
            if (leavingCaption) {
                leavingCaption.style.opacity = 0;
            }
        }
    });
});
