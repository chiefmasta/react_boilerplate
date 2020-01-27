import styled from "styled-components";

const AppBar = styled.div`
  background: ${({ bg }) => (bg ? bg : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  color: ${({ color, theme }) => (color ? color : theme.primary)};
`;

export default AppBar;
