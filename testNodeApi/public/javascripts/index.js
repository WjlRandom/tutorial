$(".btn").click(function() {
    axios
        .post("/getCertInfo", {})
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
});