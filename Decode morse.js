// https://www.codewars.com/users/KeeREAL/completed_solutions

const decodeMorse = (morseCode) => {
    const [space,doubleSpace,voidStr] = [' ','  ','']
    const income = morseCode.split(doubleSpace).map(el => el.split(space))//split into word,and words in to letter
    income.forEach((word,wi,wa) => {
      word.forEach((char,chi,cha)=> { cha[chi] = MORSE_CODE[char] })
      wa[wi]= word.join(voidStr)
    })
    return income.join(space).trim()
  }