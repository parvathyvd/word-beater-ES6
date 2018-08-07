import {elements,words} from './lib';
import { puts } from 'util';

let score = 0;
let time = 5;

let isPlaying;


const init = () =>{

    // Show Words -Random 

    getRandomWord(words);

    //checking for match input 
    elements.input.addEventListener('input', startMarch)

    //Call countdown every second
    setInterval(countDown,1000);

    //Check game status

    setInterval(checkStatus,50);

}

const getRandomWord = (words) =>{
    const randomIndex = Math.floor(Math.random()* words.length);
    let randomWord = words[randomIndex];
    elements.givenWord.innerHTML = randomWord;
    return randomWord;
}



// Time countdown
const countDown = () =>{
    if(time>0){
        time--;
    }else if(time ===0){
        //Game over
        isPlaying = false;
        elements.message.innerHTML = "Game Over!"
    }
    elements.time.innerHTML = time;
    return time;
}

const checkStatus =() =>{
    if(!isPlaying && time === 0 ){
        elements.message.innerHTML = "Game Over!";
        score = 0;
    }
}



const startMarch = (e) => {
    let inputValue = e.target.value;

    if(inputValue === elements.givenWord.innerHTML){
        elements.message.innerHTML = "Correct!"
        isPlaying =true;
        time = 6;
        getRandomWord(words);
        elements.input.value = '';
        score++;
        elements.score.innerHTML = score;
    }
    else{
        elements.message.innerHTML = "Game Over!"
    }
}


window.addEventListener('load', init);


