function solveTheCube(){
    let userScramble = document.getElementById("scrambleInput").value;

    let url = "/api/Solve?scramble=" + encodeURIComponent(userScramble);

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("solutionDisplay").innerText = data;
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("solutionDisplay").innerText = "Server Error";
        });
}