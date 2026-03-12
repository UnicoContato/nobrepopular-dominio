const header = document.getElementById('main-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

const mobileMenuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach(element => {
    observer.observe(element);
});

document.getElementById('current-year').textContent = new Date().getFullYear();

const modal = document.getElementById('privacy-modal');
const modalContent = document.getElementById('privacy-content');
const openModalBtn = document.getElementById('open-privacy-btn');
const closeModalBtns = [document.getElementById('close-privacy-btn'), document.getElementById('close-privacy-btn-bottom')];

const openModal = () => {
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
};

const closeModal = () => {
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
};

openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});