import React from "react";
import styled from "@emotion/styled";
import { PropTypes } from "prop-types";

const StyledSelect = styled.select`
  outline: none;
  width: 13rem;
  height: auto;
  border-radius: 5px;
  border-color: #f0f2f5;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 5px 30px 7px 8px;
  &:focus {
    border-color: #12a7ee;
  }
`;

function RSelect({ children }) {
  return <StyledSelect>{children}</StyledSelect>;
}

RSelect.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RSelect;
