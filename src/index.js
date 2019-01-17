import 'phaser';

import  { PhaserLogoScene } from './scenes/PhaserLogoScene';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-app',
    width: 1200,
    height: 900,
    scene: [PhaserLogoScene]
};

var game = new Phaser.Game(config);

// function preload () {
//     this.load.image('logo', 'assets/logo.png');

//     // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
//     // this.scale.pageAlignHorizontally = true;
//     // this.scale.pageAlignVertically = true;
// }

// function create () {
//     var logo = this.add.image(600, 300, 'logo');

//     var text = this.add.text();

//     this.tweens.add({
//         targets: logo,
//         y: 600,
//         duration: 1000,
//         ease: 'Power2',
//         yoyo: true,
//         loop: -1
//     });

// }

// function update () {

// }