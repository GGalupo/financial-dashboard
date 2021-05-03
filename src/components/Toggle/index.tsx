import React from 'react'

import { Container, ToggleLabel, ToggleSwitch } from './styles'

interface IToggleProps {
    leftLabel: string
    rightLabel: string
    checked: boolean
    onChange(): void
}

const Toggle: React.FC<IToggleProps> = ({
    leftLabel, rightLabel, checked, onChange
}) => (
    <Container>
        <ToggleLabel>{leftLabel}</ToggleLabel>
        <ToggleSwitch
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={onChange}>
        </ToggleSwitch>
        <ToggleLabel>{rightLabel}</ToggleLabel>
    </Container>
)


export default Toggle
