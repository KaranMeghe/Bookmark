const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

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

// tabs menu event listner
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

