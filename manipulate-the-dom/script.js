let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
    const newTitle = function(){
      document.querySelector('#main-title').textContent = 'Hi! I am DOM Toretto. Welcome to my homepage.'
    };
    newTitle();


  // Part 2
    const bodyColor = function(){
      document.querySelector('body').style.backgroundColor = 'gold'
    };
  bodyColor();

  // Part 3
    const favThings = document.getElementById('favorite-things')
      favThings.removeChild(favThings.lastElementChild)
  

  // Part 4
    const specialFont = function(){
      document.querySelector('.special-title').style.fontSize = '2em'
    }
    specialFont()

  // Part 5
    const pastRacesList = document.getElementById('past-races');
    const pastRaces = pastRacesList.children
      for (let race of pastRaces){
        if (race.innerText.toLowerCase() === 'chicago') race.remove();
      }
        // const pastRaces = function(){
        //   document.querySelectorAll('#past-races').ul.removeChild(li[3]);
        // }
        // pastRaces()

  // Part 6

    const nyc =  document.createElement('li');
     nyc.innerHTML = 'New York';
     pastRacesList.append(nyc);

      // document.querySelector('#past-races').appendChild(li);
     
    
  // Part 7
    const blogPost = document.createElement('div');
    const blogPostTitle = document.createElement('h2');
    const blogPostBody = document.createElement('p');
      blogPost.classList.add('blog-post'); // assignment didnt ask for color but i thought it would be more consistent to have one as the rest
      blogPostTitle.innerText = 'New York';
      blogPostBody.innerText = 'I drove my car up the Empire State building!'

  // Part 8
    document.getElementById('quote-title').addEventListener('click', randomQuote);


  // Part 9
  const blogPosts = document.getElementsByClassName('blog-post');

    for (let post of blogPosts) {
      post.addEventListener('mouseout', (e) => e.target.classList.toggle('purple'));
      post.addEventListener('mouseenter', (e) => e.target.classList.toggle('red'));
    }




});
