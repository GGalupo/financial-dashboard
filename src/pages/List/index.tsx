import React, { useMemo, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import FinancialCard from '../../components/FinancialCard'

import income from '../../files/income'
import expenses from '../../files/expenses'

import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'

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

    const months = [
        {value: 1, label: 'January'},
        {value: 2, label: 'February'},
        {value: 3, label: 'March'},
        {value: 4, label: 'April'},
        {value: 5, label: 'May'},
        {value: 6, label: 'June'},
        {value: 7, label: 'July'},
        {value: 8, label: 'August'},
        {value: 9, label: 'September'},
        {value: 10, label: 'October'},
        {value: 11, label: 'November'},
        {value: 12, label: 'December'}
    ]

    const years = [
        {value: 2021, label: '2021'},
        {value: 2020, label: '2020'},
        {value: 2019, label: '2019'}
    ]

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