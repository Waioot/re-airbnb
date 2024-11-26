import styled from 'styled-components';

export const HomeWrapper = styled.div`
  // 直接子元素中名为 content 的类
  > .content {
    width: 1032px;
    margin: 0 auto;

    .good-price {
      margin-top: 30px;
    }
  }
`;
