import styled from "@emotion/styled";
import { PropTypes } from "prop-types";

const StyledButton = styled.button({
  paddingTop: 11,
  paddingBottom: 11,
  paddingRight: 21,
  paddingLeft: 18,
  backgroundColor: "#0E8BFF",
  border: "none",
  color: "#ffffff",
  cursor: "pointer",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  gap: 5,
});

function RButton(props) {
  const { label, icon } = props;
  return (
    <StyledButton>
      <span>{icon}</span>
      {label}
    </StyledButton>
  );
}

RButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default RButton;
