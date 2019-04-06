import styled from 'styled-components';

const ContentArea = styled.div`
  width: 100%;
  padding: 2rem;
  //max-width: 900px;
  margin: 0 auto;
  font-weight: 300;

  @media (max-width: 932px) {
    width: calc(100% - 2rem);
    margin: 0 1rem 2rem;
  }
`;

export default ContentArea;
