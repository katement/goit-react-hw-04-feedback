import React from 'react';
import { SectionDiv } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionDiv>
      <h2>{title}</h2>
      {children}
    </SectionDiv>
  );
};

export default Section;
