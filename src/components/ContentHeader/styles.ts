import styled from 'styled-components'

interface ITitleContainerProps {
    lineColor: string
}

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 25px;

    @media(max-width: 500px) {
        flex-direction: column;
    }
`

export const TitleContainer = styled.div<ITitleContainerProps>`
    > h1 {
        color: ${props => props.theme.colors.white};
    }

    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.lineColor};
        margin-top: 2px;
    }

    @media(max-width: 500px) {
        margin-bottom: 25px;
    }
`

export const Controllers = styled.div`
    display: flex;

    @media(max-width: 500px) {
        margin: 0 auto;
        justify-content: center;
    }
`
