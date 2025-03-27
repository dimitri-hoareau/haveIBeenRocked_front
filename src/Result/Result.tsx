import './Result.css'

function Result({result, isPasswordCompromised, recommendations}) {


  let span = ""
  let advice = "";

  if (isPasswordCompromised && recommendations.length > 0) {
    span = "And"
    advice = ", Nothing is right! It is advisable to change and strengthen your password.";
  } else if (isPasswordCompromised && recommendations.length === 0) {
    span = "But"
    advice = ". It might still be wise to change your password anyway.";
  } else if (!isPasswordCompromised && recommendations.length > 0) {
    span = "But"
    advice = ". You should consider strengthening it.";
  } else if (!isPasswordCompromised && recommendations.length === 0) {
    span = "And"
    advice = ", congratulations! Your password is safe, but remain vigilant.";
  }
  return (

    <>
    {result &&
        <>
        {isPasswordCompromised ? 
        <h3 className='compromised'> Your password has been compromised !</h3>
        :
        <h3 className='uncompromised'> Your password does not appear in the compromised database.</h3>
        }
        
        {recommendations.length ?
        <>
        <p className='anssi-txt'><span className='anssi-txt'>{span}</span> your password doesn't respect ANSSI recommendations<span className='anssi-txt'>{advice}</span></p>
        <ul>
        {recommendations.map((recommandation, index) => 
            <li key={index}>{recommandation}</li>
        )}
        </ul>
        </>
        :
        <p className='anssi-txt'><span className='anssi-txt'>{span}</span> your password respect ANSSI recommandations<span className='anssi-txt'>{advice}</span></p>
        }
        
        </>
        }
    </>





  )
}

export default Result
