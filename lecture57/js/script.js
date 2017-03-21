// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

    var flag:boolean = false;
    flag = "hi";
    //flag = true;
    console.log(flag);
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
            function (res) {
              var name = res.firstName + " " + res.lastName;
              console.log(name);
              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            }, true);

        
      });
  }
);





