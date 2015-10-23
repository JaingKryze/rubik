//cube.style.webkitTransform =
//"rotateX(" + x + "deg) rotateY(" + y + "deg)";

//test
//uf

function Edge(st1, st2, st3)
    {
    this.st1 = st1;
    this.st2 = st2;
    this.st3 = st3;
    };
var edg = new Edge("k", "", "");

function Side(c1, c2, c3, c4, c5, c6, c7, c8, c9){
    this.getKeyByValue = function(value)
        {
        for( var prop in this ) {
            if( this.hasOwnProperty( prop ) ) {
                    if( this[ prop ] === value )
                        return prop;
                }
            }
        }
    this.appendEdge = function(edg , p1, p2, p3)
        {
        var i = 1;
        var a;
        var b;
        var c;
        for(var key in this)
        {
            if(p1 == i)
            {
                a = this.getKeyByValue(key);
            }
            if(p2 == i)
            {
                b = this.getKeyByValue(key);
            }
            if(p3 == i)
            {
                c = this.getKeyByValue(key);
            }
        }
            console.log(edg.st1);
        this[a] = edg.st1;
        this[b] = edg.st2;
        this[c] = edg.st3;
        };
    this.getEdge = function(num1, num2, num3)
        {
        var i = 1;
        var a;
        var b;
        var c;
        for(var key in this)
            {
            if(num1 == i)
                {
                a = key;
                }
            if(num2 == i)
                {
                b = key;
                }
            if(num3 == i)
                {
                c = key;
                }
            }
        var e = new Edge(this[a], this[b], this[c]);
        return e;
        };
    this.rotate = function(numOfRot)
        {
        for(var i=0; i<numOfRot; i++)
            {
            var temp1 = c1;
            var temp2 = c2;
            var temp3 = c3;
            c1 = c7;
            }
        };

this.setAll = function(clr)
    {
        for(var key in this)
        {
            this[key] = clr;
        }
    };
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.c4 = c4;
    this.c5 = c5;
    this.c6 = c6;
    this.c7 = c7;
    this.c8 = c8;
    this.c9 = c9;
};

var side1 = new Side("a", "b", "c", "d", "e", "f", "g", "h", "i");
side1.appendEdge((side1.getEdge(1, 2, 3)));