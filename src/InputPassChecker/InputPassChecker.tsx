import { JSX } from 'react';
import './InputPassChecker.css'

interface InputPassCheckerProps {
  onSetResult: (value: boolean) => void;
  onSetRecommendations: (value: string[]) => void;
  onSetIsPasswordCompromised: (value: boolean) => void;
}

interface CheckPasswordResponse {
  compromised: boolean;
  recommendations: string[];
}

function InputPassChecker({ onSetResult, onSetRecommendations, onSetIsPasswordCompromised }: InputPassCheckerProps): JSX.Element {

  const displayResult = (data : CheckPasswordResponse) : void => {
    onSetResult(true)
    onSetIsPasswordCompromised(data.compromised)
    onSetRecommendations(data.recommendations)
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const password = formData.get('password');


    try {
      const response = await fetch('http://localhost:8000/api/check-password/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
      });
  
      if (response.ok) {
        const data : CheckPasswordResponse = await response.json();
        displayResult(data)

      } else {
        console.error('Error for the request', response.status);
      }
    } catch (error) {
      console.error('Error : ', error);
    }
  }


  return (
    <>
        <form method="post" onSubmit={handleSubmit}>
          <input name="password" placeholder='Enter your password'/>
          <button type="submit">Check password</button>
        </form>
    </>

  )
}

export default InputPassChecker



