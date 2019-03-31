import styled from 'styled-components';

const ContentArea = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 2rem;
  font-weight: 300;

  @media (max-width: 932px) {
    width: calc(100% - 2rem);
    margin: 0 1rem 2rem;
  }
`;

export default ContentArea;
