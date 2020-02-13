import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Counter = () => {
  const [counter, setCounter ] = useState(5)
  var  counterTime = setTimeout(
    () => setCounter(counter - 1),
    1000
  )

 if(counter === 0) {
   clearTimeout(counterTime)
   window.location.href="/stats"
 }
 return (
   <div>{counter}</div>
 )
}
const Button = () => {

  const [answer, setAnswer] = useState('')
  console.log(answer)

  return (
    <div className="d-flex flex-column">
      <ButtonGroup toggle className="mt-3">
        <ToggleButton type="radio" name="helsinki" defaultChecked value="1" onChange={() => setAnswer('A')}>
          Helsinki
        </ToggleButton>
        <ToggleButton type="radio" name="radio" value="2" onChange={() => setAnswer('B')}>
          Tukholma
        </ToggleButton>
        <ToggleButton type="radio" name="radio" value="3" onChange={() => setAnswer('C')}>
          Montreal
        </ToggleButton>
        <ToggleButton type="radio" name="radio" value="4" onChange={() => setAnswer('D')}>
          Timbuktu
        </ToggleButton>
      </ButtonGroup>
    </div>
  )
}
const Question = () => {
  const [question, setQuestion] = useState('Mikä on suomen pääkaupunki?')

  return (
    <div>
      <div>{question}</div>
    </div>
  )
}
const QuestionScreen = () => {
    return (
        <div>
            <Counter />
            <Question />
            <Button />
        </div>
    )
}

export default QuestionScreen