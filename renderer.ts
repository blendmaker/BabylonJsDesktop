import {
  Engine,
  Scene,
  MeshBuilder,
  HemisphericLight,
  Vector3,ArcRotateCamera
} from 'babylonjs';

export class Application {
  private engine: Engine;
  private scene?: Scene;

  constructor(private canvas: HTMLCanvasElement, private autorun = true) {
    this.engine = new Engine(canvas, true);

    this.prepareScene();
    this.prepareCamera();

    autorun && this.run();
  }

  private prepareScene() {
    this.scene = new Scene(this.engine);
    MeshBuilder.CreateSphere("sphere", { diameter: 1 }, this.scene);
    new HemisphericLight("light1", new Vector3(1, 1, 0), this.scene);
  }

  private prepareCamera() {
    this.scene && 
      new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), this.scene)
        .attachControl(this.canvas, true);
  }

  public run() {
    this.engine.runRenderLoop(() => this.scene && this.scene.render());
  }
}

new Application( <HTMLCanvasElement>document.getElementsByTagName('canvas').item(0) );