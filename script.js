const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const logo = document.querySelector('#logo');

// onTabClick event
function onTabClick(e){
 // Deactivate all tabs 
 tabs.forEach((tab) => {
  tab.children[0].classList.remove('border-softRed','border-b-4','md:border-b-0')
 })

//Hide all pannels
panels.forEach((panel) => panel.classList.add('hidden'));

// Avtivate new tab and pannel
e.target.classList.add('border-softRed', 'border-b-4');

const classString = e.target.getAttribute('data-target');
document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden');

console.log(document.getElementById('panels').getElementsByClassName(classString)[0]);
}

// navToggle()
function navToggle(){
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
    
    if(menu.classList.contains('flex')){
        logo.setAttribute('src','./images/logo-bookmark-footer.svg')
    } else {
        logo.setAttribute('src','./images/logo-bookmark.svg')   
    }
}

// tabs menu event listner
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

// Hamburger event listner
btn.addEventListener('click', navToggle);