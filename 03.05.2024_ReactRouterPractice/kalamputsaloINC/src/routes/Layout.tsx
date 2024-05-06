import {Outlet} from 'react-router-dom'
import { Footer, Header } from '../components'

const Layout = () => {
  return (
    <>
    <Header title = {'Це хердер, який лежить у лейауті'}/>
    <Outlet></Outlet>
    <Footer title = {'Це Футер, який лежить у лейауті'}/>
    </>
  )
}
export default Layout