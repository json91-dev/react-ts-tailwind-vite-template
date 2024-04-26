import { Canvas } from '@react-three/fiber'
import Scene from '@src/pages/_components/Scene.tsx'
export default function ARPage() {
  return (
    <div className={'h-full w-full'}>
      <Canvas shadows dpr={[1, 1.5]}>
        <Scene />
      </Canvas>
    </div>
  )
}
