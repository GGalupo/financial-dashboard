import React, { useState } from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { FaGithub, FaInstagram } from 'react-icons/fa'
import { AiFillLinkedin, AiOutlineDollar, AiOutlineUser } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'

import { useAuth } from '../../hooks/auth'

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
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { signIn } = useAuth()

    return (
        <Container>
            <LogoContainer>
                <AiOutlineDollar />
            </LogoContainer>
            <LoginContainer>
                <Form onSubmit={() => signIn(email, password)}>
                    <h2>Login</h2>
                    <InputLabel>
                            <AiOutlineUser />
                            <Input
                                maxLength={24}
                                required
                                placeholder="username"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                    </InputLabel>
                    <InputLabel>
                            <BiLockAlt />
                            <Input
                                maxLength={32}
                                required
                                type="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
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