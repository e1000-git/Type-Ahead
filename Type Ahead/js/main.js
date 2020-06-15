function typing() {
    var filter = document.querySelector("input").value.toLowerCase();
    var li = document.querySelectorAll("li");
    for (var i = 0; i < li.length; i++) {
        var livalue = li[i].innerText.toLowerCase();
        if (livalue.includes(filter)) {
            li[i].style.display = "block";

        } else { li[i].style.display = "none"; }

    }

}