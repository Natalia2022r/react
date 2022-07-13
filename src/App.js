import Component from './post';
import './App.css';

function App() {

   const ANAKIN_IMAGE = "https://i.pinimg.com/originals/5a/ad/b3/5aadb3ad144720b7fabb46c07f3b6d1c.jpg";
   const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
   const post = [
     {
       name: "Anakin Skywalker",
       photo: ANAKIN_IMAGE,
       nickname: "@dart_vader",
       content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
       image: RAY_IMAGE,
       date: "26 февр.",
     }
   ]
   return (
     <div className='App'>
       <Component data={post[0]}></Component>
     </div>
   );
 }
 
 export default App;
