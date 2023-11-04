"use client";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/TP11.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.001']} position={[-0.969, 0.589, 0.47]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-0.48, -0.073, -0.368]} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['Material.002']} position={[-1.323, 0.683, 0.211]} rotation={[-2.748, 0.86, 2.87]} scale={[0.285, 0.232, 0.047]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.003']} position={[0, 0.034, 0]} scale={241.493} />
    </group>
  )
}

useGLTF.preload('/TP11.glb')
