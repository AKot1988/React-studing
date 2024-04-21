import Header from './Components/Header/Header'
import classes from './App.module.scss'
import headerClases from './Components/Header/Header.module.scss'

function App() {
  const userPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpNcsQ5-oK1LYmLNvF94sa_e_qEHrWyrK7tpwJOmzzw&s"
  const logo = "https://secrets.tinkoff.ru/api/image/?src=https%253A%252F%252Fpublic-static.tinkoffjournal.ru%252Fbusiness-secrets%252Fuploads%252F2023%252F04%252FVTRf8XTF-3.png&w=1360&h=900"
  const menuItems = [
    {text: "Home", id: "home", type: "text", className: `${headerClases.headerMenuItem}`},
    {text: "Contact", id: "contact", type: "text", className: `${headerClases.headerMenuItem}`},
    {text: "About", id: "about", type: "text", className: `${headerClases.headerMenuItem}`},
    {text: "Comments", id: "comments", type: "text", className: `${headerClases.headerMenuItem}`},
  ]
  return (
    <>
      <Header logoURL={logo} userPhoto = {userPhoto} menu={menuItems} searchPlaceholder="Type to search"/>
    </>
  )
}

export default App
