import { Component } from "preact";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

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

        const animate = function () {
          requestAnimationFrame(animate);

          gltf.scene.rotation.x += 0.003;
          gltf.scene.rotation.y += 0.003;

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

    // Add mousemove event listener
    document.getElementById("model-container")?.addEventListener(
      "mousemove",
      (event) => {
        if (model) {
          const mouseX = (event.clientX / dimensions.x) * 2 - 1;
          const mouseY = -(event.clientY / dimensions.y) * 2 + 1;

          model.rotation.x = mouseY;
          model.rotation.y = mouseX;
        }
      },
    );

    camera.position.z = 0.75;
  }

  render() {
    return <div id="model-container" class="w-[400px] aspect-square" />;
  }
}

export default SpinningModel;
