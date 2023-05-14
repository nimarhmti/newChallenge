import React from "react";
import { SideBarStyle, IconWrapper } from "./Sidebar.style";
import { Logo } from "../../Styles/Ui";
import closed from "../../assets/Icons/closed.png";
interface Props {
  isOpen: boolean;
  onCloseSidebar: () => void;
}
export const Sidebar = ({ isOpen, onCloseSidebar }: Props) => {
  return (
    <SideBarStyle open={isOpen}>
      <IconWrapper>
        <Logo src={closed} onClick={() => onCloseSidebar()} alt="close" />
      </IconWrapper>
    </SideBarStyle>
  );
};
