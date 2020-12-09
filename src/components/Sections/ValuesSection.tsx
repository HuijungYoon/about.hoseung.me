import React from "react";
import styled from "styled-components";

import { TransitionContainer } from "../Layout/TransitionContainer";
import { ValuesCard } from "../Values/ValuesCard";

import { IValues } from "../../interfaces/Values";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";

export const ValuesSection: React.FC<{ values: IValues[] }> = ({ values }) => {
  return (
    <Container>
      <summary>
        <TransitionContainer
          className="topic"
          effect="fadeInToDown"
          intersecting={1}
          translateY={50}
        >
          WHO AM I
        </TransitionContainer>
        <div className="info">
          <TransitionContainer
            className="title"
            effect="fadeInToDown"
            intersecting={0.8}
            delay={0.2}
            translateY={50}
          >
            저는 이런 사람입니다.
          </TransitionContainer>
        </div>
      </summary>
      <aside>
        {values.map((props, index) => (
          <TransitionContainer
            key={index}
            className="card"
            effect="fadeInToDown"
            intersecting={0.7}
            delay={0.1 * index}
          >
            <ValuesCard key={index} page={index + 1} {...props} />
          </TransitionContainer>
        ))}
      </aside>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 10% 13%;

  background-color: ${Color.WhiteGrey};

  > summary {
    margin-right: 8%;

    > .topic {
      margin-bottom: 20px;

      font-size: 0.85rem;
      font-weight: 700;

      color: ${Color.DarkMint};
    }

    > .info {
      > .title {
        font-size: 1.35rem;
        font-weight: 700;
        word-break: keep-all;

        color: ${Color.Black};
      }
    }
  }

  > aside {
    width: 500px;
    > card {
      width: 100%;
    }
  }

  @media (max-width: ${Device.Tablet}px) {
    > aside {
      width: 300px;
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    > summary {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-right: 0;
      margin-bottom: 50px;

      > .topic {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    > aside {
      width: 100%;
    }
  }
`;
