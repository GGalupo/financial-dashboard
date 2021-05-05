import styled from 'styled-components'

export const Container = styled.div`
    width: 48%;
    height: 250px;

    margin: 10px 0;
    border-radius: 8px;

    background-color: ${props => props.theme.colors.tertiary};

    display: flex;

    @media(max-width: 950px) {
        width: 100%;
    }
`

export const CardRight = styled.div`
    height: 100%;
    padding: 15px 10px;

    flex: 1;
`

export const CardLeft = styled.div`
    padding: 20px 25px;

    > h2 {
        margin-bottom: 10px;
        font-size: 25px;
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
`