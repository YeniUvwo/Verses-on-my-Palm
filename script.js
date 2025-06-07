const cover = document.querySelector('.cover');
const pages = document.querySelectorAll('.page');
let currentIndex = -1;

function showPage(index) {
  // Hide all pages
  pages.forEach((page, i) => {
    page.classList.toggle('active', i === index);
  });

  // Show or hide cover
  cover.classList.toggle('active', index === -1);
}

// Start on cover
showPage(currentIndex);

// Start button goes to first page
document.getElementById('startBtn').addEventListener('click', () => {
  currentIndex = 0;
  showPage(currentIndex);
});

// Previous button
document.querySelectorAll('.prevBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      showPage(currentIndex);
    } else if (currentIndex === 0) {
      // Go back to cover
      currentIndex = -1;
      showPage(currentIndex);
    }
  });
});

// Next button
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
