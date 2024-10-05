// Define the function
// Save it as a property of window to prevent re-defining variables
let totalrice = document.querySelector("#root > section > div > div.container.page__container.page--game > div > div.game-block > div.globe > div.rice-counter > div.rice-counter__value > span").innerText;

window.freeRiceHackFunc = function() { 
  let problem = document.getElementsByClassName("card-title")[0].innerText; // '11 x 12'
  let pr      = problem.split('x').map(n => parseInt(n)); // [11, 12]

  let answer = pr[0] * pr[1]; // 132

  let opts = document.getElementsByClassName('card-button'); // [HTMLElement x 4]

  let a = opts[0]; // HTMLElement
  let b = opts[1]; // HTMLElement
  let c = opts[2]; // HTMLElement
  let d = opts[3]; // HTMLElement

  if (parseInt(a.innerText) == answer) {
    a.click();
  } else if (parseInt(b.innerText) == answer) {
    b.click();
  } else if (parseInt(c.innerText) == answer) {
    c.click();
  } else if (parseInt(d.innerText) == answer) {
    d.click();
  }

  // Check if total rice is 20,000
  totalrice = parseInt(document.querySelector("#root > section > div > div.container.page__container.page--game > div > div.game-block > div.globe > div.rice-counter > div.rice-counter__value > span").innerText);
  
  if (totalrice >= 20000) {
    location.reload(); // Refresh the page
  }

  for (let i = 0; i < window.bruh.length; i++) {
    clearTimeout(window.bruh[i]);
    bruh.shift();
  }

  bruh.push(setTimeout(window.freeRiceHackFunc, 100));
};

// Define a list to save all the timeouts
// Save it as a property of window to prevent re-defining variables
window.bruh = [];

// Start the hack with an initial timeout, it will recall itself automatically
bruh.push(setTimeout(window.freeRiceHackFunc, 100));
