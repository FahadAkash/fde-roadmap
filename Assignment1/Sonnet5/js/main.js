// Mobile navigation
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    })
  );
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('visible'));
}

// Footer year
document.querySelectorAll('.year').forEach(el => (el.textContent = new Date().getFullYear()));

// Contact form validation
const form = document.getElementById('contact-form');
if (form) {
  const setError = (input, msg) => {
    input.parentElement.querySelector('.error').textContent = msg;
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    const name = form.elements.name, email = form.elements.email, message = form.elements.message;
    setError(name, name.value.trim() ? '' : 'Please enter your name.');
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    setError(email, emailOk ? '' : 'Please enter a valid email.');
    setError(message, message.value.trim().length >= 10 ? '' : 'Please write at least 10 characters.');
    ok = name.value.trim() && emailOk && message.value.trim().length >= 10;
    if (ok) {
      // TODO: connect to a backend or service (Formspree, Netlify Forms, etc.)
      form.reset();
      const success = document.querySelector('.form-success');
      success.style.display = 'block';
      success.focus();
    }
  });
}
