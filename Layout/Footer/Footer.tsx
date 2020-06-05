import styled from 'styled-components';

const FooterBlock = styled.footer`
    box-sizing: border-box;
    border-top: 1px solid #F2ECEC;
    width: 100%;
    padding: 1rem;
    text-align: center;
`;

export const Footer = () => {
  return (
    <>
      <FooterBlock>
        <p>Footer text</p>
      </FooterBlock>
    </>
  )
}