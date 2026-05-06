function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = function() { return this.x; };
  this.getY = function() { return this.y; };
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = function() { return this.beginPoint; };
  this.getEndPoint = function() { return this.endPoint; };
}

function reverse(segment) {
  const begin = segment.getBeginPoint();
  const end = segment.getEndPoint();
  const newBegin = new Point(end.getX(), end.getY());
  const newEnd = new Point(begin.getX(), begin.getY());
  return new Segment(newBegin, newEnd);
}

export { Point, Segment, reverse };