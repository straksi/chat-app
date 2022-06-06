const timeStampConvert = (unix_timestamp) => {
    const today = new Date()
    const someDate = new Date(unix_timestamp * 1000);
    const isToday = someDate.getDate() == today.getDate() && someDate.getMonth() == today.getMonth() && someDate.getFullYear() == today.getFullYear()
    const longDate = new Intl.DateTimeFormat('ru-RU', {year: 'numeric', month: 'long', day: 'numeric'}).format(unix_timestamp * 1000)
    const shortDate = new Intl.DateTimeFormat('ru-RU', {hour: 'numeric', minute: 'numeric'}).format(unix_timestamp * 1000)
    return {long: longDate, short: shortDate, isToday}
}
export default timeStampConvert