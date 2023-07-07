import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    gap: 0.5rem;
    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme['gray-100']};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }
      &.active {
        /* O active é devido ao NavLink do react-router-dom, que adiciona a classe "active" e "aria-current"
          The active is because NavLink of react-router-dom append the classes "active" and "aria-current" */
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
