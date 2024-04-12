import { FC, PropsWithChildren } from 'react'
import ToDoItem from "../ToDoItem/ToDoItem";

const listProps = [
  {title: "Wash Gogies face", done: false},
  {title: "Buy a present", done: true},
  {title: "Eat chicken", done: false},
  {title: "Subscribe to BUOY studies", done: true}
]

const ToDoList: FC<PropsWithChildren> = () => {
  return(
    <ul>
      {listProps.map(toDoItem => 
        <ToDoItem title={toDoItem.title} done={toDoItem.done} />
      )}
    </ul>
  )
}

export default ToDoList;