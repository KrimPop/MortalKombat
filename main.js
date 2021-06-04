const scorpion={
    name:'Scorpion',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['нож','меч'],
    attack() {
        console.log(this.name+' fight');
    }
};
const kitana={
    name:'Kitana',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['нож','меч'],
    attack() {
        console.log(this.name+' fight');
    }
};
const $arenas=document.querySelector('.root .arenas');
function createPlayer(player, obj) {
    //Player
    const $player=document.createElement('div');
    $player.classList.add(player);
    //Progressbar
    const $progressbar=document.createElement('div');
    $progressbar.classList.add('progressbar');
    
        const $life=document.createElement('div');
        $life.classList.add('life');
        $life.style.width=obj.hp+'%';
        $progressbar.appendChild($life);
    
        const $name=document.createElement('div');
        $name.classList.add('name');
        $name.innerText=obj.name;
        $progressbar.appendChild($name);

    $player.appendChild($progressbar);
    //Character
    const $character=document.createElement('div');
    $character.classList.add('character');

        const $img=document.createElement('img');
        $img.src=obj.img;
        $character.appendChild($img);

    $player.appendChild($character);
    //
    $arenas.appendChild($player);
}
createPlayer('player1',scorpion);
createPlayer('player2',kitana);
