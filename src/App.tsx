import { useState } from 'react';
import './App.css'
import InputPassChecker from './InputPassChecker/InputPassChecker';
import Result from './Result/Result';
import Footer from './Footer/Footer';

function App() {

  const [result, setResult] = useState(false)
  const [isPasswordCompromised, setIsPasswordCompromised ]= useState(false)
  const [recommendations, setRecommendations ]= useState([])

  return (
    <>
<main>
  <h1>Have I Been Rocked ?</h1>
  <h2> Check if your password meets security standards and hasn't been compromised*</h2>
  <InputPassChecker 
      onSetResult={setResult}
      onSetIsPasswordCompromised={setIsPasswordCompromised}
      onSetRecommendations={setRecommendations}
  />
  <Result 
    result={result}
    isPasswordCompromised={isPasswordCompromised}
    recommendations={recommendations}
  />

</main>

  <Footer/>
    </>
  )
}

export default App
