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

    display: flex;

    position: relative;

    > span {
        display: none;

        position: absolute;
        bottom: 15px;
        left: 15px;

        font-size: 13px;
        color: ${props => props.theme.colors.gray};
        font-style: italic;
    }

    @media(max-width: 950px) {
        width: 100%;
    }

    @media(max-width: 400px) {
        flex-direction: column;

        > span {
            display: inline;
        }
    }
`

export const CardLeft = styled.div`
    padding: 20px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    > h3 {
        font-size: 25px;
    }

    > span {
        font-size: 14px;
        color: ${props => props.theme.colors.gray};
        font-style: italic;
    }

    @media(max-width: 400px) {
        height: 80px;
        flex-direction: row;
        position: relative;
        padding-bottom: 0;
        
        > span {
            display: none;
        }
    }
`

export const CardRight = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;

    @media(max-width: 400px) {
        margin-bottom: 40px;
    }
`

export const CaptionContainer = styled.ul`
    list-style: none;
`

export const Caption = styled.li<ICaptionProps>`
    display: flex;
    align-items: center;

    > div {
        background-color: ${props => props.color};

        width: 40px;
        height: 40px;
        border-radius: 5px;

        font-size: 11px;
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: center;

        @media(max-width: 400px) {
            width: 45px;
            height: 45px;
            font-size: 13px;
        }
    }

    > span {
        font-size: 12px;
        font-weight: 500;

        margin-left: 8px;

        @media(max-width: 400px) {
            display: none;
        }
    }
`