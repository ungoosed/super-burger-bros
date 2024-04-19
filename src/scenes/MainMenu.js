import { Scene } from 'phaser';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        let centerX = this.cameras.main.centerX
        let centerY = this.cameras.main.centerY

        this.logo = this.add.image(centerX, 200, 'burgerlogo').setScale(5, 5)
        this.player1Info = this.add.image(centerX - 200, centerY + 100, 'player1Info').setScale(5, 5)
        this.player2Info = this.add.image(centerX + 200, centerY + 100, 'player2Info').setScale(5, 5)
        this.startButton = this.add.image(centerX, 800, 'startButton').setScale(5, 5).setFrame(0)
        this.startButton.setInteractive()
        this.startButton.on('pointerover', () => { this.startButton.setFrame(1) })
        this.startButton.on('pointerout', () => { this.startButton.setFrame(0) })
        this.startButton.on('pointerdown', () => {
            this.scene.start('Game');
            this.scene.start('Hud')
        })



        this.registry.set('player1Burgers', 0)
        this.registry.set('player2Burgers', 0)

        this.registry.set('player1Damage', 0)
        this.registry.set('player2Damage', 0)

    }
}
