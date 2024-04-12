import { FC } from 'react'
import { useState } from 'react'

type ToDoItemProps = {
  title: string,
  done: boolean
}

const ToDoItem: FC<ToDoItemProps> = ({title, done}) => {
  const [isDone, setIsDone] = useState(done)
  const handleClick = () => setIsDone((prev) => !prev)

  return (
    <li onClick={handleClick}>
      {isDone ? "✔️" : "❌"}
      {title}
    </li>
  )
}

export default ToDoItem

