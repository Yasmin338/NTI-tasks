const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      ['Neuer','Pavard','Martinez', 'Alaba','Davies','Kimmich', 'Goretzka','Coman','Muller','Gnarby','Lewandowski',],
      ['Burki','Schulz', 'Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze',],],
   
      score: '4:0',
      scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  const [players1, players2] = game.players;

  const gk = players1[0]; 
  const fieldPlayers = players1.slice(1); 
  
const allPlayers = [players1, players2];

const players1Final = [players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;

function printGoals(...players) {
    players.forEach((player, index) => {
      console.log(`Goal ${index + 1}: ${player}`);
    });
    console.log(`Total goals: ${players.length}`);
  }
  
 
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  printGoals(...game.scored);
  
  
