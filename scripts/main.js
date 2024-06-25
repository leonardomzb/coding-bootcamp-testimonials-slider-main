import { testimonials } from '../data/testimonials.js';

const testimonyPositionEl = document.getElementById('quote-position');
const quoteEL = document.getElementById('quote-section__quote');
const nameEL = document.getElementById('quote-section__name');
const professionEl = document.getElementById('quote-section__profession');
const imgEl = document.getElementById('quote-section__img');
const prevButtonEl = document.getElementById('quote-section__prev-button');
const nextButtonEl = document.getElementById('quote-section__next-button');

nextButtonEl.addEventListener('click', () => { 
  switchTestimony(testimonials.length - 1, 0,  1);
});

prevButtonEl.addEventListener('click', () => {
  switchTestimony(0, testimonials.length - 1,  -1);  
});


function switchTestimony(indexStop, indexReset, indexCall ){
  if ( (testimonyPositionEl.innerHTML -1 ) === indexStop ) {    
    getTestimonyData(indexReset);    
  } else {   
    getTestimonyData((Number(testimonyPositionEl.innerHTML) - 1) + indexCall);
  }
}

function getTestimonyData(index){
  testimonyPositionEl.innerHTML = index + 1;
  quoteEL.innerHTML = '" ' + testimonials[index].quote + ' "';
  nameEL.innerHTML = testimonials[index].name;
  professionEl.innerHTML = testimonials[index].profession;  
  imgEl.src = testimonials[index].image;  
}

