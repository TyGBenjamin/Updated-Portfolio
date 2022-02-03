let menu = document.getElementById('menuSelect')
let header = document.querySelector('header');
let cursorOne= document.querySelector('.cursorOne')
let cursorTwo= document.querySelector('.cursorTwo')
let links = document.querySelectorAll('a')
let clickPhone= document.getElementById('clickPhone')
let clickEmail= document.getElementById('clickEmail')
let clickLocation= document.getElementById('clickLocation')
let downloadCv = document.getElementById('downloadCv');

// when the menu button in upper right corner is pressed
// the header will toggle from displayed to hidden when the page
// is benath a certain width
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');

})

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    header.classList.remove('active')
}

// adds functionality to the cursor to porivde custom cursor response. 

window.onmousemove = (e) =>{
cursorOne.style.top = e.pageY + 'px';
cursorOne.style.left = e.pageX + 'px';
cursorTwo.style.top = e.pageY + 'px';
cursorTwo.style.left = e.pageX + 'px';
}

changeCursor = () =>{
    links.forEach(links =>{
        links.onmouseenter = () => {
        cursorOne.classList.add('active');
        cursorTwo.classList.add('active')
        }
        links.onmouseleave = () =>{
            cursorOne.classList.remove('active')
            cursorTwo.classList.remove('active')
        }
    })
}

changeCursor();

clickPhone.onclick = (event) =>{
    event.preventDefault();
    console.log("tsting")
}

clickEmail.onclick = (event) =>{
    event.preventDefault();
    console.log("tsting")
}

clickLocation.onclick = (event) =>{
    event.preventDefault();
    console.log("tsting")
}

downloadCv.addEventListener('click', function(){
    console.log('test')
    let resume="https://drive.google.com/file/d/1eBY_DxVdPXhypR77QPcFR_b42qN5TQ6M/view?usp=sharing"
window.open(resume, '_blank');
})
