import React, { useState } from 'react'

import { Container, ToggleLabel, ToggleSwitch } from './styles'

const Toggle: React.FC = () => {
    const [toggle, changeToggle] = useState(true)

    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSwitch checked={toggle}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => changeToggle(!toggle)}></ToggleSwitch>
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    )
}

export default Toggle
