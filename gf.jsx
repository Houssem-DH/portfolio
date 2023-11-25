
"use client"

// components/ThreeScene.js
import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = ({ width, height }) => {
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);

    const container = document.getElementById('three-container');
    container.innerHTML = ''; // Clear previous content
    container.appendChild(renderer.domElement);

    const fbxLoader = new FBXLoader();
    let fbxModel;

    fbxLoader.load(
      '/2.fbx', // Replace with the actual path to your FBX file
      (object) => {
        fbxModel = object;
        scene.add(fbxModel);

        const mixer = new THREE.AnimationMixer(fbxModel);
        const animations = fbxModel.animations.map((clip) => ({
          name: clip.name,
          action: mixer.clipAction(clip),
        }));

        setAnimations(animations);

        // Start all animations simultaneously
        animations.forEach((animation) => {
          animation.action.play();
        });

        scene.userData.mixer = mixer;
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error(error);
      }
    );

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const animate = () => {
      requestAnimationFrame(animate);

      const mixer = scene.userData.mixer;
      if (mixer) {
        mixer.update(0.016);
      }

      // Update controls within the animation loop
      controls.update();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (fbxModel) {
        scene.remove(fbxModel);
      }

      renderer.dispose();
    };
  }, [width, height]);

  return <div id="three-container" />;
};

export default ThreeScene;
