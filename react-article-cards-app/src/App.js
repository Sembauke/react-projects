import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
function App() {
  return (
    <div> 
       <Card imageUrl={"https://images.pexels.com/photos/1030875/pexels-photo-1030875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} title={"Hypnotherapy For Motivation Getting The Drive Back"} author={"Dorothy Parks"} authorLink={"Google.com"}/>
       <Card2 imageUrl={"https://images.pexels.com/photos/1030875/pexels-photo-1030875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} title={"Fire Up Your Motivation"}  author={"Dorothy Parks"} authorLink={"Google.com"}/>
       <Card3 
       imageUrl1={"https://images.unsplash.com/photo-1574558452828-4e848c0613a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} 
       imageUrl2={"https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}
       imageUrl3={"https://images.pexels.com/photos/1030875/pexels-photo-1030875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} 
       title={"Put Wings On Your Dreams"} 
       author={"Dorothy Parks"} 
       authorLink={"Google.com"}
       />
    </div>
   
    
  );
}

export default App;
