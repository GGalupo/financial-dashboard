import styled from 'styled-components'

interface ITagProps {
    color: string
}
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

    small {
        font-size: .7rem;
        margin-top: 2px;
    }
`