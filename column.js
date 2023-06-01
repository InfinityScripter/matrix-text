const CHARACTER = '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝｸﾘç012345789=*+-<>¦｜Z'; // characters

export class Column { // column class
    constructor(x, fontSize,canvasHeight, context ){ // constructor
      this.x = x; // x position
      this.y = 0; // y position
      this.context = context; // context
        this.canvasHeight = canvasHeight; // canvas height
        this.fontSize = fontSize; // font size
    }

   drawSymbol() { // draw symbol
      if (this.y === 0 && Math.random()<0.98) { // if y position is 0 and random number is less than 0.98
return
      }
     const characterIndex = Math.floor(Math.random() * CHARACTER.length); // random character
     const symbol = CHARACTER[characterIndex] // get character
     this.context.fillText(symbol, this.x, this.y); // fill text

     if(this.y > this.canvasHeight) { // if y position is greater than canvas height
       this.y = 0; // reset y position
     }
        else {
       this.y += this.fontSize // increment y position
     }
   }
}

