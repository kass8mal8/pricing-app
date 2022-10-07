import { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import '../style.css';

const App = () => {

  const [isToggled,setIsToggled] = useState(false)

  return (
    <div className="container">
      < Header isToggled = {isToggled} setIsToggled = {setIsToggled}/>
      < ProductList isToggled = {isToggled} />
    </div>
  );
}

export default App;