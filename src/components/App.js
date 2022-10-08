import { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import '../style.css';
import Footer from './Footer';

const App = () => {

  const [isToggled,setIsToggled] = useState(false)

  return (
    <div className="container">
      < Header isToggled = {isToggled} setIsToggled = {setIsToggled}/>
      < ProductList isToggled = {isToggled} />
      <Footer />
    </div>
  );
}

export default App;