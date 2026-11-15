import Phaser from "phaser";

export class FightScene extends Phaser.Scene {
  constructor() {
    super("Fight");
  }

  create() {
    this.add
      .sprite(160, 316, "panda-idle")
      .setOrigin(0.5, 60 / 64)
      .play("panda-idle");
  }
}
