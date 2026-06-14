"use client";

import { Canvas, type ThreeEvent, useFrame } from "@react-three/fiber";
import { Edges, Html, Line, OrbitControls, RoundedBox } from "@react-three/drei";
import { useRef, useState } from "react";
import type { Group, Mesh, PerspectiveCamera } from "three";

const layerNames = ["Interface", "State", "Services", "Data"];
const layerColors = ["#d6532d", "#c58a72", "#8f928b", "#696d68"];

function InterfaceLayer({ active }: { active: boolean }) {
  return (
    <group position={[0, .28, 0]}>
      <RoundedBox args={[3.7, .16, 1.9]} radius={.1} smoothness={4}>
        <meshStandardMaterial color={active ? "#f0eee7" : "#302f2a"} metalness={.1} roughness={.42} />
        <Edges color={active ? "#d6532d" : "#8b877e"} />
      </RoundedBox>
      {[[-1.25, .25, .5, 1.05, .1, .3], [-1.25, .25, -.15, 1.05, .1, .55], [.15, .25, .5, 1.4, .1, .3], [.15, .25, -.15, 1.4, .1, .55]].map(([x, y, z, sx, sy, sz], index) => (
        <mesh key={index} position={[x, y, z]} scale={[sx, sy, sz]}>
          <boxGeometry />
          <meshStandardMaterial color={index === 0 && active ? "#d6532d" : "#5f5c55"} />
        </mesh>
      ))}
    </group>
  );
}

function StateLayer({ active }: { active: boolean }) {
  const nodes = [[-1.3, 0, .55], [-.35, 0, -.5], [.65, 0, .45], [1.45, 0, -.35]] as [number, number, number][];
  return (
    <group>
      <Line points={nodes.map(([x, y, z]) => [x, y + .12, z])} color={active ? "#d6532d" : "#77736b"} lineWidth={1.2} />
      {nodes.map(([x, y, z], index) => (
        <mesh key={index} position={[x, y + .12, z]}>
          <sphereGeometry args={[.2, 20, 20]} />
          <meshStandardMaterial color={active && index === 2 ? "#f0eee7" : "#c58a72"} emissive={active ? "#4b190d" : "#000"} />
        </mesh>
      ))}
    </group>
  );
}

function ServiceLayer({ active }: { active: boolean }) {
  return (
    <group>
      {[-1.25, 0, 1.25].map((x, index) => (
        <RoundedBox key={x} args={[.9, .48, 1.25]} radius={.08} smoothness={3} position={[x, .1, index === 1 ? -.15 : .15]}>
          <meshStandardMaterial color={active && index === 1 ? "#d6532d" : "#5e615c"} metalness={.25} roughness={.38} />
          <Edges color="#b5b1a7" />
        </RoundedBox>
      ))}
      <Line points={[[-1.7, .1, .85], [0, .1, -.15], [1.7, .1, .85]]} color={active ? "#f0eee7" : "#77736b"} lineWidth={1} />
    </group>
  );
}

function DataLayer({ active }: { active: boolean }) {
  return (
    <group>
      {[0, .22, .44].map((height, index) => (
        <mesh key={height} position={[0, height, 0]} scale={[1, .12, 1]}>
          <cylinderGeometry args={[1.4, 1.4, 1, 48]} />
          <meshStandardMaterial color={active && index === 2 ? "#d6532d" : "#696d68"} metalness={.3} roughness={.4} />
        </mesh>
      ))}
      <mesh position={[0, .66, 0]} scale={[.15, .6, .15]}>
        <cylinderGeometry args={[1, 1, 1, 24]} />
        <meshStandardMaterial color={active ? "#f0eee7" : "#3a3934"} />
      </mesh>
    </group>
  );
}

function Layer({
  index,
  active,
  onSelect,
  reduceMotion,
}: {
  index: number;
  active: boolean;
  onSelect: (index: number) => void;
  reduceMotion: boolean;
}) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;
    elapsed.current += delta;
    const intro = reduceMotion ? 1 : Math.max(0, Math.min(1, (elapsed.current - index * .13) / .85));
    const eased = 1 - Math.pow(1 - intro, 3);
    const targetX = active || hovered ? .18 : 0;
    group.current.position.x += (targetX - group.current.position.x) * Math.min(delta * 7, 1);
    group.current.position.y = -1.3 + (index * .9) * eased;
    group.current.position.z = (index * -.55) * eased;
    group.current.rotation.y = (1 - eased) * -.28;
    group.current.scale.setScalar(.84 + eased * .16);
  });

  const select = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelect(index);
  };

  return (
    <group
      ref={group}
      position={[0, -1.3, 0]}
      rotation={[-.05, 0, 0]}
      onPointerDown={(event) => event.stopPropagation()}
      onClick={select}
      onPointerEnter={(event) => { event.stopPropagation(); setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
    >
      <RoundedBox args={[4.8, .1, 2.8]} radius={.06} smoothness={3} position={[0, -.16, 0]}>
        <meshStandardMaterial color={layerColors[index]} transparent opacity={active ? .52 : .2} roughness={.3} metalness={.12} />
        <Edges color={active ? "#f0eee7" : "#77736b"} />
      </RoundedBox>
      {index === 0 && <InterfaceLayer active={active} />}
      {index === 1 && <StateLayer active={active} />}
      {index === 2 && <ServiceLayer active={active} />}
      {index === 3 && <DataLayer active={active} />}
      <Html position={[-2.1, .38, 1.12]} center pointerEvents="none">
        <span className="architecture-webgl-label">0{index + 1} / {layerNames[index]}</span>
      </Html>
    </group>
  );
}

function FlowSignal({ reduceMotion, paused }: { reduceMotion: boolean; paused: boolean }) {
  const signal = useRef<Mesh>(null);
  const elapsed = useRef(0);
  const layerY = [-1.3, -.4, .5, 1.4];

  useFrame((_, delta) => {
    if (!signal.current) return;
    if (reduceMotion) {
      signal.current.visible = false;
      return;
    }
    if (paused) return;
    elapsed.current += delta;
    const local = Math.max(0, elapsed.current - 1.05);
    const cycle = (local % 12) / 12;
    const path = cycle < .5 ? cycle * 2 : (1 - cycle) * 2;
    signal.current.visible = local > 0;
    signal.current.position.y = layerY[0] + (layerY[3] - layerY[0]) * path;
    signal.current.position.x = Math.sin(path * Math.PI * 3) * .42;
    const scale = .75 + Math.sin(path * Math.PI) * .45;
    signal.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={signal} position={[0, -1.3, .35]} visible={!reduceMotion}>
      <sphereGeometry args={[.13, 24, 24]} />
      <meshStandardMaterial color="#f0eee7" emissive="#d6532d" emissiveIntensity={4} />
    </mesh>
  );
}

function AutoDemo({
  reduceMotion,
  paused,
  onSelect,
}: {
  reduceMotion: boolean;
  paused: boolean;
  onSelect: (index: number) => void;
}) {
  const elapsed = useRef(0);
  const previousLayer = useRef(-1);

  useFrame((_, delta) => {
    if (reduceMotion || paused) return;
    elapsed.current += delta;
    const local = Math.max(0, elapsed.current - 1.05);
    const cycle = local % 12;
    const progress = cycle < 6 ? cycle / 6 : (12 - cycle) / 6;
    const layer = Math.max(0, Math.min(3, Math.round(progress * 3)));
    if (layer !== previousLayer.current) {
      previousLayer.current = layer;
      onSelect(layer);
    }
  });
  return null;
}

function CameraIntro({ reduceMotion }: { reduceMotion: boolean }) {
  const elapsed = useRef(0);
  useFrame(({ camera }, delta) => {
    if (reduceMotion || elapsed.current > 2.4) return;
    elapsed.current += delta;
    const perspective = camera as PerspectiveCamera;
    const progress = Math.min(1, elapsed.current / 2.4);
    const eased = 1 - Math.pow(1 - progress, 3);
    perspective.position.x = 1.2 - eased * 1.2;
    perspective.position.y = 2.4 - eased * .45;
    perspective.position.z = 10.4 - eased * .4;
    perspective.lookAt(0, 0, -.25);
  });
  return null;
}

export default function ArchitectureScene({
  activeLayer,
  onSelect,
  reduceMotion,
  paused,
  onLayerSelect,
}: {
  activeLayer: number;
  onSelect: (index: number) => void;
  reduceMotion: boolean;
  paused: boolean;
  onLayerSelect: (index: number) => void;
}) {
  return (
    <Canvas camera={{ position: [1.2, 2.4, 10.4], fov: 38 }} dpr={[1.5, 2]} gl={{ antialias: true, powerPreference: "high-performance" }}>
      <color attach="background" args={["#181815"]} />
      <ambientLight intensity={1.7} />
      <directionalLight position={[5, 7, 4]} intensity={3.4} color="#ffffff" />
      <directionalLight position={[-4, 2, 5]} intensity={1.4} color="#d7d2c6" />
      <pointLight position={[-4, 1, 4]} intensity={25} distance={12} color="#d6532d" />
      <group rotation={[.08, 0, 0]}>
        <Line points={[[0, -1.3, .35], [0, 1.4, .35]]} color="#d6532d" lineWidth={.7} dashed dashSize={.12} gapSize={.12} />
        {layerNames.map((name, index) => <Layer key={name} index={index} active={activeLayer === index} onSelect={onLayerSelect} reduceMotion={reduceMotion} />)}
        <FlowSignal reduceMotion={reduceMotion} paused={paused} />
      </group>
      <CameraIntro reduceMotion={reduceMotion} />
      <AutoDemo reduceMotion={reduceMotion} paused={paused} onSelect={onSelect} />
      <gridHelper args={[18, 18, "#3b3934", "#292824"]} position={[0, -2, 0]} />
      <OrbitControls enablePan={false} minDistance={7} maxDistance={12} minPolarAngle={.55} maxPolarAngle={1.4} />
    </Canvas>
  );
}
