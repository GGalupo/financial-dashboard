import React, { useMemo, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import FinancialCard from '../../components/FinancialCard'

import income from '../../files/income'
import expenses from '../../files/expenses'

import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import monthsList from '../../utils/months'

import { Container, Content, Filters } from './styles'

interface IRouteParams {
    match: {
        params: {
            type: string // same name we set in routes
        }
    }
}

interface IData {
    id: string
    description: string
    amountFormatted: string
    repetition: string
    dateFormatted: string
    tagColor: string
}


const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([])
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1))
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()))

    const { type } = match.params

    const loadedProps = useMemo(() => {
        return type === 'income' ? {
            title: 'Income',
            lineColor: '#F7931B',
            fileLoaded: income       
        } : {
            title: 'Expenses',
            lineColor: '#E44C4E',
            fileLoaded: expenses
        }
    },[type])

    const years = useMemo(() => {
        let yearsWithData: number[] = []

        const { fileLoaded } = loadedProps

        fileLoaded.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if (!yearsWithData.includes(year)) {
                yearsWithData.push(year)
            }
        })

        return yearsWithData.map(year => {
            return {
                value: year,
                label: year
            }
        })
    }, [loadedProps])

    const months = useMemo(() => {
        return monthsList.map((month, index) => {
            return {
                value: index + 1,
                label: month 
            }  
        })
    },[])

    useEffect(() => {
        const { fileLoaded } = loadedProps

        const filteredDate = fileLoaded.filter(item => {
            const date = new Date(item.date)
            const month = String(date.getMonth() + 1)
            const year = String(date.getFullYear())

            return month === monthSelected && year === yearSelected
        })

        const filteredData = filteredDate.map(item => {
            return {
                id: uuidv4(), 
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                repetition: item.repetition,
                dateFormatted: formatDate(item.date),
                tagColor: item.repetition === 'recurring' ? '#E44C4E'  : '#4e41f0'
            }
        })

        setData(filteredData)
    },[loadedProps, monthSelected, yearSelected])

    return (

        <Container>
            <ContentHeader title={loadedProps.title} lineColor={loadedProps.lineColor}>
                <SelectInput
                    options={months}
                    onChange={(e => setMonthSelected(e.target.value))}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    options={years}
                    onChange={(e => setYearSelected(e.target.value))}
                    defaultValue={yearSelected}
                />
            </ContentHeader>
            <Filters>
                <button type="button"
                    className="tag-filter tag-filter-recurring">
                    Recurring
                </button>
                <button type="button"
                    className="tag-filter tag-filter-non-recurring">
                    Non-Recurring
                </button>
            </Filters>
            <Content>
                {
                    data.map(item => (
                        <FinancialCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default List