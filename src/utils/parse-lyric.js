export function parseLyric (lyricString) {
    const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
    const lyric = []
    const lineString = lyricString.split('\n')
    for (let line of lineString) {
        if (line) {
            const result = parseExp.exec(line)
            if (!result) continue
            const time1 = result[1] * 60 * 1000
            const time2 = result[2] * 1000
            const time3 = result[3].length === 3 ? result[2] * 1 : result[2] * 10
            const time = time1 + time2 + time3
            const content = line.replace(parseExp, '').trim()
            const lineLyricObj = { time, content }
            lyric.push(lineLyricObj)
        }
    }
    return lyric
}