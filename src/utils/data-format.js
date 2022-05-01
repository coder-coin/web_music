import moment from 'moment'
//对播放数进行格式化
export function countFormat (count) {
    if (count < 0) return
    if (count < 10000) {
        return count
    } else if (Math.floor(count / 10000) < 10000) {
        return Math.floor(count / 1000) / 10 + '万'
    } else {
        return Math.floor(count / 10000000) / 10 + '亿'
    }
}
//对图片地址进行格式化，按需请求对应大小的图片
export function imageSizeFormat (url, size) {
    return `${url}?param=${size}y${size}`
}
//歌曲资源地址格式化
export function songSourceUrlFormat (id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
//对日期进行格式化
export function dateFormat (time, type) {
    const momentTime = moment(time)
    const year = momentTime.year()
    let month = momentTime.month() + 1
    let date = momentTime.date()
    let hour = momentTime.hour() + 1
    let minute = momentTime.minute() + 1
    let second = momentTime.second() + 1
    if (month < 10) month = '0' + month
    if (date < 10) date = '0' + date
    if (hour < 10) date = '0' + hour
    if (minute < 10) minute = '0' + minute
    if (second < 10) second = '0' + second
    switch (type) {
        case 'yyyy-mm-dd':
            return year + '年' + month + '月' + date + '日'
        case 'mm-dd':
            return month + '月' + date + '日'
        case 'hh:mm':
            return hour + ':' + minute
        case 'hh:mm:ss':
            return hour + ':' + minute + ':' + second
        case 'mm:ss':
            return minute + ':' + second
        default:
            return moment().format('MMMM Do YYYY, h:mm:ss a')
    }
}