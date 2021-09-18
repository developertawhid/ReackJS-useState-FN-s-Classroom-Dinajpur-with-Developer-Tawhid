import './App.css';
import ClassCard from './ClassCard';
import data from './data';

function App() {

  
 
  
  const array = data.map((item) => {

    return ( <ClassCard title={item.title} img={item.img}  desc={item.desc} key={Math.random()} /> )

  })

  return  array
}

export default App;
