const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b432cc82443a4576bfa8c8e394c5640f";

const resultsContainer = document.querySelector(".results");

async function getGames() {
    // fetch

    const response = await fetch(url);

    const jsonresponse = await response.json();
    
    const games = jsonresponse.results;
 
for (let i = 0; i < games.lenght; i++){
    if( i === 8)
    break;
    
const gameName = games[i].name; 

Console.log(gameName); 

resultsContainer.innerHTML += `<div class="result">${games[i].name}</div>`;

 
}

}

getGames();