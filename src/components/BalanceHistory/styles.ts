import styled from 'styled-components'

interface ICaptionProps {
    color: string
}

export const Container = styled.div`
    width: 100%;
    height: 320px;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 15px 20px 30px 20px;

    border-radius: 8px;
`

export const Header = styled.div`
    > h2 {
        margin: 5px 0 15px 5px;
        font-size: 25px;
    }

    display: flex;
    justify-content: space-between;

    width: 100%;
`

export const CaptionContainer = styled.ul`
    list-style: none;
    display: flex;

    @media(max-width: 410px) {
        display: none;
    }
`

export const Caption = styled.li<ICaptionProps>`
    display: flex;
    align-items: center;

    margin-right: 14px;


    > div {
        background-color: ${props => props.color};

        width: 30px;
        height: 30px;
        border-radius: 5px;
    }

    > span {
        font-size: 13px;
        font-weight: 500;

        margin-left: 6px;
    }
`