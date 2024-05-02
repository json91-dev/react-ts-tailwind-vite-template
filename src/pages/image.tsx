import springImg from '@static/images/spring.jpg'

export default function Image() {
  return (
    <div className={'flex h-full w-full items-center justify-center'}>
      <div className={'w-[50%]'}>
        <img className={'h-full w-full object-contain'} src={springImg} />
      </div>
    </div>
  )
}
