const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let count = 0;
    projects.forEach(project => {
      const visible = filter === 'all' || project.dataset.category.split(' ').includes(filter);
      project.hidden = !visible;
      if (visible) count++;
    });
    document.getElementById('filter-status').textContent = `Showing ${count} projects.`;
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
