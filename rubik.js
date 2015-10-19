cube.style.webkitTransform = 
"rotateX(" + x + "deg) rotateY(" + y + "deg)";

//test

var Side = function(c1, c2, c3, c4, c5, c6, c7, c8, c9){
    this.appendEdge(co1, co2, co3, p1, p2, p3)
        {
        this[("c" + p1.toString())] = co1;
        this[("c" + p2.toString())] = co2;
        this[("c" + p3.toString())] = co3;
        };
    this.getEdge(num1, num2, num3)
        {
        var a = "s" + num1.toString();
        var b = "s" + num2.toString();
        var c = "s" + num3.toString();
        return {this[a], this[b], this[c]};
        };
    this.setAll(clr)
        {
        for(var i = 1; i <= 9; i++)
            {
            this[("c" + i.toString)] = clr;
            }
        };
    this.rotate(numOfRot)
        {
        for(i=0; i<numOfRot; i++)
            {
            var temp1 = c1;
            var temp2 = c2;
            var temp3 = c3;
            c1= c7;
            }
        };
    this.getAll()
        {
        return {this.c1, this.c2, this.c3, this.c4, this.c5, this.c6, this.c7, this.c8, this.c9};
        };
};
var side1 = new Side();
side1.setAll("blue");