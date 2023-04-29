import * as THREE from 'three';
import { MindARThree } from 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.0/dist/mindar-face-three.prod.js';
import * as Loader from 'three/addons/loaders/OBJLoader.js';
import * as MtlLoader from 'three/addons/loaders/MTLLoader';



const mindarThree = new MindARThree({
container: document.querySelector("#container"),
});
const {renderer, scene, camera} = mindarThree;
const anchor = mindarThree.addAnchor(168);
const anchor2 = mindarThree.addAnchor(10);


/*
var occluder = new THREE.TextureLoader().load("./src/assets/transparent.png");


const facemesh = mindarThree.addFaceMesh();

facemesh.material.map = occluder;
facemesh.material.transparent = true;
facemesh.material.needsUpdate = true;
facemesh.render = false;

scene.add(facemesh);
/*const geometry = new THREE.SphereGeometry( 0.1, 32, 16 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );
const sphere = new THREE.Mesh( geometry, material );
anchor.group.add(sphere);
*/

const loader = new Loader.OBJLoader();
const mtlLoader = new MtlLoader.MTLLoader();
var materials = new THREE.MeshBasicMaterial();

const path = "../src/assets/models/";
mtlLoader.setPath(path);
loader.setPath(path);


mtlLoader.load( "oculos.mtl", function( materials ) {


	materials.preload();
	loader.setMaterials( materials );
	
	console.log(materials);

	loader.load( 'oculos.obj', function ( object ) {
        
            const n = 0.8;
            object.scale.set(n,n,n);
            
            anchor.group.add(object);

	});

});


const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) 
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);


const start = async() => {
await mindarThree.start();
renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
});
      }
const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", () => {
    start();
});
stopButton.addEventListener("click", () => {
mindarThree.stop();
mindarThree.renderer.setAnimationLoop(null);})