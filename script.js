let title = document.querySelector("#title");
let author = document.querySelector("#author");
let year = document.querySelector("#year");
let btn = document.querySelector(".btn");
let booklist = document.querySelector("#book-list");

btn.addEventListener("click", (e) => {
    e.preventDefault()

    if (title.value == "") {
        alert("Malumotlarni to'liq kirgizing")
    }
    else if (author.value == "") {
        alert("Malumotlarni to'liq kirgizing")
    }
    else if (year.value == "") {
        alert("Malumotlarni to'liq kirgizing")
    }
    else {

        let newRow = document.createElement("tr")

        let newTitle = document.createElement("th")
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)

        let newAuthor = document.createElement("th");
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor)

        let newYear = document.createElement("th");
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear)

        booklist.appendChild(newRow);


        title.value = "";
        author.value = "";
        year.value = "";



        let btnDel = document.createElement("input");
        btnDel.setAttribute("type", "submit");
        btnDel.classList.add("btnDel");

        btnDel.style.marginTop = "10px";
        btnDel.style.border = "none";
        btnDel.value = "🗑";
        
        newRow.appendChild(btnDel);


        btnDel.addEventListener("click", (e) => {
            newRow.removeChild(newTitle);
            newRow.removeChild(newAuthor);
            newRow.removeChild(newYear);
            newRow.removeChild(btnDel)
        })


    }
});


