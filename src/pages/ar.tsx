import { Canvas } from '@react-three/fiber'
import Scene from '@src/pages/_components/Scene.tsx'
import { PerspectiveCamera } from '@react-three/drei'
export default function ARPage() {
  return (
    <div className={'h-full w-full'}>
      <Canvas shadows dpr={[1, 1.5]}>
        <Scene />
        <PerspectiveCamera position={[0, 0, 10]} makeDefault manual />
      </Canvas>
    </div>
  )
}
