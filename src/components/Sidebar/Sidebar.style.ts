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
  transition: left 0.3s ease-out;
  left: ${({ open }) => (open ? "0" : "-100%")};
`;

export const IconWrapper = styled.div`
  padding-top: 2rem;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
`;
