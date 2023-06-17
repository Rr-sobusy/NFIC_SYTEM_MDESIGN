import React from "react";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import dialogStore from "../contexts/dialogStore";

const Floatingbutton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  position: fixed;
  border: none;
  right: 56px;
  bottom: 50px;
  background-color: #2880eb;
  display: none;
  cursor: pointer;
  @media (min-width: 800px) {
    display: block;
  }
`;

function Floatingbtn() {
  const { handleClickOpen } = dialogStore();
  return (
    <Floatingbutton onClick={handleClickOpen}>
      <AddIcon fontSize="medium" />
    </Floatingbutton>
  );
}

export default Floatingbtn;
