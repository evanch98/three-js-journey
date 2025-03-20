# 11 Materials

This lesson is about materials.

### Notes

#### Loading Environment Map

```js
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const rgbeLoader = new RGBELoader();
rgbeLoader.load("./textures/environmentMap/2k.hdr", (environmentMap) => {
  environmentMap.mapping = THREE.EquirectangularReflectionMapping;

  scene.background = environmentMap;
  scene.environment = environmentMap;
});
```

### Three.js documentation

- [Three.js](https://threejs.org/docs/)
- [MeshBasicMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial)
- [MeshNormalMaterial](https://threejs.org/docs/#api/en/materials/MeshNormalMaterial)
- [MeshMatcapMaterial](https://threejs.org/docs/#api/en/materials/MeshMatcapMaterial)
- [MeshDepthMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshDepthMaterial)
- [AmbientLight](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)
- [PointLight](https://threejs.org/docs/#api/en/lights/PointLight)
- [MeshLambertMaterial](https://threejs.org/docs/#api/en/materials/MeshLambertMaterial)
- [MeshPhongMaterial](https://threejs.org/docs/#api/en/materials/MeshPhongMaterial)
- [MeshToonMaterial](https://threejs.org/docs/#api/en/materials/MeshToonMaterial)
- [MeshStandardMaterial](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial)
- [MeshPhysicalMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshPhysicalMaterial)
- [ShaderMaterial](https://threejs.org/docs/index.html#api/en/materials/ShaderMaterial)
- [RawShaderMaterial](https://threejs.org/docs/index.html#api/en/materials/RawShaderMaterial)
- [CubeTextureLoader](https://threejs.org/docs/index.html#api/en/loaders/CubeTextureLoader)
- [TextureLoader](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)

### Three.js examples

- [Clearcoat (MeshPhysicalMaterial)](https://threejs.org/examples/#webgl_materials_physical_clearcoat)
- [Transmission (MeshPhysicalMaterial)](https://threejs.org/examples/?q=physica#webgl_materials_physical_transmission_alpha)
- [Anisotropy (MeshPhysicalMaterial)](https://threejs.org/examples/?q=anis#webgl_loader_gltf_anisotropy)
- [Sheen (MeshPhysicalMaterial)](https://threejs.org/examples/?q=sheen#webgl_loader_gltf_sheen)

### Others

- [ilithya](https://www.ilithya.rocks/)
- [Matcaps repository](https://github.com/nidorx/matcaps)
- [lil-gui](https://lil-gui.georgealways.com/)
- [List of IOR](https://en.wikipedia.org/wiki/List_of_refractive_indices)
- [Matcap Tweaker](https://www.kchapelier.com/matcap-studio/) by [Kevin Chapelier](https://github.com/kchapelier)
