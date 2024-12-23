import styled from 'styled-components';

export const SectionFooterWrapper = styled.div`
  display: flex;

  align-items: center;
  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    color: ${props => props.color};
    &:hover {
      text-decoration: underline;
    }
    .text {
      margin-right: 6px;
    }
  }
`;
