import styled from "styled-components";
interface Props {
  open: boolean;
}
export const SideBarStyle = styled.aside<Props>`
  width: 10rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  position: fixed;
  color: ${({ theme }) => theme.text};
  top: 0;
  transition: all 0.2s ease-out;
  left: ${({ open }) => (open ? "0" : "-100%")};
`;
