import { useState } from 'react'
import gitLogo from './assets/git.svg'
import linkedinLogo from './assets/linkedin.svg'
import './App.css';
import Spline from '@splinetool/react-spline';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <link rel="icon" type="image/png" href="/favicon.ico"></link>
     <title>Lukas Skalka</title>
    <div id="rectangle">
      <a href="https://guthib.com/?source=techstories.org" target="_blank"></a>
    </div>
      
    <div className="spline-scene">
    <Spline scene="https://prod.spline.design/ShLJmPeWQin9C60x/scene.splinecode" />
    </div>
      <div>
        <a href="https://www.linkedin.com/in/lukas-skalka-828bb2273/" target="_blank">
          <img src={linkedinLogo} className="logo" alt="Vite logo" />
        </a>
      
      
        <a href="https://github.com/Diptorr" target="_blank">
          <img src={gitLogo} className="logo git" alt="React logo" />
        </a>
      </div>
      <div className="forground">
      <h1 className="Name">Lukas Skalka</h1>
        <p className="enployment">
        Professionally Unemployed
        </p>
      <p className="read-the-docs">
       
      </p>
      </div>
    </>
  )
}

export default App
