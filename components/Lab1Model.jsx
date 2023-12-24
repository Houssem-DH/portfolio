"use client";
import React, { useRef, useState } from "react";
import { useGLTF, useTexture, OrbitControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as TWEEN from "@tweenjs/tween.js";

import { useControls } from "leva";
import * as THREE from "three";
import { Perf } from "r3f-perf";

export function Model(props) {
  const { nodes, materials } = useGLTF("/web3d/lab1/LAB1.gltf");

  const light1 = useRef();
  const light2 = useRef();
  const light5 = useRef();

  const tableRef = useRef();

  //close menu options

  const tableTexture = useTexture(
    "/web3d/lab1/Textures/brown-wooden-textured-flooring-background.jpg"
  );

  // table Textures
  const wood1 = useTexture("/web3d/lab1/Textures/wood1.png");
  const wood2 = useTexture("/web3d/lab1/Textures/wood2.jpg");
  const wood3 = useTexture("/web3d/lab1/Textures/wood3.jpg");
  const wood4 = useTexture("/web3d/lab1/Textures/wood4.jpg");
  const wood5 = useTexture("/web3d/lab1/Textures/wood5.jpg");
  const wood6 = useTexture("/web3d/lab1/Textures/wood6.jpeg");

  // Chairs Textures
  const chair = useTexture("/web3d/lab1/Textures/Wood063_2K_Color.jpg");
  const woodc1 = useTexture("/web3d/lab1/Textures/woodc1.jpg");
  const woodc2 = useTexture("/web3d/lab1/Textures/woodc2.jpg");
  const woodc3 = useTexture("/web3d/lab1/Textures/woodc3.jpg");

  const { orbit, perf } = useControls({
    orbit: true,
    perf: false,
  });

  const { backgroundColor } = useControls(
    "Background",
    {
      backgroundColor: "#FFFFFF",
    },
    { collapsed: true }
  );

  const { lightColor1, lightColor2 } = useControls(
    "Lights",
    {
      lightColor1: "#FFFFFF",
      lightColor2: "#FFFFFF",
    },
    { collapsed: true }
  );
  const { tablePosition, tableScale, tableTextures } = useControls(
    "Table",
    {
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
      tableTextures: {
        value: 0, // Set the index of the default texture
        options: [0, 1, 2, 3, 4, 5, 6],
      },
    },
    { collapsed: true }
  );

  // Now use the selected texture like this:
  const textures = [tableTexture, wood1, wood2, wood3, wood4, wood5, wood6];
  const selectedTexture = textures[tableTextures];
  const { chair1Position, chair1Scale, chair1Textures } = useControls(
    "Chair1",
    {
      chair1Position: {
        value: [14.626, -0.68, 1.056],
        min: 4.626,
        max: 24.626,
        step: 1,
      },
      chair1Scale: {
        value: 4.294,
        min: 4.294,
        max: 24.294,
        step: 1,
      },
      chair1Textures: {
        value: 0, // Set the index of the default texture
        options: [0, 1, 2, 3],
      },
    },
    { collapsed: true }
  );

  const texturesc1 = [chair, woodc1, woodc2, woodc3];
  const selectedTexturec1 = texturesc1[chair1Textures];

  const { chair2Position, chair2Scale, chair2Textures } = useControls(
    "Chair2",
    {
      chair2Position: {
        value: [11.554, -0.68, -5.277],
        min: 4.626,
        max: 24.626,
        step: 1,
      },
      chair2Scale: {
        value: 4.294,
        min: 4.294,
        max: 24.294,
        step: 1,
      },
      chair2Textures: {
        value: 0, // Set the index of the default texture
        options: [0, 1, 2, 3],
      },
    },
    { collapsed: true }
  );

  const texturesc2 = [chair, woodc1, woodc2, woodc3];
  const selectedTexturec2 = texturesc2[chair2Textures];
  const { chair3Position, chair3Scale, chair3Textures } = useControls(
    "Chair3",
    {
      chair3Position: {
        value: [7.786, -0.68, -5.277],
        min: 4.626,
        max: 24.626,
        step: 1,
      },
      chair3Scale: {
        value: 4.294,
        min: 4.294,
        max: 24.294,
        step: 1,
      },
      chair3Textures: {
        value: 0, // Set the index of the default texture
        options: [0, 1, 2, 3],
      },
    },
    { collapsed: true }
  );
  const texturesc3 = [chair, woodc1, woodc2, woodc3];
  const selectedTexturec3 = texturesc3[chair3Textures];

  const { chair4Position, chair4Scale, chair4Textures } = useControls(
    "Chair4",
    {
      chair4Position: {
        value: [2.314, -0.68, -1.134],
        min: 4.626,
        max: 24.626,
        step: 1,
      },
      chair4Scale: {
        value: 4.294,
        min: 4.294,
        max: 24.294,
        step: 1,
      },
      chair4Textures: {
        value: 0, // Set the index of the default texture
        options: [0, 1, 2, 3],
      },
    },
    { collapsed: true }
  );
  const texturesc4 = [chair, woodc1, woodc2, woodc3];
  const selectedTexturec4 = texturesc4[chair4Textures];
  const { chair5Position, chair5Scale, chair5Textures } = useControls(
    "Chair5",
    {
      chair5Position: {
        value: [5.607, -0.68, 5.049],
        min: 4.626,
        max: 24.626,
        step: 1,
      },
      chair5Scale: {
        value: 4.294,
        min: 4.294,
        max: 24.294,
        step: 1,
      },
      chair5Textures: {
        value: 0, // Set the index of the default texture
        options: [0, 1, 2, 3],
      },
    },
    { collapsed: true }
  );
  const texturesc5 = [chair, woodc1, woodc2, woodc3];
  const selectedTexturec5 = texturesc5[chair5Textures];
  const { chair6Position, chair6Scale, chair6Textures } = useControls(
    "Chair6",
    {
      chair6Position: {
        value: [9.374, -0.68, 5.086],
        min: 4.626,
        max: 24.626,
        step: 1,
      },
      chair6Scale: {
        value: 4.294,
        min: 4.294,
        max: 24.294,
        step: 1,
      },
      chair6Textures: {
        value: 0, // Set the index of the default texture
        options: [0, 1, 2, 3],
      },
    },
    { collapsed: true }
  );
  const texturesc6 = [chair, woodc1, woodc2, woodc3];
  const selectedTexturec6 = texturesc6[chair6Textures];

  const { camera } = useThree();

  // Function to handle chair clicks
  const handleClick = (targetPosition, targetLookAt) => {
    const duration = 1500; // in milliseconds
    const easingPosition = TWEEN.Easing.Quadratic.Out;
    const easingRotation = TWEEN.Easing.Quadratic.Out;

    new TWEEN.Tween(camera.rotation)
      .to({ x: targetLookAt.x, y: targetLookAt.y, z: targetLookAt.z }, duration)
      .easing(easingRotation)
      .start();

    new TWEEN.Tween(camera.position)
      .to(targetPosition, duration)
      .easing(easingPosition)
      .start();
  };

  useFrame(() => {
    TWEEN.update();
  });

  return (
    <>
      {perf ? <Perf position="top-left" /> : null}

      {/* Ambient light to provide some overall illumination */}
      <ambientLight position={[1, 1, 1]} intensity={2} ref={light5} />

      {/* Directional light simulating sunlight */}
      <directionalLight
        ref={light1}
        position={[40, 8, 0]}
        lookAt={[8.436, 2.266, -0.009]}
        intensity={5}
        color={lightColor1}
        castShadow
      />

      <directionalLight
        ref={light2}
        position={[40, 8, -20]}
        lookAt={[8.436, 2.266, -0.009]}
        intensity={5}
        color={lightColor2}
        castShadow
      />

      {/* Point light for additional lighting, if needed */}

      <OrbitControls enabled={orbit} target={[8.436, 2.266, -0.009]} />

      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Background.geometry}
          material={materials["Material.002"]}
          position={[8.751, 7.025, -1.038]}
          scale={[281.87, 7.72, 112.255]}
          receiveShadow
        >
          <meshStandardMaterial
            color={backgroundColor}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh
          ref={tableRef}
          geometry={nodes.Table.geometry}
          material={materials["Wood Black UA"]}
          position={tablePosition}
          scale={tableScale}
          castShadow
          onClick={() =>
            handleClick(new THREE.Vector3(8.436, 10, 0), tablePosition)
          }
        >
          <meshStandardMaterial map={selectedTexture} />
        </mesh>

        <mesh
          geometry={nodes.Chair1.geometry}
          material={materials.Wood}
          position={chair1Position}
          rotation={[Math.PI, -1.562, -2.978]}
          scale={chair1Scale}
          castShadow
          onClick={() =>
            handleClick(new THREE.Vector3(20, 3, 0), chair1Position)
          }
        >
          <meshStandardMaterial map={selectedTexturec1} />
        </mesh>
        <mesh
          geometry={nodes.Chair2.geometry}
          material={materials.Wood}
          position={chair2Position}
          rotation={[0, -0.005, 0.163]}
          scale={chair2Scale}
          castShadow
          onClick={() =>
            handleClick(new THREE.Vector3(8.436, 3, -9.277), chair1Position)
          }
        >
          <meshStandardMaterial map={selectedTexturec2} />
        </mesh>
        <mesh
          geometry={nodes.Chair3.geometry}
          material={materials.Wood}
          position={chair3Position}
          rotation={[0, -0.005, 0.163]}
          scale={chair3Scale}
          castShadow
          onClick={() =>
            handleClick(new THREE.Vector3(8.436, 3, -9.277), chair3Position)
          }
        >
          <meshStandardMaterial map={selectedTexturec3} />
        </mesh>
        <mesh
          geometry={nodes.Chair4.geometry}
          material={materials.Wood}
          position={chair4Position}
          rotation={[-Math.PI, 1.569, -2.978]}
          scale={chair4Scale}
          castShadow
          onClick={() =>
            handleClick(new THREE.Vector3(-3, 3, 0), chair4Position)
          }
        >
          <meshStandardMaterial map={selectedTexturec4} />
        </mesh>
        <mesh
          geometry={nodes.Chair5.geometry}
          material={materials.Wood}
          position={chair5Position}
          rotation={[Math.PI, 0.014, -2.978]}
          scale={chair5Scale}
          castShadow
          onClick={() =>
            handleClick(new THREE.Vector3(8.436, 3, 9.277), chair5Position)
          }
        >
          <meshStandardMaterial map={selectedTexturec5} />
        </mesh>
        <mesh
          geometry={nodes.Chair6.geometry}
          material={materials.Wood}
          position={chair6Position}
          rotation={[Math.PI, 0.014, -2.978]}
          scale={chair6Scale}
          castShadow
          onClick={() =>
            handleClick(new THREE.Vector3(8.436, 3, 9.277), chair6Position)
          }
        >
          <meshStandardMaterial map={selectedTexturec6} />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/web3d/lab1/LAB1.gltf");
