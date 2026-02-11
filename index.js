const background = 'red'
const color = 'white'

const result = 'estos son estilos: ${background} ${color}'

console.log(result)
const button = document.createElement('button')
button.innerText = 'click me'
button.style = 'background: red; color: white;'
button.style = 'background: ${backgroud'

const isAuthorized = true
button.addEventListener('click',  () => {
    if (isAuthorized) {
      return alert("esta autorizado") ;
        
    alert("no esta autorizado")
}
})
document.body.append(button)