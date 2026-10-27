import Phaser from "phaser";

export class MenuScene extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  create() {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 2 - 30, "ARENA DUEL", {
        fontFamily: "monospace",
        fontSize: "40px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    const prompt = this.add
      .text(width / 2, height / 2 + 30, "Press ENTER to start", {
        fontFamily: "monospace",
        fontSize: "16px",
        color: "#cccccc",
      })
      .setOrigin(0.5);

    this.tweens.add({
      targets: prompt,
      alpha: 0.2,
      duration: 600,
      yoyo: true,
      repeat: -1,
    });

    this.input.keyboard!.once("keydown-ENTER", () => this.scene.start("Fight"));
  }
}
