import 'phaser';

// Put any Global Variables Here. Syntax:

/*
** var varName = ...;
*/

export class GameScene extends Phaser.Scene {
    
    constructor () {
        super('GameScene');
    }

    preload () {
        
    }

    create () {
        this.add.text(340, 295, 'Hello World!');
    }

    update () {
        
    }
}

// Put and additional functions here. Syntax: 

/*
** function functionName(params) {
**      // Code Here...
** }
**
*/