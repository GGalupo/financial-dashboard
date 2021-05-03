import React from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { FaGithub, FaInstagram } from 'react-icons/fa'
import { AiFillLinkedin, AiOutlineDollar } from 'react-icons/ai'

import {
    Container,
    LogoContainer,
    LoginContainer,
    Form,
    SocialIconsContainer,
    SocialIcon
} from './styles'

const SignIn: React.FC = () => {
    return (
        <Container>
            <LogoContainer>
                <AiOutlineDollar />
            </LogoContainer>
            <LoginContainer>
                <Form onSubmit={() => {}}>
                    <h2>Login</h2>
                    <Input
                        required
                        placeholder="username"
                    />
                    <Input
                        required
                        type="password"
                        placeholder="password"
                    />
                <Button type="submit">Login</Button>
                </Form>
                <SocialIconsContainer>
                    <SocialIcon
                        href="https://github.com/GGalupo"
                        target="_blank"
                    >
                        <FaGithub />
                    </SocialIcon>
                    <SocialIcon
                        href="https://www.linkedin.com/in/ggalupo/"
                        target="_blank"
                    >
                        <FaInstagram />
                    </SocialIcon>
                    <SocialIcon
                        href="https://instagram.com/ggalupo"
                        target="_blank"
                    >
                        <AiFillLinkedin />
                    </SocialIcon>
                </SocialIconsContainer>
            </LoginContainer>
        </Container>
    )
}

export default SignIn