import React, { useState } from "react";
import { Details, NavbarStyle, SelectBox, Timer } from "./Navbar.style";
import menu from "../../assets/Icons/menu.png";
import { lightMode, darkMode } from "../../Styles/Theme";
import { Logo, HelperText } from "../../Styles/Ui";
import { useThemeDetector } from "../../utils/ThemeDetector ";
import { keys } from "../../Config/Keys";

interface Props {
  count: number;
  onSetTheme: (theme: string) => void;
  onOpenSidebar: () => void;
}
interface themItemModel {
  id: string;
  label: string;
}

const multiTheme: themItemModel[] = [
  { id: keys.LIGHT_THEME, label: keys.LIGHT_THEME },
  { id: keys.DARK_THEME, label: keys.DARK_THEME },
];
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

export const Navbar = ({
  count,
  onSetTheme: setTheme,
  onOpenSidebar,
}: Props) => {
  const isDarkTheme = useThemeDetector();
  const [currentTheme, setCurrentTheme] = useState<string>(isDarkTheme);
  const useMapThemeHandler = ({ id, label }: themItemModel) => (
    <option value={label} key={id} id={id}>
      {label}
    </option>
  );

  const onChange = (event: React.ChangeEvent<{ value: string }>) => {
    const { value } = event.target;
    setCurrentTheme(value);
    setTheme(value);
  };

  console.log(currentTheme);

  return (
    <NavbarStyle>
      <Logo src={menu} onClick={() => onOpenSidebar()} />
      <Details>
        {!count && <HelperText>Time Is Over!</HelperText>}
        <Timer>{count}</Timer>
        <SelectBox value={currentTheme} onChange={onChange}>
          {multiTheme.map(useMapThemeHandler)}
        </SelectBox>
      </Details>
    </NavbarStyle>
  );
};
