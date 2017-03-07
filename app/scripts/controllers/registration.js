'use strict'
angular.module('htApp')
.controller('regCntrl',['$scope','$location','regFactory',
	function($scope,$location,regFactory){
		console.log('reg controller');


		$scope.pswMatch=false;
	   $scope.confirmPassword = function(){
		console.log($scope.password ,'::::::$scope.confirmpassword :::::: ',$scope.confirmpassword);
		if($scope.password != $scope.confirmpassword){
         	$scope.confirmePwd="Passwords do not match. ";
         	$scope.pswMatch= true;
         }else{
            $scope.pswMatch=false;
         }
	}

	$scope.register=function()
	{

        
		var register = {};
		register.firstName=$scope.fName;
		register.lastName=$scope.lName;
		register.email=$scope.email;
		register.phone=$scope.phone;
		register.password=$scope.password;
		 var confirmPassword=$scope.confirmpassword;
         if(register.password != confirmPassword){
         	alert("Passwords do not match. ");
         	return false;
         }

     var textbox = document.getElementById("textbox");
    if(textbox.value.length <= 10 && textbox.value.length >= 4){
    
    }
    else{
        alert("make sure the password is between 4-10 characters long");
        return false;
    }

		register.address = [];
		var addr ={}; 
		addr.addressLine1=$scope.Line1;
		addr.addressLine2=$scope.Line2;
		addr.city=$scope.City;
		addr.state=$scope.State;
		addr.pin=$scope.Pin;
		register.address.push(addr);

		



		console.log('register:::::::::::',register);
		//console.log($scope.firstName,$scope.lastName,$scope.email,$scope.phoneNumber,$scope.line1,$scope.line2,$scope.city,$scope.state,$scope.pin);
        regFactory.getRegDetailes(register).then(function(response){
        	console.log('response:::::::::::',response);
        	$scope.msg= response.message;
        	console.log('response:::::::::::',$scope.msg);
        	//console.log('response:::::11111111111111::::::',$scope.msg.indexOf('already'));
        	if($scope.msg.indexOf('seccessfully')>=0){
        		$location.path('/registrationStatus/'+$scope.msg);
        	}
        	else{
        		$location.path('/registration');
        	}

        });
       // $scope.Register.push($scope.register);


	}

	}]);