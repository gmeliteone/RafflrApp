(function(){
	
	var rafflrApp = angular.module("rafflrApp", []);

	var model = {
		names: ["John", "Jeff", "Jack"]
	};

	rafflrApp.controller('RafflrController', function(){

		this.userList=model;
		this.userName="";
		this.newName="";
		this.message="";

			
		this.myFunction=function(){
			

			var randomName = this.getRandomName();
			

			//alert("Random Name Choosen was "+randomName);
			this.message="Random Name Choosen was "+randomName+".";

			if (this.userName.toLowerCase()==randomName.toLowerCase()){
			//	alert("It's a match!");
				this.message+="\n"+"It's a match!";
			} 
			else if (this.exists(this.userName)){
			//	alert("Better luck next time");
				this.message+="\n"+"Better luck next time";
			}

			else {
			//	alert("You cannot submit "+ this.userName);
				this.message+="\n"+"You cannot submit "+ this.userName;
				
			}

		}

		this.setUserName=function(name){
			var properCase = name.charAt(0).toUpperCase()+name.substring(1).toLowerCase();
			if (this.exists(properCase)){
			//	alert("User already exists!");
				this.message="User already exists!";
			} 
			else {
			this.userList.names.push(properCase);
			this.newName="";
			}	
		}

		this.exists = function (name){
			var properCase = name.charAt(0).toUpperCase()+name.substring(1).toLowerCase();
			return (this.userList.names.indexOf(properCase)>-1)
		}

		this.getRandomName = function (){
			return this.userList.names[Math.floor((Math.random() * (this.userList.names.length)))];
		}

	});


})();