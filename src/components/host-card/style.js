import styled from 'styled-components';

export const HostCardWrapper = styled.div`
  width: 380px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  padding: 24px; // 添加统一的内边距

  .card-content {
    display: flex;
    justify-content: space-between; // 左右分布
    width: 100%;
  }

  .card-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between; // 上下分布

    margin: 0 32px;

    .card-left-avatar {
      width: 104px;
      height: 104px;
      margin-bottom: 16px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .card-left-info {
      text-align: center;

      .name {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 8px;
      }

      .desc {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        .MuiSvgIcon-root {
          font-size: 14px;
          line-height: 1;
        }

        span {
          font-size: 14px;
          line-height: 1;
        }
      }
    }
  }

  .card-right {
    display: flex;
    /* flex-direction: column;
    justify-content: space-between; // 上下分布 */
    margin-right: 32px;

    .right-list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 100%;

      .card-right-item {
        width: 100%;
        padding: 8px 0;
        border-bottom: 1px solid #ddd;
        margin-right: -24px; // 向右延伸到父容器边缘
        padding-right: 24px; // 补偿右边距

        &:last-child {
          // 移除最后一项的底部margin
          padding-bottom: 0;
          border-bottom: none;
        }
        .item-title {
          font-size: 12px;
          margin-bottom: 4px;
        }

        .item-content {
          display: flex;
          align-items: baseline;
          gap: 4px;

          .item-num {
            font-size: 22px;
            font-weight: 600;
          }

          .item-text,
          .item-icon {
            font-size: 12px;
          }
          > svg {
            width: 14px;
            height: 14px;
          }

          > .MuiSvgIcon-root {
            font-size: 22px;
            line-height: 1;
          }
        }
      }
    }
  }
`;
