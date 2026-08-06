import { useEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COLORS = [0x3f9683, 0xe8a33d, 0x2f6f5e, 0xeef1ef, 0x3f9683, 0xe8a33d];

export function OrbitScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.touchAction = "pan-y";
    renderer.domElement.style.cursor = "grab";

    const world = new THREE.Group();
    scene.add(world);

    // Core wireframe icosahedron
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.1, 1),
      new THREE.MeshBasicMaterial({ color: 0x3f9683, wireframe: true, transparent: true, opacity: 0.75 }),
    );
    world.add(core);

    const innerGlow = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.45, 0),
      new THREE.MeshBasicMaterial({ color: 0x2f6f5e, transparent: true, opacity: 0.16 }),
    );
    world.add(innerGlow);

    // Orbiting nodes
    const nodes = NODE_COLORS.map((color, i) => {
      const pivot = new THREE.Group();
      pivot.rotation.x = (i / NODE_COLORS.length) * Math.PI * 0.85 - 0.4;
      pivot.rotation.z = i * 0.55;

      const mesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.3 + (i % 3) * 0.07, 0),
        new THREE.MeshBasicMaterial({ color, wireframe: false, transparent: true, opacity: 0.9 }),
      );
      const radius = 3.1 + (i % 4) * 0.42;
      mesh.position.set(radius, 0, 0);

      const ring = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(
          Array.from({ length: 96 }, (_, k) => {
            const a = (k / 96) * Math.PI * 2;
            return new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0);
          }),
        ),
        new THREE.LineBasicMaterial({ color: 0xeef1ef, transparent: true, opacity: 0.08 }),
      );

      pivot.add(mesh, ring);
      world.add(pivot);
      return { pivot, mesh, speed: 0.16 + i * 0.045 };
    });

    // Sparse starfield
    const starCount = 260;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 12 + Math.random() * 16;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xeef1ef, size: 0.09, transparent: true, opacity: 0.5 }),
    );
    scene.add(stars);

    // Drag interaction
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let velX = 0;
    let velY = 0;
    let targetRotX = -0.15;
    let targetRotY = 0;

    const onDown = (x: number, y: number) => {
      dragging = true;
      lastX = x;
      lastY = y;
      renderer.domElement.style.cursor = "grabbing";
    };
    const onMove = (x: number, y: number) => {
      if (!dragging) return;
      velY = (x - lastX) * 0.006;
      velX = (y - lastY) * 0.006;
      targetRotY += velY;
      targetRotX += velX;
      lastX = x;
      lastY = y;
    };
    const onUp = () => {
      dragging = false;
      renderer.domElement.style.cursor = "grab";
    };

    const pd = (e: PointerEvent) => onDown(e.clientX, e.clientY);
    const pm = (e: PointerEvent) => onMove(e.clientX, e.clientY);
    const el = renderer.domElement;
    el.addEventListener("pointerdown", pd);
    window.addEventListener("pointermove", pm);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

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
      const t = clock.elapsedTime;

      if (!dragging) targetRotY += dt * 0.12;

      world.rotation.y += (targetRotY - world.rotation.y) * 0.08;
      world.rotation.x += (targetRotX - world.rotation.x) * 0.08;
      targetRotX = THREE.MathUtils.clamp(targetRotX, -1.1, 1.1);

      core.rotation.y += dt * 0.15;
      core.rotation.x -= dt * 0.07;
      stars.rotation.y += dt * 0.01;

      nodes.forEach((n, i) => {
        n.pivot.rotation.y += dt * n.speed;
        n.mesh.rotation.x += dt * 0.8;
        n.mesh.rotation.y += dt * 0.6;
        n.mesh.scale.setScalar(1 + Math.sin(t * 1.4 + i) * 0.08);
      });

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener("pointerdown", pd);
      window.removeEventListener("pointermove", pm);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      renderer.dispose();
      scene.traverse((obj) => {
        const any = obj as THREE.Mesh;
        any.geometry?.dispose?.();
        const mat = any.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat?.dispose?.();
      });
      if (el.parentNode === mount) mount.removeChild(el);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        ref={mountRef}
        aria-hidden="true"
        className="h-[320px] w-full select-none sm:h-[420px] lg:h-[520px]"
      />
      <p className="mt-3 text-center font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
        drag to rotate — every node is an industry I&apos;ve worked with
      </p>
    </div>
  );
}
