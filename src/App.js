import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [companion, setCompanion] = useState('default');
  const [lever, setLever] = useState();
  const [inPit, setInPit] = useState();

  useEffect(() => {
    if (lever === 'wrong' && companion === 'Kronk') {
      setInPit('Yzma')
    }
    else {
      setInPit('')
    }
  },[lever, companion])

  const handleLever = e => setLever(e.target.value)
  return (
    <div className="App">
      <select data-cy='companion' value={companion} onChange={e => setCompanion(e.target.value)}>
        <option value='default' disabled>Who's with you?</option>
        <option value='Llama'>Llama</option>
        <option value='Kronk'>Kronk</option>
      </select>
      {companion !== 'default' &&
      <div>
        <input type="radio" id="right-lever" name="lever" value='right' onChange={handleLever}/>
        <label for="right-lever">The RIGHT lever</label>
        <input type="radio" id="wrong-lever" name="lever" value='wrong' onChange={handleLever}/>
        <label for="wrong-lever">The WRONG lever</label>
      </div>}
      <div id='pit-wrapper'>
        ALLIGATOR PIT
        <div id='alligator-pit' data-cy='alligatorPit'>
          {inPit}
        </div>
      </div>
    </div>
  );
}

export default App;
