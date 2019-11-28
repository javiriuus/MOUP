function openForm(value) { //Abre el formulario
    var elem = document.getElementById("addLanguage");
    elem.style.display = "block";
}

function cancel() {
    document.getElementById("addLanguageForm").reset();
    var elem = document.getElementById("addLanguage");
    elem.style.display = "none";
}

function createElem() {
    var lenguaje = document.addLanguageForm.title.value;

    if (lenguaje == 'Python') {
        var newLi = document.createElement('li');
        newLi.setAttribute('class', 'nav-item dropdown');
        newLi.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span>` + lenguaje + `</span>
    </a>
    <div class="dropdown-menu" aria-labelledby="pagesDropdown">
        <a class="dropdown-item" href="login.html">Hello World</a>
        <a class="dropdown-item" href="login.html">Constructor</a>
    </div>`;
        var current = document.getElementById('add');
        document.getElementById('navigation').insertBefore(newLi, current);
        document.getElementById("addLanguageForm").reset();
        var elem = document.getElementById("addLanguage");
        elem.style.display = "none";

    } else if (lenguaje == 'Java') {
        var newLi = document.createElement('li');
        newLi.setAttribute('class', 'nav-item dropdown');
        newLi.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span>` + lenguaje + `</span>
    </a>
    <div class="dropdown-menu" aria-labelledby="pagesDropdown">
        <a class="dropdown-item" href="login.html">Hello World</a>
        <a class="dropdown-item" href="login.html">Constructor</a>
    </div>`;
        var current = document.getElementById('add');
        document.getElementById('navigation').insertBefore(newLi, current);
        document.getElementById("addLanguageForm").reset();
        var elem = document.getElementById("addLanguage");
        elem.style.display = "none";

    } else if (lenguaje == 'JavaScript' || lenguaje == 'Java Script') {

        var newLi = document.createElement('li');
        newLi.setAttribute('class', 'nav-item dropdown');
        newLi.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span>` + lenguaje + `</span>
    </a>
    <div class="dropdown-menu" aria-labelledby="pagesDropdown">
        <a class="dropdown-item" href="login.html">Hello World</a>
        <a class="dropdown-item" href="login.html">Constructor</a>
    </div>`;
        var current = document.getElementById('add');
        document.getElementById('navigation').insertBefore(newLi, current);
        document.getElementById("addLanguageForm").reset();
        var elem = document.getElementById("addLanguage");
        elem.style.display = "none";

    } else if (lenguaje == 'CSS') {

        var newLi = document.createElement('li');
        newLi.setAttribute('class', 'nav-item dropdown');
        newLi.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span>` + lenguaje + `</span>
    </a>
    <div class="dropdown-menu" aria-labelledby="pagesDropdown">
        <a class="dropdown-item" href="login.html">Hello World</a>
        <a class="dropdown-item" href="login.html">Constructor</a>
    </div>`;
        var current = document.getElementById('add');
        document.getElementById('navigation').insertBefore(newLi, current);
        document.getElementById("addLanguageForm").reset();
        var elem = document.getElementById("addLanguage");
        elem.style.display = "none";

    } else if (lenguaje == 'Ruby') {

        var newLi = document.createElement('li');
        newLi.setAttribute('class', 'nav-item dropdown');
        newLi.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span>` + lenguaje + `</span>
    </a>
    <div class="dropdown-menu" aria-labelledby="pagesDropdown">
        <a class="dropdown-item" href="login.html">Hello World</a>
        <a class="dropdown-item" href="login.html">Constructor</a>
    </div>`;
        var current = document.getElementById('add');
        document.getElementById('navigation').insertBefore(newLi, current);
        document.getElementById("addLanguageForm").reset();
        var elem = document.getElementById("addLanguage");
        elem.style.display = "none";

    } else {

        var newLi = document.createElement('li');
        newLi.setAttribute('class', 'nav-item dropdown');
        newLi.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span>` + lenguaje + `</span>
    </a>
    <div class="dropdown-menu" aria-labelledby="pagesDropdown">
        <a class="dropdown-item" href="login.html">Hello World</a>
        <a class="dropdown-item" href="login.html">Constructor</a>
    </div>`;
        var current = document.getElementById('add');
        document.getElementById('navigation').insertBefore(newLi, current);
        document.getElementById("addLanguageForm").reset();
        var elem = document.getElementById("addLanguage");
        elem.style.display = "none";

    }
}