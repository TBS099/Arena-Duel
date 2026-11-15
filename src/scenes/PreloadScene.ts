import Phaser from "phaser";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.setPath("/public/assets/characters/Panda_Samurai");
    this.load.spritesheet("panda-idle", "IDLE.png", {
      frameWidth: 128,
      frameHeight: 64,
    });
  }

  create() {
    this.anims.create({
      key: "panda-idle",
      frames: this.anims.generateFrameNumbers("panda-idle", {
        start: 0,
        end: 7,
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.scene.start("Menu");
  }
}
