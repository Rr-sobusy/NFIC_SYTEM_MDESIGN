import React from "react";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import { PropTypes } from "prop-types";

const Floatingbutton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  color: #ffff;
  position: fixed;
  border: none;
  right: 25px;
  bottom: 50px;
  background-color: #2880eb;
  display: none;
  cursor: pointer;
  @media (min-width: 800px) {
    display: block;
  }
`;

function Floatingbtn(props) {
  const { clickHandler } = props;
  return (
    <Floatingbutton onClick={clickHandler}>
      <AddIcon fontSize="medium" />
    </Floatingbutton>
  );
}

Floatingbtn.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Floatingbtn;
