import React, { useMemo, useState } from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import DashboardInfoCard from '../../components/DashboardInfoCard'
import DashboardBalanceSituation from '../../components/DashboardBalanceSituation'
import PieChartCard from '../../components/PieChartCard'
import BalanceHistory from '../../components/BalanceHistory'

import income from '../../files/income'
import expenses from '../../files/expenses'

import monthsList from '../../utils/months'

import happyIcon from '../../assets/happy.svg'
import sadIcon from '../../assets/sad.svg'
import grinningIcon from '../../assets/grinning.svg'

import { Container, Content  } from './styles'

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

    const totalExpenses = useMemo(() => {
        let total: number = 0

        expenses.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1

            if(month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                } catch {
                    throw new Error("Value can't be converted to numeric.")
                }
            }
        })

        return total

    }, [monthSelected, yearSelected])

    const totalIncome = useMemo(() => {
        let total: number = 0

        income.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1

            if(month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                } catch {
                    throw new Error("Value can't be converted to numeric.")
                }
            }
        })

        return total
        
    }, [monthSelected, yearSelected])

    const totalBalance = useMemo(() => {
        return totalIncome - totalExpenses
    }, [totalExpenses, totalIncome])

    const balanceMessage = useMemo(() => {
        if (totalBalance < 0) {
            return {
                title: "Not good!",
                description: "Your balance is negative.",
                footerMsg: "You should try to save money or improve your income!",
                icon: sadIcon
            }
        } else if (totalBalance === 0) {
            return {
                title: "Phew!",
                description: "Your balance is 0.",
                footerMsg: "You should try to save money or improve your income!",
                icon: grinningIcon
            }
        } else {
            return {
                title: "Good job!",
                description: "Your balance is positive.",
                footerMsg: "Consider investing some money!",
                icon: happyIcon
            }
        }
    }, [totalBalance])

    const expensesPercentBasedOnIncome = useMemo(() => {
        let data = []

        if (totalIncome < totalExpenses) {
            data = [
                {
                    value: 100,
                    percent: ">100%",
                    color: "#E44C4E"
                },
                {
                    value: 0,
                    color: '#F7931B'
                }
            ]
        } else if (totalIncome === totalExpenses) {
            data = [
                {
                    value: 100,
                    percent: "100%",
                    color: "#E44C4E"
                },
                {
                    value: 0,
                    color: '#F7931B'
                }
            ]
        } else {
            data = [
                {
                    value: totalExpenses,
                    percent: (((totalExpenses / totalIncome) * 100).toFixed(1)) + '%',
                    color: "#E44C4E"
                },
                {
                    value: (totalIncome - totalExpenses),
                    color: '#F7931B'
                }
            ]
        }

        return data
    }, [totalIncome, totalExpenses])

    const balanceHistoryData = useMemo(() => {
        return monthsList.map((_, monthIndex) => {

            let monthIncome = 0
            income.forEach(item => {
                const date = new Date(item.date)
                const month = date.getMonth()
                const year = date.getFullYear()

                if(month === monthIndex && year === yearSelected) {
                    try {
                        monthIncome += Number(item.amount)
                    } catch {
                        throw new Error("Value can't be converted to numeric.")
                    }
                }
            })

            let monthExpenses = 0

            expenses.forEach(item => {
                const date = new Date(item.date)
                const month = date.getMonth()
                const year = date.getFullYear()

                if(month === monthIndex && year === yearSelected) {
                    try {
                        monthExpenses += Number(item.amount)
                    } catch {
                        throw new Error("Value can't be converted to numeric.")
                    }
                }
            })

            return {
                monthNumber: monthIndex,
                monthName: monthsList[monthIndex].substr(0, 3),
                monthIncome,
                monthExpenses
            }
        }).filter(item => {
            const lastYear = years[0].value
            let lastMonth = 0

            expenses.forEach(item => {
                const date = new Date(item.date)
                const month = date.getMonth()
                const year = date.getFullYear()

                if(month > lastMonth && year === lastYear) {
                    lastMonth = month
                }
            })

            income.forEach(item => {
                const date = new Date(item.date)
                const month = date.getMonth()
                const year = date.getFullYear()

                if(month > lastMonth && year === lastYear) {
                    lastMonth = month
                }
            })

            return (yearSelected === lastYear && item.monthNumber <= lastMonth) || (yearSelected < lastYear)
        })
    }, [yearSelected, years])

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month)
            setMonthSelected(parseMonth)
        } catch {
            throw new Error('Invalid month value.')
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year)
            setYearSelected(parseYear)
        } catch {
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
                        defaultValue={yearSelected}
                    />
            </ContentHeader>
            <Content>
                    <DashboardInfoCard
                        title="Balance"
                        amount={totalBalance}
                        footerText="Based on your income and expenses for this month and year."
                        icon="dollar"
                        color='#4E41F0'
                    >
                    </DashboardInfoCard>
                    <DashboardInfoCard
                        title="Income"
                        amount={totalIncome}
                        footerText="Based on your income for this month and year."
                        icon="arrowUp"
                        color='#F7931B'
                    >
                    </DashboardInfoCard>
                    <DashboardInfoCard
                        title="Expenses"
                        amount={totalExpenses}
                        footerText="Based on your expenses for this month and year."
                        icon="arrowDown"
                        color='#E44C4E'
                    >
                    </DashboardInfoCard>
                    <DashboardBalanceSituation
                        title={balanceMessage.title}
                        description={balanceMessage.description}
                        footerMsg={balanceMessage.footerMsg}
                        icon={balanceMessage.icon}
                    />
                    <PieChartCard data={expensesPercentBasedOnIncome} />
                    <BalanceHistory
                        data={balanceHistoryData}
                        lineColorExpenses="#E44C4E"
                        lineColorIncome="#F7931B"
                    />
            </Content>
        </Container>
    )
}

export default Dashboard