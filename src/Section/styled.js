import styled from "styled-components";
import css from "styled-components";

export const Wrapper = styled.section`
  background-color: white;
  margin: 10px 0;
`;

export const SectionContainer = styled.div`
  background-color: white;
  margin: 10px 0;

  ${(props) =>
    props.id === "section__flex" &&
    `
      display: flex;
      flex-direction: row;

      @media (max-width: 768px) {
      flex-direction: column;
      } 
    `}
`;

export const Header = styled.h2`
  ${(props) =>
    props.headerType === "section__headerTop" &&
    `
    padding: 30px 0 0 15px;
    font-weight: bold;
    font-size: large;
    `}

  ${(props) =>
    props.headerType === "section__header" &&
    `
      padding: 15px;
      font-weight: bold;
      font-size: large;
    `}
`;
