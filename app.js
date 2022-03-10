const icon = document.querySelector('.icon-menu');
const appearList = document.querySelector('.menu-appear');
const exitBtn = document.querySelector('.exit-btn')

icon.addEventListener('click', function(){
    appearList.classList.add('btn-appear');
   
})

exitBtn.addEventListener('click', function (){
    appearList.classList.remove('btn-appear');

});


