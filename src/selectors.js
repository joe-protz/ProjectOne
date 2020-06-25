const allButton = document.getElementById('all')
const evenButton = document.getElementById('even')
const oddButton = document.getElementById('odd')

const boxes = document.getElementsByClassName('box')
const boxArr = [...boxes]

const toggleActive = e => {
  e.target.classList.add('selected')
  const buttonArr = [oddButton, evenButton, allButton]
  buttonArr.splice(buttonArr.indexOf(e.target),1)
  buttonArr.forEach(button => button.classList.remove('selected'))
  
  
}

const allListener = () => {
  allButton.addEventListener('click', e => {
    toggleActive(e)
  })

  boxArr.forEach(box => {
    box.classList.remove('hidden')
  })

}
const oddListener = () => {
  oddButton.addEventListener('click', e => {
    toggleActive(e)
  })
}
const evenListener = () => {
  evenButton.addEventListener('click', e => {
    toggleActive(e)
  })
}

const addEventListeners = () => {
  allListener()
  evenListener()
  oddListener()
}

export default addEventListeners
