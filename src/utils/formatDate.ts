const formatDate = (date: string): string => {
    const toDate = new Date(date)

    let stringDay = toDate.getDate().toString()
    let stringMonth = (toDate.getMonth() + 1).toString(); // starts from 0.
    let stringYear = toDate.getFullYear().toString()

    stringYear = stringYear.slice(-2)

    if (stringMonth.length === 1) {
        stringMonth = "0" + stringMonth
    }

    if (stringDay.length === 1) {
        stringDay = "0" + stringDay
    }

    return `${stringMonth}-${stringDay}-${stringYear}`
}

export default formatDate