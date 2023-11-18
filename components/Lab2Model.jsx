"use client";
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/web3d/lab2/LAB2.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="donut" position={[-0.001, 1.036, -0.001]} rotation={[2.131, -0.035, 3.086]} scale={149.858}>
          <mesh name="Torus001" geometry={nodes.Torus001.geometry} material={materials['Material.002']} />
          <mesh name="Torus001_1" geometry={nodes.Torus001_1.geometry} material={materials['Material.001']} />
        </group>
        <group name="donut001" position={[-0.001, 2.685, -0.001]} rotation={[-0.745, -0.29, 2.646]} scale={149.858}>
          <mesh name="Torus003" geometry={nodes.Torus003.geometry} material={materials['Material.002']} />
          <mesh name="Torus003_1" geometry={nodes.Torus003_1.geometry} material={materials['Material.001']} />
        </group>
        <group name="donut002" position={[-0.001, 4.37, -0.001]} rotation={[1.01, 0, 0]} scale={149.858}>
          <mesh name="Torus004" geometry={nodes.Torus004.geometry} material={materials['Material.002']} />
          <mesh name="Torus004_1" geometry={nodes.Torus004_1.geometry} material={materials['Material.001']} />
        </group>
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.004']} position={[0, 3.507, 0]} scale={3.512} />
        <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[0, 5.999, 0]} scale={0.151} />
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.006']} position={[-0.983, 9.988, -0.009]} scale={[10.005, 10.005, 17.664]} />
      </group>
    </group>
  )
}

useGLTF.preload('/web3d/lab2/LAB2.glb')