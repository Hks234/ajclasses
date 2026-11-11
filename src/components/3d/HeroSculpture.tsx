import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

interface HeroSculptureProps {
  className?: string;
  onInteractiveModeToggle?: () => void;
}

export const HeroSculpture: React.FC<HeroSculptureProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Software-WebGL Guard probe
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    // 2. Scene, Camera, Renderer
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08090D, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    container.appendChild(renderer.domElement);

    // 3. Studio Environment Reflection via RoomEnvironment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 4. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x10182B, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xF5E2B8, 2.8);
    keyLight.position.set(5, 6, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xD6B779, 1.8);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0x7390D6, 1.2, 20);
    fillLight.position.set(0, -3, 4);
    scene.add(fillLight);

    // 5. Procedural 3D Golden Kinetic Armature (Group of 7+ composite parts)
    const masterSculpture = new THREE.Group();
    scene.add(masterSculpture);

    // Common Luxury Gold Materials
    const goldPBRMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xD6B779,
      emissive: 0x241A08,
      metalness: 0.95,
      roughness: 0.18,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
    });

    const champagneWireframeMat = new THREE.MeshBasicMaterial({
      color: 0xF3E3B6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const innerObsidianMat = new THREE.MeshPhysicalMaterial({
      color: 0x0D1322,
      emissive: 0x070B14,
      metalness: 0.85,
      roughness: 0.25,
      clearcoat: 1.0,
    });

    // Part 1: Central Icosahedron Geodesic Core
    const coreGeom = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMesh = new THREE.Mesh(coreGeom, goldPBRMaterial);
    masterSculpture.add(coreMesh);

    // Part 2: Outer Faceted Wire Cage
    const wireGeom = new THREE.IcosahedronGeometry(1.85, 1);
    const wireMesh = new THREE.Mesh(wireGeom, champagneWireframeMat);
    masterSculpture.add(wireMesh);

    // Part 3: Inner Obsidian Prism Diamond
    const prismGeom = new THREE.OctahedronGeometry(1.0, 0);
    const prismMesh = new THREE.Mesh(prismGeom, innerObsidianMat);
    masterSculpture.add(prismMesh);

    // Part 4: Inner Armillary Ring (X-Axis Gyro)
    const ring1Geom = new THREE.TorusGeometry(2.4, 0.035, 16, 100);
    const ring1 = new THREE.Mesh(ring1Geom, goldPBRMaterial);
    ring1.rotation.x = Math.PI / 4;
    masterSculpture.add(ring1);

    // Part 5: Middle Armillary Ring (Y-Axis Gyro)
    const ring2Geom = new THREE.TorusGeometry(2.9, 0.045, 16, 100);
    const ring2 = new THREE.Mesh(ring2Geom, goldPBRMaterial);
    ring2.rotation.y = Math.PI / 3;
    masterSculpture.add(ring2);

    // Part 6: Outer Celestial Ring with Beveled Markers (Z-Axis Gyro)
    const ring3Geom = new THREE.TorusGeometry(3.4, 0.03, 16, 120);
    const ring3 = new THREE.Mesh(ring3Geom, goldPBRMaterial);
    ring3.rotation.z = Math.PI / 6;
    masterSculpture.add(ring3);

    // Part 7: Orbiting Satellite Tetrahedrons
    const satelliteGroup = new THREE.Group();
    masterSculpture.add(satelliteGroup);

    const satGeom = new THREE.TetrahedronGeometry(0.2, 0);
    const satCount = 6;
    const satellites: THREE.Mesh[] = [];

    for (let i = 0; i < satCount; i++) {
      const angle = (i / satCount) * Math.PI * 2;
      const satMesh = new THREE.Mesh(satGeom, goldPBRMaterial);
      satMesh.position.set(
        Math.cos(angle) * 3.1,
        Math.sin(angle * 2) * 0.7,
        Math.sin(angle) * 3.1
      );
      satelliteGroup.add(satMesh);
      satellites.push(satMesh);
    }

    // Part 8: Floating Golden Atmospheric Dust / Sparkles
    const particleCount = isSoftwareGl ? 90 : 250;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.004,
        z: (Math.random() - 0.5) * 0.003,
      });
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Procedural Particle Texture
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 32;
    particleCanvas.height = 32;
    const ctx = particleCanvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 240, 200, 1)');
      gradient.addColorStop(0.3, 'rgba(214, 183, 121, 0.7)');
      gradient.addColorStop(1, 'rgba(214, 183, 121, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTex = new THREE.CanvasTexture(particleCanvas);
    particleTex.colorSpace = THREE.SRGBColorSpace;

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      map: particleTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // 6. Interaction & Mouse Parallax
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let scrollYOffset = 0;

    const onPointerMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotY = normX * 0.65;
      targetRotX = normY * 0.45;
    };

    const onScroll = () => {
      scrollYOffset = window.scrollY * 0.0012;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // 7. Responsive Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // 8. Animation Loop with Software-WebGL Pacing
    let frameId = 0;
    const clock = new THREE.Clock();

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 60);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    const renderTick = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth exponential damping toward pointer parallax
      currentRotX = THREE.MathUtils.damp(currentRotX, targetRotX, 4.0, delta);
      currentRotY = THREE.MathUtils.damp(currentRotY, targetRotY, 4.0, delta);

      // Core sculpture rotation
      masterSculpture.rotation.x = currentRotX + scrollYOffset * 0.5 + time * 0.12;
      masterSculpture.rotation.y = currentRotY + scrollYOffset * 0.8 + time * 0.18;

      // Concentric rings counter-rotation
      ring1.rotation.x = time * 0.25;
      ring1.rotation.z = time * 0.15;

      ring2.rotation.y = -time * 0.2;
      ring2.rotation.z = time * 0.18;

      ring3.rotation.z = time * 0.14;
      ring3.rotation.x = -time * 0.1;

      // Inner prism counter-rotation
      prismMesh.rotation.x = -time * 0.3;
      prismMesh.rotation.y = time * 0.35;

      // Orbiting satellites spin
      satelliteGroup.rotation.y = time * 0.45;
      satelliteGroup.rotation.x = Math.sin(time * 0.2) * 0.2;
      satellites.forEach((sat, idx) => {
        sat.rotation.x = time * 1.2 + idx;
        sat.rotation.y = time * 1.5 + idx;
      });

      // Drifting particles
      const posAttr = particleGeom.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        arr[i * 3] += particleVelocities[i].x;
        arr[i * 3 + 1] += particleVelocities[i].y;
        arr[i * 3 + 2] += particleVelocities[i].z;

        if (arr[i * 3 + 1] > 6) arr[i * 3 + 1] = -6;
        if (arr[i * 3 + 1] < -6) arr[i * 3 + 1] = 6;
      }
      posAttr.needsUpdate = true;

      // Render
      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(renderTick);
      } else {
        frameId = requestAnimationFrame(renderTick);
      }
    };

    renderTick();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      coreGeom.dispose();
      wireGeom.dispose();
      prismGeom.dispose();
      ring1Geom.dispose();
      ring2Geom.dispose();
      ring3Geom.dispose();
      satGeom.dispose();
      particleGeom.dispose();
      particleTex.dispose();

      goldPBRMaterial.dispose();
      champagneWireframeMat.dispose();
      innerObsidianMat.dispose();
      particleMat.dispose();

      renderer.dispose();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full pointer-events-none ${className || ''}`}>
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      
      {/* Subtle Bottom Ambient Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-[#08090D]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,183,121,0.06)_0%,transparent_70%)] pointer-events-none" />
    </div>
  );
};
