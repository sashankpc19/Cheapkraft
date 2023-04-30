document.getElementById("search").addEventListener("click", function () {
    //code here
    userinput = [];
    let from = document.getElementById("from");
    let to = document.getElementById("to");
    let date = document.getElementById("date");
    userinput.push(from.value);
    userinput.push(to.value);
    userinput.push(date.value);
    //appending the userinput array to local storage
    localStorage.setItem("userinput", JSON.stringify(userinput));

    //redirecting to the next page
    window.location.href = "prices.html";
});
