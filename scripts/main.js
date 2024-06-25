import { quotes } from '../data/quotes.js';

const quoteId = document.getElementById('quote-id');
const quoteEL = document.getElementById('quote-section__quote');
const nameEL = document.getElementById('quote-section__name');
const profession = document.getElementById('quote-section__profession');
const imgEl = document.getElementById('quote-section_img');
const prevButtonEl = document.getElementById('quote-section__prev-button');
const nextButtonEl = document.getElementById('quote-section__next-button');
const quoteSectionEl = document.getElementById('quote-section');
const nav_buttonsEl = document.getElementById('nav_buttons');

getQuoteData('0');

nextButtonEl.addEventListener('click', () => { 
  switchQuote(quotes.length - 1, 0,  1);
});

prevButtonEl.addEventListener('click', () => {
  switchQuote(0, quotes.length - 1,  -1);
});

function switchQuote(indexStop, indexReset, indexCall ){
  for (let i=0; i < quotes.length; i++) {
    if (quotes[i].id === quoteId.innerHTML) {      
      if ( i === indexStop) {  
        getQuoteData(indexReset);
        break;
      } else {
        getQuoteData(i + indexCall);
        break;
      } 
    }
  } 
}

function getQuoteData(index){
  quoteId.innerHTML = quotes[index].id;
  quoteEL.innerHTML = '" ' + quotes[index].quote + ' "';
  nameEL.innerHTML = quotes[index].name;
  profession.innerHTML = quotes[index].profession;  
  imgEl.src = quotes[index].image;  
}

