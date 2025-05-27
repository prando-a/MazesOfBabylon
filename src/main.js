import { createEngine } from './engine.js';
import { createScene } from './scene.js';

const { engine, canvas } = createEngine();
const scene = await createScene(engine, canvas);


engine.runRenderLoop(() => scene.render());
window.addEventListener('resize', () => engine.resize());
