import styled from 'styled-components'

interface IContainerProps {
    isMenuOpen: boolean
}

export const Container = styled.div<IContainerProps>`
    grid-area: aside;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};

    border-right: 1px solid ${props => props.theme.colors.gray};

    @media(max-width: 767px) {
        position: fixed;
        z-index: 10;
        height: 100vh;

        display: ${props => !props.isMenuOpen && 'none'}
    }
`

export const Header = styled.div`
    height: 70px;
    display: flex;
    align-items: center;

    padding-left: 20px;

    > svg {
        color: ${props => props.theme.colors.white};

        width: 45px;
        height: 45px;
    }
`

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
    font-size: 16px;

    
    @media(max-width: 767px) {
        font-size: 14px;
        margin-right: 20px;
    }
`

export const MenuContainer = styled.nav`
    height: calc(100vh - 70px);
    padding-top: 40px;

    display: flex;
    flex-direction: column;

    > svg {
        width: 22px;
        height: 22px;

        margin: 5px 12px 0 auto;

        color: ${props => props.theme.colors.warning};

        &:hover {
            cursor: pointer;
            transition: opacity 0.3s;
            opacity: 0.7;
        }

        @media(min-width: 767px) {
            display: none;
        }
    }
`

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;

    margin: 13px 0;
    padding-left: 20px;
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
    padding-left: 20px;

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

export const CreditsContainer = styled.div`
    align-self: center;
    margin-top: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
        margin: 15px 0 8px;

        > strong {
            color: ${props => props.theme.colors.info}
        }
    }
`

export const SocialIconsContainer = styled.div`
    display: flex;
    justify-content: space-around;

    width: 100%;
`

export const SocialIcon = styled.a`

    > svg {
        width: 40px;
        height: 40px;

        color: ${props => props.theme.colors.white};

        &:hover {
            transition: opacity .2s;
            opacity: .6;
        }
    }

    @media(max-width: 600px) {
        > svg {
            width: 35px;
            height: 35px;
        }
    }
`