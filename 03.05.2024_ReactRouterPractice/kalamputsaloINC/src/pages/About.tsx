import { ROUTES_NAMES } from '../routes/routesNames'
import { NavLink } from 'react-router-dom';
const About = () => {
  return (
    <>
        <p>Класна Кампанія, дуже красіво, пахне харашо</p>
        <NavLink to={ROUTES_NAMES.HOME}> HOME </NavLink>
    </>
  )
}

export default About