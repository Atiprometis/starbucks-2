	"use strict";

		window.onload = function(){
			var btn = document.getElementById("logo");
			btn.onclick = myAlertOutput;
			
			var btn = document.getElementById("logo-2");
			btn.onclick = myAlertOutput2;
		}

		

		var num = 0 ;
			function myAlertOutput() {
			
				var icon = document.getElementById("logo");	
			
				var img1 = "images/st-1.png";		
				var img2 = "images/st-2.png";
				num++;		
				if(num%2 ==1) {
					icon.src = img2;
					num == 0 ;

				}
				else if(num%2 ==0){
						icon.src = img1;
						num ==1 ;
				}
			}

			function myAlertOutput2() {
			
				var icon = document.getElementById("logo-2");	
			
				var img1 = "images/st-3.png";		
				var img2 = "images/st-4.png";
				num++;		
				if(num%2 ==1) {
					icon.src = img2;
					num == 0 ;

				}
				else if(num%2 ==0){
						icon.src = img1;
						num ==1 ;
				}
			}
		