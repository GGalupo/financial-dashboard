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
    width: 48%;
    height: 250px;

    margin: 10px 0;
    border-radius: 8px;

    background-color: ${props => props.theme.colors.tertiary};

    display: flex;
    justify-content: space-between;

    animation: ${animate} .5s;

    @media(max-width: 950px) {
        width: 100%;
    }
`

export const CardRight = styled.div`
    height: 100%;
    padding: 20px 10px;
    width: 150px;
    margin: 0 auto;
`

export const CardLeft = styled.div`
    padding: 20px 25px;

    > h2 {
        margin-bottom: 10px;
        font-size: 25px;
    }

    @media(max-width: 300px) {
        padding: 20px 15px 20px 20px;
    }

    @media(min-width: 540px) {
        height: 80%;
        align-self: center;
        border-right: 2px solid gray;
        padding-right: 50px;
    }

    @media(min-width: 1200px) {
        padding-right: 100px;
    }

    @media(min-width: 1400px) {
        padding-right: 150px;
    }

    @media(min-width: 1600px) {
        padding-right: 200px;
    }
`

export const CaptionContainer = styled.div`
    padding: 20px 0;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Caption = styled.div`
    display: flex;
    align-items: center;

    margin-top: 15px;

    > div {
        background-color: ${props => props.color};

        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
        border-radius: 5px;

        font-size: 12px;
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    > span {
        font-size: 12px;
        font-weight: 500;

        margin-left: 8px;
    }

    @media(max-width: 300px) {
        > span {
            font-size: 11px;
        }
    }
`