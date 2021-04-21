import React from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import FinancialCard from '../../components/FinancialCard'

import { Container, Content, Filters } from './styles'

const List: React.FC = () => {

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
            <ContentHeader title="Expenses" lineColor="#F7931B">
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