import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.colors.primary};

    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;


`

export const LogoContainer = styled.div`
    margin-bottom: 20px;

    > svg {
        color: ${props => props.theme.colors.info};

        width: 80px;
        height: 80px;
    }

`

export const LoginContainer = styled.div`
    width: 300px;
    height: 340px;
    
    padding: 25px 30px;

    border-radius: 10px;

    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
`

export const Form = styled.form`

    > h2 {
        color: ${props => props.theme.colors.white};
        margin-bottom: 20px;

        &:after {
            content: '';
            display: block;
            width: 50px;
            margin-right: auto;
            margin-top: 1px;
            border-bottom: 9px solid ${props => props.theme.colors.warning}
        }
    }
`

export const SocialIconsContainer = styled.div`
    display: flex;
    justify-content: space-around;

    width: 100%;

    margin-top: 25px;
`

export const SocialIcon = styled.a`

    > svg {
        width: 40px;
        height: 40px;

        color: ${props => props.theme.colors.white};

        &:hover {
            transition: opacity .2s;
            opacity: .6;
        }
    }
`

export const InputLabel = styled.label`
    display: flex;
    align-items: center;

    height: 40px;

    margin-bottom: 10px;

    border-radius: 8px;
    
    background-color: #fff;

    > svg {
        width: 20px;
        height: 20px;

        margin: 0 5px;

    }

    > input::placeholder {
        font-size: 12px;
    }

`