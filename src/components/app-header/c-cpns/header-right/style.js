import styled from 'styled-components';

export const RightWrapper = styled.div`
  height: 48px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-weight: 600;
  color: ${props => props.theme.textColor.primary};

  .btns {
    display: flex;
    box-sizing: border-box;
    color: ${props =>
      props.theme.isAlpha ? '#fff' : props.theme.textColor.primary};
  }

  .btn {
    height: 18px;
    line-height: 18px;
    padding: 12px 15px;
    border-radius: 22px;
    cursor: pointer;

    &:hover {
      background-color: ${props =>
        props.theme.isAlpha ? 'rgba(255,255,255,0.1)' : '#f5f5f5'};
    }
  }
  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    color: ${props => props.theme.textColor.primary};
    // 鼠标悬停阴影
    ${props => props.theme.mixin.boxShadow}

    .panel {
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.18);
      border-radius: 10px;

      position: absolute;
      top: 54px;
      right: 0;

      .top,
      .bottom {
        padding: 10px 0;
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
