import styled from 'styled-components';

interface IProps {
  fontColor?: string;
  background?: string;
  spacing?: number;
}

const spacing = (times: number):string => {
  return `${4 * times}px`
}



export const Dif = styled.span`
  color: ${(props: IProps) => props.fontColor};
  font-family: monospace;
  font-weight: normal;
`;

export const Terminal = styled.section`
  width: 100%;
  max-width: 575px;
  margin: auto;
  text-align: left;

  border-radius: 6px;
  box-shadow: 0px 0px 10px 1px #808080;

  background: #1c2024;
`;

export const Top = styled.div`
  height: 20px;

  border-radius: 6px 6px 0 0;
  padding: 0 5px;
  background: #d6d1cd;

  display: flex;
  align-items: center;
`;



export const TextArea = styled.div`
  color: #fff;
  font-family: monospace;
  font-size: 18px;

  padding: 20px;

  @media (min-width: 668px) {
    padding: 30px 35px;
  }
`;