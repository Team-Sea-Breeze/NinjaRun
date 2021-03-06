/**
 * Created by Nick on 25/7/2015.
 */


var Rectangle = (function () {
    var Rectangle = {};

    Rectangle.init = function (left, top, w, h) {
        this.left = left || 0;
        this.top = top || 0;
        this.width = w || 0;
        this.height = h || 0;

        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
        return this;
    };

    Rectangle.set = function (x, y) {
        this.left = x;
        this.top = y;
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
    };

    Rectangle.ifWithin = function (rectObj) {
       // console.log(this.left, this.right, this.top, this.bottom, " obj ", rectObj.left, rectObj.right, rectObj.top, rectObj.bottom);

        if(
            this.left > rectObj.left &&
            this.top > rectObj.top &&
            this.right < rectObj.right &&
            this.bottom < rectObj.bottom
        ) {return true}
        else return false;
        //
        //return (this.left < rectObj.right &&
        //this.right > rectObj.left &&
        //this.top < rectObj.bottom &&
        //this.bottom > rectObj.top)
    };


    return Rectangle;
})();
