//https://www.codewars.com/kata/5870db16056584eab0000006

function getDartboardScore(x, y) {
  
    function XYtoRD(xcor,ycor) { // transform cartesian coordinates to polar
      if( xcor === 0 && ycor === 0) return [0,0] // check for zeroz
      const hypotinus = Math.sqrt(Math.pow(xcor,2) + Math.pow(ycor,2)) // radius same as hypotinus of trangle
      let grad = Math.atan2(ycor,xcor) * 180 / Math.PI // taking a degrees from radian with arctg . i'm gonna call it GRAD but its degree be sure
      if (grad < 0) grad += 360 // if i got negative degree, its become outer trangle wich is positive
      return [hypotinus,grad]
    }

    const bullsEye = 12.7 / 2 //it's need to transform all diametees into radius
    const bull = 31.8 / 2
    const doubleOut = 340 / 2
    const [radius, degree] = XYtoRD(x,y)
    
    if (radius > doubleOut) return 'X' 
    else if (radius <= bullsEye) return "DB"
    else if (radius <= bull) return "SB" //check for radius only, cuz' bullsEye ,bull n outboard don't need a trangle degree
    
  
    const tripleIn = 198 / 2
    const tripleOut = 214 / 2
    const doubleIn = 324 / 2
    let multiplier = ''
    if(radius >= doubleIn && radius <= doubleOut) multiplier = 'D'
    else if (radius >= tripleIn && radius <= tripleOut) multiplier = 'T'
    
    const pointarray = [6,13,4,18,1,20,5,12,9,14,11,8,16,7,19,3,17,2,15,10]
    const point = pointarray[Math.round(degree / (360 / pointarray.length))]||6
    return `${multiplier}${point}`
}