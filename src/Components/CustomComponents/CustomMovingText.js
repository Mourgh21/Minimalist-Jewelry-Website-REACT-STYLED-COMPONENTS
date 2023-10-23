import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%); 
  }
`;


const MovingTextContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  margin-top: 60px;





`;

const MovingText = styled.div`
  animation: ${moveRight} 50s linear infinite;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
 white-space: nowrap;

`;

const Word = styled.span`
  margin-right: 70px; 
`;

const Span = styled.span`
    font-size: 40px;
`;



const MovingTextComponent = () => {
  return (
    <MovingTextContainer>
		  <MovingText>
		<Word><Span>LUSTER</Span></Word>
        <Word>EVERYDAY</Word>
        <Word>LUXURY</Word>
		<Word><Span>LUSTER</Span></Word>
        <Word>EVERYDAY</Word>
        <Word>LUXURY</Word>
		<Word><Span>LUSTER</Span></Word>
        <Word>EVERYDAY</Word>
        <Word>LUXURY</Word>
		<Word><Span>LUSTER</Span></Word>
        <Word>EVERYDAY</Word>
        <Word>LUXURY</Word>
		<Word><Span>LUSTER</Span></Word>
        <Word>EVERYDAY</Word>
        <Word>LUXURY</Word>
    
      </MovingText>
			  

    </MovingTextContainer>
  );
};

export default MovingTextComponent;
