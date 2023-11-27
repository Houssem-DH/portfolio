"use client";
// Import necessary libraries and components
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FaExpand, FaPlay, FaPause } from "react-icons/fa";

// Define the ModelViewer component
const ModelViewer = () => {
  // Create refs to hold references to DOM elements and values
  const containerRef = useRef(null);
  const animationMixerRef = useRef(null);
  const orbitControlsRef = useRef(null);
  const camera = useRef(null);
  const renderer = useRef(null);
  const isAnimating = useRef(true);
  const animationSpeedRef = useRef(0.002); // Initial animation speed

  // State to hold the scene
  const [scene, setScene] = useState(new THREE.Scene());

  // useEffect hook to handle component initialization and cleanup
  useEffect(() => {
    let animationMixer;

    // Set up camera
    camera.current = new THREE.PerspectiveCamera(75, 1024 / 574, 0.1, 1000);
    camera.current.position.set(5, 7, 10);

    // Set up renderer
    renderer.current = new THREE.WebGLRenderer();
    renderer.current.setSize(1024, 574);

    // Append the renderer's DOM element to the container
    const container = containerRef.current;

    // Clear any existing content in the container
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    container.appendChild(renderer.current.domElement);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load("/web3d/lab2/scene.gltf", (gltf) => {
      setScene((prevScene) => {
        prevScene.add(gltf.scene);

        // Set up animation mixer
        animationMixer = new THREE.AnimationMixer(gltf.scene);
        const animations = gltf.animations;

        if (animations && animations.length > 0) {
          const action = animationMixer.clipAction(animations[0]);
          action.play();
        }

        return prevScene;
      });
    });

    // Add hemisphere light for ambient lighting (soft sky light)
    const ambientLight = new THREE.HemisphereLight(0xffffff, 0x404040);
    scene.add(ambientLight);

    // Add directional light for the sun
    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.set(5, 5, 5);
    scene.add(sunLight);

    // Add point light for the warm-colored lamp
    const lampColor = new THREE.Color(255, 0, 0); // Set color manually in RGB format
    const lampLight = new THREE.PointLight(lampColor, 1, 10);
    lampLight.position.set(0, 3, 0); // Adjust the position based on your scene
    scene.add(lampLight);

    // Set up OrbitControls
    orbitControlsRef.current = new OrbitControls(
      camera.current,
      renderer.current.domElement
    );
    orbitControlsRef.current.enableDamping = true;
    orbitControlsRef.current.dampingFactor = 0.25;
    orbitControlsRef.current.screenSpacePanning = false;
    orbitControlsRef.current.maxPolarAngle = Math.PI / 2;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update animation mixer only if animating
      if (isAnimating.current && animationMixer) {
        animationMixer.update(animationSpeedRef.current);
      }

      // Update OrbitControls
      if (orbitControlsRef.current) {
        orbitControlsRef.current.update();
      }

      // Render scene with dynamic renderer size
      const { innerWidth, innerHeight } = window;
      renderer.current.setSize(
        document.fullscreenElement || document.webkitFullscreenElement
          ? innerWidth
          : 1024,
        document.fullscreenElement || document.webkitFullscreenElement
          ? innerHeight
          : 574
      );
      renderer.current.render(scene, camera.current);
    };

    animate();

    // Cleanup function
    return () => {
      // Dispose of Three.js objects and remove event listeners
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          child.material.dispose();
        }
      });
      renderer.current.dispose();

      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [scene]);

  // Function to handle window resize
  const handleResize = () => {
    const { innerWidth, innerHeight } = window;

    // Update camera aspect ratio
    camera.current.aspect = innerWidth / innerHeight;
    camera.current.updateProjectionMatrix();

    // Update renderer size
    renderer.current.setSize(innerWidth, innerHeight);

    // Force render after resizing
    renderer.current.render(scene, camera.current);
  };

  // Event listener for window resize
  if (typeof window !== "undefined") {
    window.addEventListener("resize", handleResize);
  }
  const toggleFullscreen = () => {
    if (typeof document !== "undefined") {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        const requestFullscreen =
          containerRef.current.requestFullscreen ||
          containerRef.current.webkitRequestFullscreen;

        if (requestFullscreen) {
          requestFullscreen.call(containerRef.current).catch((err) => {
            console.error("Fullscreen request failed:", err);
          });
        }
      } else {
        const exitFullscreen =
          document.exitFullscreen || document.webkitExitFullscreen;

        if (exitFullscreen) {
          exitFullscreen.call(document);
        }
      }
    }
  };
  // Function to handle animation start
  const startAnimation = () => {
    isAnimating.current = true;
  };

  // Function to handle animation stop
  const stopAnimation = () => {
    isAnimating.current = false;
  };

  // Function to handle animation speed change
  const handleSpeedChange = (event) => {
    const newSpeed = parseFloat(event.target.value);
    animationSpeedRef.current = newSpeed;
  };

  return (
    <div className="w-full h-full mx-auto border-2 border-gray-300 relative">
      <div ref={containerRef} className="w-full h-full">
        {/* Your 3D model rendering here */}
      </div>
      <div className="absolute top-2 right-2 flex space-x-2 items-center">
        {/* Fullscreen button with icon */}

        {/* Range input for animation speed */}
        <label className="text-white" htmlFor="speedRange">
          Animation Speed:
        </label>
        <input
          type="range"
          onChange={handleSpeedChange}
          min="0.001"
          max="0.01"
          step="0.001"
          className="appearance-none w-32 mx-2 h-3 bg-indigo-500 rounded-full outline-none"

        />

        {/* Play button with icon */}
        <button
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
          onClick={startAnimation}
        >
          <FaPlay size={20} />
        </button>
        {/* Pause button with icon */}
        <button
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
          onClick={stopAnimation}
        >
          <FaPause size={20} />
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          onClick={toggleFullscreen}
        >
          <FaExpand size={20} />
        </button>
      </div>
    </div>
  );
};

export default ModelViewer;
