import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Small decorative rotating wireframe shape (non-interactive). */
export function WireShape({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 50);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const el = renderer.domElement;
    el.style.width = "100%";
    el.style.height = "100%";
    el.style.display = "block";
    mount.appendChild(el);

    const shape = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.05, 0.34, 90, 12),
      new THREE.MeshBasicMaterial({ color: 0xe8a33d, wireframe: true, transparent: true, opacity: 0.7 }),
    );
    scene.add(shape);

    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    let raf = 0;
    const clock = new THREE.Clock();
    const tick = () => {
      const dt = Math.min(clock.getDelta(), 0.05);
      shape.rotation.x += dt * 0.35;
      shape.rotation.y += dt * 0.5;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      shape.geometry.dispose();
      (shape.material as THREE.Material).dispose();
      renderer.dispose();
      if (el.parentNode === mount) mount.removeChild(el);
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className={className} />;
}
