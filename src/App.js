import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input id="text" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      {submitted ? <h1 id="submitted">Form Submitted</h1>: null}
    </div>
  );
}

export default App;