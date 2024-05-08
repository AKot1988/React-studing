import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components";

const Layout = () => {
  return (
    <>
      <Header title={'AgroUnits'}/>
      <Outlet/>
      <Footer title={'copyright AgroUnits Kyiv 2024'}/>
    </>
  )
}

export default Layout;