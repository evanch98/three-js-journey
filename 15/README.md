# 15. Shadows

This lesson is about shadows.

### Notes

#### Different types of shadow map algorithm

- `THREE.c` - Very performant but lousy quality
- `THREE.PCFShadowMap` - Less performant but smoother edges (default)
- `THREE.PCFSoftShadowMap` - Less performant but even softer edges
- `THREE.VSMShadowMap` - Less performant, more constraints, can have unexpected results

> [!WARNING]
> The radius doesn't work with `THREE.PCFSoftShadowMap`

### Three.js documentation

- [MeshDepthMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshDepthMaterial)
- [PointLight](https://threejs.org/docs/index.html#api/en/lights/PointLight)
- [DirectionalLight](https://threejs.org/docs/index.html#api/en/lights/DirectionalLight)
- [SpotLight](https://threejs.org/docs/index.html#api/en/lights/SpotLight)
- [PerspectiveCamera](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)
- [TextureLoader](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)
- [MeshStandardMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial)
- [MeshBasicMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial)

### Three.js examples

- [Shadow maps](https://threejs.org/examples/webgl_shadowmap_viewer.html)
