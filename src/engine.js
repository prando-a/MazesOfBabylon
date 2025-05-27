export function createEngine() {
    const canvas = document.getElementById("renderCanvas");
    const engine = new BABYLON.Engine(canvas, true);
    return { engine, canvas };
  }
  