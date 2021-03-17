const body = document.querySelector('body');
const colorName = document.querySelector('.color');
const button = document.querySelector('main button');

//store some defined colors
let hexCode = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//background color when Dom content Loades
colorName.innerText = '#31A4DD';
button.style.backgroundColor = '#31A4DD';
body.style.backgroundColor = '#31A4DD';
// on click change the background color
button.addEventListener('click', () =>{

    //clear colorName Field
    colorName.innerText = '#';
    //get a random color 
    for(let i = 0; i< 6; i++){
        
        const randomNum = Math.floor(Math.random()*hexCode.length);
        let randomHex = hexCode[randomNum];
        colorName.innerText += randomHex;
        body.style.backgroundColor = colorName.innerText;
       //change the button background
        button.style.backgroundColor = colorName.innerText;



    }
    


})