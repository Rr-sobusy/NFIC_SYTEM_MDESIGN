import React from "react";
import styled from "@emotion/styled";
import { PropTypes } from "prop-types";
import customFont from "../../assets/fonts/Poppins-Regular.ttf";

const StyledSelect = styled.select`
  outline: none;
  width: 13rem;
  height: auto;
  border-radius: 5px;
  font-weight: 500;
  color: #353839;
  border-color: #f0f2f5;
  font-family: ${customFont};
  padding: 8px 30px 10px 8px;
  &:focus {
    border-color: #12a7ee;
  }
`;

function RSelect({ children, onChange, value, name }) {
  return (
    <StyledSelect value={value} name={name} onChange={onChange}>
      {children}
    </StyledSelect>
  );
}

RSelect.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  value: PropTypes.number.isRequired,
};

RSelect.defaultProps = {
  name: "",
};

export default RSelect;
