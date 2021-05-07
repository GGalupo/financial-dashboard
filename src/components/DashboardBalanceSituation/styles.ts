import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50% {
        opacity: 0.3;
    }
    100% {
        transform: translateX(0)
        opacity: 1;
    }
`

export const Container = styled.div`
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 48%;
    height: 260px;

    margin: 10px 0;
    padding: 15px 20px 25px 20px;
    border-radius: 8px;

    animation: ${animate} .5s;

    @media(max-width: 950px) {
        width: 100%;
    }
`

export const CardHeader = styled.div`
    > h3 {
        font-size: 36px;
    }

    > h3 img {
        width: 40px;
        margin-left: 5px;
    }

    p {
        font-size: 20px;
    }

    @media(max-width: 320px) {
        > h3 {
            font-size: 32px;
        }

        > h3 img {
            width: 30px;
            margin-left: 5px;
        }

        p {
            font-size: 16px;
        }
    }
`

export const CardFooter = styled.div`
    span {
        color: ${props => props.theme.colors.gray}
    }

    @media(max-width: 320px) {
        span {
            font-size: 14px;
        }
    }
`