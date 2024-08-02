// Expanding Menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const expandingMenu = document.getElementById('expanding-menu');
    const bodyElements = document.querySelectorAll('.body');
    
    const isIndexPage = window.location.pathname === '/index.html' || window.location.pathname === '/';

    if (isIndexPage) {
        header.classList.add('fixed');
    }


    hamburgerMenu.addEventListener('click', function () {
        if (expandingMenu.style.display === 'none' || expandingMenu.style.display === '') {
            expandingMenu.style.display = 'flex';
            hamburgerMenu.src = 'img/close-button.png'; // Change src to close-button.png
            
            if (isIndexPage) {
                expandingMenu.style.backgroundColor = '#F4F4F4';
            } else {
                expandingMenu.style.backgroundColor = ''; // Reset to default or other color
            }

            bodyElements.forEach(element => {
                element.style.display = 'none';
            });
        } else {
            expandingMenu.style.display = 'none';
            hamburgerMenu.src = 'img/hamburger-menu.png'; // Change src back to hamburger-menu.png
            document.body.style.overflowY = 'auto'; // Re-enable vertical scrolling
            bodyElements.forEach(element => {
                element.style.display = '';
            });
        }
    });
});


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
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}