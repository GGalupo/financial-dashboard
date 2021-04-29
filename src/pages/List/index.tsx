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
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear())
    const [repetitionFilterSelected, setrepetitionFilterSelected] = useState<String[]>(['recurring', 'nonRecurring'])

    const incomeOrExpense = match.params.type

    const loadedData = useMemo(() => {
        return incomeOrExpense === 'income' ? {
            title: 'Income',
            lineColor: '#F7931B',
            fileLoaded: income       
        } : {
            title: 'Expenses',
            lineColor: '#E44C4E',
            fileLoaded: expenses
        }
    },[incomeOrExpense])

    const years = useMemo(() => {
        let yearsWithData: number[] = []

        const { fileLoaded } = loadedData

        fileLoaded.forEach(item => {
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
    }, [loadedData])

    const months = useMemo(() => {
        return monthsList.map((month, index) => {
            return {
                value: index + 1,
                label: month 
            }  
        })
    },[])

    const handleRepetitionFilter = (repetition: string) => {

        if (repetition === 'recurring' && repetitionFilterSelected.includes('nonRecurring')) {
            setrepetitionFilterSelected(['recurring'])
        } else if (repetition === 'nonRecurring' && repetitionFilterSelected.includes('recurring')) {
            setrepetitionFilterSelected(['nonRecurring'])
        } else {
            setrepetitionFilterSelected(['recurring', 'nonRecurring'])
        }
    }

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

    useEffect(() => {
        const { fileLoaded } = loadedData

        const filteredDate = fileLoaded.filter(item => {
            const date = new Date(item.date)
            const month = date.getMonth() + 1
            const year = date.getFullYear()

            return month === monthSelected && year === yearSelected && repetitionFilterSelected.includes(item.repetition)
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
    },[loadedData, monthSelected, yearSelected, repetitionFilterSelected])

    return (
        <Container>
            <ContentHeader title={loadedData.title} lineColor={loadedData.lineColor}>
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
            <Filters>
                <button
                    type="button"
                    className={
                        `tag-filter
                        tag-filter-recurring
                        ${repetitionFilterSelected.includes('recurring') && 'filter-on'}`
                    }
                    onClick={() => handleRepetitionFilter('recurring')}
                >
                    Recurring
                </button>
                <button
                    type="button"
                    className={`tag-filter
                        tag-filter-non-recurring
                        ${repetitionFilterSelected.includes('nonRecurring') && 'filter-on'}`
                    }
                    onClick={() => handleRepetitionFilter('nonRecurring')}
                >
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