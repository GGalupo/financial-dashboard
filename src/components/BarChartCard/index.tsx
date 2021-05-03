import React from 'react'

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip
} from 'recharts'

import formatCurrency from '../../utils/formatCurrency'

import {
    Container,
    CardLeft,
    CardRight,
    CaptionContainer,
    Caption
} from './styles'

interface IBarChartProps {
    title: string
    data: {
        name: string
        amount: number
        percent: string
        color: string
    }[]
}

const BarChartCard: React.FC<IBarChartProps> = ({ title, data }) => {
    return (
        <Container>
            <CardLeft>
                <h2>{title}</h2>
                <CaptionContainer>
                    {data.map((item, index) => (
                            <Caption key={index} color={item.color}>
                                <div>{item.percent}</div>
                                <span>{item.name}</span>
                            </Caption>
                        ))}
                </CaptionContainer>
            </CardLeft>
            <CardRight>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Tooltip formatter={formatCurrency}/>
                        <Bar maxBarSize={150} dataKey="amount">
                            {data.map((item, index) => (
                                <Cell
                                    key={index}
                                    fill={item.color}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </CardRight>
        </Container>
    )
}

export default BarChartCard