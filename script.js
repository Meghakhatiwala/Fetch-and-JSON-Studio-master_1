// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      // TODO: do something after fetching and receiving a response
         response.json().then(function(json) {
          const destination = document.getElementById("container");
          //let index = 0;
          for (let index = 0; index<json.length; index++) {
          //destination.addEventListener("click", function(){
              destination.innerHTML += `
              <div class="astronaut">
                <div class="bio">
                   <h3>${json[index].firstName} ${json[index].lastName}</h3>
                   <ul>
                     <li>Hours in space: ${json[index].hoursInSpace}</li>
                     <li>Active: ${json[index].active}</li>
                     <li>Skills: ${json[index].skills}</li>
                   </ul>
                </div>
                  <img class="avatar" src=${json[index].picture} ></img>
              </div>
              `;
            }
              //index = (index + 1) % json.length;
            //});
         });
     });
 });