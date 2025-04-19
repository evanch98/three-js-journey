import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import Player from "./Player";
import { Level } from "./Level";
import Lights from "./Lights";
import useGame from "./stores/useGame";

const Experience = () => {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);

  return (
    <>
      {/* <OrbitControls makeDefault /> */}

      <color args={["#bdedfc"]} attach="background" />

      <Physics debug={false}>
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
    </>
  );
};

export default Experience;
