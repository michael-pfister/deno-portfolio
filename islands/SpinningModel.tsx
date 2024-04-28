import { Component } from "preact";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class SpinningModel extends Component {
  componentDidMount() {
    const dimensions = {
      x: document.getElementById("model-container")?.clientWidth || 0,
      y: document.getElementById("model-container")?.clientHeight || 0,
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      dimensions.x / dimensions.y,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;

    renderer.setSize(dimensions.x, dimensions.y);
    document.getElementById("model-container")?.appendChild(
      renderer.domElement,
    );

    const loader = new GLTFLoader();
    let model: THREE.Object3D | undefined;

    loader.load(
      "../scene.gltf", // replace with the path to your model
      function (gltf: THREE.GLTF & { scene: THREE.Scene }) {
        model = gltf.scene;
        scene.add(gltf.scene);

        // rotate to align the model
        gltf.scene.rotation.y = -1.5;

        // put the model in the middle of the scene
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = new THREE.Vector3();
        box.getCenter(center);
        gltf.scene.position.sub(center);

        const animate = function () {
          requestAnimationFrame(animate);

          controls.update();
          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      function (error: Error) {
        console.error(error);
      },
    );

    const light = new THREE.AmbientLight(0x404040, 75); // soft white light
    scene.add(light);

    camera.position.z = 0.65;
    controls.update();
  }

  render() {
    return <div id="model-container" class="w-[400px] aspect-square" />;
  }
}

export default SpinningModel;
