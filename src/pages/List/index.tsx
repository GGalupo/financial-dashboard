import React from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import FinancialCard from '../../components/FinancialCard'

import { Container, Content } from './styles'

const List: React.FC = () => {

    const options = [
        {value: 'Gustavo', label: 'Gustavo'},
        {value: 'Carol', label: 'Carol'},
        {value: 'Ana', label: 'Ana'}
    ]

    return (

        <Container>
            <ContentHeader title="Expenses" lineColor="#F7931B">
                <SelectInput options={options}/>
            </ContentHeader>
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