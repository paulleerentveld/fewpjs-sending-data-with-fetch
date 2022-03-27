
/* const formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
};

const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };


  fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
    })
    .catch(function(error) {
        alert(`Something bad happened! ${error.message}`);
        console.log(error.message);
    }); */

 

function submitData(nameInput,emailInput) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({"name":nameInput,"email":emailInput})
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        let html=document.createElement("p");
        html.innerHTML = object.id;
        document.body.append(html);
        console.log(object.id)
      })
      .catch(function(error) {
        let errorHtml= document.createElement("p");
        errorHtml.innerHTML = error.message;
        document.body.append(errorHtml);
       //alert(`Something bad happened! ${error.message}`);
        console.log(error.message);
      })
};

submitData();