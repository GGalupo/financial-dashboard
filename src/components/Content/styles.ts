import styled from 'styled-components'

export const Container = styled.div`
    grid-area: content;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};

    padding: 25px;

    /* 70px is the main header height */
    height: calc(100vh - 70px); 
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 13px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary}
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary}
    }
`