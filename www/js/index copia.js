/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		//document.addEventListener("pause", onPause, false);
		
		
		//admob.initAdmob("ca-app-pub-5263503085775846/1999366017","ca-app-pub-5263503085775846~9522632812"); //admob IOS
		//admob.showBanner(admob.BannerSize.BANNER,admob.Position.BOTTOM_APP);
		
		
		//// ANDROID //////
		
		var admobid = {};
		
		 if( /(android)/i.test(navigator.userAgent) ) {
			admobid = {
			banner: 'ca-app-pub-5263503085775846/1999366017',
			interstitial: 'ca-app-pub-5263503085775846~9522632812'
		  };
		 } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
			admobid = {
			banner: 'ca-app-pub-5263503085775846/1999366017',
			interstitial: 'ca-app-pub-5263503085775846~9522632812'
		  };
		 } else {
			admobid = {
			banner: 'ca-app-pub-5263503085775846/1999366017',
			interstitial: 'ca-app-pub-5263503085775846~9522632812'
		  };
		 }
		
		 if(AdMob) AdMob.createBanner( {
			adId:admobid.banner,
			position:AdMob.AD_POSITION.BOTTOM_CENTER,
			autoShow:true} );
		
		

		 if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
		
		 if(AdMob) AdMob.showInterstitial();
		
		///// FINE /////
		
		document.addEventListener("touchmove",function(e) {
			e.preventDefault();
		},
		false
		);
		
		

		
		if (localStorage.getItem("email") === null || localStorage.getItem("email")=="null" || typeof(localStorage.getItem("email")) == 'undefined' || localStorage.getItem("email")==0 || localStorage.getItem("email")=="") {
			
			window.location.href = "Login.html";
			
		}
		
		
		
		if (localStorage.getItem("nomefoto") === null || localStorage.getItem("nomefoto")=="null" || typeof(localStorage.getItem("nomefoto")) == 'undefined' || localStorage.getItem("nomefoto")==0 || localStorage.getItem("nomefoto")=="") {
			
			localStorage.setItem("foto","default.png")
			
		}
		else{
			nomefoto = localStorage.getItem("nomefoto")+".jpg";
			localStorage.setItem("foto",nomefoto)
		}
		
		
		
		////////// controllo internet ///////////////
		
		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){
		
			
		  var uno;
		  var due;
		  var tre;
		  var quattro;
		  var numero = 1;
		  var numero1 = 2;
		  var numero2 = 3;
		  var numero3 = 4;
		  var numero4 = 5;
		  var numero5 = 6;
			
		 //DATA
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;//January is 0, so always add + 1
			
			var ora = today.getHours()
			if(ora<10){ora="0"+ora}
			
			var minuti = today.getMinutes();
			if(minuti<10){minuti="0"+minuti}
			
			var secondi = today.getSeconds();
			if(secondi<10){secondi="0"+secondi}
			
			var yyyy = today.getFullYear();
			if(dd<10){dd="0"+dd}
			if(mm<10){mm="0"+mm}
			today = dd+'/'+mm+'/'+yyyy;
			
			$("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
			var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
			
			localStorage.setItem("ora_cell", ora_cell);
			
			
		  localStorage.setItem("start","0")
			
		  var somma=0;
		  var punto=0;
		  $("#imgutente2").attr("src","http://www.msop.it/public/rides/"+localStorage.getItem("foto")+"");
			
			
			//alert(localStorage.getItem("punteggio1"))
			
			
			if(localStorage.getItem("punteggio1") === null || localStorage.getItem("punteggio1") == "" || localStorage.getItem("punteggio1") == "0" || typeof(localStorage.getItem("punteggio1")) == 'undefined' ||localStorage.getItem("punteggio1")==0){
				
			   $("#lastpunt").hide()
			}
			else{
				$("#lastpunt").show()
				$("#punteggio2").html(localStorage.getItem("punteggio1"))
			}
			
			localStorage.setItem("punteggio1","0")
			
		}
		
		//////////////////////////////////////////
		
		$(document).on("touchstart", "#condividi", function(e){
					   
			//alert()
					   
			if(localStorage.getItem("emailfacebook") == "1"){
				window.plugins.socialsharing.shareViaFacebook('Sfidami su AddAll', 'http://www.msop.it/addall/logo.png', 'www.msop.it', function() {console.log('share ok')}, function(onPause){})
			}
			else{
					navigator.notification.alert(
					 							'Devi fare login con Facebook',  // message
												 alertDismissed,         // callback
												 'Login',            // title
												 'OK'                  // buttonName
					);
			}
					   
					   e.stopImmediatePropagation();
					   
					   e.preventDefault();
					   
					   return false;
					   
					   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
		});
		
		
		
		$(document).on("touchstart", "#loading", function(e){
					   
			localStorage.setItem("session10","0")
			localStorage.setItem("punteggio1","0")
			somma=0
			punto = 0
			$("#somma").html("0")
			$("#totale").html("0")
					   
		});
		
		
		$(document).on("tap", "#risultati", function(e){
					   
				$("#tbllancia").hide()
					   
				//window.location.href = "#home4";
				$.mobile.changePage ($("#home4"));
				
				$("#esatte5").html("<br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br>")
				
						
				var myScroll2;
					
				myScroll2 = new iScroll('wrapper2', {
											zoom: true,
											click: true,
											hScrollbar: false, 
											vScrollbar: false,
											zoomMin:1,
											zoomMax:2,
											zoomStart:1
										});
										
				setTimeout (function(){
					
					myScroll2.refresh();
							
				}, 1000);
					
	
					   
		});
		
		
		$(document).on("touchstart", "#btnsfida", function(e){
					   
					   //window.location.href = "#home3";
					   $.mobile.changePage ($("#home3"));

					   $("#tbllancia").hide()
					   
					   $("#esatte4").html("<br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br>")
					   
					   
					   var myScroll;
					
						myScroll = new iScroll('wrapper', {
													zoom: true,
													click: true,
													hScrollbar: false, 
													vScrollbar: false,
													zoomMin:1,
													zoomMax:2,
													zoomStart:1
												});
												
												
						setTimeout (function(){
							
							myScroll.refresh();
									
						}, 1000);
						
						
						
						//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
						
						//document.addEventListener('DOMContentLoaded', loaded, false);
	
					   
		});
		
		
		$(document).on("touchstart", "#btnlancia", function(e){
					   
					
					$("#tbllancia").show()
					
					   
					/*window.location.href = "#home4";
				   
					   
					var myScroll2;
					   
					   
					myScroll2 = new IScroll('#wrapper2', { click: true });
					   
					setTimeout (function(){
						myScroll2.refresh();
					}, 500);
					   
					   
					   
					document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
					   
					document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);*/
					   
					   
					//$("#esatte5").html("<br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br><br><br>djskdj ssjdksd  ska da sadas d<br><br>")
					   
					   
		});
		
		
		$(document).on("touchstart", "#indietro", function(e){
					   
			//window.location.href = "index.html";
					   $.mobile.changePage ($("#home"));
					   
		});
		
		
		
		$(document).on("touchstart", "#lanciasfida", function(e){
					   
					   if (document.getElementById("emailsfida").value == "") {
					    navigator.notification.alert(
													'inserire email dello sfidante',  // message
													alertDismissed,         // callback
													'Email Sfidante',            // title
													'OK'                  // buttonName
													);
					   return;
					   }
					   
					   
					   $("#tbllancia").hide()
					   
					   localStorage.setItem("sfida","1")
					   
					   //$.mobile.changePage ($("#home"));
					   
					   $("#btnallenati").hide()
					   $("#btnsfida").hide()
					   $("#btnlancia").hide()
					   
					   $("#load").show()
					   
					   localStorage.setItem("session10","0")
					   
					   localStorage.setItem("esatte","0")
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   $("#totale").html("0/10")
					   $("#bianca0").hide()
					   $("#bianca").hide()
					   $("#bianca1").hide()
					   $("#bianca2").hide()
					   
					   var uno;
					   var due;
					   var tre;
					   var quattro;
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   
					   //DATA
					   var today = new Date();
					   var dd = today.getDate();
					   var mm = today.getMonth()+1;//January is 0, so always add + 1
					   
					   var ora = today.getHours()
					   if(ora<10){ora="0"+ora}
					   
					   var minuti = today.getMinutes();
					   if(minuti<10){minuti="0"+minuti}
					   
					   var secondi = today.getSeconds();
					   if(secondi<10){secondi="0"+secondi}
					   
					   
					   var yyyy = today.getFullYear();
					   if(dd<10){dd="0"+dd}
					   if(mm<10){mm="0"+mm}
					   today = dd+'/'+mm+'/'+yyyy;
					   
					   $("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   $("#stamp2").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
					   
					   localStorage.setItem("ora_cell", ora_cell);
					   
					   
					   localStorage.setItem("start","0")
					   localStorage.setItem("punteggio1","0")
					   var somma=0;
					   var punto=0;
					   
					   //admob.hideBanner()
					   
					   AdMob.removeBanner();
					   
					   localStorage.setItem("esatte",0)
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   playAudio('successSound');
					   
					   localStorage.setItem("session10","0")
					   localStorage.setItem("punteggio1","0")
					   somma=0
					   punto = 0
					   $("#somma").html("0")
					   $("#totale").html("0")
					   $("#gioco").show()
					   
					   
					   $("#going").hide()
					   
					   setTimeout(function() {
								  
								  playAudio('successSound2');
								  
								  $("#load").hide()
								  
								  $("#dati").show()
								  $("#dati0").show()
								  
								  $("#biliardo").show();
								  
								  $("#somma").html("0")
								  $("#totale").html("0")
								  countdown1(0);
								  
								  }, 1000);
					   
					   localStorage.setItem("start","0")
					   
					   prendinumeri3(0)
					   
					   
					   /*
					   
					   $.ajax({
							  type:"GET",
							  url:"http://msop.it/addall/lancia_sfida.php?email="+localStorage.getItem("email")+"&email2=anna.movchan@pokeranswer.it&round=1",
							  contentType: "application/json",
							  //data: {Lat:3,Longi:4},
							  timeout: 7000,
							  jsonp: 'callback',
							  crossDomain: true,
							  success:function(result){
							  
								$.each(result, function(i,item){
									localStorage.setItem("sfida","1")
						
									going();
									 
								});
							  
							  },
							  error: function(){
							  
							  
							  },
							  
							  dataType:"jsonp"});
						
						*/
					   
		});

		
		
		$(document).on("touchstart", "#btnallenati", function(e){
			$("#btnallenati").hide()
			$("#btnsfida").hide()
			$("#btnlancia").hide()
			$("#allenati").show()
		});
		
		
		$(document).on("tap", "#going", function(e){
					   localStorage.setItem("sfida","0")
					   
					   $("#load").show()
					   
					   localStorage.setItem("session10","0")
					   
					   localStorage.setItem("esatte","0")
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   $("#totale").html("0/10")
					   $("#bianca0").hide()
					   $("#bianca").hide()
					   $("#bianca1").hide()
					   $("#bianca2").hide()
					   
					   $("#allenati").hide()
					   
					   var uno;
					   var due;
					   var tre;
					   var quattro;
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   
					   //DATA
					   var today = new Date();
					   var dd = today.getDate();
					   var mm = today.getMonth()+1;//January is 0, so always add + 1
					   
					   var ora = today.getHours()
					   if(ora<10){ora="0"+ora}
					   
					   var minuti = today.getMinutes();
					   if(minuti<10){minuti="0"+minuti}
					   
					   var secondi = today.getSeconds();
					   if(secondi<10){secondi="0"+secondi}
					   
					   
					   var yyyy = today.getFullYear();
					   if(dd<10){dd="0"+dd}
					   if(mm<10){mm="0"+mm}
					   today = dd+'/'+mm+'/'+yyyy;
					   
					   $("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   $("#stamp2").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
					   
					   localStorage.setItem("ora_cell", ora_cell);
					   
					   
					   localStorage.setItem("start","0")
					   localStorage.setItem("punteggio1","0")
					   var somma=0;
					   var punto=0;

					   
			//admob.hideBanner()
					   
			AdMob.removeBanner();
					   
			localStorage.setItem("esatte",0)
			$("#esatte2").html("0")
			$("#esatte3").html("0")
					   
			playAudio('successSound');
					   
			localStorage.setItem("session10","0")
			localStorage.setItem("punteggio1","0")
			somma=0
			punto = 0
			$("#somma").html("0")
			$("#totale").html("0")
			$("#gioco").show()
			
					   
			$("#going").hide()
			
					   setTimeout(function() {
								  
								  playAudio('successSound2');
								  
								  $("#load").hide()
								  
								  $("#dati").show()
								  $("#dati0").show()
								 
								  $("#biliardo").show();
								  
								  $("#somma").html("0")
								  $("#totale").html("0")
								  countdown1(0);
								  
					   }, 1000);
			
			localStorage.setItem("start","0")
					   
			prendinumeri3(0)
					   
		});
		
		
		$(document).on("touchstart", "#going2", function(e){
					   
					   $("#tbllancia").hide()
					   
					   $("#load").show()
					   
					   localStorage.setItem("session10","0")
					   
					   localStorage.setItem("esatte","0")
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   $("#totale").html("0/10")
					   $("#bianca0").hide()
					   $("#bianca").hide()
					   $("#bianca1").hide()
					   $("#bianca2").hide()
					   
					   var uno;
					   var due;
					   var tre;
					   var quattro;
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   
					   //DATA
					   var today = new Date();
					   var dd = today.getDate();
					   var mm = today.getMonth()+1;//January is 0, so always add + 1
					   
					   var ora = today.getHours()
					   if(ora<10){ora="0"+ora}
					   
					   var minuti = today.getMinutes();
					   if(minuti<10){minuti="0"+minuti}
					   
					   var secondi = today.getSeconds();
					   if(secondi<10){secondi="0"+secondi}
					   
					   
					   var yyyy = today.getFullYear();
					   if(dd<10){dd="0"+dd}
					   if(mm<10){mm="0"+mm}
					   today = dd+'/'+mm+'/'+yyyy;
					   
					   $("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   $("#stamp2").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
					   
					   localStorage.setItem("ora_cell", ora_cell);
					   
					   
					   localStorage.setItem("start","0")
					   localStorage.setItem("punteggio1","0")
					   var somma=0;
					   var punto=0;
					   
					   
					   //admob.hideBanner()
					   
					   AdMob.removeBanner();
					   
					   localStorage.setItem("esatte",0)
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   playAudio('successSound');
					   
					   localStorage.setItem("session10","0")
					   localStorage.setItem("punteggio1","0")
					   somma=0
					   punto = 0
					   $("#somma").html("0")
					   $("#totale").html("0")
					   $("#gioco").show()
					   
					   
					   $("#going").hide()
					   
					   setTimeout(function() {
								  
								  playAudio('successSound2');
								  
								  $("#load").hide()
								  
								  $("#dati").show()
								  $("#dati0").show()
								  
								  $("#biliardo").show();
								  
								  $("#somma").html("0")
								  $("#totale").html("0")
								  countdown1(0);
								  
								  }, 1000);
					   
					   localStorage.setItem("start","0")
					   
					   prendinumeri3_15(0)
					   
		});
		
		
		
		
		function prendinumeri3(cosa) {
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/addall/gioco10_3.php?email=sasa@tin.it",
				   contentType: "application/json",
				   //data: {Lat:3,Longi:4},
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   $.each(result, function(i,item){
						  uno = item.num1;
						  due = item.num2;
						  tre = item.num3;
						  
						  //quattro = item.num4;
						  
						  var num1 = Math.floor((Math.random() * 3));
						  
						  if (cosa==0){
						  
						    $("#palla1").attr("src","palle/"+item.num1+".png")
						    $("#palla2").attr("src","palle/"+item.num2+".png")
						    $("#palla3").attr("src","palle/"+item.num3+".png")
						  
						  }
						  else{
						    if(num1==0){
						      $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							}
						    if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
						      $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
						    }
						    if(num1==2){
							 $("#palla1").attr("src","palle/"+item.num1+".png")
							 $("#palla2").attr("src","palle/"+item.num2+".png")
						     $("#palla3").attr("src","palle/"+item.num3+"c.png")
							}
						  }

						  
				   });
				   
			},
			error: function(){
				   
				   
			},
				   
			dataType:"jsonp"});
				
			}
			
		}
		
		
		function prendinumeri(cosa) {
			
			$("#val4").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco10.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $.each(result, function(i,item){
							  uno = item.num1;
							  due = item.num2;
							  tre = item.num3;
							  quattro = item.num4;
							  
							  
							  var num1 = Math.floor((Math.random() * 4));
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/"+item.num4+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/"+item.num4+"c.png")
							  }
							  }
							  
							  /*$("#val1").html(uno)
							  $("#val2").html(due)
							  $("#val3").html(tre)
							  $("#val4").html(quattro)*/
							  
							  });
					   
					   },
					   error: function(){
					   
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			
		}
		
		
		
		function prendinumerimeno1(cosa) {
			
			$("#val4").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			localStorage.setItem("session10","0")
			

			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco10meno1.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $.each(result, function(i,item){
							  uno = item.num1;
							  due = item.num2;
							  tre = item.num3;
							  quattro = item.num4;
							  
							  
							  var num1 = Math.floor((Math.random() * 4));
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+item.num4+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+item.num4+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+item.num4+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/meno"+item.num4+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+item.num4+".png")
							  }
							  }
							  
						 });
					   
					   },
					   error: function(){
					   
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
		}
		
		
		
		function countdown1(minutes) {
			var seconds = 15;
			var mins = minutes
			function tick() {
				var counter = document.getElementById("timer1");
				var current_minutes = 0;
				seconds--;
				counter.innerHTML =
				"<font size='3'>"+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+"</font>";
				if( seconds > 0 ) {
					setTimeout(tick, 1000);
					
					if( seconds == 10 ) {
						playAudio('successSound3');
					}
					
					if( seconds < 10 ) {
						counter.innerHTML =
						"<font size='3' color='red'>"+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+"</font>";
					}
					
				} else {
					
					if(localStorage.getItem("sfida")=="1"){
						alert("caricadati")
					}
					
					
					window.location.href = "index.html";
					
					/*$("#biliardo").hide()
					localStorage.setItem("start","1")
					
					$("#btnallenati").show()
					$("#btnsfida").show()
					$("#btnlancia").show()
					
					
					admob.showBanner(admob.BannerSize.BANNER,admob.Position.BOTTOM_APP);//show banner at the top of app*/
				}
			}
			
			tick();
		}
		
		
		
		$(document).on("touchstart", "#val0", function(e){
								
			localStorage.setItem("session10","0")
					   
			localStorage.setItem("esatte","0")
			$("#esatte2").html("0")
			$("#esatte3").html("0")
					   
			$("#totale").html("0/10")
			$("#bianca0").hide()
			$("#bianca").hide()
			$("#bianca1").hide()
			$("#bianca2").hide()
					   
		});
		
		
		
		$(document).on("touchstart", "#val1", function(e){
					   
					   //var num1 = Math.floor((Math.random() * 3));
					   playAudio('successSound');
					   
					   $("#gioco").show()
					   
					   $("#bianca0").show()
					   
								
					   var valore = (Number(localStorage.getItem("session10"))) + (Number(uno));
					   localStorage.setItem("session10",valore)
					   
					   $("#totale").html(valore+"/10")
					   
					   //alert(num1)
					   
					   if(valore==10){
					      somma = Number(somma)+1
						  $("#somma").html(somma)
					      $("#totale").html("0/10")
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
					      playAudio('successSound2');
					   
						  localStorage.setItem("esatte",(Number(localStorage.getItem("esatte"))) + (Number(numero)))
					   
					      $("#esatte2").html((Number(localStorage.getItem("esatte"))))
					   
						  $("#esatte3").html((Number(localStorage.getItem("esatte"))))
					   
						  if((Number(localStorage.getItem("esatte")))==5){
					        var bonus = 5;
					      }
					      else if((Number(localStorage.getItem("esatte")))==10){
					        var bonus = 10;
						  }
						  else{
					        var bonus = 0;
					      }
					   
						  
						  if ((somma>=10)&&(somma<16)){
					   
					        var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					        localStorage.setItem("punteggio1",punto)
					        $("#punteggio").html(punto)
					   
						    prendinumeri3(1)
					      }
						  else if((somma>=16)&&(somma<25)){
					   
					        var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					        localStorage.setItem("punteggio1",punto)
					        $("#punteggio").html(punto)
					   
						    $("#val4").show()
					        prendinumeri(0)
					      }
						  else if((somma>=25)&&(somma<30)){
					   
					        var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					        localStorage.setItem("punteggio1",punto)
					        $("#punteggio").html(punto)
					   
						    $("#val4").show()
					        prendinumeri(1)
						   }
					      else if((somma>=30)&&(somma<40)){
					   
					       var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					       localStorage.setItem("punteggio1",punto)
					       $("#punteggio").html(punto)
					   
					       $("#val4").show()
					        prendinumerimeno1(0)
						  }
					      else if((somma>=40)&&(somma<99)){
					   
					       var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					       localStorage.setItem("punteggio1",punto)
						   $("#punteggio").html(punto)
					   
					        $("#val4").show()
					        prendinumerimeno1(1)
						  }
						  else{
					   
					       var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
						   localStorage.setItem("punteggio1",punto)
					       $("#punteggio").html(punto)
					   
					        $("#val4").hide()
					        prendinumeri3(0)
					      }
						  
					   }

		 });
		
		
		
		$(document).on("touchstart", "#val2", function(e){
					   
					   playAudio('successSound');
					   
					   $("#bianca1").show()
					   
					   var valore = (Number(localStorage.getItem("session10"))) + (Number(due));
					   localStorage.setItem("session10",valore)
					   
					   $("#totale").html(valore+"/10")

					   //alert(localStoage.getItem("session10"))
					   
					   if(valore==10){
						  somma = Number(somma)+1
						  $("#somma").html(somma)
					      $("#totale").html("0/10")
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
						  playAudio('successSound2');
					   
					   localStorage.setItem("esatte",(Number(localStorage.getItem("esatte"))) + (Number(numero)))
					   
					   $("#esatte2").html((Number(localStorage.getItem("esatte"))))
					   $("#esatte3").html((Number(localStorage.getItem("esatte"))))
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 5;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
					   var bonus = 10;
						  }
						  else{
					   var bonus = 0;
					   }
					   
						  
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   prendinumeri3(1)
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   prendinumeri(0)
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   prendinumeri(1)
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   prendinumerimeno1(0)
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   prendinumerimeno1(1)
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   prendinumeri3(0)
					   }
						  
					   }
					   

		});
		
		
		$(document).on("touchstart", "#val3", function(e){
					   
					   playAudio('successSound');
					   
					   $("#bianca").show()
					   
					   var valore = (Number(localStorage.getItem("session10"))) + (Number(tre));
					   localStorage.setItem("session10",valore)
					   
					   $("#totale").html(valore+"/10")

					   //alert(localStorage.getItem("session10"))
					   
					   if(valore==10){
					   somma = Number(somma)+1
						  $("#somma").html(somma)
						  $("#totale").html("0/10")
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
					      playAudio('successSound2');
					   
					   localStorage.setItem("esatte",(Number(localStorage.getItem("esatte"))) + (Number(numero)))
					   
					   $("#esatte2").html((Number(localStorage.getItem("esatte"))))
					   $("#esatte3").html((Number(localStorage.getItem("esatte"))))
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 5;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
					   var bonus = 10;
						  }
						  else{
					   var bonus = 0;
					   }
					   
						  
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   prendinumeri3(1)
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   prendinumeri(0)
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   prendinumeri(1)
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   prendinumerimeno1(0)
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   prendinumerimeno1(1)
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   prendinumeri3(0)
					   }
						  
					   }
					   
								
		});
		
		
		$(document).on("touchstart", "#val4", function(e){
					   
					   playAudio('successSound');
					   
					   $("#bianca2").show()
					   
					   var valore = (Number(localStorage.getItem("session10"))) + (Number(quattro));
					   localStorage.setItem("session10",valore)

					   $("#totale").html(valore+"/10")

					   //alert(localStorage.getItem("session10"))
					   
					   if(valore==10){
					   somma = Number(somma)+1
						  $("#somma").html(somma)
						  $("#totale").html("0/10")
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
					      playAudio('successSound2');
					   
					   localStorage.setItem("esatte",(Number(localStorage.getItem("esatte"))) + (Number(numero)))
					   
					   $("#esatte2").html((Number(localStorage.getItem("esatte"))))
					   $("#esatte3").html((Number(localStorage.getItem("esatte"))))
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 5;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
					   var bonus = 10;
						  }
						  else{
					   var bonus = 0;
					   }
					   
						  
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   prendinumeri3(1)
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   prendinumeri(0)
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   prendinumeri(1)
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   prendinumerimeno1(0)
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   prendinumerimeno1(1)
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   prendinumeri3(0)
					   }
						  
					   }
					   
		});
		
		

		
		$(document).on("tap", "#altro", function(e){
					   
			$("#btnpanel").click();
					   
		});
		
		
		
		
		$(document).on("tap", "#impostazioni", function(e){
					   
			alert("fine");
					   
		});
		
		
		
		$(document).on("touchstart", "#esci", function(e){
					   
			localStorage.setItem("email", "");
			localStorage.setItem("emailpass", "");
					   
			window.location.href = "Login.html";
					   
		});
		
		

		
		// PER FOTOCAMERA //
		
		
		$(document).on("touchstart", "#prendifoto", function(e){
					   
					   navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50,
												   destinationType: Camera.DestinationType.FILE_URI,
												   sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
												   targetWidth: 200,
												   targetHeight: 200
												   });
					   });
		
		
		$(document).on("touchstart", "#scattafoto", function(e){
					   
					   navigator.camera.getPicture(Successo, onFail, { quality: 30,
												   destinationType: Camera.DestinationType.DATA_URL,
												   encodingType: Camera.EncodingType.PNG,
												   targetWidth: 200,
												   targetHeight: 200
												   });
					   });
		
		
		function Successo(imageData) {
			
			localStorage.setItem("Foto1", "data:image/png;base64," + imageData);
			
			var image000 = document.getElementById('imgutente2');
			image000.src = localStorage.getItem("Foto1");
			
			//salvafoto("Sridesv2")
			
		}
		
		
		function onFail(message) {
			navigator.notification.alert(
										 message,  // message
										 alertDismissed,         // callback
										 'Foto',            // title
										 'OK'                  // buttonName
										 );
		}
		
		
		function onPhotoURISuccess(imageURI) {
			// Uncomment to view the image file URI
			// console.log(imageURI);
			// Get image handle
			//
			var largeImage = document.getElementById('imgfoto');
			// Unhide image elements
			//
			largeImage.style.display = 'block';
			// Show the captured photo
			// The inline CSS rules are used to resize the image
			//
			largeImage.src = imageURI;
		}
		
		
		function uploadPhoto(imageURI) {
			var largeImage = document.getElementById('imgutente2');
			// Unhide image elements
			//
			largeImage.style.display = 'block';
			// Show the captured photo
			// The inline CSS rules are used to resize the image
			//
			largeImage.src = imageURI;
			
			
			var options = new FileUploadOptions();
			options.fileKey="file";
			options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
			options.mimeType="image/jpeg";
			
			var params = {};
			params.value1 = localStorage.getItem("nomefoto");
			params.value2 = "param";
			
			options.params = params;
			options.chunkedMode = false;
			
			var ft = new FileTransfer();
			ft.upload(imageURI, encodeURI("http://msop.it/uploadrides.php"), win, fail, options);
			
		}
		
		
		
		function win(r) {
			console.log("Code = " + r.responseCode);
			console.log("Response = " + r.response);
			console.log("Sent = " + r.bytesSent);
			
			//alert(r.response);
			
			localStorage.setItem("foto", localStorage.getItem("nomefoto"));
			
			//$("#imgutente2").attr("src","http://www.msop.it/public/rides/"+localStorage.getItem("foto"));
			/*$("#imgfoto").attr("src","http://www.msop.it/public/rides/"+localStorage.getItem("nomefoto")+".jpg");
			 $("#imguser").attr("src","http://www.msop.it/public/rides/"+localStorage.getItem("nomefoto")+".jpg");
			 $("#imgutente").attr("src","http://www.msop.it/public/rides/"+localStorage.getItem("nomefoto")+".jpg");*/
			
		}
		
		function fail(error) {
			alert("An error has occurred: Code = " + error);
		}
		
		
		
    }
}




function gpsonError(){
	
	//alert()

}



function onPause() {
	
	//var myTimer = setInterval(onPause3, 2000);
	
}



function alertDismissed() {
	
	//var myTimer = setInterval(onPause3, 2000);
	
}



function onPause3() {
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;//January is 0, so always add + 1
	
	var ora = today.getHours()
	if(ora<10){ora="0"+ora}
	
	var minuti = today.getMinutes();
	if(minuti<10){minuti="0"+minuti}
	
	var secondi = today.getSeconds();
	if(secondi<10){secondi="0"+secondi}
	
	//self.document.formia.ora.value = ora + ":" + minuti
	
	var yyyy = today.getFullYear();
	if(dd<10){dd="0"+dd}
	if(mm<10){mm="0"+mm}
	today = dd+'/'+mm+'/'+yyyy;
	
	$("#distanza3").html("<span style = 'font-size: 18px;'>"+ ora +","+ minuti +","+ secondi +"</span>");
	
	//if(secondi==10){
		//clearInterval(myTimer);
	//}
	
	$.ajax({
		   type:"GET",
		   url:"http://gtechplay.com/mycollection/www/Posizione.asp",
		   contentType: "application/json",
		   data: {Lat:3,Longi:4},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   //$.each(result, function(i,item){
		   //});
		   
		   
		   },
		   error: function(){
		   
		   
		   },
		   dataType:"jsonp"});
	
}


function playAudio(id) {
	var audioElement = document.getElementById(id);
	var url = audioElement.getAttribute('src');
	var my_media = new Media(url,
							 // success callback
							 function () { console.log("playAudio():Audio Success"); },
							 // error callback
							 function (err) { console.log("playAudio():Audio Error: " + err); }
							 );
	
	my_media.play();
	
	
	/*setTimeout(function() {
			   my_media.stop();
			   }, 3000);*/
	
}



