import React, { useMemo } from 'react'

import { useTheme } from '../../hooks/theme'
import { useMenu } from '../../hooks/menu'

import ToggleTheme from '../Toggle'

import emojis from '../../utils/emojis'

import { MdMenu } from 'react-icons/md'

import {
    Container,
    Profile,
    ToggleThemeContainer,
    ToggleMenuButton
} from './styles'

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme()
    const { toggleMenuOpen } = useMenu()

    const handleToggleMenu = () => {
        toggleMenuOpen()
    }

    const handleThemeChange = () => {
        toggleTheme()
    }

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length)
        return emojis[index]
    }, [])

    return (
        <Container>
            <ToggleThemeContainer>
                <ToggleTheme
                    leftLabel="Light"
                    rightLabel="Dark"
                    checked={theme.title === "dark" ? true : false}
                    onChange={handleThemeChange}
                />
            </ToggleThemeContainer>
            <ToggleMenuButton onClick={handleToggleMenu}>
                <MdMenu />
            </ToggleMenuButton>
            <Profile>
                <h3>Hello, {emoji}</h3>
                <span>GGalupo</span>
            </Profile>
        </Container>
    )
}

export default MainHeader