import React from 'react'

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

import { Container } from './styles'

interface IBalanceHistoryProps {
    data: {
        month: string
        expenses: number
        income: Number
    }[],
    lineColorExpenses: string
    lineColorIncome: string
}

const BalanceHistory: React.FC<IBalanceHistoryProps> = ({
    data, lineColorExpenses, lineColorIncome
}) => (
    <Container>
        <h2>Balance History</h2>

        <ResponsiveContainer>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                <XAxis dataKey="month" stroke="#cecece" />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="income"
                    name="Income"
                    stroke={lineColorIncome}
                    strokeWidth={5}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                />
                <Line
                    type="monotone"
                    dataKey="expenses"
                    name="Expenses"
                    stroke={lineColorExpenses}
                    strokeWidth={5}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    </Container>
)

export default BalanceHistory