const changeStyle = (bgColor: string) => {
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

export {changeStyle}