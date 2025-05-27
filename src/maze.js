export function createMaze(scene) {
    const wallPositions = [
      [0, 0], [2, 0], [4, 0],
      [0, 2], [4, 2],
      [0, 4], [2, 4], [4, 4],
    ];
  
    wallPositions.forEach(([x, z]) => {
      const wall = BABYLON.MeshBuilder.CreateBox("wall", { width: 2, height: 4, depth: 1 }, scene);
      wall.position = new BABYLON.Vector3(x, 2, z);
      wall.checkCollisions = true;
    });
  }
  