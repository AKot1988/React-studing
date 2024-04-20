import { FC, ReactNode, useState } from 'react';
import classes from "./Tabs.module.scss";

const tabsData = [
  {
    title: 'Tab 1',
    content: <div>Content for Tab 1</div>
  },
  {
    title: 'Tab 2',
    content: <div>Content for Tab 2</div>
  },
  {
    title: 'Tab 3',
    content: <div>Content for Tab 3</div>
  },
  {
    title: 'Tab 4',
    content: <div>Content for Tab 4</div>
  }
];



// Оголошення типу для кожного елементу у масиві tabsData
type TabItem = {
  title: string;
  content: ReactNode;
};

// Оголоження типу пропсів, які прийме Tabs за допомогою дженеріка. У випадку мого компоненту він прийме матив ТабАйтемів
type TabsProps<T> = {
  content: T[];
};

const Tabs: FC<TabsProps<TabItem>>  = ({content}) => {
 const[activeIndex, setActiveIndex] = useState(0)

  return(
    <div className={classes.tabsSection}>
      <div className={classes.tabsSectionTabs}>
        {content.map((tab, index) => (
          activeIndex!==index && <button key={index} onClick={()=>{setActiveIndex((prev)=>prev=index)}} className={classes.tabsSectionTabsItem}>{tab.title}</button> ||
          activeIndex===index && <button key={index} onClick={()=>{setActiveIndex((prev)=>prev=index)}} className={classes.tabsSectionTabsItemActive}>{tab.title}</button>
        ))}
      </div>
      <p className={classes.tabsSectionContent}>{content[activeIndex].content}</p>
    </div>
  )
}

export default Tabs;

// const Tabs: FC<TabsProps<TabItem>>  = ({content}) => {
//   const [activeTab, setActiveTab] = useState({title: content[0].title, content: content[0].content, tabIndex: 0})
//   // const [activeContent, setActiveContent] = useState(content[0].content)

//   return(
//     <div className={classes.tabsSection}>
//       <div className={classes.tabsSectionTabs}>
//         {content.map((tab, index) => (
//           <button key={index} onClick={()=>{setActiveTab({title: content[index].title, content: content[index].content, tabIndex: index})}} className={classes.tabsSectionTabsItem}>{tab.title}</button>
//         ))}
//       </div>
//       <p className={classes.tabsSectionContent}>{content[activeTab.tabIndex].content}</p>
//     </div>
//   )
// }

// export default Tabs;