import React, { useMemo } from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import FinancialCard from '../../components/FinancialCard'

import { Container, Content, Filters } from './styles'

interface IRouteParams {
    match: {
        params: {
            type: string // same name we set in routes
        }
    }
}


const List: React.FC<IRouteParams> = ({ match }) => {
    const { type } = match.params

    const titleProps = useMemo(() => {
        return type === 'income' ? {
            title: 'Income',
            lineColor: '#F7931B'    
        } : {
            title: 'Expenses',
            lineColor: '#E44C4E'
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

    return (

        <Container>
            <ContentHeader title={titleProps.title} lineColor={titleProps.lineColor}>
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
                <FinancialCard
                    tagColor="#E44C4E"
                    title="Some bill" subtitle="01/01/2000"
                    amount="$50,00"
                />
            </Content>
        </Container>
    )
}

export default List