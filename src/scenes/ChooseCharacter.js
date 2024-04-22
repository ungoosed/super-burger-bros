import { Scene } from 'phaser';

export class ChooseCharacter extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        let centerX = this.cameras.main.centerX
        let centerY = this.cameras.main.centerY
        this.logo = this.add.image(centerX, 175, 'burgerlogo').setScale(5, 5)
        this.player1Info = this.add.image(centerX - 200, centerY, 'player1Info').setScale(3, 3)
        this.player2Info = this.add.image(centerX + 200, centerY, 'player2Info').setScale(3, 3)
        this.startButton = this.add.image(centerX, 800, 'startButton').setScale(5, 5).setFrame(0)
        this.chooseSausage1 = this.add.image(centerX - 200, 600, 'chooseSausage').setScale(3, 3).setFrame(0)
        this.chooseSausage2 = this.add.image(centerX + 200, 600, 'chooseSausage').setScale(3, 3).setFrame(0)
        this.chooseSausageIcon1 = this.add.image(centerX + 200, 600, 'sausage').setScale(3, 3).setFrame(0)
        this.startButton.setInteractive()
        this.startButton.on('pointerover', () => { this.startButton.setFrame(1) })
        this.startButton.on('pointerout', () => { this.startButton.setFrame(0) })
        this.chooseSausage1.on('pointerover', () => { this.chooseSausage1.setFrame(1) })
        this.chooseSausage1.on('pointerout', () => { this.chooseSausage1.setFrame(0) })
        this.chooseSausage2.on('pointerover', () => { this.chooseSausage2.setFrame(1) })
        this.chooseSausage2.on('pointerout', () => { this.chooseSausage2.setFrame(0) })
        this.startButton.on('pointerdown', () => {
            this.scene.start('Game');
            this.scene.start('Hud')
        })

    }
}
