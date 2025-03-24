import './App.css'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    console.log(formData)
    const myInputValue = formData.get('myInput'); 
    console.log(myInputValue);

    // fetch('/some-api', { method: form.method, body: formData });

  }

  return (
    <>

      <h1>Password Security Checker</h1>
      <h2> Check if your password meets security standards and hasn't been compromised</h2>
      <form method="post" onSubmit={handleSubmit}>
      <label>
        Champ de saisie textuel : <input name="myInput" placeholder='Enter your password'/>
      </label>
      <button type="submit">Check password</button>
    </form>
    <div className='result'>
      <h3> Your password has been compromised !</h3>
    </div>
    <div className='result'>
      <h3> Password requirements</h3>
      <p> Your password doesn't respect ANSSI recommandations</p>
      <ul>
        <li>
          At least 12 characters long
        </li>
        <li>
          Contains uppercase letters
        </li>
      </ul>
    </div>
    </>
  )
}

export default App
