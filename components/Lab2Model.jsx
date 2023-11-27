"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FaExpand, FaPlay, FaPause } from 'react-icons/fa';

const ModelViewer = () => {
  const containerRef = useRef(null);
  const animationMixerRef = useRef(null);
  const orbitControlsRef = useRef(null);
  const camera = useRef(null);
  const renderer = useRef(null);
  const isAnimating = useRef(true);

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();

    // Set up camera
    camera.current = new THREE.PerspectiveCamera(75, 1024 / 574, 0.1, 1000);
    camera.current.position.set(0, 0, 5);

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
    loader.load('/web3d/lab2/scene.gltf', (gltf) => {
      scene.add(gltf.scene);

      // Set up animation mixer
      animationMixerRef.current = new THREE.AnimationMixer(gltf.scene);
      const animations = gltf.animations;

      if (animations && animations.length > 0) {
        const action = animationMixerRef.current.clipAction(animations[0]);
        action.play();
      }
    });

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // Add sun-like light
    const sunLight = new THREE.PointLight(0xffffff, 1, 100);
    sunLight.position.set(10, 10, 10);
    scene.add(sunLight);

    // Set up OrbitControls
    orbitControlsRef.current = new OrbitControls(camera.current, renderer.current.domElement);
    orbitControlsRef.current.enableDamping = true;
    orbitControlsRef.current.dampingFactor = 0.25;
    orbitControlsRef.current.screenSpacePanning = false;
    orbitControlsRef.current.maxPolarAngle = Math.PI / 2;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update animation mixer only if animating
      if (isAnimating.current && animationMixerRef.current) {
        animationMixerRef.current.update(0.01);
      }

      // Update OrbitControls
      if (orbitControlsRef.current) {
        orbitControlsRef.current.update();
      }

      // Render scene with dynamic renderer size
      const { innerWidth, innerHeight } = window;
      renderer.current.setSize(
        document.fullscreenElement || document.webkitFullscreenElement ? innerWidth : 1024,
        document.fullscreenElement || document.webkitFullscreenElement ? innerHeight : 574
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

      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Handle window resize
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
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize);
  }

  const toggleFullscreen = () => {
    if (typeof document !== 'undefined') {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        const requestFullscreen = containerRef.current.requestFullscreen || containerRef.current.webkitRequestFullscreen;

        if (requestFullscreen) {
          requestFullscreen.call(containerRef.current).catch((err) => {
            console.error('Fullscreen request failed:', err);
          });
        }
      } else {
        const exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen;

        if (exitFullscreen) {
          exitFullscreen.call(document);
        }
      }
    }
  };

  const startAnimation = () => {
    isAnimating.current = true;
  };

  const stopAnimation = () => {
    isAnimating.current = false;
  };

  return (
    <div className="w-full h-full mx-auto border-2 border-gray-300 relative">
      <div ref={containerRef} className="w-full h-full">
        {/* Your 3D model rendering here */}
      </div>
      <div className="absolute top-2 right-2 flex space-x-2">
        <button className="bg-white p-2 rounded-md" onClick={toggleFullscreen}>
          <FaExpand size={20} />
        </button>
        <button className="bg-white p-2 rounded-md" onClick={startAnimation}>
          <FaPlay size={20} />
        </button>
        <button className="bg-white p-2 rounded-md" onClick={stopAnimation}>
          <FaPause size={20} />
        </button>
      </div>
    </div>
  );
};

export default ModelViewer;
