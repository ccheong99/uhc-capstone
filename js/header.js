// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


// Expanding Menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const expandingMenu = document.getElementById('expanding-menu');
    const body = document.body;

    hamburgerMenu.addEventListener('click', function () {
        if (expandingMenu.style.display === 'none') {
            expandingMenu.style.display = 'flex';
            hamburgerMenu.src = 'img/close-button.png'; // Change src to close-button.png
            body.classList.add('menu-expanded'); // Add class to body
        } else {
            expandingMenu.style.display = 'none';
            hamburgerMenu.src = 'img/hamburger-menu.png'; // Change src back to hamburger-menu.png
            document.body.style.overflowY = 'auto'; // Re-enable vertical scrolling
            body.classList.remove('menu-expanded'); // Remove class from body
        }
    });
});
