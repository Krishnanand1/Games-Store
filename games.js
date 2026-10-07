const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");
const profileButton = document.getElementById("profileButton");
const accountMenu = document.getElementById("accountMenu");
const searchInput = document.getElementById("searchInput");
const games = document.querySelectorAll(".game-card");
const cartCount = document.getElementById("cartCount");

let cart = 0;


navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(x => x.classList.remove("active"));

        item.classList.add("active");

        pages.forEach(page => page.classList.remove("active-page"));

        const pageName = item.dataset.page;

        const selectedPage =
            document.getElementById(pageName + "Page");

        if(selectedPage){
            selectedPage.classList.add("active-page");
        }

        accountMenu.classList.remove("show");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

});


profileButton.addEventListener("click", e => {

    e.stopPropagation();

    accountMenu.classList.toggle("show");

});


document.addEventListener("click", e => {

    if(!accountMenu.contains(e.target) &&
       e.target !== profileButton){

        accountMenu.classList.remove("show");

    }

});


searchInput.addEventListener("input", () => {

    const value =
        searchInput.value.toLowerCase().trim();

    games.forEach(game => {

        const name =
            game.dataset.name.toLowerCase();

        if(name.includes(value)){

            game.style.display = "";

        }else{

            game.style.display = "none";

        }

    });

});


document.querySelectorAll(".add-btn").forEach(button => {

    button.addEventListener("click", e => {

        cart++;

        cartCount.textContent = cart;

        button.textContent = "Added ✓";

        button.style.background = "#36bdf2";

        button.style.color = "#111";

        setTimeout(() => {

            button.textContent = "Add to Cart";

            button.style.background = "";

            button.style.color = "";

        },1500);

    });

});


document.getElementById("cartButton").addEventListener("click", () => {

    if(cart === 0){

        alert("Your cart is empty.");

    }else{

        alert(
            "You have " +
            cart +
            " game" +
            (cart > 1 ? "s" : "") +
            " in your cart."
        );

    }

});


function showLibrary(){

    navItems.forEach(x =>
        x.classList.remove("active")
    );

    document
        .querySelector('[data-page="library"]')
        .classList.add("active");

    pages.forEach(page =>
        page.classList.remove("active-page")
    );

    document
        .getElementById("libraryPage")
        .classList.add("active-page");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


document.querySelectorAll(".library-tab").forEach(tab => {

    tab.addEventListener("click", () => {

        document
            .querySelectorAll(".library-tab")
            .forEach(x => {
                x.classList.remove("active");
            });

        tab.classList.add("active");

    });

});


document.querySelectorAll(".top-link").forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelectorAll(".top-link")
            .forEach(x => {
                x.classList.remove("active-top");
            });

        link.classList.add("active-top");

    });

});


document.querySelector(".primary-btn").addEventListener("click", () => {

    showLibrary();

});


document.querySelectorAll(".account-menu button").forEach(button => {

    button.addEventListener("click", () => {

        const text = button.textContent;

        if(text === "Sign Out"){

            alert("You have been signed out.");

        }else{

            alert(text);

        }

        accountMenu.classList.remove("show");

    });

});