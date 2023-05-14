import React from "react";
import { SideBarStyle } from "./Sidebar.style";
interface Props {
  isOpen: boolean;
}
export const Sidebar = ({ isOpen }: Props) => {
  return <SideBarStyle open={isOpen}>suuii</SideBarStyle>;
};
