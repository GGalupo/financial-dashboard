import React from 'react'

import { 
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp
} from 'react-icons/md'
import {
    AiOutlineDollar,
    AiFillLinkedin,
    AiFillCloseSquare
} from 'react-icons/ai'
import { FaGithub, FaInstagram } from 'react-icons/fa'

import ToggleTheme from '../Toggle'

import { useAuth } from '../../hooks/auth'
import { useMenu } from '../../hooks/menu'
import { useTheme } from '../../hooks/theme'

import {
    Container,
    Header,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    CloseMenuButton,
    ToggleThemeContainer,
    AsideFooter,
    SocialIconsContainer,
    SocialIcon
} from './styles'

const Aside: React.FC = () => {
    const { signOut } = useAuth()
    const { theme, toggleTheme } = useTheme()
    const { isMenuOpen, toggleMenuOpen } = useMenu()

    const handleThemeChange = () => {
        toggleTheme()
    }

    return (
        <Container isMenuOpen={isMenuOpen}>
            <Header>
                <AiOutlineDollar />
                <Title>GG Finances</Title>
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
                <AsideFooter>
                    <ToggleThemeContainer>
                        <ToggleTheme
                            leftLabel="Light"
                            rightLabel="Dark"
                            checked={theme.title === "dark" ? true : false}
                            onChange={handleThemeChange}
                        />
                    </ToggleThemeContainer>
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
                </AsideFooter>
            </MenuContainer>
        </Container>
    )
}

export default Aside