import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

class NewScene extends Phaser.Scene {

  constructor() {
    super({ key: 'new' });
  }

  preload() {
    console.log('enter preload');
    // this.load.setBaseURL('http://localhost:4200/');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  create() {
    console.log('enter create');

    this.add.image(400, 300, 'sky');

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

  }
}

@Component({
  selector: 'app-bounce',
  templateUrl: './bounce.component.html',
  styleUrls: ['./bounce.component.scss']
})
export class BounceComponent implements OnInit {

  phaserGame: Phaser.Game | undefined;
  config: Phaser.Types.Core.GameConfig;

  constructor() {

    this.config = {

      type: Phaser.AUTO,

      width: 800,
      height: 600,

      scene: [NewScene],

      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },

      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },

    };


  }

  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }

}
