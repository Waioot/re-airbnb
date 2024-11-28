import styled from 'styled-components';

export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  background-color: #333;

  .top {
    position: relative;
    height: 86px;
    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      /** 动画样式 */
      .pic-enter {
        transform: translateX(${props => (props.isNext ? '100%' : '-100%')});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 0.2s linear;
      }
      .pic-exit {
        transform: translateX(0);
        opacity: 1;
      }
      .pic-exit-active {
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.2s linear;
      }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }
      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
