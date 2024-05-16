import Header from './components/header.jsx';
import Footer from "./components/footer.jsx";
import Food from './components/food.jsx';
import Card from './components/card.jsx';
import Student from './components/student.jsx'
import UserGreeting from './components/userGreeting.jsx';

function App() {
 return(
  <>
    <UserGreeting isLoggedIn={true} />
  </>
 );
}

export default App
