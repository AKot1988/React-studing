import { FC, PropsWithChildren } from 'react'


export type HeaderItemsProps = {
  text?: string,
  id?: string,
  type?: string,
  src?: string,
  itemKey?: number
  className?: string
}

const HeaderItem: FC<HeaderItemsProps> = ({text, id, type, src, itemKey, className}: HeaderItemsProps) => {
  switch (type) {
    case "text":
      return (<li key={itemKey} id={id} className={className}>{text}</li>)
    case "input":
      return (<input key={itemKey} id={id} type="text" placeholder="Пошук по карманам" />)
    case "image":
      return (<img key={itemKey} id={id} src={src} alt="logo" />)
      default:
        return (null);
  }
}

export default HeaderItem
