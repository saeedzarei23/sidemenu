const toggleBtn= document.querySelector('.toggle-btn')
const container = document.querySelector('.sidemenu-contaier')

toggleBtn.addEventListener('click',()=>{
    container.classList.toggle('shrink')
})