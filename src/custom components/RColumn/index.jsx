import React from "react";
import styled from "@emotion/styled";
import { PropTypes } from "prop-types";

const StyledColumn = styled.div`
  flex: 1;
`;

function RColumn(props) {
  const { children } = props;
  return <StyledColumn>{children}</StyledColumn>;
}

RColumn.propTypes = {
  children: PropTypes.element.isRequired,
};
export default RColumn;
