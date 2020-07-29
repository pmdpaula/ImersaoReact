import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  background: black url('../../assets/img-noise-361x370.png?background=0d0d0d00&noise=767877&density=20&opacity=10') repeat;
  border-top: 2px solid var(--primary);
  box-shadow: 0px -2px 6px 0px rgba(54,220,184,0.85);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
