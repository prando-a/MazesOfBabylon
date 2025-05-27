import { createPlayer } from './player.js';
import { createMaze } from './maze.js';

export async function createScene(engine, canvas) {
  const scene = new BABYLON.Scene(engine);
  scene.collisionsEnabled = true;

  // Luz global
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

  // Suelo
  const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 50, height: 50 }, scene);
  ground.checkCollisions = true;

  // Jugador
  createPlayer(scene, canvas);

  // Laberinto
  createMaze(scene);

  return scene;
}
