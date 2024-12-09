import styled from 'styled-components';

export const PicturesWrapper = styled.div`
  padding-top: 24px;
  position: relative;

  .pictures {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left,
  .right {
    width: 50%;

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
    border-radius: 16px;
  }

  .right {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #000;
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
