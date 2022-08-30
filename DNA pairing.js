function pairElement(str) {
    return str.split('').map( el => {
      switch(el) {
        case "G": return ["G", "C"]
        case "C": return ["C", "G"]
        case 'A': return ["A", "T"]
        case 'T': return ["T", "A"]
      }
    })
  }
  