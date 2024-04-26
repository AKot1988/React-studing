import {FC} from 'react'
import { ButtonProps } from '../../types'

const Button: FC<ButtonProps> = ({onClick, text, buttonClases}) => {
  return(
    <button onClick={onClick} className={buttonClases}>{text}</button>
  )
}

export default Button