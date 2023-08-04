import React from 'react';
import { Div, Button } from './FeedbackOptions.styled';

export const Feedback = ({ onLeaveFeedback, options }) => {
  return (
    <Div>
      {options.map(el => (
        <Button key={el} onClick={() => onLeaveFeedback(el)}>
          {el}
        </Button>
      ))}
    </Div>
  );
};
