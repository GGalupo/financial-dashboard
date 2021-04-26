import React, { useMemo, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import FinancialCard from '../../components/FinancialCard'

import income from '../../files/income'
import expenses from '../../files/expenses'

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
        {value: 3, label: 'March'}
    ]

    const years = [
        {value: 2021, label: '2021'},
        {value: 2020, label: '2020'},
        {value: 2019, label: '2019'}
    ]

    useEffect(() => {
        const { fileLoaded } = loadedProps

        const response = fileLoaded.map(item => {
            return {
                id: uuidv4(), 
                description: item.description,
                amountFormatted: item.amount,
                repetition: item.repetition,
                dateFormatted: item.date,
                tagColor: item.repetition === 'recurring' ? '#E44C4E'  : '#4e41f0'
            }
        })

        setData(response)
    },[loadedProps])

    return (

        <Container>
            <ContentHeader title={loadedProps.title} lineColor={loadedProps.lineColor}>
                <SelectInput options={months}/>
                <SelectInput options={years}/>
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