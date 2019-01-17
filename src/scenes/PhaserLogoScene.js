import 'phaser';

export class BootScene extends Phaser.Scene {
    constructor () {super('BootScene')}

    preload () {
    this.load.image('logo', 'assets/logo.png');

    // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // this.scale.pageAlignHorizontally = true;
    // this.scale.pageAlignVertically = true;
    }

    create () {
        var logo = this.add.image(600, 300, 'logo');

        var text = this.add.text();

        this.tweens.add({
            targets: logo,
            y: 600,
            duration: 1000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });

    }

    update () {

    }
}