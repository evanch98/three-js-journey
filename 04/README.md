# 04. Transform Objects

This lessons is about transforming the objects in the scene.

### Notes

#### Moving Objects

To move the object, use the `position` property of the `Vector3` object which has `x`, `y`, and `z`.

```js
object.position.x = 0.7;
object.position.y = -0.6;
object.position.z = 1;
```

or

```js
object.position.set(0.7, -0.6, 1);
```

In Three.js:

- `y` axis is going upward or downward.
- `x` axis is going to the right or left.
- `z` axis is going backward or forward.

#### Axes Helper

It's useful to navigate in a 3D space.

```js
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);
```

#### Scaling Objects

To scale the object, use the `scale` property of the `Vector3` object which has `x`, `y`, and `z`.

```js
object.scale.x = 0.7;
object.scale.y = -0.6;
object.scale.z = 1;
```

or

```js
object.scale.set(0.7, -0.6, 1);
```

#### Rotating Objects

To rotate the object, use the `rotation` or `quaternion` property.

##### `rotation`

```js
object.rotation.x = 0.5;
object.rotation.y = 0.5;
object.rotation.z = 0.5;
```

or

```js
object.rotation.set(0.5, 0.5, 0.5);
```

To make half a rotation, use `Math.PI`.
```js
object.rotation.y = Math.PI;
```

By default, the axis order of the rotation is `XYZ`.
To reorder the rotation, use the `reorder` property of the `rotation`.

```js
object.rotation.reorder('YXZ');
```

#### Scene Graph
To group the objects to be moved, rotated, and/or scaled together, use the `Group` class.
```js
const group = new THREE.Group();
group.position.x = 0.5;
scene.add(group);

group.add(cube1);
group.add(cube2);
```

### Three.js documentation

- [Object3D](https://threejs.org/docs/#api/en/core/Object3D)
- [PerspectiveCamera](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)
- [Mesh](https://threejs.org/docs/index.html#api/en/objects/Mesh)
- [Vector3](https://threejs.org/docs/#api/en/math/Vector3)
- [AxesHelper](https://threejs.org/docs/#api/en/helpers/AxesHelper)
- [Euler](https://threejs.org/docs/index.html#api/en/math/Euler)
- [Quaternion](https://threejs.org/docs/#api/en/math/Quaternion)
- [Group](https://threejs.org/docs/#api/en/objects/Group)
