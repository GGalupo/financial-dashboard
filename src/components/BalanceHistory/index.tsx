import React from 'react'

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

import formatCurrency from '../../utils/formatCurrency'

import {
    Container,
    Header,
    CaptionContainer,
    Caption
} from './styles'

interface IBalanceHistoryProps {
    data: {
        monthNumber: number
        monthName: string
        monthExpenses: number
        monthIncome: number
    }[],
    lineColorExpenses: string
    lineColorIncome: string
}

const BalanceHistory: React.FC<IBalanceHistoryProps> = ({
    data, lineColorExpenses, lineColorIncome
}) => (
    <Container>
        <Header>
            <h2>Balance History</h2>
            <CaptionContainer>
                <Caption color={lineColorIncome}>
                    <div></div>
                    <span>Income</span>
                </Caption>
                <Caption color={lineColorExpenses}>
                    <div></div>
                    <span>Expenses</span>
                </Caption>
            </CaptionContainer>
        </Header>

        <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 0, right: 15, left: 15, bottom: 20}}>
                <CartesianGrid horizontal={false} vertical={false} strokeDasharray="3 3" stroke="#cecece" />
                <XAxis dataKey="monthName" stroke="#cecece" />
                <Tooltip formatter={formatCurrency} />
                <Line
                    type="monotone"
                    dataKey="monthIncome"
                    name="Income"
                    stroke={lineColorIncome}
                    strokeWidth={5}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                />
                <Line
                    type="monotone"
                    dataKey="monthExpenses"
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