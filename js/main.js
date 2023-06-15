const navigation = document.getElementById('navigation')
const backToTopButton = document.getElementById('backToTopButton')
const home = document.getElementById('home')
const services = document.getElementById('services')
const about = document.getElementById('about')
const contact = document.getElementById('contact')


window.addEventListener('scroll', onScroll)

onScroll()


function onScroll(){
    showNavOnScroll()
    showBackToToButtonONScroll()
    activeMenuAtCurrenSection(home)
    activeMenuAtCurrenSection(services)
    activeMenuAtCurrenSection(about)
    activeMenuAtCurrenSection(contact)
    
}

function activeMenuAtCurrenSection(section){
    //linha alvo
    const targetLine=scrollY + innerHeight /2

    //Verificar se a seção passou da linha
    //Quais dados vou precisar?

    //o topo da seção
    const sectionTop    = section.offsetTop

    //a altura da seção
    const sectionHeight = section.offsetHeight

    //o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    //informação dos dados e da lógica
    console.log('O topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetline)


   //Verificar se a base está abaixo da linha alvo
   //Quais dados vou precisar?

   //a seção terminar onde ?
   const sectionEndsAt = sectionTop + sectionHeight

   //O final da seção passou da linha alvo
   const sectionEndPassedTargetline = sectionEndsAt <= targetLine


   //Limites sa seção
   const sectionBoundaries = sectionTopReachOrPassedTargetline && 
   !sectionEndPassedTargetline
 

   const sectionId =section.getAttribute('id')
   const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
   
  menuElement.classList.remove('active')
  
   if(sectionBoundaries){
     menuElement.classList.add('active')
   }

}




function showNavOnScroll(){
    if(scrollY>0){
        navigation.classList.add('scroll')
    
        }else{
         navigation.classList.remove('scroll')
        }
}

function showBackToToButtonONScroll(){
    if(scrollY>600){
        backToButton.classList.add('show')
    
        }else{
       backToButton.classList.remove('show')
        }
}

closeMenu(false);

function openMenu(){

    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

/*
function ScrollReveal(){
   var options = {
       reveal:function() {}
   }
   return options
   }

var options = ScrollReveal()
*/
//essa e a mesma coisa do que a função a cima


ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:700,
}).reveal(`
  #home, 
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`);


