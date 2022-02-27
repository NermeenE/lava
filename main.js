const menuToggle = document.querySelector('.toggle'); 
const showcase = document.querySelector('.showcase');
//we selected the classes we want to mess with//

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active'); // the menutoggle is going to change to the close button when active
  showcase.classList.toggle('active'); //the showcase  we have it move over (open menu) when we click it with active since thats what we wrote in css//
})