import React from "react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled";

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 30px;
  gap: 30px;
  margin-top: ${(props) => props.marginTop}px;
  justify-content: ${(props) => props.position};
  overflow: auto;
  @media (max-width: 600px) {
    padding-right: 0px;
    column-count: ${(props) => props.columnCount};
    flex-direction: ${(props) => (props.responsive ? "row" : "column")};
  }
`;
function RGrid(props) {
  const { children, alignment, marginTop } = props;
  return (
    <StyledGrid marginTop={marginTop} position={alignment}>
      {children}
    </StyledGrid>
  );
}

RGrid.propTypes = {
  children: PropTypes.element.isRequired,
  alignment: PropTypes.string,
  marginTop: PropTypes.number,
};
RGrid.defaultProps = {
  alignment: "left",
  marginTop: 0,
};

export default RGrid;
