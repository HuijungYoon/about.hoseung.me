import React, { useEffect } from "react";
import styled from "styled-components";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { CgClose } from "react-icons/cg";

import { Color } from "../../constants/Color";

import { TransitionContainer } from "../Layout/TransitionContainer";

import { ModalProps } from "../../contexts/Modal";

import { hexToRgb } from "../../helpers/hexToRgb";

export const ModalContainer: React.FC<ModalProps> = ({ close, children }) => {
  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", closeModal);
    disableBodyScroll(document.body);

    return () => {
      window.removeEventListener("keydown", closeModal);
      enableBodyScroll(document.body);
    };
  }, []);

  return (
    <Container>
      <TransitionContainer
        className="modal"
        effect="fadeInToUp"
        intersecting={0}
        duration={0.5}
      >
        <div className="header">
          <button onClick={close}>
            <CgClose />
          </button>
        </div>
        {children}
      </TransitionContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 2;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(${hexToRgb(Color.Black)}, 0.5);

  > .modal {
    border-radius: 3px;

    background-color: ${Color.WhiteGrey};

    overflow: hidden;

    > .header {
      padding-top: 10px;

      display: flex;
      justify-content: flex-end;

      > button {
        width: 20px;
        height: 20px;

        padding: 0;
        margin-right: 16px;

        border: 0;

        background-color: transparent;

        cursor: pointer;

        outline: none;

        > svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
