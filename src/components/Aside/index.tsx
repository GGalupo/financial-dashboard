import React from 'react'

import { MdDashboard, MdArrowUpward, MdArrowDownward,
    MdExitToApp } from 'react-icons/md'
import logoImg from '../../assets/logo.svg'

import { useAuth } from '../../hooks/auth'

import {
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton
} from './styles'

const Aside: React.FC = () => {
    const { signOut } = useAuth()

    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo"/>
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
            </MenuContainer>
        </Container>
    )
}

export default Aside