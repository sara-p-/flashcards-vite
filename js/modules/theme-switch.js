export default function themeSwitch() {
  const body = document.querySelector('body')
  const toggle = document.querySelector('#theme-toggle')

  toggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      body.dataset.theme = 'dark'
    } else {
      body.dataset.theme = 'light'
    }
  })
}
