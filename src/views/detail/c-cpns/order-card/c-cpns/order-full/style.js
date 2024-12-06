import styled from "styled-components";

export const OrderFullWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .order-full {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 5px;
      row-gap: 20px;
      width: 100%;
      font-weight: 500;
    }

    .order-title {
      padding-top: 10px;
      padding-bottom: 6px;
      font-size: 22px;
    }

    .order-button {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      background-color: #b0b0b0;
      border-radius: 4px;
      padding: 14px 24px;
      color: #fff;
      cursor: pointer;
    }

`;
