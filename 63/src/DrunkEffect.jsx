import { BlendFunction, Effect } from "postprocessing";
import { Uniform } from "three";

const fragmentShader = /* glsl */ `
  uniform float frequency;
  uniform float amplitude;
  uniform float time;

  void mainUv(inout vec2 uv) {
    uv.y += sin(uv.x * frequency + time) * amplitude;
  }

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec4 color = inputColor;
    color.rgb *= vec3(0.8, 1.0, 0.5);

    outputColor = vec4(0.8, 1.0, 0.5, inputColor.a);
  }
`;

export default class DrunkEffect extends Effect {
  constructor({ frequency, amplitude, blendFunction = BlendFunction.DARKEN }) {
    super("DrunkEffect", fragmentShader, {
      blendFunction: blendFunction,
      uniforms: new Map([
        ["frequency", new Uniform(frequency)],
        ["amplitude", new Uniform(amplitude)],
        ["time", new Uniform(0)],
      ]),
    });
  }

  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get("time").value += deltaTime;
  }
}
