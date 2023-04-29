/*import * as Loader from 'three/addons/loaders/OBJLoader.js';
import {MindARThree} from 'mind-ar/dist/mindar-face-three.prod.js';
import * as MtlLoader from 'three/addons/loaders/MTLLoader';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { render } from 'react-dom';

const mindarThree = new MindARThree({
	container: document.querySelector("root"),
      });
      const {renderer, scene, camera} = mindarThree;
      const anchor = mindarThree.addAnchor(1);

const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const loader = new Loader.OBJLoader();
const mtlLoader = new MtlLoader.MTLLoader();

var materials = new THREE.MeshBasicMaterial();
const path = "../src/assets/models/";

mtlLoader.setPath(path);
loader.setPath(path);

// load a resource
mtlLoader.load( "untitled.mtl", function( materials ) {

	materials.preload();
	loader.setMaterials( materials );
	
	console.log(materials);
	loader.load( 'untitled.obj', function ( object ) {
		console.log(object);

		scene.add( object );
		anchor.group.add(sphere);
	});

});


renderer.setClearColor(0xFFFFFF);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



/*var ambientLight = new THREE.AmbientLight(0xFFFFFF);
  scene.add(ambientLight);
ambientLight.intensity = 1.0;
*/
/*
const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0,5,5);
scene.add( light );




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
	mindarThree.renderer.setAnimationLoop(null);
      });
*/
/*

import * as THREE from 'three';
      import { MindARThree } from 'mind-ar/dist/mindar-face-three.prod.js';
      const mindarThree = new MindARThree({
	container: document.querySelector("#container"),
      });
      const {renderer, scene, camera} = mindarThree;
      const anchor = mindarThree.addAnchor(1);
      const geometry = new THREE.SphereGeometry( 0.1, 32, 16 );
      const material = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );
      const sphere = new THREE.Mesh( geometry, material );
      anchor.group.add(sphere);
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
	mindarThree.renderer.setAnimationLoop(null);
      });
 */
      import * as THREE from 'three';
      import { MindARThree } from 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.0/dist/mindar-face-three.prod.js';
      // import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";


import * as MtlLoader from 'three/addons/loaders/MTLLoader';



import * as Loader from 'three/addons/loaders/OBJLoader.js';

      const mindarThree = new MindARThree({
	container: document.querySelector("#container"),
      });
      const {renderer, scene, camera} = mindarThree;

      const anchor = mindarThree.addAnchor(168);


      
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
	mindarThree.renderer.setAnimationLoop(null);
      });



      let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;


let object;


let controls;



/*const geometry = new THREE.SphereGeometry( 0.1, 32, 16 );
      const material2 = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );
      const sphere = new THREE.Mesh( geometry, material2 );
      sphere.position.x = 0;
      sphere.position.y = -1.5;
      sphere.position.z = 0;
      */

const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
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
		
            
            object.position.y -= 1;
            object.position.x -= 0.05;
            object.rotation.set(0,0,0);
            const n = 0.75;
            object.scale.set(n,n,n);

		scene.add( object );
            anchor.group.add(object);

	});

});



// const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);


document.getElementById("container3D").appendChild(renderer.domElement);



const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) 
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);



function animate() {
  requestAnimationFrame(animate);
  

  
  if (object && objToRender === "car") {
    
    object.rotation.y = -3 + mouseX / window.innerWidth * 3;
    object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
  }
  renderer.render(scene, camera);
}


window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}
animate(); 