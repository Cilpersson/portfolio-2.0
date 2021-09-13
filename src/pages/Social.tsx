import React from 'react';
import { Linkedin } from '../components/Linkedin';
import { Mail } from '../components/Mail';
import { Github } from '../components/Github';
import { SocialPage, SocialMediaButtons, A } from '../styles/stylesheet';

export const Social = () => {
  return (
    <SocialPage>
      <h2>Social</h2>
      <SocialMediaButtons>
        <A
          href="mailto:hello@christinapersson.se?subject=Let's do cool stuff together!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
          <p>email</p>
        </A>
        <A
          href="https://www.linkedin.com/in/christina-persson-b3231ba2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
          <p>linkedin</p>
        </A>
        <A
          href="https://github.com/Cilpersson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>github</p>
        </A>
      </SocialMediaButtons>
    </SocialPage>
  );
};
