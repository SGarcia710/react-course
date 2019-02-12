function leftPad(number) {
  const pad = '00'
  return pad.substring(0, pad.length - number.length) + number;
}

export function formatedTime(sec){
  const minutes = parseInt(sec / 60, 10)
  const seconds = parseInt(sec % 60, 10)
  return `${minutes}:${leftPad(seconds.toString())}`
}