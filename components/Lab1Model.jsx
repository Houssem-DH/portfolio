import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/web3d/lab1/LAB1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.005']} position={[8.431, 2.266, -0.009]} scale={[5.218, 0.157, 2.606]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.014']} position={[8.436, 0.724, -0.012]} rotation={[3.137, -0.728, 3.133]} scale={1.398} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.015']} position={[8.436, 0.724, -0.012]} rotation={[3.138, 0.635, 3.138]} scale={1.398} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.002']} position={[8.751, 7.025, -1.038]} scale={[281.87, 7.72, 112.255]} />
      <mesh geometry={nodes.Chair_Legs006.geometry} material={materials['Material.029']} position={[7.786, -0.68, -5.277]} rotation={[0, -0.005, 0.163]} scale={4.294}>
        <mesh geometry={nodes.BackRest006.geometry} material={materials['Material.022']} position={[-0.143, 0.686, -0.169]} rotation={[1.209, -0.153, -0.058]} />
        <group position={[-0.347, 0.509, -0.002]} rotation={[0.208, 0.513, -0.589]}>
          <mesh geometry={nodes.Circle020.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.Circle020_1.geometry} material={materials['screw hole']} />
        </group>
        <group position={[-0.306, 0.64, -0.15]} rotation={[0.983, -0.713, -0.77]}>
          <mesh geometry={nodes.Circle021.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Circle021_1.geometry} material={materials['screw hole']} />
        </group>
        <group position={[-0.259, 0.768, -0.198]} rotation={[1.077, -0.789, -0.597]}>
          <mesh geometry={nodes.Circle022.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Circle022_1.geometry} material={materials['screw hole']} />
        </group>
        <mesh geometry={nodes.Seat006.geometry} material={materials['Material.021']} position={[-0.175, 0.487, 0.055]} rotation={[0, 0, -0.163]} />
        <mesh geometry={nodes.support007.geometry} material={nodes.support007.material} position={[-0.2, 0.341, -0.185]} rotation={[0.147, -0.024, -0.161]} />
      </mesh>
      <mesh geometry={nodes.Chair_Legs001.geometry} material={materials['Material.028']} position={[11.554, -0.68, -5.277]} rotation={[0, -0.005, 0.163]} scale={4.294}>
        <mesh geometry={nodes.BackRest001.geometry} material={materials['Material.023']} position={[-0.143, 0.686, -0.169]} rotation={[1.209, -0.153, -0.058]} />
        <group position={[-0.347, 0.509, -0.002]} rotation={[0.208, 0.513, -0.589]}>
          <mesh geometry={nodes.Circle023.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.Circle023_1.geometry} material={materials['screw hole']} />
        </group>
        <group position={[-0.306, 0.64, -0.15]} rotation={[0.983, -0.713, -0.77]}>
          <mesh geometry={nodes.Circle024.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Circle024_1.geometry} material={materials['screw hole']} />
        </group>
        <group position={[-0.259, 0.768, -0.198]} rotation={[1.077, -0.789, -0.597]}>
          <mesh geometry={nodes.Circle025.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Circle025_1.geometry} material={materials['screw hole']} />
        </group>
        <mesh geometry={nodes.Seat001.geometry} material={materials['Material.020']} position={[-0.175, 0.487, 0.055]} rotation={[0, 0, -0.163]} />
        <mesh geometry={nodes.support001.geometry} material={nodes.support001.material} position={[-0.2, 0.341, -0.185]} rotation={[0.147, -0.024, -0.161]} />
      </mesh>
      <mesh geometry={nodes.Chair_Legs002.geometry} material={materials['Material.032']} position={[9.374, -0.68, 5.086]} rotation={[Math.PI, 0.014, -2.978]} scale={4.294}>
        <mesh geometry={nodes.BackRest002.geometry} material={materials['Material.027']} position={[-0.143, 0.686, -0.169]} rotation={[1.209, -0.153, -0.058]} />
        <group position={[-0.347, 0.509, -0.002]} rotation={[0.208, 0.513, -0.589]}>
          <mesh geometry={nodes.Circle026.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.Circle026_1.geometry} material={materials['screw hole']} />
        </group>
        <group position={[-0.306, 0.64, -0.15]} rotation={[0.983, -0.713, -0.77]}>
          <mesh geometry={nodes.Circle027.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Circle027_1.geometry} material={materials['screw hole']} />
        </group>
        <group position={[-0.259, 0.768, -0.198]} rotation={[1.077, -0.789, -0.597]}>
          <mesh geometry={nodes.Circle028.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Circle028_1.geometry} material={materials['screw hole']} />
        </group>
        <mesh geometry={nodes.Seat002.geometry} material={materials['Material.018']} position={[-0.175, 0.487, 0.055]} rotation={[0, 0, -0.163]} />
        <mesh geometry={nodes.support002.geometry} material={nodes.support002.material} position={[-0.2, 0.341, -0.185]} rotation={[0.147, -0.024, -0.161]} />
      </mesh>
      <mesh geometry={nodes.Chair_Legs003.geometry} material={materials['Material.031']} position={[5.607, -0.68, 5.049]} rotation={[Math.PI, 0.014, -2.978]} scale={4.294}>
        <mesh geometry={nodes.BackRest003.geometry} material={materials['Material.026']} position={[-0.143, 0.686, -0.169]} rotation={[1.209, -0.153, -0.058]} />
        <group position={[-0.347, 0.509, -0.002]} rotation={[0.208, 0.513, -0.589]}>
          <mesh geometry={nodes.Circle029.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.Circle029_1.geometry} material={materials['screw hole']} />
        </group>
        <group position={[-0.306, 0.64, -0.15]} rotation={[0.983, -0.713, -0.77]}>
          <mesh geometry={nodes.Circle030.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Circle030_1.geometry} material={materials['screw hole']} />
        </group>
        <group position={[-0.259, 0.768, -0.198]} rotation={[1.077, -0.789, -0.597]}>
          <mesh geometry={nodes.Circle031.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Circle031_1.geometry} material={materials['screw hole']} />
        </group>
        <mesh geometry={nodes.Seat003.geometry} material={materials['Material.017']} position={[-0.175, 0.487, 0.055]} rotation={[0, 0, -0.163]} />
        <mesh geometry={nodes.support003.geometry} material={nodes.support003.material} position={[-0.2, 0.341, -0.185]} rotation={[0.147, -0.024, -0.161]} />
      </mesh>
      <mesh geometry={nodes.Chair_Legs004.geometry} material={materials['Material.030']} position={[2.314, -0.68, -1.134]} rotation={[-Math.PI, 1.569, -2.978]} scale={4.294}>
        <mesh geometry={nodes.BackRest004.geometry} material={materials['Material.025']} position={[-0.143, 0.686, -0.169]} rotation={[1.209, -0.153, -0.058]} />
        <group position={[-0.347, 0.509, -0.002]} rotation={[0.208, 0.513, -0.589]}>
          <mesh geometry={nodes.Circle032.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.Circle032_1.geometry} material={materials['screw hole']} />
        </group>
        <group position={[-0.306, 0.64, -0.15]} rotation={[0.983, -0.713, -0.77]}>
          <mesh geometry={nodes.Circle033.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Circle033_1.geometry} material={materials['screw hole']} />
        </group>
        <group position={[-0.259, 0.768, -0.198]} rotation={[1.077, -0.789, -0.597]}>
          <mesh geometry={nodes.Circle034.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Circle034_1.geometry} material={materials['screw hole']} />
        </group>
        <mesh geometry={nodes.Seat004.geometry} material={materials['Material.016']} position={[-0.175, 0.487, 0.055]} rotation={[0, 0, -0.163]} />
        <mesh geometry={nodes.support004.geometry} material={nodes.support004.material} position={[-0.2, 0.341, -0.185]} rotation={[0.147, -0.024, -0.161]} />
      </mesh>
      <mesh geometry={nodes.Chair_Legs005.geometry} material={materials['Material.033']} position={[14.626, -0.68, 1.056]} rotation={[Math.PI, -1.562, -2.978]} scale={4.294}>
        <mesh geometry={nodes.BackRest005.geometry} material={materials['Material.024']} position={[-0.143, 0.686, -0.169]} rotation={[1.209, -0.153, -0.058]} />
        <group position={[-0.347, 0.509, -0.002]} rotation={[0.208, 0.513, -0.589]}>
          <mesh geometry={nodes.Circle035.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.Circle035_1.geometry} material={materials['screw hole']} />
        </group>
        <group position={[-0.306, 0.64, -0.15]} rotation={[0.983, -0.713, -0.77]}>
          <mesh geometry={nodes.Circle036.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Circle036_1.geometry} material={materials['screw hole']} />
        </group>
        <group position={[-0.259, 0.768, -0.198]} rotation={[1.077, -0.789, -0.597]}>
          <mesh geometry={nodes.Circle037.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Circle037_1.geometry} material={materials['screw hole']} />
        </group>
        <mesh geometry={nodes.Seat005.geometry} material={materials['Material.019']} position={[-0.175, 0.487, 0.055]} rotation={[0, 0, -0.163]} />
        <mesh geometry={nodes.support005.geometry} material={nodes.support005.material} position={[-0.2, 0.341, -0.185]} rotation={[0.147, -0.024, -0.161]} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/web3d/lab1/LAB1.glb')












