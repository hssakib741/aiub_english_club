document.addEventListener("DOMContentLoaded", () => {

  //Event Shows
    const gallery = document.querySelector('.gallery-grid');  // Use class instead of ID
    let scrollInterval;
    let scrollAmount = 0;

    if (gallery) {
        function autoScroll() {
            scrollInterval = setInterval(() => {
                // Scroll the gallery to the right
                if (scrollAmount < gallery.scrollWidth - gallery.clientWidth) {
                    scrollAmount += 2; 
                    gallery.scrollTo({
                        left: scrollAmount, 
                        behavior: 'smooth'  
                    });
                } else {
                    scrollAmount = 0; 
                    gallery.scrollTo({
                        left: 0, 
                        behavior: 'smooth'  
                    });
                }
            }, 20); // Adjust interval for smoothness
        }

        // Start the auto-scrolling
        autoScroll();
    } else {
        console.warn("Gallery element not found.");
    }


// Registration section
const registrationOpen = false; // True if registration is open, false if closed

window.onload = () => {
  const joinSection = document.getElementById('join-section');
  if (!registrationOpen) {
    joinSection.style.display = 'none';
  } else {
    joinSection.style.display = 'block';
  }
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbwYugd7010oXSu2J5ZcffRe9En1NUVeF0PJHWxgnMGoMrVapcx1dKbEbJq-In1vPDOl/exec';

document.getElementById('joinForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = new FormData(this);
  const selectedCategories = [];

  for (const entry of form.entries()) {
    if (entry[0] === 'category') selectedCategories.push(entry[1]);
  }

  form.delete('category');
  form.append('category', selectedCategories.join(', '));

  fetch(scriptURL, {
    method: 'POST',
    body: form
  }).then(res => {
    document.getElementById('joinForm').style.display = 'none';
    document.getElementById('thankYou').classList.remove('hidden');
  }).catch(err => {
    alert("Error: " + err.message);
  });
});

//Our Teams
  const cards = document.querySelectorAll('.fade-in');

  const teamObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.3
  });

  cards.forEach(card => {
    teamObserver.observe(card);
  });

    // Current Members Show
const counters = document.querySelectorAll('.number');
  const speed = 200; // Adjust speed as needed

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCount();
  });

//Our Teams
const teamWorks = document.querySelectorAll('.teams-section .work');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      // No unobserve here if you want the animation to re-play on scroll in/out,
      // but if it's meant to animate only once, uncomment the line below.
      // observer.unobserve(entry.target);
    } else {
        // Optional: Remove 'reveal' class when out of view if you want it to re-animate on scroll back
        entry.target.classList.remove('reveal');
    }
  });
}, {
  threshold: 0.2,
});

teamWorks.forEach(work => {
  observer.observe(work);
});
});