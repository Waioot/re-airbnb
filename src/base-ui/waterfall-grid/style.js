import styled from 'styled-components';

export const WaterfallGridWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .top {
    // 固定top条在瀑布流最上面
    position: fixed;
    background-color: #fff; // 添加背景色 用于遮挡瀑布流
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    height: 60px;

    .close-btn {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    .operation {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
  }

  .container {
    flex: 1;
    width: 50%;
    padding-bottom: 20px;
    margin: 0 auto;

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
      padding: 0 80px;

      .item {
        &:nth-child(3n + 1) {
          grid-column: span 2;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
          transition: opacity 0.3s ease;

          &:hover {
            opacity: 0.9;
          }
        }
      }
    }
  }
`;
