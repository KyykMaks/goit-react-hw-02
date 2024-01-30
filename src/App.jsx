import { useEffect, useState } from 'react'
import { Description } from './Components/Description/Description.jsx'
import { Options } from './Components/Options/Options.jsx'
import { Feedback } from './Components/Feedback/Feedback.jsx'
import { Notification } from './Components/Notification/Notification.jsx'


const getInitialValue = () => {
  const savedValues = window.localStorage.getItem('save-values');
  if(savedValues !== null){
    return JSON.parse(savedValues);
  }
  return {
    good: 0,
    neutral: 0,
    bad:0,
  }
};

const getInitialClick = () => {
  const savedClicks = window.localStorage.getItem('save-click');
  if(savedClicks !== null){
    return JSON.parse(savedClicks);
  }
  return {
    good: 0,
    neutral: 0,
    bad:0,
  }
}


export const App = () => {

  const [values, setValues] = useState(getInitialValue);
  const [clicks, setClicks] = useState(getInitialClick);


  const onLeaveFeedback = (option) => {
    setValues({
      ...values,
      [option]: values[option] + 1
    });
    setClicks(clicks + 1)
  };

  const onReset = () =>{
    setValues({
      ...values,
      good: 0,
      neutral: 0,
      bad: 0,
    });
    setClicks(0);
  };

  useEffect(()=> {
    window.localStorage.setItem('save-values', JSON.stringify(values));
    window.localStorage.setItem('save-click', clicks)
  },[values,clicks]);

  const isHidden = clicks === 0;

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedback = Math.round(((values.good + values.neutral)/totalFeedback)*100);
  return (
    <div>
      <Description />
      <Options onUpdate={onLeaveFeedback} isHidden={isHidden} onReset={onReset} />
      {
        isHidden ? <Notification  /> : <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/> 
      }
    </div>
  );
};