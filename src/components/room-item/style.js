import styled from 'styled-components';

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${props => props.itemWidth};
  padding: 8px;
  margin: 8px 0;
  cursor: pointer;

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0; // 66.66% 是图片高度占容器高度的比例 确保图片高度占满整个容器，即使图片宽度不够，也能保证占用的空间是一致的
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.textColor.primary};

    .reviews {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -3px;
    }
  }
`;
