

const steak = [
  'season steak generously with salt, pepper and garlic powder',
  'place in ziplock bag',
  'cook in sous vide at 120 F for 1-2 hours',
  'remove from bag and pat dry',
  'heat pan with grapeseed oil and a quarter stick of butter',
  'cook steak for 30-60 seconds per side using a spoon to baste with butter',
  'rest for 10 mintutes',
  'enjoy'
]

const brusselSprouts = [
  'wash burussel srouts',
  'cut off base and chop in half',
  'toss in bowl with olive oil, balsamic vinger and salt',
  'preheat oven to 500 F',
  'coat baking sheet with olive oil',
  'place in flat side down',
  'cook for 20 minutes',
  'place back in bowl and add salt and pepper',
  'enjoy'
]

const mashPotatoes = [
  'boil water',
  'tear open bag of of instant potato mix and pour into bowl',
  'pour in water',
  'mix',
  'enjoy'
]



/** DO NOT ALTER **/

function addFood(step, id){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log(step);
      document.querySelector(id).innerHTML += (`<li>${step}</li`)
      resolve(step)
    }, Math.floor(Math.random() * 1000));
  })
}
  
  
function makeFood(steps, id){
  for(const step of steps){
    addFood(step,id)
  }
  document.querySelector('#table').innerHTML += (`<img src="images/${id.replace('#','')}.jpg" />`)

  //USE AFTER EVERYTHING IS COMPLETE
  //document.body.innerHTML += `<button onclick="new Audio('dinnerIsServed.mp3').play()">Dinner is Served!</button>`
  
}


makeFood(steak, '#steak')
makeFood(mashPotatoes, '#mashPotatoes')
makeFood(brusselSprouts, '#brusselSprouts')








