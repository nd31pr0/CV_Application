import './App.css'
import {useState} from 'react'
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education.jsx';
import Practical from './components/Practical.jsx';
function App() {

  const [generalInfo, setGeneralInfo] = useState({name:'', email:'', phone:''})
  return (
    <>
      <h1>CV Builder</h1>
      <Education />
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      
      <h2>Education Section</h2>
      <Practical />
    </>
  )
}

export default App
