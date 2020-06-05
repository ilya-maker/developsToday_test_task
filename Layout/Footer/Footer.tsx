import styled from 'styled-components';
import React from 'react';
const FooterBlock = styled.footer`
  box-sizing: border-box;
  border-top: 1px solid #f2ecec;
  width: 100%;
  padding: 1rem;
  text-align: center;
`;

export const Footer = (): JSX.Element => (
  <>
    <FooterBlock>
      <p>Footer text</p>
    </FooterBlock>
  </>
);
