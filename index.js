var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'src/games/firstgame/assets/sky.png');
    this.load.image('ground', 'src/games/firstgame/assets/platform.png');
    this.load.image('star', 'src/games/firstgame/assets/star.png');
    this.load.image('bomb', 'src/games/firstgame/assets/bomb.png');
    this.load.spritesheet('dude', 'src/games/firstgame/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{
}

function update ()
{
}