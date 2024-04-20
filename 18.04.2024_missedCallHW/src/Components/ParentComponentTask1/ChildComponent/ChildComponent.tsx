import { FC } from "react";

type ChildComponentProps = {
  text: string;
  onclick?: () => void;
}

const ChildComponent: FC<ChildComponentProps> = ({text, onclick}) => {
  return (
    <>
      <h1>{text}</h1>
      <button onClick={onclick}>Change title</button>
    </>
  )
}


export default ChildComponent;