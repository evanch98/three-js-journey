# 10. Textures

This lesson is about textures.

### Notes

#### Loading Textures with TextureLoader

```js
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("/textures/door/color.jpg");
```

Textures used as `map` and `matcap` are supposed to be encoded in `sRGB`.

In the latest version of Three.js, we need to specify it by setting their `colorSpace` to `THREE.SRGBColorSpace`:

```js
texture.colorSpace = THREE.SRGBColorSpace;
```

> [!TIP]
> One `TextureLoader` can load multiple textures.

#### Loading Manager

It's useful if we want to know the global loading progress or be informed when everything is loaded.

```js
const loadingManager = new THREE.LoadingManager();

loadingManager.onStart = () => {
  console.log("loading started");
};

loadingManager.onLoad = () => {
  console.log("loading finished");
};

loadingManager.onProgress = () => {
  console.log("loading progressing");
};

loadingManager.onError = () => {
  console.log("loading error");
};

const textureLoader = new THREE.TextureLoader(loadingManager);
```

### Three.js documentation

- [Texture](https://threejs.org/docs/index.html#api/en/textures/Texture)
- [TextureLoader](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)
- [LoadingManager](https://threejs.org/docs/index.html#api/en/loaders/managers/LoadingManager)
- [Vector2](https://threejs.org/docs/index.html#api/en/math/Vector2)

### João Paulo

- [Door texture](https://3dtextures.me/2019/04/16/door-wood-001/)
- [Ko-fi](https://ko-fi.com/katsukagi)
- [Patreon](https://www.patreon.com/gendo)

## Others

- [Basic Theory of Physically-Based Rendering](https://marmoset.co/posts/basic-theory-of-physically-based-rendering/)
- [Physically-Based Rendering, And You Can Too!](https://marmoset.co/posts/physically-based-rendering-and-you-can-too/)
- [Moiré pattern](https://en.wikipedia.org/wiki/Moir%C3%A9_pattern)
- [TinyPNG](https://tinypng.com/)
- [poliigon.com](http://poliigon.com/)
- [3dtextures.me](http://3dtextures.me/)
- [arroway-textures.ch](http://arroway-textures.ch/)
- [Substance Designer](https://www.adobe.com/products/substance3d-designer.html)
