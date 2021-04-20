import React from 'react'
import { MdDashboard, MdArrowUpward, MdArrowDownward,
    MdExitToApp } from 'react-icons/md'
import logoImg from '../../assets/logo.svg'

import { Container, Header, LogoImg, Title,
    MenuContainer,MenuItemLink } from './styles'

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo"/>
                <Title>Financial Dashboard</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="#">
                <MdArrowUpward />
                    Income
                </MenuItemLink>
                <MenuItemLink href="#">
                <MdArrowDownward />
                    Expenses
                </MenuItemLink>
                <MenuItemLink href="#">
                <MdExitToApp />
                    Logout
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

export default Aside