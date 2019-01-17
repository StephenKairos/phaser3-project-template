import 'phaser';

var next;

export class BootScene extends Phaser.Scene {

    constructor () {
        super('BootScene');
    }

    preload () {
        this.load.image('logo', 'assets/logo.png');
    }

    create () {

        var logo = this.add.image(-100, 300, 'logo');

        var pointer = this.input.activePointer;

        next = -1;

        this.input.on('pointerup', function(pointer){
            next = 1;
        });

        this.tweens.add({
            targets: logo,
            y: 150,
            duration: 500,
            ease: 'Power2',
            yoyo: true,
            loop: 2
        });

        this.tweens.add({
            targets: logo,
            x: 400,
            duration: 500,
            ease: 'Power2',
            yoyo: false,
            loop: 0
        });
    }

    update () {
        if (next == 1) {
            next = -1;
            this.scene.start('GameScene');
        }
    }
}