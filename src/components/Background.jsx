import { useEffect, useRef } from "react";
import * as THREE from "three";

function Background() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // ---------------------------------------
    // SCENE
    // ---------------------------------------
    const scene = new THREE.Scene();

    // ---------------------------------------
    // CAMERA
    // ---------------------------------------
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    camera.position.z = 45;

    // ---------------------------------------
    // RENDERER
    // ---------------------------------------
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // ---------------------------------------
    // NETWORK SETTINGS
    // ---------------------------------------
    const NODE_COUNT = 65;
    const MAX_DISTANCE = 11;

    const networkColor = 0xd2042d;

    // ---------------------------------------
    // CREATE NODES
    // ---------------------------------------
    const nodes = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 42,
          (Math.random() - 0.5) * 42,
          (Math.random() - 0.5) * 22
        )
      );
    }

    // ---------------------------------------
    // NODE GEOMETRY
    // ---------------------------------------
    const nodeGeometry = new THREE.BufferGeometry();

    const nodePositions = new Float32Array(
      NODE_COUNT * 3
    );

    nodes.forEach((node, index) => {
      nodePositions[index * 3] = node.x;
      nodePositions[index * 3 + 1] = node.y;
      nodePositions[index * 3 + 2] = node.z;
    });

    nodeGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(nodePositions, 3)
    );

    // ---------------------------------------
    // NODE MATERIAL
    // ---------------------------------------
    const nodeMaterial = new THREE.PointsMaterial({
      color: networkColor,
      size: 0.32,
      transparent: true,
      opacity: 0.95,
      sizeAttenuation: true,
    });

    const nodePoints = new THREE.Points(
      nodeGeometry,
      nodeMaterial
    );

    scene.add(nodePoints);

    // ---------------------------------------
    // NETWORK LINES
    // ---------------------------------------
    const lineMaterial = new THREE.LineBasicMaterial({
      color: networkColor,
      transparent: true,
      opacity: 0.5,
    });

    const lineGeometry = new THREE.BufferGeometry();

    const linePositions = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const distance = nodes[i].distanceTo(nodes[j]);

        if (distance < MAX_DISTANCE) {
          linePositions.push(
            nodes[i].x,
            nodes[i].y,
            nodes[i].z,

            nodes[j].x,
            nodes[j].y,
            nodes[j].z
          );
        }
      }
    }

    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        linePositions,
        3
      )
    );

    const networkLines = new THREE.LineSegments(
      lineGeometry,
      lineMaterial
    );

    scene.add(networkLines);

    // ---------------------------------------
    // MOUSE
    // ---------------------------------------
    const mouse = new THREE.Vector2();

    const targetRotation = new THREE.Vector2();

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();

      mouse.x =
        ((event.clientX - rect.left) / rect.width) * 2 - 1;

      mouse.y =
        -((event.clientY - rect.top) / rect.height) * 2 + 1;

      targetRotation.x = mouse.y * 0.35;
      targetRotation.y = mouse.x * 0.35;
    };

    container.addEventListener(
      "mousemove",
      handleMouseMove
    );

    // ---------------------------------------
    // HOVER
    // ---------------------------------------
    let isHovering = false;

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;

      mouse.x = 0;
      mouse.y = 0;

      targetRotation.x = 0;
      targetRotation.y = 0;
    };

    container.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    container.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    // ---------------------------------------
    // ANIMATION SPEED
    // ---------------------------------------

    let currentSpeed = 0.0015;

    const normalSpeed = 0.0015;

    // Much faster when hovering
    const hoverSpeed = 0.012;

    // ---------------------------------------
    // ANIMATION
    // ---------------------------------------
    let animationFrame;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      // ---------------------------------------
      // SMOOTH SPEED CHANGE
      // ---------------------------------------

      const targetSpeed = isHovering
        ? hoverSpeed
        : normalSpeed;

      currentSpeed +=
        (targetSpeed - currentSpeed) * 0.06;

      // ---------------------------------------
      // ROTATION
      // ---------------------------------------

      networkLines.rotation.y += currentSpeed;

      networkLines.rotation.x +=
        currentSpeed * 0.3;

      nodePoints.rotation.y += currentSpeed;

      nodePoints.rotation.x +=
        currentSpeed * 0.3;

      // ---------------------------------------
      // SMOOTH MOUSE MOVEMENT
      // ---------------------------------------

      networkLines.rotation.x +=
        (targetRotation.x -
          networkLines.rotation.x) *
        0.01;

      networkLines.rotation.y +=
        (targetRotation.y -
          networkLines.rotation.y) *
        0.01;

      nodePoints.rotation.x +=
        (targetRotation.x -
          nodePoints.rotation.x) *
        0.01;

      nodePoints.rotation.y +=
        (targetRotation.y -
          nodePoints.rotation.y) *
        0.01;

      // ---------------------------------------
      // HOVER VISUAL EFFECT
      // ---------------------------------------

      if (isHovering) {
        nodeMaterial.size = 0.38;
        lineMaterial.opacity = 0.75;
      } else {
        nodeMaterial.size = 0.32;
        lineMaterial.opacity = 0.5;
      }

      // ---------------------------------------
      // RENDER
      // ---------------------------------------

      renderer.render(scene, camera);
    };

    animate();

    // ---------------------------------------
    // RESPONSIVE RESIZE
    // ---------------------------------------
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(
        width,
        height
      );

      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // ---------------------------------------
    // CLEANUP
    // ---------------------------------------
    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        handleResize
      );

      container.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      container.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      container.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      nodeGeometry.dispose();
      nodeMaterial.dispose();

      lineGeometry.dispose();
      lineMaterial.dispose();

      renderer.dispose();

      if (
        renderer.domElement.parentNode ===
        container
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="network-background"
    />
  );
}

export default Background;