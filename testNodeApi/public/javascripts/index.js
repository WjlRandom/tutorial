/* axios.get('/random/11/90')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    }); */
axios.post('/saveUser', {
        name: "weijinlong",
        age: "100"
    })
    .then(function(response) {
        console.log(response.data.result);
    })
    .catch(function(error) {
        console.log(error);
    });