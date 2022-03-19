import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name="Noakhali" special="bivag"></District>
      <District name="Bramonbaria" special="joda akbor"></District>
      <District name="Cumilla" special="Moyna Moti"></District>
      <District name="Jamalpur" special="Sugarmil"></District>
    </div>
  );
}

function LoadPost() {
  const [posts, setPost] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data));
  }, [])
      
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title}
        body={post.body}></Post>)
      }
    </div>
  )
}
function Post(props) {
  return(
    <div style={{backgroundColor: 'lightblue', margin: '20px', border: '2px solid blue', padding: '10px'}}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'green',
  margin: '20px',
  padding: '10px',
  borderRadius: '20px'
}
function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
