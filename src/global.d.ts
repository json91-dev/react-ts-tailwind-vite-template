// 타입 정의 함수 설정
declare module '*.png'
declare module '*.obj'
declare module '*.jpg'
declare module '*.svg'
declare module '*.task'
declare module '*.glb'
declare module '*.hdr'
declare module '*.mp4'
declare module 'platform-detect'

interface ImportMetaEnv {
  VITE_BASENAME: string
  // 필요한 다른 환경 변수 추가
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
