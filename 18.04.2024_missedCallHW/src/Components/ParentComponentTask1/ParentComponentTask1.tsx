import { useState, useEffect, FC } from "react";
import ChildComponent from "./ChildComponent/ChildComponent.tsx";

// type ParentComponent = {
//   value: string;
// }

// const ParentComponentTask1: FC<ParentComponent> = ({value="gogi"}) => {
const ParentComponentTask1: FC = () => {
  let [value, setValue] = useState("Gogi")
  const handleClick = () => setValue((value) => {
    value = "Fofi"
    return value
  })

  return (
    <ChildComponent text={value} onclick={handleClick}/>
  )
}
export default ParentComponentTask1;