import styled from "styled-components";

export const Logo = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 7rem;
  height: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  padding: 0.3rem 0.4rem;
  border: none;
  border-radius: 2rem;
  margin: auto 50%;
`;

export const HelperText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;
