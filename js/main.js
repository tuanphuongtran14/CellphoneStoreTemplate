window.onload = function () {
    toggleMenuAndSearch();
    playSlider();
    selectByThumbnail();
}

function playSlider() {
    var flkty = new Flickity( '.gallery', {
        autoPlay: 5000
    });
    flkty.playPlayer();
}

function toggleMenuAndSearch() {
    let menu = document.getElementById("menu--nav");
    let menuParent = document.getElementById("navbar-menu");

    
    let searchBar = document.getElementById("search-bar");
    let searchBtn = document.getElementById("search-btn");

    let overBodyLayer = document.getElementById("overlaybody");

    let body = document.getElementById("body");
    let root = document.getElementById("root");

    // If window < 991, display mobile menu version
    if (innerWidth < 991)
        body.appendChild(menu);

    // If user change window width, change to suitable version
    window.onresize = function () {
        if (window.innerWidth >= 992) {
            root.style.transform = "translateX(0%)";
            if (getStyleElement(searchBar, "display") === "none") {
                overBodyLayer.style.display = "none";
                menuParent.appendChild(menu);
                menu.style.transform = "none";
            }    
        } else {
            body.appendChild(menu);
            menu.style.transform = "translateX(-60vw)";
        }
    }

    // If bars button is clicked, open menu on left
    document.getElementById("bars-btn").onclick = function () {
        overBodyLayer.style.display = "block";
        root.style.transform = "translateX(60vw)";
        menu.style.transform = "translateX(60vw)";
    }

    // If search button is clicked, display search bar
    searchBtn.onclick = function () {
        searchBar.style.display = "flex";
        overBodyLayer.style.display = "block";
    }


    // If over body layer is click, close menu or search bar
    overBodyLayer.onclick = function () {
        if(getStyleElement(searchBar, "display") === "none") {
            root.style.transform = "translateX(0%)";
            menu.style.transform = "translateX(-60vw)";
            overBodyLayer.style.display = "none";
        } else {
            searchBar.style.display = "none";
            overBodyLayer.style.display = "none";
        }
    }
}

function getStyleByID(idElement,styleProp)
{
    var element = document.getElementById(idElement);
    if (element.currentStyle)
        var y = element.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = document.defaultView.getComputedStyle(element,null).getPropertyValue(styleProp);
    return y;
}

function getStyleElement(element,styleProp)
{
    if (element.currentStyle)
        var y = element.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = document.defaultView.getComputedStyle(element,null).getPropertyValue(styleProp);
    return y;
}

function selectByThumbnail() {
    var thumbnails = document.getElementsByClassName('thumbnail');
    var flkty = new Flickity('.product-images__slide');

    for(let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].onclick = function() {
            document.querySelector(".thumbnail.active").classList.remove("active");
            this.classList.add("active");
            flkty.select( i, true, false )
        }
    }
}