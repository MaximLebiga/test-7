const changeBgColor = (bgColor: string) => {
  switch (bgColor) {
    case 'orange':
      return 'bg-orange-400'
    case 'amber':
      return 'bg-amber-400'
    case 'lime':
      return 'bg-lime-400'
    case 'emerald':
      return 'bg-emerald-400'
    default:
      return 'bg-white-400'
  }
}

const changeColumnCount = (columnCount: string) => {
  switch (columnCount) {
    case '2':
      return 'grid-cols-2'
    case '3':
      return 'grid-cols-3'

    default:
      return 'grid-cols-1'
  }
}

export { changeBgColor, changeColumnCount }