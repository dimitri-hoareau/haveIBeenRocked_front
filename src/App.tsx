import { JSX, useState } from 'react';
import './App.css'
import InputPassChecker from './InputPassChecker/InputPassChecker';
import Result from './Result/Result';
import Footer from './Footer/Footer';

function App(): JSX.Element {

  const [result, setResult] = useState<boolean>(false);
  const [isPasswordCompromised, setIsPasswordCompromised] = useState<boolean>(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);

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
