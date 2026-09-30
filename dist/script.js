const navbar = document.querySelector('#navbar');
const menu = document.querySelector('#menuToggle');
const nav = document.querySelector('#navLinks');
const navBackdrop = document.querySelector('#navBackdrop');

addEventListener(
    'scroll',
    () => navbar.classList.toggle('scrolled', scrollY > 16),
    { passive: true }
);


// Menu tablet e mobile
const setMenuState = open => {
    if (open) {
        document.documentElement.style.setProperty(
            '--nav-menu-top',
            `${Math.max(0, Math.round(navbar.getBoundingClientRect().bottom))}px`
        );
    }

    nav.classList.toggle('open', open);
    navBackdrop.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open', open);
};

menu.addEventListener('click', () => {
    setMenuState(menu.getAttribute('aria-expanded') !== 'true');
});

navBackdrop.addEventListener('click', () => setMenuState(false));

addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenuState(false);
});

addEventListener('resize', () => {
    if (innerWidth > 1100) setMenuState(false);
});


// Fechar menu ao clicar num link
nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        setMenuState(false);
    });
});


// Reveal ao fazer scroll
const reveal = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                reveal.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

document.querySelectorAll('.reveal').forEach(element => {
    reveal.observe(element);
});


// Animação dos números
const numberObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            const el = entry.target;
            const number = +el.dataset.count;
            const start = performance.now();
            const duration = 1200;

            function tick(now) {
                const progress = Math.min(
                    1,
                    (now - start) / duration
                );

                const value = Math.round(
                    number * (
                        1 - Math.pow(1 - progress, 3)
                    )
                );

                el.textContent =
                    (el.dataset.prefix || '') +
                    value.toLocaleString('pt-PT') +
                    (el.dataset.suffix || '');

                if (progress < 1) {
                    requestAnimationFrame(tick);
                }
            }

            requestAnimationFrame(tick);

            numberObserver.unobserve(el);
        });
    },
    {
        threshold: 0.5
    }
);

document.querySelectorAll('[data-count]').forEach(element => {
    numberObserver.observe(element);
});


// Tabs / filtros dos cursos
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {

        document.querySelectorAll('.tab').forEach(item => {
            item.classList.remove('active');
        });

        tab.classList.add('active');

        const filter = tab.dataset.filter;

        document.querySelectorAll('.course').forEach(course => {
            course.hidden =
                filter !== 'todos' &&
                course.dataset.category !== filter;
        });
    });
});


// FAQ
document.querySelectorAll('.faq-q').forEach(question => {
    question.addEventListener('click', () => {

        const item = question.closest('.faq-item');
        const wasOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach(faqItem => {
            faqItem.classList.remove('open');

            faqItem
                .querySelector('.faq-q')
                .setAttribute('aria-expanded', 'false');

            faqItem
                .querySelector('.faq-a')
                .style.maxHeight = null;
        });

        if (!wasOpen) {
            item.classList.add('open');

            question.setAttribute(
                'aria-expanded',
                'true'
            );

            const answer = item.querySelector('.faq-a');

            answer.style.maxHeight =
                answer.scrollHeight + 'px';
        }
    });
});


// Abrir correctamente o primeiro FAQ activo
const first = document.querySelector(
    '.faq-item.open .faq-a'
);

if (first) {
    first.style.maxHeight =
        first.scrollHeight + 'px';
}
