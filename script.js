// 1. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetElement = document.querySelector(this.getAttribute("href"));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // 2. Form Validation (for contact form)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const name = document.getElementById('name').value;
      const message = document.getElementById('message').value;
  
      if (!email || !name || !message) {
        alert('Please fill out all fields');
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email');
        return;
      }
  
      alert('Form submitted successfully!');
    });
  }
  
  // 3. On Load Animations
  window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  });
  
  // 4. Accordion
  document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('open');
    });
  });
  
  // 5. Lazy Loading Images
  let lazyLoadTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(lazyLoadTimeout);
    lazyLoadTimeout = setTimeout(() => {
      document.querySelectorAll('img.lazy-load').forEach(image => {
        if (image.getBoundingClientRect().top < window.innerHeight && image.dataset.src) {
          image.src = image.dataset.src;
          image.classList.remove('lazy-load');
        }
      });
    }, 200);
  });
  
  // 6. Hover Effects
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });
  
  // 7. Countdown Timer
  const countdownElement = document.getElementById('countdown');
  if (countdownElement) {
    const targetDate = new Date('2025-12-31T23:59:59').getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
      if (timeLeft <= 0) {
        countdownElement.textContent = 'Event Started!';
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  }
  
  // 8. Date Picker
  const dateInput = document.getElementById('date-picker');
  if (dateInput) {
    dateInput.addEventListener('focus', () => dateInput.type = 'date');
    dateInput.addEventListener('blur', () => dateInput.type = 'text');
  }
  
  // 9. Copy to Clipboard
  const copyButton = document.getElementById('copy-button');
  const textToCopy = document.getElementById('text-to-copy');
  if (copyButton && textToCopy) {
    copyButton.addEventListener('click', () => {
      const text = textToCopy.textContent || textToCopy.value;
      navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard!');
      }).catch(err => {
        alert('Failed to copy text: ' + err);
      });
    });
  }
  
  // 10. Geolocation
  const geolocationButton = document.getElementById('geolocation-button');
  const locationDisplay = document.getElementById('location-display');
  if (geolocationButton && locationDisplay) {
    geolocationButton.addEventListener('click', () => {
      locationDisplay.textContent = 'Locating...';
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            locationDisplay.textContent = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
          },
          error => {
            locationDisplay.textContent = 'Geolocation error: ' + error.message;
          }
        );
      } else {
        locationDisplay.textContent = 'Geolocation is not supported by this browser.';
      }
    });
  }
  
  // 11. Financial Charts
  const financialSymbols = ['AAPL', 'XAU/USD', 'SPY', 'IEF', 'BTC/USD'];
  const apiKey = '7b99487bc32a4a2592bb7eff1bc8365a';
  
  financialSymbols.forEach((symbol, index) => {
    fetchChartData({ id: `chart${index + 1}`, symbol, apiKey });
  });
  
  async function fetchChartData({ id, symbol, apiKey }) {
    const url = `https://api.twelvedata.com/time_series?symbol=${encodeURIComponent(symbol)}&interval=1day&outputsize=30&apikey=${apiKey}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!data || !data.values) throw new Error(data.message || 'Invalid data');
  
      const labels = data.values.map(val => val.datetime).reverse();
      const prices = data.values.map(val => parseFloat(val.close)).reverse();
  
      const ctx = document.getElementById(id).getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: `${symbol} Price`,
            data: prices,
            borderColor: 'rgba(255, 205, 86, 1)',
            backgroundColor: 'rgba(255, 205, 86, 0.1)',
            fill: true,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          aspectRatio: 2,
          scales: {
            x: { ticks: { color: '#fff' } },
            y: { ticks: { color: '#fff' } }
          },
          plugins: {
            legend: { labels: { color: '#fff' } }
          }
        }
      });
    } catch (err) {
      console.error(`Chart error for ${symbol}:`, err.message);
      const canvas = document.getElementById(id);
      if (canvas) canvas.insertAdjacentHTML('afterend', `<p style="color: red;">Error loading ${symbol}</p>`);
    }
  }
  
  // 12. Dropdown Hide Delay
  function delayedHide(item) {
    const dropdown = item.querySelector('ul');
    if (!dropdown) return;
    item.hideTimeout = setTimeout(() => dropdown.classList.add('hidden'), 300);
  }
  function clearHide(item) {
    const dropdown = item.querySelector('ul');
    if (!dropdown) return;
    clearTimeout(item.hideTimeout);
    dropdown.classList.remove('hidden');
  }
  
  // 13. Profile Redirect Based on Login
  document.addEventListener("DOMContentLoaded", () => {
    const profileLink = document.getElementById("profile-link");
  
    if (profileLink) {
      profileLink.addEventListener("click", (e) => {
        e.preventDefault();
  
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  
        if (userInfo && userInfo.name) {
          // Redirect to account page if user is logged in
          window.location.href = "account.html";
        } else {
          // Otherwise, redirect to signup/login
          window.location.href = "signup.html";
        }
      });
    }
  });
  
  
  