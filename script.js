let previousScrollPosition = window.pageYOffset;

const displayNavOnScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    const nav = document.querySelector('.nav');
    if (previousScrollPosition > currentScrollPosition) {
        nav.style.backgroundColor = 'rgba(219, 212, 166, 1)';
        nav.style.paddingTop = '15px';
        nav.style.paddingBottom = '15px';
    } else {
        nav.style.backgroundColor = 'rgba(219, 212, 166, 0.2)';
        nav.style.paddingTop = '0';
        nav.style.paddingBottom = '0';
    }
    previousScrollPosition = currentScrollPosition;
};

document.addEventListener('scroll', displayNavOnScroll);