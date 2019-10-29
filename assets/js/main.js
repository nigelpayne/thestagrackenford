// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var options = {
    // vertical offset in px before element is first unpinned
    offset : 0,
    // or you can specify tolerance individually for up/down scroll
    tolerance : {
        up : 0,
        down : 0
    }

};

var headroom = new Headroom(myElement, options);
// initialise
headroom.init();
