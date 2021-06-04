const $arenas=document.querySelector('.arenas');
const $randomButton=document.querySelector('.button');
const player1={
    player: 1,
    name:'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['нож','меч'],
    attack() {
        console.log(this.name+' fight');
    }
};
const player2={
    player: 2,
    name:'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['нож','меч'],
    attack() {
        console.log(this.name+' fight');
    }
};

function createElement(tag, className) {
    const $tag=document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    };
    return $tag;
}

function createPlayer(obj) {
    //Player
    const $player=createElement('div','player'+obj.player);
    //Progressbar
    const $progressbar=createElement('div','progressbar');
        
        const $life=createElement('div','life');
        $life.style.width=obj.hp+'%';
        $progressbar.appendChild($life);
    
        const $name=createElement('div','name');
        $name.innerText=obj.name;
        $progressbar.appendChild($name);

    $player.appendChild($progressbar);
    //Character
    const $character=createElement('div','character');
    
        const $img=createElement('img');
        $img.src=obj.img;
        $character.appendChild($img);

    $player.appendChild($character);
    //
    return $player;
}

function changeHP (player) {
        const $playerLife=document.querySelector('.player' + player.player + ' .life');
        const $playerName=document.querySelector('.player' + player.player + ' .name');
        player.hp-=Math.ceil(Math.random()*20);
        if (player.hp<=0) {
            player.hp=0;
            $randomButton.disabled = true;
            player.player==1?$arenas.appendChild(playerWin(player2.name)):$arenas.appendChild(playerWin(player1.name));
        };
        player.player==1?$playerName.innerText=player.name+' '+player.hp:$playerName.innerText=player.hp+' '+player.name; //временные значения hp
        $playerLife.style.width=player.hp+'%';
}

function playerWin(name) {
    const $winTitle=createElement('div','loseTitle');
    $winTitle.innerText=name+' Win';
    return $winTitle;
}

$randomButton.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
