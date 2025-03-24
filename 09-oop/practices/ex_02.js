//Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        const area = this.width * this.height;
        console.log(`Rectangle Area is: ${area}`);
    }

    calculatePerimeter() {
        const perimeter = (this.width * 2) + (this.height * 2);
        console.log(`Rectangle Perimeter is: ${perimeter}`);
    }
}

const rectangle = new Rectangle(10, 20);
rectangle.calculateArea();
rectangle.calculatePerimeter()


