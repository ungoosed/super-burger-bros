export class Sausage {
    constructor(scene, x, y, controls) {
        this.name = 'sausage';
        this.jumps = 1;
        this.pepperCount = 20;
        this.burgers = 0
        this.scene = scene
        this.sprite = this.scene.physics.add.sprite(x, y, 'peter-pepper', 0).setCollideWorldBounds(true).setMaxVelocity(300)
        this.pepper = this.scene.physics.add.sprite(0, 0, 'pepper').setVisible(false)
        this.pepper.body.setAllowGravity(false)
        this.pepper.body.setEnable(false)
        this.keys = this.scene.input.keyboard.addKeys(controls)
    }
    update() {
        this.keys.up.onDown = () => {
            if (!this.sprite.body.touching.down && this.jumps > 0) {
                this.sprite.body.setVelocityY(-500);
                this.jumps--
            }
        }
        if (!this.keys.left.isDown && !this.keys.right.isDown) {
            this.sprite.body.setVelocityX(this.sprite.body.velocity.x / 1.2)

        }
        if (this.sprite.body.blocked.down) {
            this.jumps = 2;

        }
        if (this.keys.up.isDown && this.sprite.body.blocked.down) {
            this.sprite.body.setVelocityY(-500);
            this.jumps = 1
        }
        if (this.keys.left.isDown) {
            this.sprite.body.setVelocityX(this.sprite.body.velocity.x - 20)
            this.sprite.setFlipX(true);

        }
        if (this.keys.right.isDown) {
            this.sprite.body.setVelocityX(this.sprite.body.velocity.x + 10)
            this.sprite.setFlipX(false);
        }

        if (this.keys.U.isDown && !this.pepper.visible && this.pepperCount > 0) {
            this.pepperCount--
            this.pepper.setX(this.sprite.body.position.x - 10).setY(this.sprite.body.position.y)
            this.pepper.body.setEnable(true)
            this.pepper.setVisible(true)
            this.pepperTimeout = setTimeout(
                () => {
                    this.pepper.setVisible(false)
                    this.pepper.body.setEnable(false)
                }, 1000)
        }
    }
}