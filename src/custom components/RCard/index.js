import React from "react";
import styled from "@emotion/styled";
import { PropTypes } from "prop-types";

const StyledContainer = styled.div`
  width: 100%;
`;

function RCard(props) {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
}

RCard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RCard;
