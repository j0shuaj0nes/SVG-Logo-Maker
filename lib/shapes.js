class Circle {
    constructor(shapeColour, textColour, text){
        this.shapeColour = shapeColour
        this.textColour = textColour
        this.text = text 
    }
    render(){
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
               <circle cx="150" cy="100" r="80" fill="${this.shapeColour}" />
               <text x="150" y="100" fill="${this.textColour}">${this.text}</text>
   
         </svg>
        `
    }
}

class Triangle {
    constructor(shapeColour, textColour, text){
        this.shapeColour = shapeColour
        this.textColour = textColour
        this.text = text 
    }
    render(){
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColour}" />
               <text x="150" y="100" fill="${this.textColour}">${this.text}</text>
   
         </svg>
        `
    }
}

class Square {
    constructor(shapeColour, textColour, text){
        this.shapeColour = shapeColour
        this.textColour = textColour
        this.text = text 
    }
    render(){
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200px" height="200px" fill="${this.shapeColour}" />
               <text x="150" y="100" fill="${this.textColour}">${this.text}</text>
   
         </svg>
        `
    }
}