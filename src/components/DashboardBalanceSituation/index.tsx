import React from 'react'

import { Container, CardHeader, CardFooter } from './styles'

interface IDashboardBalanceSituation {
    title: string
    description: string
    footerMsg: string
    icon: string
}

const DashboardBalanceSituation: React.FC<IDashboardBalanceSituation> = ({
    title,
    description,
    footerMsg,
    icon
}) => (
    <Container>
        <CardHeader>
            <h3>
                {title} <img src={icon} alt={"Emoji for the following text: " + title}/>
            </h3>
            <p>
                {description}
            </p>
        </CardHeader>
        <CardFooter>
            <span>
                {footerMsg}
            </span>
        </CardFooter>
    </Container>
)


export default DashboardBalanceSituation