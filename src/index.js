import Phaser from "phaser";
import playScene from "./playScene";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [playScene],
};

const game = new Phaser.Game(config);
