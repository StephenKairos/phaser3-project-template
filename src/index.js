import 'phaser';
import { BootScene } from './scenes/BootScene';
import { GameScene } from './scenes/GameScene';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-app',
    width: 800,
    height: 600
    scene: [BootScene, GameScene]
};

var game = new Phaser.Game(config);

game.scene.start('BootScene');