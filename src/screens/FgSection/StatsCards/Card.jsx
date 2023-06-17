import React from "react";
import styled from "@emotion/styled";
import { PropTypes } from "prop-types";

const StyledCard = styled.div`
  background-color: ${(props) => props.bgColor};
  border-radius: 8px;
  height: 200px;
  display: flex;
  flex-direction: column;
  color: #ffff;
  align-items: center;
  h6 {
    font-weight: 300;
    margin-top: 10px;
  }
  h2 {
    margin-top: 10px;
    font-weight: 500;
  }
  &:nth-child(1) {
    padding-top: 30px;
  }
`;

function Card(props) {
  const { value, label, bgColor, child } = props;
  return (
    <StyledCard bgColor={bgColor}>
      {child}
      <h2>{value}</h2>
      <h6>{label}</h6>
    </StyledCard>
  );
}

Card.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  child: PropTypes.element.isRequired,
};

export default Card;
