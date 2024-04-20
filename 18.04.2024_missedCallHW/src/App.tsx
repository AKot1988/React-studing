import { useState } from 'react'
import './App.css'
import ParentComponentTask1 from './Components/ParentComponentTask1/ParentComponentTask1'
import Accordion from './Components/Accordion/Accordion.tsx'
import Tabs from './Components/Tabs/Tabs.tsx'

const accordionData = {
  title: "Here is accordion component. Click to see more details.",
  description: [
    "БуЙ заблукав у супермаркеті і не знав, що обрати: корм для кішок чи зайців.",
    "Зателефонуй БуЙу, він просив йому нічого не відповідати!", 
    "БуЙ, розвішай штори, сонце горить, як піч!",
    "БуЙ вирішив стати піаністом, але його перша композиція звучала як катапультний вибух",
    "БуЙ прочитав книгу про дієту, але вирішив, що йому простіше просто збільшити ширину дверей."
  ]
}

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

function App() {
  return (
    <>
      <Tabs content = {tabsData}/>
      <ParentComponentTask1/>
      <Accordion title = {accordionData.title} description={accordionData.description}/>
    </>
  )
}

export default App
