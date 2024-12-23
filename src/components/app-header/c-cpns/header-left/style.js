import styled from 'styled-components';

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${props => (props.theme.isAlpha ? '#fff' : props.theme.color.primary)};

  .logo {
    height: 48px;
    cursor: pointer;
  }
`;
