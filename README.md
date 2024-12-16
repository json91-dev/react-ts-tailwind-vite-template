## React + Typescript + TailwindCSS (with vite)

React + Typescript + TailwindCSS 기본 보일러 플레이트 코드

## Introduce

- 빠르게 실행할 수 있는 React, TS, TailwindCSS 기반의 보일러 플레이트 코드
- Vite를 기본 빌드 도구로 사용
- 코드 정리를 위한 prettier 적용
- production 빌드시 이미지 compress로 최적화 적용

- **개발 모드 실행**

```
npm run dev
```

- 개발 모드에서 애플리케이션을 실행하여 실시간으로 변경 사항을 확인
- https://localhost:5173 으로 동작

<br/>

- **프로덕션 빌드**

```
npm run build
```

- 최적화된 프로덕션 빌드를 생성하여 배포 파일 생성

## 주요 라이브러리

- `react`, `react-dom`, `react-router-dom`
  - 기본 리엑트 실행 환경 구성, 리엑트 라우터 적용

## 빌드, 개발 환경 라이브러리

- `@types/react`, `@types/react-dom` `@types/node`, `typescript`

  - 타입 적용

- `tailwindcss` `prettier-plugin-tailwindcss`,`prettier`

  - prettier, tailwindcss 적용
  - prettier tailwindcss 플러그인 적용

- `vite`, `vite-tsconfig-paths`, `vite-plugin-compression`

  - Vite 빌드 환경 설정

- `imagemin-mozjpeg`, `imagemin-pngquant`, `imagemin-svgo`
  - Vite 빌드 환경 이미지 최적화 모듈
