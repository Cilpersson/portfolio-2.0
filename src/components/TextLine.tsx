import React from 'react';
import { Dif } from '../styles/terminal-stylesheet';

interface Props {
  text: string;
  fontColor: string;
  space?: boolean;
}

export const TextLine: React.FC<Props> = ({ text, fontColor, space }) => {
  return (
    <Dif fontColor={fontColor}>
      {text}
      {space ? ' ' : ''}
    </Dif>
  );
};
