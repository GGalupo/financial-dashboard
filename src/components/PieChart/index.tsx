import React from 'react'
// import {
//     PieChart,
//     Pie,
//     Cell,
//     ResponsiveContainer
// } from 'recharts'

import {
    Container,
    CardLeft,
    CardRight,
    Caption,
    CaptionContainer
} from './styles'

const PieChart: React.FC = () => (
    <Container>
        <CardLeft>
            <h3>Pie Chart</h3>
            <CaptionContainer>
                <Caption color="#F7931B">
                    <div>45%</div>
                    <span>Income</span>
                </Caption>
                <Caption color="#E44C4E">
                    <div>55%</div>
                    <span>Expenses</span>
                </Caption>
            </CaptionContainer>
        </CardLeft>
        <CardRight>
            {/* <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={[]}
                        labelLine={false}
                        dataKey="percen"
                    />
                </PieChart>
            </ResponsiveContainer> */}
        </CardRight>
    </Container>
)

export default PieChart