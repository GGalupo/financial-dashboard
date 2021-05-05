import styled from 'styled-components'

interface IContainerProps {
    color: string
}

export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 150px;

    margin: 10px 0%;

    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};
    
    border-radius: 8px;
    padding: 10px 20px;

    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    > img {
        position: absolute;
        top: -10px;
        right: -30px;

        height: 110%;
        
        opacity: 0.3;
    }

    > h2 {
        font-size: 18px;
        font-weight: 500;
    }

    > span {
        font-size: 24px;
        font-weight: 600;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }

    @media(max-width: 950px) {
        width: 100%;
    }

`