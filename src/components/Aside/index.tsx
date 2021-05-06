import React from 'react'

import { 
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp
} from 'react-icons/md'
import { AiOutlineDollar, AiFillLinkedin, AiFillCloseSquare } from 'react-icons/ai'
import { FaGithub, FaInstagram } from 'react-icons/fa'

import { useAuth } from '../../hooks/auth'
import { useMenu } from '../../hooks/menu'

import {
    Container,
    Header,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    CloseMenuButton,
    CreditsContainer,
    SocialIconsContainer,
    SocialIcon
} from './styles'

const Aside: React.FC = () => {
    const { signOut } = useAuth()
    const { isMenuOpen, toggleMenuOpen } = useMenu()

    return (
        <Container isMenuOpen={isMenuOpen}>
            <Header>
                <AiOutlineDollar />
                <Title>Financial Dashboard</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/income">
                <MdArrowUpward />
                    Income
                </MenuItemLink>
                <MenuItemLink href="/list/expenses">
                <MdArrowDownward />
                    Expenses
                </MenuItemLink>
                <MenuItemButton onClick={signOut}>
                <MdExitToApp />
                    Logout
                </MenuItemButton>
                <CloseMenuButton onClick={toggleMenuOpen}>
                    <AiFillCloseSquare />
                </CloseMenuButton>
                <CreditsContainer>
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
                    <span>Made with ❤️ by <strong>GGalupo</strong></span>
                </CreditsContainer>
            </MenuContainer>
        </Container>
    )
}

export default Aside