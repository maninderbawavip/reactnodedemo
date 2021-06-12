import './App.css'
import { useEffect, useState } from 'react';

//network request



function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    // this function will get executed when my component is rendered

    // call the backend to get the data
    fetch("http://localhost:5000/names").then(response => {
      return response.json()
    }).then(data => {
      console.log(data)
      setData(data)
    })

  }, [])


  return (
    <div className="App">
      <header className="App-header">
        {
          data.map((name) => {
            return <div className="myName">{name}</div>
          })
        }
      </header>
    </div>
  );
}

export default App;
