function showMessage() {
  alert("Hello! This is JavaScript in action.");
}

// Function to toggle text visibility in the JavaScript section
function toggleText() {
  const text = document.getElementById('jsText');
  if (text.style.display === 'none' || text.style.display === '') {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}

// Select elements
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.side-nav a');
const content = document.querySelector('.content');

// Scroll content when nav clicked with offset
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    content.scrollTo({
      top: targetSection.offsetTop - 100, 
      behavior: 'smooth'
    });
  });
});

// Highlight active link while scrolling content
content.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - content.offsetTop - 120; 
    if (content.scrollTop >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });

  // Show/hide Back to Top button
  const backToTop = document.getElementById('backToTop');
  if (content.scrollTop > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Back to Top Button
document.getElementById('backToTop').addEventListener('click', () => {
  content.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function increaseProgress() {
  const bar = document.getElementById("myProgressBar");
  let current = parseInt(bar.style.width); // get current %
  if (current < 100) {
    current += 10; // increase by 10
    bar.style.width = current + "%";
    bar.innerText = current + "%";
  } else {
    alert("🎉 Progress completed!");
  }
}


function resetProgress() {
  const bar = document.getElementById("myProgressBar");
  bar.style.width = "0%";
  bar.innerText = "0%";
}