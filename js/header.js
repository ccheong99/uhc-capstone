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

// Expanding Menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const expandingMenu = document.getElementById('expanding-menu');
    const bodyElements = document.querySelectorAll('.body');
    const header = document.querySelector('header');

    const isIndexPage = window.location.pathname === '/index.html' || window.location.pathname === '/';

    if (isIndexPage) {
        header.classList.add('fixed');
    } else {
        // Hide Header on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = header.offsetHeight;

        window.addEventListener('scroll', function (event) {
            didScroll = true;
        });

        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = window.scrollY;

            if (Math.abs(lastScrollTop - st) <= delta) return;

            if (st > lastScrollTop && st > navbarHeight) {
                header.classList.remove('nav-down');
                header.classList.add('nav-up');
            } else {
                if (st + window.innerHeight < document.body.scrollHeight) {
                    header.classList.remove('nav-up');
                    header.classList.add('nav-down');
                }
            }

            lastScrollTop = st;
        }
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

            // Disable vertical scrolling
            document.body.style.overflow = 'hidden';

            bodyElements.forEach(element => {
                element.style.display = 'none';
            });
        } else {
            expandingMenu.style.display = 'none';
            hamburgerMenu.src = 'img/hamburger-menu.png'; // Change src back to hamburger-menu.png

            // Re-enable vertical scrolling
            document.body.style.overflow = 'auto';

            bodyElements.forEach(element => {
                element.style.display = '';
            });
        }
    });
});
