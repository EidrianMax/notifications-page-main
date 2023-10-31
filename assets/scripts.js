let numberOfNotifications = document.querySelectorAll('.c-notification--no-read').length
const bagde = document.querySelector('.c-badge')
const btnMarkAllNotifications = document.querySelector('.c-btn')

document.addEventListener('DOMContentLoaded', () => {
  bagde.textContent = numberOfNotifications
})

btnMarkAllNotifications.addEventListener('click', () => {
  document.querySelectorAll('.c-notification--no-read').forEach(element => {
    element.classList.remove('c-notification--no-read')

    bagde.remove()
  })
})