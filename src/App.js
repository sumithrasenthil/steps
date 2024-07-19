import { useState } from "react";

const messages = 
[
  'Learn react',
  'Apply for the job',
  'Invest your new income'
]

function App(){
  
  const [step, setStep] = useState(1);
  const [isEnabled, setIsEnabled] = useState(true);
  
  
  function handlePrevious(){
    if( step > 1) setStep(e => e-1);
  }
  
  function handleNext(){
    if (step <3) setStep(e => e + 1);
  }
  
  function hanldClose(){
    setIsEnabled(e => !e);
  }
  return (
    <>
      <button className="close" onClick={hanldClose}>&times;</button>
    {isEnabled && <div className="steps">
      <div className='numbers'>
        <div className={step >=1 && step <2? 'active' : ''}>1</div>
        <div className={step >=2 && step <3 ? 'active': ''}>2</div>
        <div className={step >=3 ? 'active' : ''}>3</div>
      </div>
      
      <p className="message">
        Step- {step} - {messages[step - 1]}
      </p>

      <div className="buttons">
        <button style={{backgroundColor: '#7950fe', color: '#fff'}} onClick={handlePrevious}>Previous</button>
        <button style={{backgroundColor: '#7950fe', color: '#fff'}} onClick={handleNext}>Next</button>
      </div>
      
    </div>}
    </>
  )
}

export default App;