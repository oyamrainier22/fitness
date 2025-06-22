// Toggle mobile menu
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
});

// Show back to top button
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll fade-in animation
const elements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));


  setTimeout(() => {
    document.getElementById('popupBanner').style.display = 'block';
  }, 10000); // 10 seconds

  // Load AOS animation script dynamically
const aosScript = document.createElement('script');
aosScript.src = "https://unpkg.com/aos@2.3.4/dist/aos.js";
aosScript.onload = () => {
  AOS.init({ duration: 800, once: true });
};
document.head.appendChild(aosScript);

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Stop the default form action (no redirect)

  const formData = new FormData(this);

  fetch('https://formsubmit.co/bc13cce67c68902abddbb4ffa164dd5f', { // Replace with your email!
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        document.getElementById('modal').style.display = 'flex';
        this.reset();
        setTimeout(() => {
          document.getElementById('modal').style.display = 'none';
        }, 3000);
      } else {
        alert('Form could not be sent. Please try again.');
      }
    })
    .catch(error => {
      console.error('FormSubmit Error:', error);
      alert('Something went wrong while sending the form.');
    });
});
