import Phaser from "phaser";

class playScene extends Phaser.Scene {
  constructor() {
    super({ key: "playScene" });
  }

  preload() {
    this.attackAssets();
    this.climbAssets();
    this.deadAssets();
    this.glideAssets();
    this.idleAssets();
    this.jumpAssets();
    this.jumpAttackAssets();
    this.jumpThrowAssets();
    this.runAssets();
    this.slideAssets();
    this.throwAssets();
  }

  create() {
    this.attack();
    this.idle();
    this.dead();
    this.glide();
    this.idle = this.add.sprite(400, 300, "idle001").setScale(0.2);
    // this.idle.play("idle1");
    // this.idle.play("attack1");
  }

  update() {}

  attackAssets() {
    this.load.image(`attack001`, "/src/assets/Sprites/attack/Attack__000.png");
    this.load.image(`attack002`, "/src/assets/Sprites/attack/Attack__001.png");
    this.load.image(`attack003`, "/src/assets/Sprites/attack/Attack__002.png");
    this.load.image(`attack004`, "/src/assets/Sprites/attack/Attack__003.png");
    this.load.image(`attack005`, "/src/assets/Sprites/attack/Attack__004.png");
    this.load.image(`attack006`, "/src/assets/Sprites/attack/Attack__005.png");
    this.load.image(`attack007`, "/src/assets/Sprites/attack/Attack__006.png");
    this.load.image(`attack008`, "/src/assets/Sprites/attack/Attack__007.png");
    this.load.image(`attack009`, "/src/assets/Sprites/attack/Attack__008.png");
    this.load.image(`attack010`, "/src/assets/Sprites/attack/Attack__009.png");
  }

  climbAssets() {
    this.load.image(`climb001`, "/src/assets/Sprites/climb/Climb__000.png");
    this.load.image(`climb002`, "/src/assets/Sprites/climb/Climb__001.png");
    this.load.image(`climb003`, "/src/assets/Sprites/climb/Climb__002.png");
    this.load.image(`climb004`, "/src/assets/Sprites/climb/Climb__003.png");
    this.load.image(`climb005`, "/src/assets/Sprites/climb/Climb__004.png");
    this.load.image(`climb006`, "/src/assets/Sprites/climb/Climb__005.png");
    this.load.image(`climb007`, "/src/assets/Sprites/climb/Climb__006.png");
    this.load.image(`climb008`, "/src/assets/Sprites/climb/Climb__007.png");
    this.load.image(`climb009`, "/src/assets/Sprites/climb/Climb__008.png");
    this.load.image(`climb010`, "/src/assets/Sprites/climb/Climb__009.png");
  }

  deadAssets() {
    this.load.image(`dead001`, "/src/assets/Sprites/dead/Dead__000.png");
    this.load.image(`dead002`, "/src/assets/Sprites/dead/Dead__001.png");
    this.load.image(`dead003`, "/src/assets/Sprites/dead/Dead__002.png");
    this.load.image(`dead004`, "/src/assets/Sprites/dead/Dead__003.png");
    this.load.image(`dead005`, "/src/assets/Sprites/dead/Dead__004.png");
    this.load.image(`dead006`, "/src/assets/Sprites/dead/Dead__005.png");
    this.load.image(`dead007`, "/src/assets/Sprites/dead/Dead__006.png");
    this.load.image(`dead008`, "/src/assets/Sprites/dead/Dead__007.png");
    this.load.image(`dead009`, "/src/assets/Sprites/dead/Dead__008.png");
    this.load.image(`dead010`, "/src/assets/Sprites/dead/Dead__009.png");
  }

  glideAssets() {
    this.load.image(`glide001`, "/src/assets/Sprites/glide/Glide__000.png");
    this.load.image(`glide002`, "/src/assets/Sprites/glide/Glide__001.png");
    this.load.image(`glide003`, "/src/assets/Sprites/glide/Glide__002.png");
    this.load.image(`glide004`, "/src/assets/Sprites/glide/Glide__003.png");
    this.load.image(`glide005`, "/src/assets/Sprites/glide/Glide__004.png");
    this.load.image(`glide006`, "/src/assets/Sprites/glide/Glide__005.png");
    this.load.image(`glide007`, "/src/assets/Sprites/glide/Glide__006.png");
    this.load.image(`glide008`, "/src/assets/Sprites/glide/Glide__007.png");
    this.load.image(`glide009`, "/src/assets/Sprites/glide/Glide__008.png");
    this.load.image(`glide010`, "/src/assets/Sprites/glide/Glide__009.png");
  }

  idleAssets() {
    this.load.image(`idle001`, "/src/assets/Sprites/idle/Idle__000.png");
    this.load.image(`idle002`, "/src/assets/Sprites/idle/Idle__001.png");
    this.load.image(`idle003`, "/src/assets/Sprites/idle/Idle__002.png");
    this.load.image(`idle004`, "/src/assets/Sprites/idle/Idle__003.png");
    this.load.image(`idle005`, "/src/assets/Sprites/idle/Idle__004.png");
    this.load.image(`idle006`, "/src/assets/Sprites/idle/Idle__005.png");
    this.load.image(`idle007`, "/src/assets/Sprites/idle/Idle__006.png");
    this.load.image(`idle008`, "/src/assets/Sprites/idle/Idle__007.png");
    this.load.image(`idle009`, "/src/assets/Sprites/idle/Idle__008.png");
    this.load.image(`idle010`, "/src/assets/Sprites/idle/Idle__009.png");
  }

  jumpAssets() {
    this.load.image(`jump001`, "/src/assets/Sprites/jump/Jump__000.png");
    this.load.image(`jump002`, "/src/assets/Sprites/jump/Jump__001.png");
    this.load.image(`jump003`, "/src/assets/Sprites/jump/Jump__002.png");
    this.load.image(`jump004`, "/src/assets/Sprites/jump/Jump__003.png");
    this.load.image(`jump005`, "/src/assets/Sprites/jump/Jump__004.png");
    this.load.image(`jump006`, "/src/assets/Sprites/jump/Jump__005.png");
    this.load.image(`jump007`, "/src/assets/Sprites/jump/Jump__006.png");
    this.load.image(`jump008`, "/src/assets/Sprites/jump/Jump__007.png");
    this.load.image(`jump009`, "/src/assets/Sprites/jump/Jump__008.png");
    this.load.image(`jump010`, "/src/assets/Sprites/jump/Jump__009.png");
  }

  jumpAttackAssets() {
    this.load.image(
      `jump-attack001`,
      "/src/assets/Sprites/jump-attack/Jump-Attack__000.png"
    );
    this.load.image(
      `jump-attack002`,
      "/src/assets/Sprites/jump-attack/Jump-Attack__001.png"
    );
    this.load.image(
      `jump-attack003`,
      "/src/assets/Sprites/jump-attack/Jump-Attack__002.png"
    );
    this.load.image(
      `jump-attack004`,
      "/src/assets/Sprites/jump-attack/Jump-Attack__003.png"
    );
    this.load.image(
      `jump-attack005`,
      "/src/assets/Sprites/jump-attack/Jump-Attack__004.png"
    );
    this.load.image(
      `jump-attack006`,
      "/src/assets/Sprites/jump-attack/Jump-Attack__005.png"
    );
    this.load.image(
      `jump-attack007`,
      "/src/assets/Sprites/jump-attack/Jump-Attack__006.png"
    );
    this.load.image(
      `jump-attack008`,
      "/src/assets/Sprites/jump-attack/Jump-Attack__007.png"
    );
    this.load.image(
      `jump-attack009`,
      "/src/assets/Sprites/jump-attack/Jump-Attack__008.png"
    );
    this.load.image(
      `jump-attack010`,
      "/src/assets/Sprites/jump-attack/Jump-Attack__009.png"
    );
  }

  jumpThrowAssets() {
    this.load.image(
      `jump-throw001`,
      "/src/assets/Sprites/jump-throw/Jump-Throw__000.png"
    );
    this.load.image(
      `jump-throw002`,
      "/src/assets/Sprites/jump-throw/Jump-Throw__001.png"
    );
    this.load.image(
      `jump-throw003`,
      "/src/assets/Sprites/jump-throw/Jump-Throw__002.png"
    );
    this.load.image(
      `jump-throw004`,
      "/src/assets/Sprites/jump-throw/Jump-Throw__003.png"
    );
    this.load.image(
      `jump-throw005`,
      "/src/assets/Sprites/jump-throw/Jump-Throw__004.png"
    );
    this.load.image(
      `jump-throw006`,
      "/src/assets/Sprites/jump-throw/Jump-Throw__005.png"
    );
    this.load.image(
      `jump-throw007`,
      "/src/assets/Sprites/jump-throw/Jump-Throw__006.png"
    );
    this.load.image(
      `jump-throw008`,
      "/src/assets/Sprites/jump-throw/Jump-Throw__007.png"
    );
    this.load.image(
      `jump-throw009`,
      "/src/assets/Sprites/jump-throw/Jump-Throw__008.png"
    );
    this.load.image(
      `jump-throw010`,
      "/src/assets/Sprites/jump-throw/Jump-Throw__009.png"
    );
  }

  runAssets() {
    this.load.image(`run001`, "/src/assets/Sprites/run/Run__000.png");
    this.load.image(`run002`, "/src/assets/Sprites/run/Run__001.png");
    this.load.image(`run003`, "/src/assets/Sprites/run/Run__002.png");
    this.load.image(`run004`, "/src/assets/Sprites/run/Run__003.png");
    this.load.image(`run005`, "/src/assets/Sprites/run/Run__004.png");
    this.load.image(`run006`, "/src/assets/Sprites/run/Run__005.png");
    this.load.image(`run007`, "/src/assets/Sprites/run/Run__006.png");
    this.load.image(`run008`, "/src/assets/Sprites/run/Run__007.png");
    this.load.image(`run009`, "/src/assets/Sprites/run/Run__008.png");
    this.load.image(`run010`, "/src/assets/Sprites/run/Run__009.png");
  }

  slideAssets() {
    this.load.image(`slide001`, "/src/assets/Sprites/slide/Slide__000.png");
    this.load.image(`slide002`, "/src/assets/Sprites/slide/Slide__001.png");
    this.load.image(`slide003`, "/src/assets/Sprites/slide/Slide__002.png");
    this.load.image(`slide004`, "/src/assets/Sprites/slide/Slide__003.png");
    this.load.image(`slide005`, "/src/assets/Sprites/slide/Slide__004.png");
    this.load.image(`slide006`, "/src/assets/Sprites/slide/Slide__005.png");
    this.load.image(`slide007`, "/src/assets/Sprites/slide/Slide__006.png");
    this.load.image(`slide008`, "/src/assets/Sprites/slide/Slide__007.png");
    this.load.image(`slide009`, "/src/assets/Sprites/slide/Slide__008.png");
    this.load.image(`slide010`, "/src/assets/Sprites/slide/Slide__009.png");
  }

  throwAssets() {
    this.load.image(`throw001`, "/src/assets/Sprites/throw/Throw__000.png");
    this.load.image(`throw002`, "/src/assets/Sprites/throw/Throw__001.png");
    this.load.image(`throw003`, "/src/assets/Sprites/throw/Throw__002.png");
    this.load.image(`throw004`, "/src/assets/Sprites/throw/Throw__003.png");
    this.load.image(`throw005`, "/src/assets/Sprites/throw/Throw__004.png");
    this.load.image(`throw006`, "/src/assets/Sprites/throw/Throw__005.png");
    this.load.image(`throw007`, "/src/assets/Sprites/throw/Throw__006.png");
    this.load.image(`throw008`, "/src/assets/Sprites/throw/Throw__007.png");
    this.load.image(`throw009`, "/src/assets/Sprites/throw/Throw__008.png");
    this.load.image(`throw010`, "/src/assets/Sprites/throw/Throw__009.png");
  }

  attack() {
    this.anims.create({
      key: "attack1",
      frames: [
        { key: "attack001" },
        { key: "attack002" },
        { key: "attack003" },
        { key: "attack004" },
        { key: "attack005" },
        { key: "attack006" },
        { key: "attack007" },
        { key: "attack008" },
        { key: "attack009" },
        { key: "attack010" },
      ],
      frameRate: 30,
      repeat: 1,
    });
  }

  idle() {
    this.anims.create({
      key: "idle1",
      frames: [
        { key: "idle001" },
        { key: "idle002" },
        { key: "idle003" },
        { key: "idle004" },
        { key: "idle005" },
        { key: "idle006" },
        { key: "idle007" },
        { key: "idle008" },
        { key: "idle009" },
        { key: "idle010" },
      ],
      frameRate: 30,
      repeat: -1,
    });
  }

  dead() {
    this.anims.create({
      key: "dead1",
      frames: [
        { key: "dead001" },
        { key: "dead002" },
        { key: "dead003" },
        { key: "dead004" },
        { key: "dead005" },
        { key: "dead006" },
        { key: "dead007" },
        { key: "dead008" },
        { key: "dead009" },
        { key: "dead010" },
      ],
      frameRate: 30,
      repeat: 1,
    });
  }

  glide() {
    this.anims.create({
      key: "glide",
      frames: [
        { key: "glide001" },
        { key: "glide002" },
        { key: "glide003" },
        { key: "glide004" },
        { key: "glide005" },
        { key: "glide006" },
        { key: "glide007" },
        { key: "glide008" },
        { key: "glide009" },
        { key: "glide010" },
      ],
      frameRate: 30,
      repeat: 1,
    });
  }

  jump() {
    this.anims.create({
      key: "jump",
      frames: [
        { key: "jump001" },
        { key: "jump002" },
        { key: "jump003" },
        { key: "jump004" },
        { key: "jump005" },
        { key: "jump006" },
        { key: "jump007" },
        { key: "jump008" },
        { key: "jump009" },
        { key: "jump010" },
      ],
      frameRate: 30,
      repeat: 1,
    });
  }

  jumpAttack() {
    this.anims.create({
      key: "jumpAttack",
      frames: [
        { key: "jump-attack001" },
        { key: "jump-attack002" },
        { key: "jump-attack003" },
        { key: "jump-attack004" },
        { key: "jump-attack005" },
        { key: "jump-attack006" },
        { key: "jump-attack007" },
        { key: "jump-attack008" },
        { key: "jump-attack009" },
        { key: "jump-attack010" },
      ],
      frameRate: 30,
      repeat: 1,
    });
  }

  jumpThrow() {
    this.anims.create({
      key: "jumpThrow",
      frames: [
        { key: "jump-throw001" },
        { key: "jump-throw002" },
        { key: "jump-throw003" },
        { key: "jump-throw004" },
        { key: "jump-throw005" },
        { key: "jump-throw006" },
        { key: "jump-throw007" },
        { key: "jump-throw008" },
        { key: "jump-throw009" },
        { key: "jump-throw010" },
      ],
      frameRate: 30,
      repeat: 1,
    });
  }

  run() {
    this.anims.create({
      key: "run",
      frames: [
        { key: "run001" },
        { key: "run002" },
        { key: "run003" },
        { key: "run004" },
        { key: "run005" },
        { key: "run006" },
        { key: "run007" },
        { key: "run008" },
        { key: "run009" },
        { key: "run010" },
      ],
      frameRate: 30,
      repeat: 1,
    });
  }

  slide() {
    this.anims.create({
      key: "slide",
      frames: [
        { key: "slide001" },
        { key: "slide002" },
        { key: "slide003" },
        { key: "slide004" },
        { key: "slide005" },
        { key: "slide006" },
        { key: "slide007" },
        { key: "slide008" },
        { key: "slide009" },
        { key: "slide010" },
      ],
      frameRate: 30,
      repeat: 1,
    });
  }

  throw() {
    this.anims.create({
      key: "throw",
      frames: [
        { key: "throw001" },
        { key: "throw002" },
        { key: "throw003" },
        { key: "throw004" },
        { key: "throw005" },
        { key: "throw006" },
        { key: "throw007" },
        { key: "throw008" },
        { key: "throw009" },
        { key: "throw010" },
      ],
      frameRate: 30,
      repeat: 1,
    });
  }
}

export default playScene;
