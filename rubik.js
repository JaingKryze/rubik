cube.style.transform = 
"rotateX(" + x + "deg) rotateY(" + y + "deg)";

//test
//Home Commit by Justin Herrera

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

var side1 = new Side("a", "b", "c", "d", "e", "f", "g", "h", "i");
side1.appendEdge((side1.getEdge(1, 2, 3)));


function updateCube()
    {
        document.getElementsByClassName(".utl").style.color = up.c1;
        document.getElementsByClassName(".utc").style.color = up.c2;
        document.getElementsByClassName(".utr").style.color = up.c3;
        document.getElementsByClassName(".ucl").style.color = up.c4;
        document.getElementsByClassName(".ucc").style.color = up.c5;
        document.getElementsByClassName(".ucr").style.color = up.c6;
        document.getElementsByClassName(".ubr").style.color = up.c7;
        document.getElementsByClassName(".ubc").style.color = up.c8;
        document.getElementsByClassName(".ubl").style.color = up.c9;

        document.getElementsByClassName(".ftl").style.color = front.c1;
        document.getElementsByClassName(".ftc").style.color = front.c2;
        document.getElementsByClassName(".ftr").style.color = front.c3;
        document.getElementsByClassName(".fcl").style.color = front.c4;
        document.getElementsByClassName(".fcc").style.color = front.c5;
        document.getElementsByClassName(".fcr").style.color = front.c6;
        document.getElementsByClassName(".fbr").style.color = front.c7;
        document.getElementsByClassName(".fbc").style.color = front.c8;
        document.getElementsByClassName(".fbl").style.color = front.c9;

        document.getElementsByClassName(".dtl").style.color = down.c1;
        document.getElementsByClassName(".dtc").style.color = down.c2;
        document.getElementsByClassName(".dtr").style.color = down.c3;
        document.getElementsByClassName(".dcl").style.color = down.c4;
        document.getElementsByClassName(".dcc").style.color = down.c5;
        document.getElementsByClassName(".dcr").style.color = down.c6;
        document.getElementsByClassName(".dbr").style.color = down.c7;
        document.getElementsByClassName(".dbc").style.color = down.c8;
        document.getElementsByClassName(".dbl").style.color = down.c9;

        document.getElementsByClassName(".rtl").style.color = right.c1;
        document.getElementsByClassName(".rtc").style.color = right.c2;
        document.getElementsByClassName(".rtr").style.color = right.c3;
        document.getElementsByClassName(".rcl").style.color = right.c4;
        document.getElementsByClassName(".rcc").style.color = right.c5;
        document.getElementsByClassName(".rcr").style.color = right.c6;
        document.getElementsByClassName(".rbr").style.color = right.c7;
        document.getElementsByClassName(".rbc").style.color = right.c8;
        document.getElementsByClassName(".rbl").style.color = right.c9;

        document.getElementsByClassName(".ltl").style.color = left.c1;
        document.getElementsByClassName(".ltc").style.color = left.c2;
        document.getElementsByClassName(".ltr").style.color = left.c3;
        document.getElementsByClassName(".lcl").style.color = left.c4;
        document.getElementsByClassName(".lcc").style.color = left.c5;
        document.getElementsByClassName(".lcr").style.color = left.c6;
        document.getElementsByClassName(".lbr").style.color = left.c7;
        document.getElementsByClassName(".lbc").style.color = left.c8;
        document.getElementsByClassName(".lbl").style.color = left.c9;

        document.getElementsByClassName(".btl").style.color = back.c1;
        document.getElementsByClassName(".btc").style.color = back.c2;
        document.getElementsByClassName(".btr").style.color = back.c3;
        document.getElementsByClassName(".bcl").style.color = back.c4;
        document.getElementsByClassName(".bcc").style.color = back.c5;
        document.getElementsByClassName(".bcr").style.color = back.c6;
        document.getElementsByClassName(".bbr").style.color = back.c7;
        document.getElementsByClassName(".bbc").style.color = back.c8;
        document.getElementsByClassName(".bbl").style.color = back.c9;
    }

