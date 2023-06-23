import React from "react";
import styled from "@emotion/styled";
import { PropTypes } from "prop-types";

const StyledInput = styled.input`
  width: 6rem;
  outline: none;
  border-color: #f0f2f5;
  padding: 8px 5px 8px 8px;
  border-radius: 5px;
  &:focus {
    border-color: #12a7ee;
  }
`;

function RInput({ children, type, onChange, name, value }) {
  return (
    <StyledInput value={value} name={name} onChange={onChange} type={type}>
      {children}
    </StyledInput>
  );
}

RInput.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  value: PropTypes.number.isRequired,
};

RInput.defaultProps = {
  type: "string",
  name: "",
};

export default RInput;
