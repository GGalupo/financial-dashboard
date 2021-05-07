import React from 'react'

import {
    Container,
    Tag,
    TitleContainer
} from './styles'

interface IFinancialCardProps {
    tagColor: string
    title: string
    subtitle: string
    amount: string
}

const FinancialCard: React.FC<IFinancialCardProps> = ({
    tagColor, title, subtitle, amount
}) => (
    <Container>
        <Tag color={tagColor} />
        <TitleContainer>
            <span>{title}</span>
            <small>{subtitle}</small>
        </TitleContainer>
        <h3>{amount}</h3>
    </Container>
)


export default FinancialCard