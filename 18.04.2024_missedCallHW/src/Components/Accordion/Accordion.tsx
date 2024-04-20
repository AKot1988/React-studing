import { useState, useEffect, FC } from "react";
import classes from "./Accordion.module.scss"

type AccordionProps = {
  title: string;
  description: string[];
}

// const ParentComponentTask1: FC<ParentComponent> = ({value="gogi"}) => {
const Accordion: FC<AccordionProps> = ({title, description}) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    // setIsOpen(!isOpen);
    setIsOpen((isOpen) => !isOpen);
  }

  return (
      <div className={classes.accordion}>
        <button onClick={handleClick} className={classes.accordionButton}>{title}</button>
        {isOpen && <ul className={classes.accordionContent}>{description.map((item, index) => <li key={index} className={classes.accordionContentItem}>{item}</li>)}</ul>}
      </div>
    )
}
export default Accordion;