import App from './App'

new App()

toggleOverlay()

function toggleOverlay() {
  const overlayState = document.querySelector('.overlay')
  const overlayBtn = document.querySelector('[data-js=overlay-btn]')
  const overlayCloseIcon = document.querySelector('[data-js=icon-close]')

  overlayBtn.addEventListener('click', () => {
    overlayState.classList.add('overlay--active')
  })
  overlayCloseIcon.addEventListener('click', () => {
    overlayState.classList.remove('overlay--active')
  })
}
