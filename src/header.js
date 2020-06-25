const links = document.getElementsByTagName('a')
const linkArr = [...links]
const addEventListeners = () =>{
  linkArr.forEach(link =>link.addEventListener('click',()=> {
    linkArr.forEach((link=> {
      if(link.classList.contains('active')){
        link.classList.remove('active')
      } else{
        link.classList.add('active')
      }
    }))
  })
)}

export default addEventListeners