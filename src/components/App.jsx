import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import ListStatistics from './ListStatistics/ListStatistics';
import Notification from './Notification/Notification';
import css from './App.module.css';


export  function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const clickOnButton = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default: console.error("error case option")
  }
}
  
const countTotalFeedback = () => {return good + neutral + bad};

  const countPositiveFeedbackPercentage = () => {
const result = Math.ceil(((good - bad + neutral) / countTotalFeedback()) * 100).toFixed(0)
if (result < 0) { return 0 };
return result;
};

  
const onLeaveFeedback = e => {
  const option = e.target.textContent;
  clickOnButton(option)
};

  return ( 
      <div className={css.app}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={{good, neutral, bad}}
            onLeaveFeedback={onLeaveFeedback}
            />
        </Section>
        <Section  title={'Statistics'}>
          {countTotalFeedback() > 0 ?(
            <ListStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage()}
            total={countTotalFeedback()}
            />
          ): (<Notification message="There is no feedback"/>)}
        </Section>
      </div>
    )
}