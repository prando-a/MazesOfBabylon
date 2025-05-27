export function createPlayer(scene, canvas) {
    const camera = new BABYLON.UniversalCamera("playerCamera", new BABYLON.Vector3(0, 1.8, -10), scene);
    camera.attachControl(canvas, true);
    camera.speed = 0.1;
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
    camera.checkCollisions = true;
    camera.applyGravity = true;
    scene.activeCamera = camera;
  }
  