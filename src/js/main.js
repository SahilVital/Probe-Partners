   document.addEventListener("DOMContentLoaded", () => {
      const menuToggle = document.getElementById("menuToggle");
      const drawer = document.getElementById("sideDrawer");
      const drawerClose = document.getElementById("drawerClose");

      menuToggle.addEventListener("click", () => {
        drawer.classList.toggle("active");
      });

      drawerClose.addEventListener("click", () => {
        drawer.classList.remove("active");
      });
    });


      VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x0077ff,
    backgroundColor: 0xffffff,
    points: 12.00,
    maxDistance: 25.00,
    spacing: 18.00
  });



   const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.style.transform = 'translateY(-10px)';
      box.style.boxShadow = '0 15px 30px rgba(0,0,0,0.5)';
    });

    box.addEventListener('mouseleave', () => {
      box.style.transform = 'translateY(0)';
      box.style.boxShadow = 'none';
    });
  });


  // Select all counter elements
  const counters = document.querySelectorAll(".counter");

  // Function to animate counter
  function animateCounters() {
    counters.forEach((counter) => {
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const speed = 200;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }

  // Create observer to run animation once stats section is visible
  const statsSection = document.querySelector(".stats-carousel");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target); // run only once
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  if (statsSection) {
    observer.observe(statsSection);
  }


 
 


  document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      const button = item.querySelector(".faq-question");

      button.addEventListener("click", () => {
        item.classList.toggle("active");

        // Close others
        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove("active");
          }
        });
      });
    });
  });






const slider = document.querySelector('.slider');
        const originalSlides = Array.from(document.querySelectorAll('.slide'));
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        let currentIndex;
        let slidesPerView;
        let autoSlideInterval;

        function getSlidesPerView() {
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 1024) return 2;
            return 3;
        }

        function setupSlider() {
            // Remove existing clones if any
            const allSlides = document.querySelectorAll('.slide');
            allSlides.forEach(slide => {
                if (slide.classList.contains('clone')) {
                    slide.remove();
                }
            });

            slidesPerView = getSlidesPerView();

            // Clone last slidesPerView to the beginning
            for (let i = 0; i < slidesPerView; i++) {
                const clone = originalSlides[originalSlides.length - slidesPerView + i].cloneNode(true);
                clone.classList.add('clone');
                slider.insertBefore(clone, slider.firstChild);
            }

            // Clone first slidesPerView to the end
            for (let i = 0; i < slidesPerView; i++) {
                const clone = originalSlides[i].cloneNode(true);
                clone.classList.add('clone');
                slider.appendChild(clone);
            }

            currentIndex = slidesPerView; // Start at the first original slide
            updateSlider(false); // Initial position without transition
        }

        function updateSlider(transition = true) {
            const allSlides = document.querySelectorAll('.slide');
            const slideWidth = allSlides[0].offsetWidth + 20; // Width + margin (10px left + 10px right)
            slider.style.transition = transition ? 'transform 0.5s ease-in-out' : 'none';
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        function nextSlide() {
            currentIndex++;
            updateSlider();
            // If we've reached the cloned slides at the end, jump back seamlessly
            if (currentIndex >= originalSlides.length + slidesPerView) {
                currentIndex = slidesPerView;
                setTimeout(() => updateSlider(false), 500); // After transition ends
            }
        }

        function prevSlide() {
            currentIndex--;
            updateSlider();
            // If we've reached the cloned slides at the beginning, jump forward seamlessly
            if (currentIndex < slidesPerView) {
                currentIndex = originalSlides.length + slidesPerView - 1;
                setTimeout(() => updateSlider(false), 500); // After transition ends
            }
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 3000); // Auto slide every 3 seconds
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        next.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });

        prev.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });

        // Pause auto slide on hover
        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);

        // Update on resize
        window.addEventListener('resize', () => {
            const newSlidesPerView = getSlidesPerView();
            if (newSlidesPerView !== slidesPerView) {
                setupSlider();
            } else {
                updateSlider(false);
            }
        });

        // Initial setup
        setupSlider();
        startAutoSlide();










       



  // Newsletter form simulation
  document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const msg = document.getElementById('newsletter-msg');
    msg.textContent = 'Thanks for subscribing!';
    this.reset();

    setTimeout(() => {
      msg.textContent = '';
    }, 4000);
  });

