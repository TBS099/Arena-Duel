import Phaser from "phaser";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    // sprites, backgrounds, sounds get loaded here later
  }

  create() {
    this.scene.start("Menu");
  }
}
