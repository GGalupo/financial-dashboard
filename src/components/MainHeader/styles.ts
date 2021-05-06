import styled from 'styled-components'

export const Container = styled.div`
    grid-area: main-header;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;

    border-bottom: 1px solid ${props => props.theme.colors.gray};
`

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
`

export const ToggleThemeContainer = styled.div`
    @media(max-width: 767px) {
        display: none;
    }
`

export const ToggleMenuButton = styled.button`
    background: none;
    color: white;

    &:hover {
        transition: opacity 0.2s;
        opacity: 0.7;
    }

    > svg {
        width: 37px;
        height: 37px;

        padding: 5px;

        border-radius: 6px;

        background-color: ${props => props.theme.colors.info};

        @media(min-width: 767px) {
            display: none;
        }
    }
`