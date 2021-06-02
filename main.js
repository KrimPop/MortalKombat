let scorpion={
    name:'Scorpion',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['нож','меч'],
    attack() {
        console.log(this.name+' fight');
    }
};
let kitana={
    name:'Kitana',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['нож','меч'],
    attack() {
        console.log(this.name+' fight');
    }
};
function createPlayer(player, obj) {
    //Player
    let $player=document.createElement('div');
    $player.classList.add(player);
    //Progressbar
    let $progressbar=document.createElement('div');
    $progressbar.classList.add('progressbar');
    
        let $life=document.createElement('div');
        $life.classList.add('life');
        $life.style.width='100%';
        $progressbar.appendChild($life);
    
        let $name=document.createElement('div');
        $name.classList.add('name');
        $name.innerText=obj.name;
        $progressbar.appendChild($name);

    $player.appendChild($progressbar);
    //Character
    let $character=document.createElement('div');
    $character.classList.add('character');

        let $img=document.createElement('img');
        $img.src=obj.img;
        $character.appendChild($img);

    $player.appendChild($character);
    //
    let $arenas=document.querySelector('.root .arenas');
    $arenas.appendChild($player);
}
createPlayer('player1',scorpion);
createPlayer('player2',kitana);
