//console.log(document.getElementById("title"))
document.addEventListener("DOMContentLoaded", 
	function (event) {

		function sayHello() {
			//console.log(this);
			this.textContent = "Said it!";
			var name = document.getElementById("name").value;
			var message  = "<h2>Hello " + name + "!</h2>";
			//var message  = "Hello " + name + "!";

			document
				.getElementById("content")
				.innerHTML = message;

			if (name === "student") {
				var title = document
					.querySelector("#title")
					.textContent;

				title +=" & Lovein' it!";

				document
					.querySelector("h1")
					.textContent = title;
			}
		}


		document.querySelector("button")
		.addEventListener("click", sayHello);

		document.querySelector("body")
		.addEventListener("mousemove", 
			function (event) {
				if(event.shiftKey === true) {
					console.log("x: "+event.clientX);
					console.log("y: "+event.clientY);					
				}
			});

	});

