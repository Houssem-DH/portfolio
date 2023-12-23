import React from "react";
import { useGLTF, useTexture, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";
import { Perf } from "r3f-perf";

export function Model(props) {
  const { nodes, materials } = useGLTF("/web3d/lab1/LAB1.gltf");

  const tableTexture = useTexture(
    "/web3d/lab1/Textures/brown-wooden-textured-flooring-background.jpg"
  );

  const { orbit, perf } = useControls({
    orbit: true,
    perf: false,
  });

  const { backgroundColor } = useControls("Background", {
    backgroundColor: "#051467",
  });

  const { lightColor1, lightColor2, lightColor3, lightColor4 } = useControls(
    "Lights",
    {
      lightColor1: "#FFFFFF",
      lightColor2: "#FFFFFF",
      lightColor3: "#FFFFFF",
      lightColor4: "#FFFFFF",
    }
  );
  const { tablePosition, tableScale, tableColor } = useControls("Table", {
    tablePosition: {
      value: [8.436, 2.266, -0.009],
      min: -20,
      max: 22,
      step: 1,
    },
    tableScale: {
      value: [5.218, 0.157, 2.606],
      min: 1,
      max: 10,
      step: 0.1,
    },
    tableColor: "#FFFFFF",
  });
  const { chair1Position, chair1Color } = useControls("Chair1", {
    chair1Position: {
      value: [14.626, -0.68, 1.056],
      min: 4.626,
      max: 24.626,
      step: 1,
    },
    chair1Color: "#C18100",
  });

  return (
    <>
      {perf ? <Perf position="top-left" /> : null}

      {/* Ambient light to provide some overall illumination */}
      <ambientLight intensity={0.5} />
      {/* Directional light simulating sunlight */}
      <directionalLight
        position={[20, 10, 10]}
        intensity={2}
        color={lightColor1}
      />
      <directionalLight
        position={[0, 0, 0]}
        intensity={1}
        color={lightColor2}
      />
      <directionalLight
        position={[-10, -10, -10]}
        intensity={1}
        color={lightColor3}
      />
      <directionalLight
        position={[-20, -20, -20]}
        intensity={1}
        color={lightColor4}
      />
      {/* Point light for additional lighting, if needed */}
      <pointLight position={[10, 10, 10]} />

      <OrbitControls enabled={orbit} />

      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Background.geometry}
          material={materials["Material.002"]}
          position={[8.751, 7.025, -1.038]}
          scale={[281.87, 7.72, 112.255]}
        >
          <meshStandardMaterial
            color={backgroundColor}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh
          geometry={nodes.Table.geometry}
          material={materials["Wood Black UA"]}
          position={tablePosition}
          scale={tableScale}
        >
          <meshStandardMaterial map={tableTexture} color={tableColor} />
        </mesh>
        <mesh
          geometry={nodes.Chair3.geometry}
          material={materials.Wood}
          position={[7.786, -0.68, -5.277]}
          rotation={[0, -0.005, 0.163]}
          scale={4.294}
        />
        <mesh
          geometry={nodes.Chair2.geometry}
          material={materials.Wood}
          position={[11.554, -0.68, -5.277]}
          rotation={[0, -0.005, 0.163]}
          scale={4.294}
        />
        <mesh
          geometry={nodes.Chair6.geometry}
          material={materials.Wood}
          position={[9.374, -0.68, 5.086]}
          rotation={[Math.PI, 0.014, -2.978]}
          scale={4.294}
        />
        <mesh
          geometry={nodes.Chair5.geometry}
          material={materials.Wood}
          position={[5.607, -0.68, 5.049]}
          rotation={[Math.PI, 0.014, -2.978]}
          scale={4.294}
        />
        <mesh
          geometry={nodes.Chair4.geometry}
          material={materials.Wood}
          position={[2.314, -0.68, -1.134]}
          rotation={[-Math.PI, 1.569, -2.978]}
          scale={4.294}
        />
        <mesh
          geometry={nodes.Chair1.geometry}
          material={materials.Wood}
          position={chair1Position}
          rotation={[Math.PI, -1.562, -2.978]}
          scale={4.294}
        >
          <meshStandardMaterial color={chair1Color} />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/web3d/lab1/LAB1.gltf");
