import * as THREE from 'three';

// Rotating plaque
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 4, 3, 8, 5, 10);
const material = new THREE.MeshMatcapMaterial( { color: 0xffd60a } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

export function animate() {
	requestAnimationFrame( animate );
  cube.rotation.x += 0.001;
  cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}

animate();
