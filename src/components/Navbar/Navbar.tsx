import React, { useState } from "react";
import { Details, Logo, NavbarStyle, SelectBox, Timer } from "./Navbar.style";
import menu from "../../assets/Icons/menu.png";
import { lightMode, darkMode } from "../../Styles/Theme";

const LIGHT_THEME = "Light";
const DARK_THEME = "Dark";
interface Props {
  count: number;
  setTheme: (theme: string) => void;
}
interface themItemModel {
  id: string;
  label: string;
}

const multiTheme: themItemModel[] = [
  { id: LIGHT_THEME, label: LIGHT_THEME },
  { id: DARK_THEME, label: DARK_THEME },
];
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

// use it instead of Event
let e: HTMLElementEvent<HTMLTextAreaElement>;
export const Navbar = ({ count, setTheme }: Props) => {
  const [temp, setTemp] = useState<string>("");
  const useMapThemeHandler = ({ id, label }: themItemModel) => (
    <option value={label} key={id} id={id}>
      {label}
    </option>
  );

  const onChange = (event: React.ChangeEvent<{ value: string }>) => {
    const { value } = event.target;
    setTheme(value);
  };

  return (
    <NavbarStyle>
      <Logo src={menu} onClick={() => ""} />
      <Details>
        <Timer>{count}</Timer>
        <SelectBox onChange={onChange}>
          {multiTheme.map(useMapThemeHandler)}
        </SelectBox>
      </Details>
    </NavbarStyle>
  );
};
