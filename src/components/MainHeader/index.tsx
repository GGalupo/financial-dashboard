import React, { useMemo, useState } from 'react'

import emojis from '../../utils/emojis'

import { useTheme } from '../../hooks/theme'

import {
    Container,
    Profile,
    Welcome,
    UserName,
    Toggle
} from './styles'

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme()

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)

    const handleThemeChange = () => {
        setDarkTheme(!darkTheme)
        toggleTheme()
    }

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length)
        return emojis[index]
    }, [])

    return (
        <Container>
            <Toggle
                leftLabel="Light"
                rightLabel="Dark"
                checked={darkTheme}
                onChange={handleThemeChange}
            />
            <Profile>
                <Welcome>Hello, {emoji}</Welcome>
                <UserName>GGalupo</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader