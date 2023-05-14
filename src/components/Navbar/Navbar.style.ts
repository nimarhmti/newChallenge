import styled from "styled-components";

export const NavbarStyle = styled.header`
  width: 100%;
  height: 4.7rem;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.body};
`;

export const Timer = styled.div`
  width: 3rem;
  height: 2rem;
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 43px;
  background: ${({ theme }) => theme.background};
`;

export const SelectBox = styled.select`
  width: 3.4rem;
  padding: 0 0.5rem;
  height: 2rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  outline: none;
  border: none;
  appearance: none;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
`;
export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
