import React from 'react';
import Twitter from '../../assets/svg/twitter.svg';
import Linkedin from '../../assets/svg/linkedin.svg';

export default function Footer(props) {
  const { klass } = props;

  return (
    <footer className={klass}>
      <div>
        <a
          href='http://twitter.com/iamjpg'
          target='_blank'
          rel='noreferrer'
          className='nomarker'
        >
          <Twitter width={24} fill='#ccc' />
        </a>
      </div>
      <div>
        <a
          href='https://www.linkedin.com/in/given/'
          target='_blank'
          rel='noreferrer'
          className='nomarker'
        >
          <Linkedin width={24} fill='#ccc' />
        </a>
      </div>
    </footer>
  );
}
