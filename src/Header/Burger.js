import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { css, jsx } from "@emotion/react";
import colors from "../colors";
import { setOpen } from "../store/slices/tabs";

const width = 21;

const Burger = ({ children, ...props }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.tabs.isOpen);

  return (
    <div
      onClick={(e) => {
        window.scrollTo(0, 0);
        dispatch(setOpen(!isOpen));
      }}
      css={css`
        position: absolute;
        top: 16px;
        left: 18px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: ${width}px;
        height: ${width}px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 3;

        &:focus {
          outline: none;
        }

        div {
          width: ${width}px;
          height: 3px;
          background: ${colors.black};
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;

          :first-of-type {
            transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
          }

          :nth-of-type(2) {
            opacity: ${isOpen ? "0" : "1"};
            transform: ${isOpen ? "translateX(20px)" : "translateX(0)"};
          }

          :nth-of-type(3) {
            transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
          }
        }
      `}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default Burger;
