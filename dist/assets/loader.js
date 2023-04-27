/*import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const light = new THREE.AmbientLight( 0xaaaaaa ); // soft white light
scene.add( light );


camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
*/

import * as Loader from 'three/addons/loaders/OBJLoader.js';
import * as MtlLoader from 'three/addons/loaders/MTLLoader';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


/*console.log("start");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var ambientLight = new THREE.AmbientLight(0x000000);
  scene.add(ambientLight);
const loader = new OBJLoader();

const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

loader.setMaterials(material);
loader.load("assets/untitled.obj",function(obj){
	obj.position.y=-10;
	scene.add(obj);
});

camera.position.z = 5;

renderer.render( scene, camera );
*/

const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const loader = new Loader.OBJLoader();
const mtlLoader = new MtlLoader.MTLLoader();

var materials = new THREE.MeshBasicMaterial();


// load a resource
mtlLoader.load( "assets/untitled.mtl", function( materials ) {
	materials.preload();
	loader.setMaterials( materials );
	
	console.log(materials);
	loader.load( 'assets/untitled.obj', function ( object ) {
		console.log(object);
		//object.children[0].material.needsUpdate = true;
		object.traverse( function ( child )
            {
                child.castShadow = true;
                                
            });
		
		scene.add( object );
	});

});

/*loader.load(
	// resource URL
	'assets/untitled.obj',
	// called when resource is loaded
	function ( object ) {

		scene.add( object);

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);*/

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xFFFFFF);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


/*var ambientLight = new THREE.AmbientLight(0xFFFFFF);
  scene.add(ambientLight);
ambientLight.intensity = 1.0;
*/
const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0,5,5);
scene.add( light );

camera.position.z = 5;
  const controls = new OrbitControls(camera, renderer.domElement);
controls.update();


renderer.render( scene, camera );
animate();

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}