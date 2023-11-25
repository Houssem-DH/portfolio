"use client"
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeScene = () => {
  const scene = useRef();
  const camera = useRef();
  const renderer = useRef();
  const controls = useRef();
  const fbxModel = useRef();
  const [animations, setAnimations] = useState([]);
  const [currentAnimation, setCurrentAnimation] = useState(null);

  useEffect(() => {
    const onWindowResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.current.aspect = newWidth / newHeight;
      camera.current.updateProjectionMatrix();

      renderer.current.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", onWindowResize);

    // Set up the scene
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setSize(window.innerWidth, window.innerHeight);

    document.getElementById("three-container").appendChild(renderer.current.domElement);

    // Load FBX model
    const loader = new FBXLoader();
    loader.load("/web3d/lab2/scene.fbx", (fbx) => {
      fbxModel.current = fbx;
      scene.current.add(fbxModel.current);

      // Extract animations from the loaded FBX model
      const mixer = new THREE.AnimationMixer(fbxModel.current);
      const animations = fbxModel.current.animations.map((clip) => ({
        name: clip.name,
        action: mixer.clipAction(clip),
      }));

      setAnimations(animations);

      // Set up camera position and target
      camera.current.position.set(0, 5, 10);
      camera.current.lookAt(0, 5, 0);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.current.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      scene.current.add(directionalLight);

      // Add controls
      controls.current = new OrbitControls(camera.current, renderer.current.domElement);
      controls.current.enableDamping = true;
      controls.current.dampingFactor = 0.25;
      controls.current.enableZoom = true;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Update the animation mixer
        mixer.update(0.016);

        controls.current.update();
        renderer.current.render(scene.current, camera.current);
      };

      animate();

      // Clean up Three.js resources on component unmount
      return () => {
        window.removeEventListener("resize", onWindowResize);
        scene.current.children = []; // Remove all children from the scene
        renderer.current.dispose();
      };
    });
  }, []);

  const handleAnimationChange = (animation) => {
    if (animation !== currentAnimation && animation.action.getClip()) {
      const mixer = animations[0].action.getMixer(); // Use the mixer of the first animation
      mixer.stopAllAction();
      mixer.timeScale = 0.5;
      mixer.clipAction(animation.action.getClip()).play();
      setCurrentAnimation(animation);
    }
  };

  const handlePlayAll = () => {
    const mixer = animations[0].action.getMixer(); // Use the mixer of the first animation

    animations.forEach((animation) => {
      mixer.clipAction(animation.action.getClip()).play();
    });

    setCurrentAnimation(null);
  };

  return (
    <div>
      <div id="three-container" />
      <div className="menu">
        <h2 className="text-xl font-semibold mb-2">Animation Controls</h2>
        <div className="flex space-x-4">
          {animations.map((animation) => (
            <button
              key={animation.name}
              onClick={() => handleAnimationChange(animation)}
              className={`px-4 py-2 text-white ${
                animation === currentAnimation ? "bg-blue-500" : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              {animation.name}
            </button>
          ))}
          <button
            onClick={handlePlayAll}
            className="px-4 py-2 text-white bg-green-500 hover:bg-green-600"
          >
            Play All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeScene;
