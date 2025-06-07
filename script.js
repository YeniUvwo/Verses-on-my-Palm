const pages = document.querySelectorAll('.page');
let currentPage = 0;

function updatePages() {
  pages.forEach((page, index) => {
    page.classList.toggle('active', index === currentPage);
  });
}

document.querySelectorAll('.next').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      updatePages();
    }
  });
});

document.querySelectorAll('.prev').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      updatePages();
    }
  });
});
