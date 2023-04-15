import './style.css';

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 1000);

const render = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

render.setPixelRatio(window.devicePixelRatios);
render.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30)




const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
const cube = new THREE.Mesh(geometry, material);

const amebientLight = new THREE.AmbientLight(0xffffffff)

const pointOfLight = new THREE.PointLight(0xffffff);
pointOfLight.position.set(10,5,5);

scene.add(pointOfLight, amebientLight)



scene.add(cube);

function animate(){
  cube.rotation.x +=0.001
  cube.rotation.y +=0.002
  cube.rotation.z += 0.0001
  requestAnimationFrame(animate);
  render.render(scene, camera);
}
animate()