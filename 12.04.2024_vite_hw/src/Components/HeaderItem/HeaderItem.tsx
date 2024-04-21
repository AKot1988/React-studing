import { FC, PropsWithChildren } from 'react'


export type HeaderItemsProps = {
  text?: string,
  id?: string,
  type?: string,
  src?: string,
  className?: string
}

const HeaderItem: FC<HeaderItemsProps> = ({text, id, type, src, className}: HeaderItemsProps) => {
  switch (type) {
    case "text":
      return (<li id={id} className={className}>{text}</li>)
    case "input":
      return (<input key={`${id}${text}`} id={id} type="text" placeholder="Пошук по карманам" />)
    case "image":
      return (<img key={`${id}${text}`} id={id} src={src} alt="logo" />)
      default:
        return (null);
  }
}

export default HeaderItem
