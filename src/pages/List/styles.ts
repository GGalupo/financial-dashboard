import styled from 'styled-components'

export const Container = styled.div`
    
`

export const Content = styled.main`
    
`

export const Filters = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 35px;

    .tag-filter {
        font-size: 18px;
        font-weight: 500;

        background: none;
        color: ${props => props.theme.colors.white};

        margin: 0 10px;

        opacity: 0.4;
        transition: opacity .3;
        :hover {
            opacity: .7;
        }
    }

    .tag-filter-recurring::after {
            content: '';
            display: block;
            width: 50px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.warning}
    }

    .tag-filter-non-recurring::after {
            content: '';
            display: block;
            width: 50px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.success}
    }

    .filter-on {
        opacity: 1;
    }
`
