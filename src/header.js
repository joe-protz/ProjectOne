const links = document.getElementsByTagName('a')
const linkArr = [...links]

const addEventListeners = () => {
  linkArr.forEach(link => link.addEventListener('click', () => {
    linkArr.forEach((anchor => {
      if (anchor.classList.contains('active')) {
        anchor.classList.remove('active')
      } else {
        anchor.classList.add('active')
      }
    }))
  }))
}

export default addEventListeners
