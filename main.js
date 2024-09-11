import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#f0f0f0");

// Create a camera, which is a perspective camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

// Set the camera position
camera.position.z = 5;

// Set the camera look at
camera.lookAt(0, 0, 0);

// Create a 
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x56AD73, emissive: 0x4eff2a, emissiveIntensity: 0.5 });
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Add light to the scene
const light = new THREE.DirectionalLight(0xf9f9f9, 10);
light.position.set(1, 1, 1).normalize();

scene.add(light);

// Create a renderer
const renderer = new THREE.WebGLRenderer();

// Add the renderer to the DOM
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Render the scene
renderer.render(scene, camera);

// Create a render loop
function animate() {
  requestAnimationFrame(animate);

  // Update the cube rotation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

// Start the render loop
animate();
