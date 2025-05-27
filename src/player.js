import { setupControls } from './config/controls/setControls.js';

export function createPlayer(scene, canvas) {
  const camera = new BABYLON.UniversalCamera("playerCamera", new BABYLON.Vector3(0, 1.8, -10), scene);


  setupControls(camera); // ← Aquí se aplican los controles personalizados

  camera.attachControl(canvas, true);

  // Opcionales: física
  camera.speed = 0.3;
  camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
  camera.checkCollisions = true;
  camera.applyGravity = true;

  scene.activeCamera = camera;
}
