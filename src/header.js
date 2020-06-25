const links = document.getElementsByTagName('a')
const linkArr = [...links]

const toggleSelectedLink = e => {
  if (e.target.classList.contains('active')) return
  linkArr.forEach((anchor => {
    if (anchor.classList.contains('active')) {
      anchor.classList.remove('active')
    } else {
      anchor.classList.add('active')
    }
  }))
}

const addEventListeners = () => {
  linkArr.forEach(link => link.addEventListener('click', toggleSelectedLink))
}

export default addEventListeners
