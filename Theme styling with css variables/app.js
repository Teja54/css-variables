const root = document.documentElement;
const themeBtns = document.querySelectorAll('.theme > button');
themeBtns.forEach(btn => btn.addEventListener('click', handleThemeUpdate));

function handleThemeUpdate(e) {
  switch(e.target.value) {
    case 'dark':
      root.style.setProperty('--bg', '#000');
      root.style.setProperty('--color', '#fff');
      break;
    case 'maroon':
      root.style.setProperty('--bg', '#5D001E');
      root.style.setProperty('--color', '#fff');
      break;
    case 'light':
      root.style.setProperty('--bg', '#fff');
      root.style.setProperty('--color', '#222');
      break;
  }
}