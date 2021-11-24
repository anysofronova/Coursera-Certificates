const subMenus = document.querySelectorAll('ul li ul');
for(let i of subMenus){
    i.className = 'hide-menu';
}

// const menuLinks = document.querySelectorAll('.menulink');
// for(let i = 0; i < menuLinks.length - 1; i++){
//     menuLinks[i].addEventListener('click', (e) => {
//         if(subMenus[i].classList.contains('hide-menu')){
//             subMenus[i].className = 'show-menu';
//         }else{
//             subMenus[i].className = 'hide-menu';
//         }
//     })
// }

// OR 

const menuLinks = document.querySelectorAll('.menulink');
for(let i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        let thisMenu = this.parentNode.querySelector('ul');
        if(thisMenu.classList.contains('hide-menu')){
            thisMenu.className = 'show-menu';
        }else{
            thisMenu.className = 'hide-menu';
        }
    })
}