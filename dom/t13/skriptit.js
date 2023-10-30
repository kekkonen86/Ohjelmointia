let piirtoalusta = document.getElementById('piirtoalusta');
let konteksti = piirtoalusta.getContext('2d');
konteksti.fillStyle = 'purple';
// x y lev kork
konteksti.fillRect(35, 35, 50, 100);
konteksti.fillStyle = 'yellow';
konteksti.fillRect(300, 300, 50, 50);
konteksti.strokeStyle = 'orange';
konteksti.lineWidth = 5;
konteksti.strokeRect(300, 300, 50, 50);