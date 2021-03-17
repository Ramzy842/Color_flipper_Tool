const body = document.querySelector('body');
const colorName = document.querySelector('.color');
const button = document.querySelector('main button');
const bgColorTitle = document.querySelector('main h1');
//store some defined colors
let colors = ['black', 'white', 'red', 'green', 'yellow', 'blue', 'brown', 'orange', 'pink', 'purple', 'grey'];

//background color when Dom content Loades
colorName.innerText = 'white';
button.style.backgroundColor = 'white';
// on click change the background color
button.addEventListener('click', () =>{
    //get a random color 
    const randomNum = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[randomNum];

    //turn font color to white if bg-color is black
    if(body.style.backgroundColor === 'black'){
        button.style.backgroundColor = colors[1];
        bgColorTitle.style.color = colors[1];
        colorName.innerText = 'black';
    }else{
        //change the background color name
    colorName.innerText = colors[randomNum];
    //change the button background
    button.style.backgroundColor = colorName.innerText;
    bgColorTitle.style.color = 'black';
    }
});