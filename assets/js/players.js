// Sample list of players
const players = [
  {
    name: "Dheeraj Vemula",
    role: "Captain | Wicketkeeper | Batsman",
    batting: "Right-hand",
    bowling: "Off-spin",
    image: "assets/images/players/dheeraj.jpg",
  },
  {
    name: "Tarun",
    role: "Bowler",
    batting: "Right-hand",
    bowling: "Fast",
    image: "assets/images/players/tarun.jpg",
  },
  {
    name: "Bharat",
    role: "Allrounder",
    batting: "Right-hand",
    bowling: "Fast",
    image: "assets/images/players/bharat.jpg",
  },
  {
    name: "Ashu",
    role: "Allrounder",
    batting: "Right-hand",
    bowling: "Fast",
    image: "assets/images/players/ashu.jpg",
  },
  {
    name: "K Vinay",
    role: "Bowler",
    batting: "Right-hand",
    bowling: "Medium",
    image: "assets/images/players/kvinay.jpg",
  },
  {
    name: "Nishanth",
    role: "Allrounder",
    batting: "Right-hand",
    bowling: "Medium",
    image: "assets/images/players/nishanth.jpg",
  },
  {
    name: "Dattu",
    role: "Bowler",
    batting: "Right-hand",
    bowling: "Dast",
    image: "assets/images/players/dattu.jpg",
  },
  {
    name: "Saurabh",
    role: "Allrounder",
    batting: "Right-hand",
    bowling: "Fast",
    image: "assets/images/players/saurabh.jpg",
  },
  {
    name: "KK",
    role: "Wicketkeep",
    batting: "Right-hand",
    bowling: "Leg spin",
    image: "assets/images/players/kk.jpg",
  },
  {
    name: "Sreekar",
    role: "Allrounder",
    batting: "Right-hand",
    bowling: "Leg spin",
    image: "assets/images/players/sreekar.jpg",
  },
  {
    name: "Sai Vinay",
    role: "Allrounder",
    batting: "Right-hand",
    bowling: "Medium",
    image: "assets/images/players/saivinay.jpg",
  },
  {
    name: "Shravan",
    role: "Allrounder",
    batting: "Right-hand",
    bowling: "Leg spin",
    image: "assets/images/players/shravan.jpg",
  },
  {
    name: "Shahid",
    role: "Bowler",
    batting: "Right-hand",
    bowling: "Super Fast",
    image: "assets/images/players/player3.jpg",
  },
  {
    name: "Santosh",
    role: "Allrounder",
    batting: "Right-hand",
    bowling: "Leftarm Medium",
    image: "assets/images/players/santosh.jpg",
  },
  {
    name: "Nitesh",
    role: "Allrounder",
    batting: "Right-hand",
    bowling: "Medium",
    image: "assets/images/players/player3.jpg",
  },
  {
    name: "Veeresh",
    role: "Allrounder",
    batting: "Right-hand",
    bowling: "Off Spin",
    image: "assets/images/players/veeresh.jpg",
  },
];

// Dynamically generate HTML
const container = document.getElementById("playerList");

players.forEach((player) => {
  container.innerHTML += `
      <div class="player-card text-center me-3">
        <img src="${player.image}" alt="${player.name}" class="player-img mb-2">
        <h5 class="mb-0">${player.name}</h5>
        <small class="text-muted">${player.role}</small>
        <p class="mb-0 mt-1">Bat: ${player.batting}</p>
        <p class="mb-0">Bowl: ${player.bowling}</p>
      </div>
    `;
});
