import styled from 'styled-components'

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
`

export const CardHeader = styled.div`
    h3 {
        font-size: 36px;
    }

    > h3 img {
        width: 40px;
        margin-left: 5px;
    }

    p {
        font-size: 20px;
    }
`

export const CardFooter = styled.div`
    span {
        color: ${props => props.theme.colors.gray}
    }
`