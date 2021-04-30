import React from 'react'
import CountUp from 'react-countup'

import arrowUpIcon from '../../assets/arrow-up.svg'
import arrowDownIcon from '../../assets/arrow-down.svg'
import dollarIcon from '../../assets/dollar.svg'

import { Container } from './styles'

interface IDashboardInfoCard {
    title: string
    amount: number
    footerText: string
    icon: 'dollar' | 'arrowUp' | 'arrowDown'
    color: string
}

const DashboardInfoCard: React.FC<IDashboardInfoCard> = ({
    title,
    amount,
    footerText,
    icon,
    color
}) => {

    const iconSelected = () => {
        switch(icon){
            case 'dollar':
                return dollarIcon
            case 'arrowUp':
                return arrowUpIcon
            case 'arrowDown':
                return arrowDownIcon
            default:
                return undefined
        }
    }

    return (
        <Container color={color}>
            <span>{title}</span>
            <h2>
                <CountUp
                    end={amount}
                    prefix={"R$ "}
                    separator="."
                    decimal=","
                    decimals={2}
                    duration={1}
                />
            </h2>
            <small>{footerText}</small>
            <img src={iconSelected()} alt={title}/>
        </Container>
    )
}

export default DashboardInfoCard