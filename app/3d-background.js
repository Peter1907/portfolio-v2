'use client';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create Mesh which needs Geometry & Material
    const geometry = new THREE.PlaneGeometry(100, 100, 40, 40);
    const material = new THREE.MeshPhongMaterial({
      flatShading: true,
      side: THREE.DoubleSide,
      vertexColors: true,
    });
    const sheet = new THREE.Mesh(geometry, material);
    sheet.position.y = 10;

    // Set custom colors & positions for vertices
    const colors = [];
    // color has to be devided by 255
    // to be converted to sRGB which is the color system used here
    const initColor = {
      x: 0 / 255,
      y: 61 / 255,
      z: 64 / 255,
    };
    const { array } = sheet.geometry.attributes.position;
    const randomPos = []; // For individual movement of vertives
    for (let i = 0; i < array.length; i += 3) {
      array[i] += (Math.random() - 0.5) * 0.2;
      array[i + 1] += (Math.random() - 0.5) * 0.2;
      array[i + 2] += (Math.random() - 0.5) * 2.5;
      randomPos.push(Math.random() * Math.PI * 2);
      randomPos.push(Math.random() * Math.PI * 2);
      randomPos.push(array[i + 2]);
      colors.push(initColor.x, initColor.y, initColor.z);
    }
    sheet.geometry.setAttribute('color',
      new THREE.Float32BufferAttribute(colors, 3)
    ); // Color attribute has to be in the form of Float32BufferArray
    sheet.geometry.attributes.position.originalPos = array;
    sheet.geometry.attributes.position.randomPos = randomPos;

    // Set camera & Lights
    const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000);
    camera.position.z = 40;
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, -8, 10);
    const backLight = new THREE.DirectionalLight(0xffffff, 1);
    backLight.position.set(0, 8, -10);

    // Stars
    const starPositions = [];
    for (let i = 1; i <= 30000; i++) {
      const x = (Math.random() - 0.5) * 1900 + 50;
      const y = (Math.random() - 0.5) * 1800 + 100;
      const z = (Math.random() - 0.5) * 1900 + 50;
      starPositions.push(x, y, z);
    };
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const galaxy = new THREE.Points(starGeometry, starMaterial);

    // Create a Scene & add items into it
    const scene = new THREE.Scene();
    scene.add(sheet, light, backLight, galaxy);

    // Create canvas (domElement) || It's posible to use "renderer.domElement" instead
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setClearColor(0x15191e);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.render(scene, camera); // A renderer has to take in a scene & a camera

    // Normalizing mouse x & y coords (three.js deals in a coordinate grid with 4 quadrants)
    const mouse = {
      x: undefined,
      y: undefined,
    };
    const normalizeMouse = (e) => {
      mouse.x = (e.clientX / innerWidth) * 2 - 1;
      mouse.y = (e.clientY / innerHeight) * -2 + 1;
    };
    window.addEventListener('mousemove', normalizeMouse);
    // Create a Raycaster (detects intersections with objects in the scene)
    const raycaster = new THREE.Raycaster();

    // Animation function with "requestAnimationFrame()"
    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      const hoverColor = {
        x: 0 / 255,
        y: 244 / 255,
        z: 255 / 255,
      };
      raycaster.setFromCamera(mouse, camera); // The raycaster takes a mouse object & a camera
      const intersection = raycaster.intersectObject(sheet, false);
      // Change colors of the 3 vertices making the face when the raycaster intersects with it
      if (intersection.length > 0) {
        const { a, b, c } = intersection[0].face;
        const { color } = intersection[0].object.geometry.attributes;
        gsap.to(hoverColor, {
          x: initColor.x,
          y: initColor.y,
          z: initColor.z,
          duration: 1,
          onUpdate: () => {
            color.set([hoverColor.x, hoverColor.y, hoverColor.z], a * 3);
            color.set([hoverColor.x, hoverColor.y, hoverColor.z], b * 3);
            color.set([hoverColor.x, hoverColor.y, hoverColor.z], c * 3);
            sheet.geometry.attributes.color.needsUpdate = true;
          }
        })
      };
      // Animate the vertices positions with controlled random movement
      frame = clock.getElapsedTime();
      const { array, originalPos } = sheet.geometry.attributes.position;
      for (let i = 0; i < array.length; i += 3) {
        array[i] = originalPos[i] + Math.cos(frame + randomPos[i]) * 0.0025;
        array[i + 1] = originalPos[i + 1] + Math.sin(frame + randomPos[i + 1]) * 0.0025;
      }
      sheet.geometry.attributes.position.needsUpdate = true;
      // Animate the stars
      galaxy.rotation.x = frame * 0.01;
      galaxy.rotation.y = -frame * 0.008;

      // Render the updated scene again on every frame to make the animation
      renderer.render(scene, camera);
    };
    requestAnimationFrame(animate);

    const handleResize = () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
      renderer.render(scene, camera);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      [
        geometry,
        material,
        light,
        backLight,
        starGeometry,
        starMaterial,
        renderer
      ].forEach((x) => x.dispose());

      cancelAnimationFrame(animate);

      window.removeEventListener('mouseover', normalizeMouse);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="text-snow flex items-center justify-center h-screen">
      <canvas ref={canvasRef} className="canvas fixed inset-0 z-30" />
    </section>
  );
};

export default Background;
