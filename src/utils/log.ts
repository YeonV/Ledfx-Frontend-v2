/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const createLogger = (color: string, methodName: string) => (...props: any[]) => {
  const message = typeof props[0] === 'string' ? props[0] : methodName
  const args = typeof props[0] === 'string' ? props.slice(1) : props

  if (color.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
    
  console.log(
    `%c ${message} `,
    `padding: 3px 5px; border-radius: 5px; background: #${color}; color: #${(parseInt(color.slice(0, 2), 16) * 0.299 + parseInt(color.slice(2, 4), 16) * 0.587 + parseInt(color.slice(4, 6), 16) * 0.114) > 10
      ? '000000'
      : 'FFFFFF'}; font-weight: 700; display: inline-block;`,
    ...args
  )
}

const log: any = (...props: any[]) => {
  const message = typeof props[0] === 'string' ? props[0] : 'log'
  const args = typeof props[0] === 'string' ? props.slice(1) : props
  console.log(
    `%c ${message} `,
    'padding: 3px 5px; border-radius: 5px; background: #000000; color: #fff; font-weight: 700; display: inline-block;',
    ...args
  )
}

log.info = createLogger('0dbedc', 'info')
log.success = createLogger('1db954', 'success')
log.warning = createLogger('FF7514', 'warning')
log.error = createLogger('800000', 'error')

export default log