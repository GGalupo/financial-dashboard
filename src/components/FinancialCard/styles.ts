import styled, { keyframes } from 'styled-components'

interface ITagProps {
    color: string
}

const animate = keyframes`
    0% {
        transform: translateX(-100px);
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

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    
    list-style: none;

    margin: 10px 0;
    padding: 13px 13px;
    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    transition: all .3s;

    position: relative;

    animation: ${animate} .4s ease;

    &:hover {
        opacity: .7;
        transform: translateX(5px);
    }

    h3 {
        margin-left: 15px;
    }

    @media(max-width: 320px) {
        font-size: 14px;
    }
`

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 55%;

    background-color: ${props => props.color};

    position: absolute;
    left: 2px;
`

export const TitleContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 8px;

    flex: 1;

    white-space: nowrap;
    overflow-x: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    small {
        font-size: .7rem;
        margin-top: 2px;
    }
`