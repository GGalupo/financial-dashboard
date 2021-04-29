import React, { useMemo, useState } from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

import income from '../../files/income'
import expenses from '../../files/expenses'

import monthsList from '../../utils/months'

import { Container } from './styles'

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear())

    const years = useMemo(() => {
        let yearsWithData: number[] = [];

        [...expenses, ...income].forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if (!yearsWithData.includes(year)) {
                yearsWithData.push(year)
            }
        })

        yearsWithData.sort((a, b) => b - a)

        return yearsWithData.map(year => {
            return {
                value: year,
                label: year
            }
        })
    }, [])

    const months = useMemo(() => {
        return monthsList.map((month, index) => {
            return {
                value: index + 1,
                label: month 
            }  
        })
    },[])

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month)
            setMonthSelected(parseMonth)
        } catch(err) {
            throw new Error('Invalid month value.')
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year)
            setYearSelected(parseYear)
        } catch(err) {
            throw new Error('Invalid year value.')
        }
    }

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput
                        options={months}
                        onChange={(e => handleMonthSelected(e.target.value))}
                        defaultValue={monthSelected}
                    />
                    <SelectInput
                        options={years}
                        onChange={(e => handleYearSelected(e.target.value))}
                    />
            </ContentHeader>
        </Container>
    )
}

export default Dashboard