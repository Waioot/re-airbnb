import styled from 'styled-components';

export const DetailRoomWapper = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: minmax(auto, 655px) 1fr;
  gap: 90px;
  border-bottom: 1px solid #ddd;
  .room-left {
    width: 100%;
    display: flex;
    flex-direction: column;

    .room-header {
      padding: 24px 0;
      .room-location {
        font-size: 22px;
        color: #484848;
      }
      .room-about {
        margin-top: 4px;
        font-size: 16px;
        font-weight: 400;
        color: #222;
      }

      .room-rank {
        display: flex;
        align-items: center;
        margin-top: 4px;
        gap: 4px;
        > span {
          display: inline-block;
        }
      }
      .comment {
        text-decoration: underline;
      }
    }

    .room-host {
      display: flex;
      align-items: center;
      gap: 24px;
      border-bottom: 1px solid #ddd;
      padding: 24px 0;
      .room-host-avatar img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .room-host-info {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .room-host-name {
          font-size: 16px;
          font-weight: 500;
        }

        .room-host-message {
          font-size: 14px;
          color: #767676;
        }
      }
    }

    .room-feature-list {
      display: flex;
      padding: 32px 0;
      flex-direction: column;
      gap: 24px;
      border-bottom: 1px solid #ddd;

      .room-feature-item {
        height: 44px;
        display: flex;
        align-items: center;
        column-gap: 24px;

        .room-feature-item-icon {
          width: 40px;
          height: 100%;
          display: flex;
          justify-content: center;
        }

        .room-feature-item-content {
          display: flex;
          flex-direction: column;
          gap: 4px;

          .room-feature-item-title h3 {
            font-size: 16px;
            font-weight: 500;
            color: #222;
          }

          .room-feature-item-desc {
            font-size: 14px;
            color: #6a6a6a;
            font-weight: 400;
          }
        }
      }
    }

    .room-desc-translate {
      padding-top: 32px;

      .room-desc-translate-content {
        display: flex;
        align-items: center;
        background-color: #f7f7f7;
        padding: 16px;
        border-radius: 12px;
        font-size: 16px;
        color: #222;

        .show-original {
          color: #222;
          cursor: pointer;
          text-decoration: underline;
          border: none;
        }
      }
    }

    .room-translated-info {
      padding-top: 32px;
      padding-bottom: 48px;

      border-bottom: 1px solid #ddd;
      line-height: 1.5rem;
      font-size: 16px;
      color: #222;
      > span {
        word-break: break-word;
        white-space: pre-wrap;
      }

      .translated-content-title {
        font-weight: 500;
        margin-bottom: 16px;
      }
    }

    .room-host-card {
      padding-top: 48px;
      border-bottom: 1px solid #ddd;

      .card-title {
        > h2 {
          font-size: 22px;
          font-weight: 500;
          color: #222;
        }
      }

      .card-content {
        margin-top: 24px;
      }
    }

    .room-date-picker {
      padding: 48px 0;
    }
  }

  .room-right {
    width: 100%;
    position: sticky;
    top: 80px;
    height: fit-content;
  }

  .hot-tips {
    padding: 24px;
    border: 1px solid #ddd;
    border-radius: 12px;
    margin-top: 24px;

    display: flex;
    align-items: center;
    gap: 24px;

    .hot-tips-item-title {
      font-size: 16px;
      font-weight: 500;
      color: #222;
    }

    .hot-tips-item-desc {
      margin-top: 4px;
      font-size: 14px;
      color: #6a6a6a;
      font-weight: 400;
    }
  }

  .report-room {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 16px;
    color: #6a6a6a;
    margin-bottom: 48px;

    .report-room-desc {
      text-decoration: underline;
    }
  }
`;
