import React from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { FaGithub, FaInstagram } from 'react-icons/fa'
import { AiFillLinkedin, AiOutlineDollar, AiOutlineUser } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'

import {
    Container,
    LogoContainer,
    LoginContainer,
    Form,
    SocialIconsContainer,
    SocialIcon,
    InputLabel
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
                    <InputLabel>
                            <AiOutlineUser />
                            <Input
                                maxLength={24}
                                type="text"
                                required
                                placeholder="username"
                            />
                    </InputLabel>
                    <InputLabel>
                            <BiLockAlt />
                            <Input
                                maxLength={32}
                                required
                                type="password"
                                placeholder="password"
                            />
                    </InputLabel>
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
                        <AiFillLinkedin />
                    </SocialIcon>
                    <SocialIcon
                        href="https://instagram.com/ggalupo"
                        target="_blank"
                    >   
                        <FaInstagram />
                    </SocialIcon>
                </SocialIconsContainer>
            </LoginContainer>
        </Container>
    )
}

export default SignIn