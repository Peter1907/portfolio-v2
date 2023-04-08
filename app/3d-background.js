'use client';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Background = () => {
  const canvasRef = useRef(null);
  const [info, name, text, btn] = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const router = useRouter();

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
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(0, -8, 10);
    const backLight = new THREE.DirectionalLight(0xffffff, 0.8);
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

    // Animation for navigation
    btn.current.addEventListener('click', () => {
      gsap.to(info.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          gsap.to(info.current, { display: 'none' });
          gsap.to(camera.position, { z: 10, ease: 'Power2.inOut', duration: 1.7 });
          gsap.to(camera.rotation, { x: 1.57, ease: 'Power2.inOut', duration: 1.7 });
          gsap.to(camera.position, {
            y: 1000,
            ease: 'power4.in',
            duration: 1,
            delay: 2,
            onComplete: () => router.push('/projects'),
          });
        },
      });
    });

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

  useEffect(() => {
    gsap.from(text.current, { opacity: 0, delay: 5, duration: 0.5 });
    gsap.from(btn.current, { opacity: 0, delay: 5.5, y: -50, duration: 1, ease: 'bounce' });
    gsap.from(name.current, { opacity: 0, y: 50, delay: 5.5, duration: 0.5 });
  }, []);

  return (
    <section className="text-snow text-center flex items-center justify-center h-screen">
      <div ref={info} className="intro cursor-default z-40 flex flex-col gap-2 items-center">
        <h3
          ref={name}
          className="font-cutive text-lg md:text-xl lg:text-2xl leading-4 mt-2 backdrop-blur-sm"
        >
          PETER BESHARA
        </h3>
        <div className="text" ref={text}>
          <p className="font-semibold max-w-lg md:max-w-xl lg:max-w-2xl px-2 font-saira text-3xl md:text-4xl lg:text-5xl">
            A multidimensional creative mind with a passion for pushing the boundaries of design and technology.
          </p>
          <p className="font-saira text-lg md:text-xl lg:text-2xl leading-4 mt-4 backdrop-blur-sm">
            WELCOME TO MY DIGITAL UNIVERSE!
          </p>
        </div>
        <button
          type="button"
          ref={btn}
          className="font-saira border border-snow/40 text-lg md:text-xl lg:text-2xl mt-2 py-2 px-4 md:py-3 md:px-6 bg-rich-black/80 hover:bg-rich-black active:scale-[0.98]"
        >
          Explore
        </button>
      </div>
      <canvas ref={canvasRef} className="canvas fixed inset-0 z-30" />
    </section>
  );
};

export default Background;
