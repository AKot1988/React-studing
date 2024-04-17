import {FC, useState} from 'react'

type ButtonProps = {
  text: string
  className?: string
}

const Button: FC<ButtonProps> = ({text, className}) => {
  let [someValue, setIsDone] = useState(0)
  const handleClick = () => setIsDone((prev) => {
    someValue = prev + 1
    return someValue
  })
    

  return (
    <button onClick={handleClick} className={className}>{text} {someValue}</button>
  )
}

export default Button