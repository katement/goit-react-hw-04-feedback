import React from 'react';
import { ListItem } from './Statistics.styled';

export const Statistics = ({ stats, totalStats, positiveFeedbacks }) => {
  return (
    <div>
      <ul>
        {Object.keys(stats).map(el => (
          <ListItem key={el}>
            {el}: {stats[el]}
          </ListItem>
        ))}
      </ul>
      <h2>Total: {totalStats}</h2>
      <h2>Positive feedbacks: {positiveFeedbacks}%</h2>
    </div>
  );
};
