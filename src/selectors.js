const allButton = document.getElementById('all')
const evenButton = document.getElementById('even')
const oddButton = document.getElementById('odd')

const boxes = document.getElementsByClassName('box')
const oddBoxes = document.getElementsByClassName('odd')
const evenBoxes = document.getElementsByClassName('even')

const boxArr = [...boxes]
const oddArr = [...oddBoxes]
const evenArr = [...evenBoxes]
const buttonArr = [oddButton, evenButton, allButton]

const toggleActive = e => {
  e.target.classList.add('selected')
  const tmp = [...buttonArr]
  tmp.splice(buttonArr.indexOf(e.target), 1)
  tmp.forEach(button => button.classList.remove('selected'))
}

const allListener = () => {
  allButton.addEventListener('click', e => {
    toggleActive(e)
    boxArr.forEach(box => {
      box.classList.remove('hidden')
    })
  })
}
const oddListener = () => {
  oddButton.addEventListener('click', e => {
    toggleActive(e)
    // uses a for loop to save on complexity
    for (let i = 0; i < oddArr.length; i++) {
      evenArr[i].classList.add('hidden')
      oddArr[i].classList.remove('hidden')
    }
  })
}
const evenListener = () => {
  evenButton.addEventListener('click', e => {
    toggleActive(e)
    for (let i = 0; i < oddArr.length; i++) {
      evenArr[i].classList.remove('hidden')
      oddArr[i].classList.add('hidden')
    }
  })
}

const addEventListeners = () => {
  allListener()
  evenListener()
  oddListener()
}

export default addEventListeners
