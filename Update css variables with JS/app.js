const root = document.documentElement;
const inputs = document.querySelectorAll('.controls > input');
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  root.style.setProperty(`--${this.name}`, this.value + suffix);
}
