import React from 'react'
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from 'recharts'

import {
    Container,
    CardLeft,
    CardRight,
    Caption,
    CaptionContainer
} from './styles'

interface IPieChartCardProps {
        data: {
            value: number
            percent?: string
            color: string
        }[]
}

const PieChartCard: React.FC<IPieChartCardProps> = ({ data }) => (
    <Container>
        <CardLeft>
            <h3>Pie Chart</h3>
            <CaptionContainer>
                <Caption color="#E44C4E">
                    <div>{data[0].percent}</div>
                    <span>Expenses</span>
                </Caption>
            </CaptionContainer>
            <span>Based on total income.</span>
        </CardLeft>
        <CardRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                    >
                        {data.map((item, index) => (
                            <Cell key={`cell-${index}`} fill={item.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </CardRight>
    </Container>
)

export default PieChartCard