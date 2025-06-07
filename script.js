
  const pages = document.querySelectorAll('.page');
  let currentIndex = -1;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.toggle('active', i === index);
    });
  }

  document.getElementById('startBtn').addEventListener('click', () => {
    document.querySelector('.cover').classList.remove('active');
    currentIndex = 0;
    showPage(currentIndex);
  });

  document.querySelectorAll('.prevBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        showPage(currentIndex);
      }
    });
  });

  document.querySelectorAll('.nextBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentIndex < pages.length - 1) {
        currentIndex++;
        showPage(currentIndex);
      }
    });
  });

  // Start with all .page hidden
  showPage(-1);

let touchStartX = 0;
let touchEndX = 0;

function handleSwipeGesture() {
  if (touchEndX < touchStartX - 50) {
    // Swipe left = Next page
    if (currentIndex < pages.length - 1) {
      currentIndex++;
      showPage(currentIndex);
    }
  }
  if (touchEndX > touchStartX + 50) {
    // Swipe right = Previous page
    if (currentIndex > 0) {
      currentIndex--;
      showPage(currentIndex);
    }
  }
}

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
});

document.querySelectorAll('.table_of_contents a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // remove #
    const targetPage = document.getElementById(targetId);

    if (targetPage) {
      const pagesArray = Array.from(pages);
      const targetIndex = pagesArray.indexOf(targetPage);

      if (targetIndex !== -1) {
        currentIndex = targetIndex;
        showPage(currentIndex);
      }
    }
  });
});

document.querySelectorAll('.back-to-toc a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // remove #
    const targetPage = document.getElementById(targetId);

    if (targetPage) {
      const pagesArray = Array.from(pages);
      const targetIndex = pagesArray.indexOf(targetPage);

      if (targetIndex !== -1) {
        currentIndex = targetIndex;
        showPage(currentIndex);
      }
    }
  });
});
