import { ROUTES_NAMES } from '../routes/routesNames'
import { NavLink } from 'react-router-dom';
const Team = () => {
  return (
    <>
        <p>Наша невїбенна команда:</p>
        <NavLink to={ROUTES_NAMES.HOME}> HOME </NavLink>
    </>
  )
}

export default Team