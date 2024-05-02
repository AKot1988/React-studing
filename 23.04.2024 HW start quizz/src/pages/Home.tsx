import {navigate, Button} from '../components/'

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Button text = "Start quizz" onClick={()=>navigate('/quizz')}></Button>
    </div>
  )
}

export default Home