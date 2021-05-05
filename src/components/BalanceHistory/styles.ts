import styled from 'styled-components'

interface ICaptionProps {
    color: string
}

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 15px 20px 0;

    border-radius: 8px;
`

export const Header = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 45px;

    > h2 {
        font-size: 25px;
        margin: 7px 10px 10px;
    }

    @media(max-width: 420px) {
        flex-direction: column;
    }

    @media(max-width: 300px) {
        > h2 {
            font-size: 24px;
            margin: 5px;
        }
    }
`

export const ChartContainer = styled.div`
    width: 100%;
    height: 260px;
`

export const CaptionContainer = styled.ul`
    list-style: none;
    display: flex;

    @media(max-width: 420px) {
        margin-top: 10px;
        margin-left: 10px;
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

    @media(max-width: 420px) {
        > div {
            background-color: ${props => props.color};

            width: 23px;
            height: 23px;
            border-radius: 5px;
        }

        > span {
            font-size: 13px;
            font-weight: 500;

            margin-left: 6px;
        }
    }
`