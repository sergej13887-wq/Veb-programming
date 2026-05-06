class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(this.x,{this.x},this.x,{this.y})`;
    }
}

class Segment {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }

    toString() {
        return `[this.point1.toString(),{this.point1.toString()},this.point1.toString(),{this.point2.toString()}]`;
    }
}

export { Point, Segment };