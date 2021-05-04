import styled from 'styled-components'

export const Container = styled.div`
    grid-area: aside;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
`

export const Header = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
`

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 15px;
    font-size: 1rem;
`

export const MenuContainer = styled.nav`
    margin-top: 35px;

    display: flex;
    flex-direction: column;
`

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;

    margin: 13px 0;
    display: flex;
    align-items: center;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 20px;
        margin-right: 7px;
    }
`

export const MenuItemButton = styled.button`
    color: ${props => props.theme.colors.info};
    background: none;
    border: none;

    font-size: 16px;

    margin: 13px 0;
    display: flex;
    align-items: center;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 20px;
        margin-right: 7px;
    }
`