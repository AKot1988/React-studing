import { FC, useState, useEffect } from 'react';

type Route = {
  path: string;
  component: FC;
}

type RouterProps = {
  routes: Route[];
}



export const navigate = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}


const Router: FC<RouterProps> = ({routes}) => {
  const [currentRoute, setCurrentRoute] = useState(routes[0].path);
  const Component = routes.find((route) => route.path === window.location.pathname)?.component;

  useEffect(() => {
    const handlePopState = () => {setCurrentRoute(window.location.pathname)};
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [setCurrentRoute]);

  return Component? <Component/> :  <h1>Десь я проїбався і такого роуту не існує</h1>

}

export default Router;