const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener('click', function(){
    alert('sabia que dirias eso :p')
});

const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*50);
    const randomY = parseInt(Math.random()*50);
    nobtn.style.setProperty('top', randomY+'%');
    nobtn.style.setProperty('left', randomX+'%');
    nobtn.style.setProperty('transform', 'translate(-${randomX}%,-${randomY}%)')
})