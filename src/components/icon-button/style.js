import styled, { css } from 'styled-components';

export const IconButtonWapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px;

  // 是否开启鼠标悬停阴影
  ${props =>
    props.$hoverEffect &&
    css`
      &:hover {
        background-color: #f0f0f0; // hover时背景色稍微加深
        box-shadow: rgba(96, 96, 96, 0.12) 0px 2px 8px; // 使用更灰的阴影色调
        border-radius: 8px;
      }
    `}

  .text {
    font-size: 14px;
    font-weight: 500;
  }

  .icon {
    margin-right: 8px;
    display: flex;
    align-items: center;
  }
`;
