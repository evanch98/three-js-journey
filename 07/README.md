# 07. Fullscreen and resizing

This lesson is about making a full-screen canvas and resizing the canvas based on the screen size.

### Notes

#### Resizing the Canvas and Viewport

This code snippet will handle the resizing of the viewport.

```js
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
```

#### Handling Pixel Ratio

```js
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
```

#### Handling Fullscreen

The canvas will go fullscreen on double click.

```js
window.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});
```

### Others

- [dblclick](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)
