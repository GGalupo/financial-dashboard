import styled from 'styled-components'

interface ICaptionProps {
    color: string
}

export const Container = styled.div`
    width: 48%;
    height: 260px;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    border-radius: 8px;
`

export const CardLeft = styled.div`
    padding: 30px 20px;

    > h3 {
        font-size: 25px;
        margin-bottom: 40px;
    }
`

export const CardRight = styled.div`

`

export const CaptionContainer = styled.ul`
    list-style: none;
    margin-top: 20px;
`

export const Caption = styled.li<ICaptionProps>`
    display: flex;
    align-items: center;

    margin-bottom: 18px;


    > div {
        background-color: ${props => props.color};

        width: 40px;
        height: 40px;
        border-radius: 5px;

        font-size: 16px;
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    > span {
        font-size: 14px;

        margin-left: 8px;
    }
`