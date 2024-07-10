document.addEventListener('DOMContentLoaded', function() {
    const navHeader = document.querySelector('.nav-header');
    const menuToggle = document.querySelector('.btn-menu');
    const menuOpen = document.querySelector('.menu-open');
    const menuClose = document.querySelector('.menu-close');
    const navLinks = document.querySelector('.nav-links');
    const socialIcons = document.querySelector('.social-icons');
    let isAnimating = false;

    menuToggle.addEventListener('click', function() {
        if (isAnimating) return;

        isAnimating = true;
        if (navLinks.classList.contains('show') && socialIcons.classList.contains('show')) {
            navLinks.style.animation = 'slideOut 1s ease forwards';
            socialIcons.style.animation = 'slideOut 1s ease forwards';
            navHeader.style.marginBottom = '1rem';
            setTimeout(() => {
                navLinks.classList.remove('show');
                socialIcons.classList.remove('show');

                navLinks.style.animation = '';
                socialIcons.style.animation = '';

                navHeader.style.marginBottom = '1rem';
                isAnimating = false;
            }, 800);
        } else {
            navLinks.classList.add('show');
            socialIcons.classList.add('show');

            navLinks.style.animation = 'slideIn 1s ease forwards';
            socialIcons.style.animation = 'slideIn 1s ease forwards';

            navHeader.style.marginBottom = '3rem';
            setTimeout(() => {
                isAnimating = false;
            }, 800);
        }

        menuOpen.classList.toggle('hidden');
        menuClose.classList.toggle('hidden');
    });
});
