import styled from 'styled-components';

export const PicturesWrapper = styled.div`
  padding-top: 24px;
  position: relative;

  .pictures {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: 430px;
    gap: 8px;
  }

  .left,
  .right {
    width: 50%;
    height: 100%;
    overflow: hidden;

    .item {
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2);
        opacity: 0;
        transition: opacity 200ms ease;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .left {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    gap: 8px;

    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    .item {
      width: calc(50% - 4px);
      height: calc(50% - 4px);
      box-sizing: border-box;
    }
  }

  .show-all {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }

  .show-btn {
  }
`;
