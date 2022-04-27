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