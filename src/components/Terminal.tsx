import {
  Dif,
  Terminal as TerminalContainer,
  Top,
  TextArea,
} from '../styles/terminal-stylesheet';
import { RedDot, YellowDot, GreenDot } from '../styles/stylesheet';

export const Terminal: React.FC = () => {
  return (
    <TerminalContainer>
      <Top>
        <RedDot size="10px" margin="0 4px" boxShadow="1px 1px" />
        <YellowDot size="10px" margin="0 4px" />
        <GreenDot size="10px" margin="0 4px" />
      </Top>
      <TextArea>
        <Dif fontColor="#d9a1f0">const</Dif> <Dif fontColor="#fa6363">info</Dif>{' '}
        <Dif fontColor="#d9a1f0">=</Dif> <Dif fontColor="#ffdf37">{'{'}</Dif>
        <br />
        name: <Dif fontColor="#8ed6df">"</Dif>
        <Dif fontColor="#aae478">Christina Persson</Dif>
        <Dif fontColor="#8ed6df">"</Dif>
        <Dif fontColor="#8ed6df">,</Dif>
        <br />
        age: <Dif fontColor="orange">NaN</Dif>
        <Dif fontColor="#8ed6df">,</Dif>
        <br />
        dreamJob: <Dif fontColor="#8ed6df">"</Dif>
        <Dif fontColor="#aae478">
          developing software for cars{' '}
          <span role="img" aria-label="Car driving">
            🚙💨
          </span>
        </Dif>
        <Dif fontColor="#8ed6df">"</Dif>
        <Dif fontColor="#8ed6df">,</Dif>
        <br />
        dogLover: <Dif fontColor="orange">true</Dif>
        <Dif fontColor="#8ed6df">,</Dif>
        <br />
        description: <Dif fontColor="#8ed6df">"</Dif>
        <Dif fontColor="#aae478">
          Programming gives me the chance to be creative, and as with any other
          creative field like music or art doing it 9-5 is not enough. I always
          want to learn more. When I get to discuss with others I learn the
          most, being surrounded by a team is the best way for me to understand.
          Talking, explaining and listening are things I value highly. When I
          code, no matter how tough the obstacle may be I don’t give up. The
          ‘not giving up part’ in me is something that has a tendency to spread
          to others around me as well.
          <Dif fontColor="#8ed6df">"</Dif>
        </Dif>
        <br />
        <Dif fontColor="#ffdf37">{'}'}</Dif>
        <br />
      </TextArea>
    </TerminalContainer>
  );
};

// <TerminalContainer>
//   <h2>Technical</h2>
//   <br />
//   <p>Javascript, Typescript</p>
//   <p>Sass, Styled-components</p>
//   <p>REST-api, graphql</p>
//   <p>Vue + Vuex, React + Redux</p>
//   <br />
//   <p>unit testing</p>
//   <p>jest</p>
//   <p>vue test utils</p>
//   <p>react testing library</p>
//   <br />
//   <p>Have some knowledge with</p>
//   <p>java</p>
//   <p>sql</p>
// </TerminalContainer>
