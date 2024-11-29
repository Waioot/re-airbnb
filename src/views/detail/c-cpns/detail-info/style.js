import styled from 'styled-components';

export const RoomDetailWapper = styled.div`
  padding-top: 24px;
  .room-detail {
    display: flex;
    justify-content: space-between;

    .title {
      display: flex;
      align-items: center;
      .title-text {
        font-size: 26px;
        font-weight: 500;
      }

      .title-icon {
        margin-right: 8px;
      }
    }

    .actions {
      display: flex;
      gap: 20px;

      /* .action-item {
        display: flex;
        align-items: center;

        cursor: pointer;

        .icon {
          display: flex;
          align-items: center;
        }

        .text {
          margin-left: 8px;
          font-size: 14px;
          line-height: 1;
          text-decoration: underline;
        }
      } */
    }
  }
`;
