# 05. Animations

This lesson is about animations.

### Notes

#### Request Animation Frame

The purpose of `requestAnimationFrame` is to call the function provided on the next frame.

```js
const tick = () => {
  // Update objects
  mesh.rotation.y += 0.01;

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
```

##### Adaptation to the Framerate

```js
let time = Date.now();

const tick = () => {
  // Time
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;

  // Update objects
  mesh.rotation.y += 0.01 * deltaTime;

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
```
or

```js
const clock = new THREE.Clock();

const tick = () => {
  // Clock
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  mesh.rotation.y = elapsedTime;

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
```

### Three.js Documentation

- [Clock](https://threejs.org/docs/#api/en/core/Clock)
- [Object3D](https://threejs.org/docs/#api/en/core/Object3D)

### Others

- [requestAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame)
- [GSAP](https://greensock.com/gsap/)
