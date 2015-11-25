// Tutorial from:
// http://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene

// Creating the scene.
// To actually be able to display anything with Three.js, we need three things:
// A scene, a camera, and a renderer so we can render the scene with the camera.
var scene = new THREE.Scene(),
    // camera args: FOV, aspect ratio, near and far clipping plane
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
    renderer = new THREE.WebGLRenderer();
// Set the size at which we want it to render our app.
renderer.setSize( window.innerWidth, window.innerHeight );
// Add the renderer element to our HTML document.
// This is a <canvas> element the renderer uses to display the scene to us.
document.body.appendChild( renderer.domElement );

// Adding a cube.
// To create a cube, we need three things: a BoxGeometry, a material, and a mesh.
// BoxGeometry is an object that contains all the points (vertices) and fill (faces) of the cube.
// All materials take an object of properties which will be applied to them.
// A mesh is an object that takes a geometry, and applies a material to it,
// which we then can insert to our scene, and move freely around.
var geometry = new THREE.SphereGeometry( 1, 32, 32 ),
    material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ),
    sphere = new THREE.Mesh( geometry, material );
// By default, when we call scene.add(), the thing we add will be added to the
// coordinates (0,0,0). This would cause both the camera and the cube to be
// inside each other. To avoid this, we simply move the camera out a bit.
scene.add( sphere );
camera.position.z = 100;

// Rendering the scene
// This will create a loop that causes the renderer to draw the scene 60 times
// per second. Basically, anything you want to move or change while the app is
// running has to go through the render loop.
function render() {
    requestAnimationFrame( render );
    // Rotate the cube slightly each frame.
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render( scene, camera );
}
render();