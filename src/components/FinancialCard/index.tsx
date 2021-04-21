import React from 'react'

import { Container, Tag } from './styles'

interface IFinancialCardProps {
    cardColor: string
    tagColor: string
    title: string
    subtitle: string
    amount: string
}

const FinancialCard: React.FC<IFinancialCardProps> = ({
    cardColor, tagColor, title, subtitle, amount
}) => {
    return (
        <Container color={cardColor}>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    )
}

export default FinancialCard