const headers = document.querySelectorAll("p img, div.image-wrapper, img.fade-in-img")

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if (entry.intersectionRatio >= 0.1) {
      entry.target.classList.add("in-view")
  } else {
      entry.target.classList.remove("in-view")
  }
})
}, {
threshold:[0, 0.1, 1]
})

headers.forEach(header => {
  observer.observe(header)
})

function isNavVisible(nav) {
  return ( nav.classList.contains('responsive') ? true : false );
}

// grab an element
var myElement = document.querySelector("header");

var nav = document.getElementById('myTopnav');

// construct an instance of Headroom, passing the element
var options = {
    // vertical offset in px before element is first unpinned
    offset : 0,
    // or you can specify tolerance individually for up/down scroll
    tolerance : {
        up : 10,
        down : 0
    },
    onUnpin: function() {
      if ( isNavVisible(nav) ) {
        this.elem.classList.remove(this.classes.unpinned);
        this.elem.classList.add(this.classes.pinned);
      }
      else {
        this.elem.classList.add(this.classes.unpinned);
        this.elem.classList.remove(this.classes.pinned);
      }
    }


};

var headroom = new Headroom(myElement, options);
// initialise
headroom.init();


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click()

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  var toggleTag = document.getElementById("toggleTag");
  if (x.className === "topnav") {
    x.className += " responsive";
    toggleTag.innerHTML = '<img src="/assets/img/close.svg">';
  } else {
    x.className = "topnav";
    toggleTag.innerHTML = '<img src="/assets/img/menu.svg">';
  }

}
