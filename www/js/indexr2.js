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
		

		document.addEventListener("touchmove",function(e) {
			e.preventDefault();
		},
		false
		);
		
		
		
		////////// controllo internet ///////////////
		
		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){
		

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
			

		  var somma=0;
		  var punto=0;
		  $("#imgutente2").attr("src","http://msop.it/public/addall/"+localStorage.getItem("foto")+"");
			
			
			 var myScroll4;
			 var esatte5="";
			 var conta=1;
			 
			 
			 $("#qround").html("<b> ROUND 2</b>")
			
			$("#migliori2017").html("<b>I MIGLIORI DEL 2017</b>")
			 
			 
			 $("#spinner4").show()
			 
			 $.ajax({
			 type:"GET",
			 url:"http://msop.it/addall/leggipuntiTOT.php?email="+localStorage.getItem("email")+"&rnd=2",
			 contentType: "application/json",
			 //data: {Lat:3,Longi:4},
			 timeout: 7000,
			 jsonp: 'callback',
			 crossDomain: true,
			 success:function(result){
			 
			 $.each(result, function(i,item){
			 
			 if(item.Token=="1"){
			 
			 var dataclass = item.data.replace(".000000","").replace("2017-","")
			 
			  dataclass = dataclass.slice(0,11)
					
			 if(item.nome <= 12){
			 
			 var nome = item.nome;
			 
			 }
			 else{
			 var nome = item.nome.slice(0,10)
			 nome = nome + ".."
			 }
			 
			 if(conta==1){
					
			 $("#puntimiei").html("<font color='red'>Punti: <b>"+item.puntimiei+"</b></font>")
			 $("#rnk").html("<font color='red'>Tua Posizione: <b>"+item.rnk+"</b></font>")
			 
			 esatte5 = esatte5 + "<b><img src='http://msop.it/public/addall/"+item.foto+"' rel='external' class='utenteimg' width='20'>"+nome+"</b>, Punti: <b>"+item.punti+"</b>, "+dataclass+"<br><br>"
			 }
			 else if(conta==2){
			 
			 esatte5 = esatte5 + "<b><img src='http://msop.it/public/addall/"+item.foto+"' rel='external' class='utenteimg' width='20'>"+nome+"</b>, Punti: <b>"+item.punti+"</b>, "+dataclass+"<br><br>"
			 }
			 else if(conta==3){
			 
			 esatte5 = esatte5 + "<b><img src='http://msop.it/public/addall/"+item.foto+"' rel='external' class='utenteimg' width='20'>"+nome+"</b>, Punti: <b>"+item.punti+"</b>, "+dataclass+"<br><br>"
			 }
			 else{
			 esatte5 = esatte5 + " " + conta+") <b>"+nome+"</b>, Punti: <b>"+item.punti+"</b>,  "+dataclass+"<br><br>"
			 }
			 
			 }
			 
			 else{
			 esatte5 = esatte5 + "<br>Nessun Risultato"
			 }
			 
			 
			 $("#esatte5").html(esatte5)
			 
			 conta = conta+1
			 
			 });
			 
			 
			 $("#spinner4").hide()
			 
			 
			 ris1week()
			 
			 
			 },
			 error: function(){
			 
			 
			 $("#esatte5").html("<br><br>Nessuna Sfida Aperta")
			 
			 navigator.notification.alert(
			 'Errore di rete, riprova sotto copertura',  // message
			 alertDismissed,         // callback
			 'Errore di Rete',            // title
			 'OK'                  // buttonName
			 );
			 
			 },
			 
			 dataType:"jsonp"});
			
			
		}
		
		//////////////////////////////////////////
		
		
		
		
		function ris1week(){
			
			var esatte6="";
			var conta=1;
			
			var myScroll;
			
			
			$("#qround").html("<b> ROUND 2</b>")
			
			$("#migliorisett").html("<b>MIGLIORI DEL GIORNO</b>")
			
			
			$("#spinner4").show()
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/addall/leggipuntiDay.php?email="+localStorage.getItem("email")+"&rnd=2",
				   contentType: "application/json",
				   //data: {Lat:3,Longi:4},
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   $.each(result, function(i,item){
						  
						  if(item.Token=="1"){
						  
						  var dataclass = item.data.replace(".000000","").replace("2017-","")
						  
						   dataclass = dataclass.slice(0,11)
						  
						  
						  if(item.nome <= 12){
						  
						  var nome = item.nome;
						  
						  }
						  else{
						  var nome = item.nome.slice(0,10)
						  nome = nome + ".."
						  }
						  
						  if(conta==1){
						  
						  $("#puntimiei2").html("<font color='red'>Punti: <b>"+item.puntimiei2+"</b></font>")
						  $("#rnk2").html("<font color='red'>Tua Posizione: <b>"+item.rnk2+"</b></font>")
						  
						  esatte6 = esatte6 + "<b><img src='http://msop.it/public/addall/"+item.foto+"' rel='external' class='utenteimg' width='20'>"+nome+"</b>, Punti: <b>"+item.punti+"</b>, "+dataclass+"<br><br>"
						  }
						  else if(conta==2){
						  
						  esatte6 = esatte6 + "<b><img src='http://msop.it/public/addall/"+item.foto+"' rel='external' class='utenteimg' width='20'>"+nome+"</b>, Punti: <b>"+item.punti+"</b>, "+dataclass+"<br><br>"
						  }
						  else if(conta==3){
						  
						  esatte6 = esatte6 + "<b><img src='http://msop.it/public/addall/"+item.foto+"' rel='external' class='utenteimg' width='20'>"+nome+"</b>, Punti: <b>"+item.punti+"</b>, "+dataclass+"<br><br>"
						  }
						  else{
						  esatte6 = esatte6 + " " + conta+") <b>"+nome+"</b>, Punti: <b>"+item.punti+"</b>,  "+dataclass+"<br><br>"
						  }
						  
						  }
						  
						  else{
						  esatte6 = esatte6 + "<br>Nessun Risultato"
						  }
						  
						  
						  $("#esatte6").html(esatte6)
						  
						  conta = conta+1
						  
						  });
				   
				   
				   $("#spinner4").hide()
				   
				   
				   myScroll = new iScroll('wrapper2', {
										  //zoom: true,
										  click: true,
										  scrollbars: 'custom'
										  /*hScrollbar: false,
										   vScrollbar: false,
										   zoomMin:1,
										   zoomMax:2,
										   zoomStart:1*/
										  });
				   
				   
				   setTimeout (function(){
							   
							   myScroll.refresh();
							   
							   }, 1200);
				   
				   
				   },
				   error: function(){
				   
				   
				   $("#esatte5").html("<br><br>Nessuna Sfida Aperta")
				   
				   navigator.notification.alert(
												'Errore di rete, riprova sotto copertura',  // message
												alertDismissed,         // callback
												'Errore di Rete',            // title
												'OK'                  // buttonName
												);
				   
				   },
				   
				   dataType:"jsonp"});
			
		}
		

		
		
		$(document).on("tap", "#ris1", function(e){
					   
			window.location.href = "indexr1.html";
  
		});
		
		
		
		$(document).on("tap", "#ris2", function(e){
					   
			window.location.href = "indexr2.html";
					   
		});
		
		
		$(document).on("tap", "#ris3", function(e){
					   
			window.location.href = "indexr3.html";
					   
		});
		
		
		
		
		// PULSANTE CONTROLLO SFIDA //
		

		// FINE //
		

		
		function accettasfida(id){
			$.mobile.changePage ($("#home"));
			
			localStorage.setItem("round","1")
			localStorage.setItem("sfidalanciata","2")
			localStorage.setItem("sfida","1")
			
						  localStorage.setItem("idsfida",id)
						  
						  $("#btnallenati").hide()
						  $("#btnsfida").hide()
						  $("#bliard").hide()
						  $("#btnlancia").hide()
			              $("#risultati").hide()
						  
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
			
			              admob.hideBanner()
			
			              //AdMob.removeBanner();
			
			
						  $("#going").hide()
						  
						  setTimeout(function() {
									 $("#btnallenati").hide()
									 $("#btnsfida").hide()
									 $("#bliard").hide()
									 $("#btnlancia").hide()
									 $("#risultati").hide()
									 
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
			
		}
		
		
		$(document).on("touchstart", "#indietro", function(e){
					   
			window.location.href = "index.html";
			//$.mobile.changePage ($("#home"));
					   
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
					   
					   
					   $("#btnallenati").hide()
					   $("#btnsfida").hide()
					   $("#btnlancia").hide()
					   $("#bliard").hide()
					   
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
					   
					   admob.hideBanner()
					   
					   //AdMob.removeBanner();
					   
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
			$("#bliard").hide()
			$("#btnlancia").hide()
			$("#risultati").hide()
			$("#allenati").show()
					   
			
		});
		
		
		
		$(document).on("touchstart", "#indietro2", function(e){
					   
		    $("#allenati").hide()
			$("#btnallenati").show()
			$("#btnsfida").show()
			$("#bliard").show()
			$("#btnlancia").show()
			$("#risultati").show()
		});
		
		
		
		$(document).on("touchstart", "#going", function(e){
					   
					   navigator.notification.confirm(
													  'ROUND 1 la somma delle palle colpite deve essere 10',  // message
													  onConfirm1,              // callback to invoke with index of button pressed
													  'Spegni',            // title
													  'Inizia,Annulla'      // buttonLabels
													  );
					   
						

		});
		
		
		function onConfirm1(button) {
			
			if(button==1){    //If User selected No, then we just do nothing
				
				localStorage.setItem("sfida","0")
				localStorage.setItem("round","1")
				
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
				$("#lastpunt").hide()
				
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
				
				
				admob.hideBanner()
				
				//AdMob.removeBanner();
				
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

			}
			
		}

		
		
		$(document).on("touchstart", "#going2", function(e){
					   
					   navigator.notification.confirm(
													  'ROUND 2 la somma delle palle colpite deve essere 15',  // message
													  onConfirm2,              // callback to invoke with index of button pressed
													  'Spegni',            // title
													  'Inizia,Annulla'      // buttonLabels
													  );
					   
					   

		});
		
		
		function onConfirm2(button) {
			
			if(button==1){    //If User selected No, then we just do nothing
				
				localStorage.setItem("sfida","0")
				localStorage.setItem("round","2")
				
				$("#load").show()
				
				localStorage.setItem("session10","0")
				
				localStorage.setItem("esatte","0")
				$("#esatte2").html("0")
				$("#esatte3").html("0")
				
				$("#totale").html("0/15")
				$("#bianca0").hide()
				$("#bianca").hide()
				$("#bianca1").hide()
				$("#bianca2").hide()
				
				$("#allenati").hide()
				$("#lastpunt").hide()
				
				var uno;
				var due;
				var tre;
				var quattro;
				var numero = 2;
				var numero1 = 3;
				var numero2 = 4;
				var numero3 = 5;
				var numero4 = 6;
				var numero5 = 7;
				
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
				
				
				admob.hideBanner()
				
				//AdMob.removeBanner();
				
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
				
			}
			
		}

		
		function going2(){
			// SONO ARRIVATO QUI
			
			navigator.notification.confirm(
										   'ROUND 2 la somma delle palle colpite deve essere 15',  // message
										   onConfirm22,              // callback to invoke with index of button pressed
										   'Spegni',            // title
										   'Inizia,Annulla'      // buttonLabels
										   );
			
			
			function onConfirm22(button) {
				
			// devo correggere andando a prendere BTNSFIDA aggiungendo il Round 2
			

					   localStorage.setItem("sfida","1")
					   localStorage.setItem("round","2")
					   
					   $("#load").show()
			
					   $("#totale").html("0/15")
					   $("#bianca0").hide()
					   $("#bianca").hide()
					   $("#bianca1").hide()
					   $("#bianca2").hide()
					   
					   $("#allenati").hide()
					   
					   var uno;
					   var due;
					   var tre;
					   var quattro;
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   
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
			
					   
					    playAudio('successSound');
			
						localStorage.setItem("esatte",0)
						$("#esatte2").html("0")
						$("#esatte3").html("0")
			
						var somma=0;

					   $("#gioco").show()
			
					   $("#going").hide()
			
			
					   setTimeout(function() {
								  
							playAudio('successSound2');
								  
							$("#load").hide()
								  
							$("#dati").show()
							$("#dati0").show()
								  
							$("#biliardo").show();

							countdown1(0);
								  
							$("#somma").html("0")
							$("#totale").html("0")
								  
						}, 1000);
					   
					   localStorage.setItem("start","0")
					   
					   prendinumeri3_15(0)
					   
			}
			
		}
		
		
		$(document).on("touchstart", "#going3", function(e){
					   
					   
					   navigator.notification.confirm(
													  'ROUND 3 la somma delle palle colpite deve essere 20',  // message
													  onConfirm3,              // callback to invoke with index of button pressed
													  'Spegni',            // title
													  'Inizia,Annulla'      // buttonLabels
													  );
		});
		
		
		function onConfirm3(button) {
			
			if(button==1){    //If User selected No, then we just do nothing
				
				localStorage.setItem("sfida","0")
				localStorage.setItem("round","3")
				
				$("#load").show()
				
				localStorage.setItem("session10","0")
				
				localStorage.setItem("esatte","0")
				$("#esatte2").html("0")
				$("#esatte3").html("0")
				
				$("#totale").html("0/20")
				$("#bianca0").hide()
				$("#bianca").hide()
				$("#bianca1").hide()
				$("#bianca2").hide()
				
				$("#allenati").hide()
				$("#lastpunt").hide()
				
				var uno;
				var due;
				var tre;
				var quattro;
				var numero = 3;
				var numero1 = 4;
				var numero2 = 5;
				var numero3 = 6;
				var numero4 = 7;
				var numero5 = 8;
				
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
				
				
				admob.hideBanner()
				
				//AdMob.removeBanner();
				
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
				
				prendinumeri3_20(0)
				
			}
			
		}
		
		
		function going3(){
			
			navigator.notification.confirm(
										   'ROUND 3 la somma delle palle colpite deve essere 20',  // message
										   onConfirm33,              // callback to invoke with index of button pressed
										   'Spegni',            // title
										   'Inizia,Annulla'      // buttonLabels
										   );
			
			function onConfirm33(button) {
			
			// devo correggere andando a prendere BTNSFIDA aggiungendo il Round 2
			
			
			localStorage.setItem("sfida","1")
			localStorage.setItem("round","3")
			
			$("#load").show()
			
			$("#totale").html("0/20")
			$("#bianca0").hide()
			$("#bianca").hide()
			$("#bianca1").hide()
			$("#bianca2").hide()
			
			$("#allenati").hide()
			
			var uno;
			var due;
			var tre;
			var quattro;
			var numero = 3;
			var numero1 = 4;
			var numero2 = 5;
			var numero3 = 6;
			var numero4 = 7;
			var numero5 = 8;
			
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
			
			
			playAudio('successSound');
			
			localStorage.setItem("esatte",0)
			$("#esatte2").html("0")
			$("#esatte3").html("0")
			
			var somma=0;
			
			$("#gioco").show()
			
			$("#going").hide()
			
			
			setTimeout(function() {
					   
					   playAudio('successSound2');
					   
					   $("#load").hide()
					   
					   $("#dati").show()
					   $("#dati0").show()
					   
					   $("#biliardo").show();
					   
					   countdown1(0);
					   
					   $("#somma").html("0")
					   $("#totale").html("0")
					   
					   }, 1000);
			
			localStorage.setItem("start","0")
			
			prendinumeri3_20(0)
			
		  }
		}
		
		function prendinumeri3(cosa) {
			
			$("#val4").hide()
			
			$("#spinner1").show()
			
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
				   
				   $("#palla1").show()
				   $("#palla2").show()
				   $("#palla3").show()
				   $("#palla4").show()
				   
				   $.each(result, function(i,item){
						  
						  $("#palla1").show()
						  $("#palla2").show()
						  $("#palla3").show()
						  $("#palla4").show()
						  
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
						  
						  
						  $("#spinner1").hide()
						  
						  
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
			
			
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumeri3(cosa)
			});
			
		}
		
		
		function prendinumeri3_15(cosa) {
			
			$("#val4").hide()
			
			$("#spinner1").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco15_3.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
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
							  
							  $("#spinner1").hide()
							  
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
					     $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumeri3_15(cosa)
			});
			
		}
		
		
		function prendinumeri3_20(cosa) {
			
			$("#val4").hide()
			
			$("#spinner1").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco20_3.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
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
							  
							  $("#spinner1").hide()
							  
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
					   $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumeri3_20(cosa)
			});
			
		}
		
		
		function prendinumeri(cosa) {
			
			$("#spinner1").show()
			
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
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
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
							  
							  $("#spinner1").hide()
							  
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
							  
							  });
					   
					   },
					   error: function(){
					     $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumeri(cosa)
			});
			
		}
		
		
		function prendinumeri_15(cosa) {
			
			$("#spinner1").show()
			
			$("#val4").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco15.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
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
							  
							  $("#spinner1").hide()
							  
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
							  
						});
					   
					   },
					   error: function(){
					     $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumeri_15(cosa)
			});
			
		}
		
		
		function prendinumeri_20(cosa) {
			
			$("#spinner1").show()
			
			$("#val4").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco20.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
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
							  
							  $("#spinner1").hide()
							  
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
							  
							  });
					   
					   },
					   error: function(){
					   $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumeri_20(cosa)
			});
			
		}
		
		
		function prendinumerimeno1(cosa) {
			
			$("#spinner1").show()
			
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
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
							  uno = item.num1;
							  due = item.num2;
							  tre = item.num3;
							  quattro = item.num4;
							  
							  var quattro1 = item.num4.replace("-","")
							  
							  
							  var num1 = Math.floor((Math.random() * 4));
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  }
							  
							  
							  $("#spinner1").hide()
							  
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  }

						 });
					   
					   },
					   error: function(){
					     $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumerimano1(cosa)
			});
		}
		
		
		function prendinumerimeno1_15(cosa) {
			
			$("#spinner1").show()
			
			$("#val4").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco15meno1.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
							  uno = item.num1;
							  due = item.num2;
							  tre = item.num3;
							  quattro = item.num4;
							  
							  var quattro1 = item.num4.replace("-","")
							  
							  
							  var num1 = Math.floor((Math.random() * 4));
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  }
							  
							  $("#spinner1").hide()
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  }
							  
							  });
					   
					   },
					   error: function(){
					     $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumerimeno1_15(cosa)
			});
			
		}
		
		
		function prendinumerimeno1_20(cosa) {
			
			$("#spinner1").show()
			
			$("#val4").show()
			
			uno = "2";
			due = "1";
			tre = "7";
			quattro = "4";
			
			
			localStorage.setItem("session10","0")
			
			
			if(localStorage.getItem("start")=="0"){
				
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/addall/gioco20meno1.php?email=sasa@tin.it",
					   contentType: "application/json",
					   //data: {Lat:3,Longi:4},
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $("#palla1").show()
					   $("#palla2").show()
					   $("#palla3").show()
					   $("#palla4").show()
					   
					   
					   $.each(result, function(i,item){
							  
							  $("#palla1").show()
							  $("#palla2").show()
							  $("#palla3").show()
							  $("#palla4").show()
							  
							  uno = item.num1;
							  due = item.num2;
							  tre = item.num3;
							  quattro = item.num4;
							  
							  var quattro1 = item.num4.replace("-","")
							  
							  
							  var num1 = Math.floor((Math.random() * 4));
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  }
							  
							  $("#spinner1").hide()
							  
							  if (cosa==0){
							  
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  
							  }
							  else{
							  if(num1==0){
							  $("#palla1").attr("src","palle/"+item.num1+"c.png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==1){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+"c.png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==2){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+"c.png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  if(num1==3){
							  $("#palla1").attr("src","palle/"+item.num1+".png")
							  $("#palla2").attr("src","palle/"+item.num2+".png")
							  $("#palla3").attr("src","palle/"+item.num3+".png")
							  $("#palla4").attr("src","palle/meno"+quattro1+".png")
							  }
							  }
							  
							  });
					   
					   },
					   error: function(){
					   $("#spinner1").hide()
					   
					   },
					   
					   dataType:"jsonp"});
				
			}
			
			$(document).on("touchstart", "#ricarica1", function(e){
				prendinumerimeno1_20(cosa)
			});
			
		}
		
		
		function countdown1(minutes) {
			
			if(localStorage.getItem("round")=="1"){
				var seconds = 59;
			}
			else if (localStorage.getItem("round")=="2"){
				var seconds = 75;
			}
			else{
			    var seconds = 80;
			}
			
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
						
						//alert("caricadati")
						
						if(localStorage.getItem("sfidalanciata")=="1"){
							
						//alert("http://msop.it/addall/gioca1_player1.php?email="+localStorage.getItem("email")+"&rnd="+localStorage.getItem("punteggio1")+"&idsfida="+localStorage.getItem("idsfida")+"")
						
						$.ajax({
							   type:"GET",
							   url:"http://msop.it/addall/gioca1_player1.php?email="+localStorage.getItem("email")+"&rnd="+localStorage.getItem("punteggio1")+"&idsfida="+localStorage.getItem("idsfida")+"",
							   contentType: "application/json",
							   //data: {Lat:3,Longi:4},
							   timeout: 7000,
							   jsonp: 'callback',
							   crossDomain: true,
							   success:function(result){
							   
							    $.each(result, function(i,item){
									   
									  if(item.Token=="1"){
									   
									    if(localStorage.getItem("round")=="1"){
									      going2()
									    }
									    else if(localStorage.getItem("round")=="2"){
									      going3()
									    }
									    else{
									   
									       navigator.notification.alert(
											 'Punteggio',  // message
											  alertDismissed,         // callback
											  localStorage.getItem("punteggio1"),            // title
											  'OK'                  // buttonName
											);
									   
									   
									      btnsfida()
									    }
									   
									  
									  }
									  else{
									  
									  }
									  
								});
							   
							   },
							   error: function(){

							   
							    navigator.notification.alert(
															'Errore di rete, riprova sotto copertura',  // message
															alertDismissed,         // callback
															'Errore di Rete',            // title
															'OK'                  // buttonName
															);
							   
							   },
							   
							   dataType:"jsonp"});
						 }
						else{
							
							//alert("http://msop.it/addall/gioca1_player2.php?email="+localStorage.getItem("email")+"&rnd="+localStorage.getItem("punteggio1")+"&idsfida="+localStorage.getItem("idsfida")+"")
							
							$.ajax({
								   type:"GET",
								   url:"http://msop.it/addall/gioca1_player2.php?email="+localStorage.getItem("email")+"&rnd="+localStorage.getItem("punteggio1")+"&idsfida="+localStorage.getItem("idsfida")+"",
								   contentType: "application/json",
								   //data: {Lat:3,Longi:4},
								   timeout: 7000,
								   jsonp: 'callback',
								   crossDomain: true,
								   success:function(result){
								   
							        $.each(result, function(i,item){
									   
									   if(item.Token=="1"){
										   
										   if(localStorage.getItem("round")=="1"){
										    going2()
									       }
										   else if(localStorage.getItem("round")=="2"){
										     going3()
										   }
										   else{
										   
										     navigator.notification.alert(
												'Punteggio',  // message
												alertDismissed,         // callback
												localStorage.getItem("punteggio1"),            // title
												'OK'                  // buttonName
											 );
										   
										     btnsfida()
									       }
									   
									   }
									   else{
									   
									   }
									   
									});
								   
								   },
								   error: function(){
								   

								   
								   navigator.notification.alert(
																'Errore di rete, riprova sotto copertura',  // message
																alertDismissed,         // callback
																'Errore di Rete',            // title
																'OK'                  // buttonName
																);
								   
								   },
								   
								   dataType:"jsonp"});
						}
						
					}
					else{
						$.ajax({
							   type:"GET",
							   url:"http://msop.it/addall/segnapunti.php?email="+localStorage.getItem("email")+"&rnd="+localStorage.getItem("punteggio1")+"&incontro="+localStorage.getItem("round")+"",
							   contentType: "application/json",
							   //data: {Lat:3,Longi:4},
							   timeout: 7000,
							   jsonp: 'callback',
							   crossDomain: true,
							   success:function(result){
							   
							   $.each(result, function(i,item){
									  
									if(item.Token=="1"){
									  navigator.notification.alert(
																   'Punteggio caricato.',  // message
																   alertDismissed,         // callback
																   localStorage.getItem("punteggio1"),            // title
																   'OK'                  // buttonName
																   );
									  
									  
									  $("#gioco").hide()
									  $("#lastpunt").show()
									  $("#punteggio2").html(localStorage.getItem("punteggio1"))
									  $("#somma2").html(localStorage.getItem("somma1"))
									  
									  $("#punteggiotot").html("PUNTEGGIO ROUND "+localStorage.getItem("round"))
									  $("#punteggiotot1").html(localStorage.getItem("punteggio1"))
									  
									  //window.location.href = "index.html";
									  
									}
									else{
									  
									  window.location.href = "index.html";
									  
									}
									  
								});
							   
							   },
							   error: function(){
							   
							   
							   
							   navigator.notification.alert(
															'Errore di rete, riprova sotto copertura',  // message
															alertDismissed,         // callback
															'Errore di Rete',            // title
															'OK'                  // buttonName
															);
							   
							   window.location.href = "index.html";
							   
							   },
							   
							   dataType:"jsonp"});
					}
					
					
					//window.location.href = "index.html";
					
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
		
		
		$(document).on("touchstart", "#back", function(e){
			$("#lastpunt").hide()
			window.location.href = "index.html";		   
		});

		
		$(document).on("touchstart", "#val0", function(e){
					   
			var valore = (Number(localStorage.getItem("session10"))) - (Number(localStorage.getItem("numerouno")));
			localStorage.setItem("session10",valore)
								
			var bonus=0
					   
			localStorage.setItem("esatte","0")
			$("#esatte2").html("0")
			$("#esatte3").html("0")
					   
			if(localStorage.getItem("round")=="2"){
				$("#totale").html(valore+"/15")
				var parametro = 15
				var numero = 2;
				var numero1 = 3;
				var numero2 = 4;
				var numero3 = 5;
				var numero4 = 6;
				var numero5 = 7;
			}
			else if(localStorage.getItem("round")=="3"){
				$("#totale").html(valore+"/20")
				var parametro = 20
					   var numero = 3;
					   var numero1 = 4;
					   var numero2 = 5;
					   var numero3 = 6;
					   var numero4 = 7;
					   var numero5 = 8;
			}
			else{
				$("#totale").html(valore+"/10")
				var parametro = 10
				var numero = 1;
				var numero1 = 2;
				var numero2 = 3;
				var numero3 = 4;
				var numero4 = 5;
				var numero5 = 6;
			}
			
			$("#bianca0").hide()
			$("#palla1").show()
					   
					   
			if(valore==parametro){
				somma = Number(somma)+1
				$("#somma").html(somma)
				localStorage.setItem("somma1",somma)
					   
				$("#bianca0").hide()
				$("#bianca").hide()
				$("#bianca1").hide()
				$("#bianca2").hide()
					   
				$("#palla1").hide()
				$("#palla2").hide()
				$("#palla3").hide()
				$("#palla4").hide()
					   
				playAudio('successSound2');
					   
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(1)
					   }
					   else{
					   prendinumeri3_20(1)
					   }
					   
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(0)
					   }
					   else{
					   prendinumeri_20(0)
					   }
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(1)
					   }
					   else{
					   prendinumeri_20(1)
					   }
					   
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(0)
					   }
					   else{
					   prendinumerimeno1_20(0)
					   }
					   
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(1)
					   }
					   else{
					   prendinumerimeno1_20(1)
					   }
					   
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(0)
					   }
					   else{
					   prendinumeri3_20(0)
					   }
					   
					   }
			}
					   
		});
		
		
		$(document).on("touchstart", "#val00", function(e){
					   
					   var valore = (Number(localStorage.getItem("session10"))) - (Number(localStorage.getItem("numerotre")));
					   localStorage.setItem("session10",valore)
								
					   var bonus=0
					   
					   localStorage.setItem("esatte","0")
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   if(localStorage.getItem("round")=="2"){
					   $("#totale").html(valore+"/15")
					   var parametro = 15
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   }
					   else if(localStorage.getItem("round")=="3"){
					   $("#totale").html(valore+"/20")
					   var parametro = 20
					   var numero = 3;
					   var numero1 = 4;
					   var numero2 = 5;
					   var numero3 = 6;
					   var numero4 = 7;
					   var numero5 = 8;
					   }
					   else{
					   $("#totale").html(valore+"/10")
					   var parametro = 10
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   }
					   
					   $("#bianca").hide()
					   $("#palla3").show()
					   
					   if(valore==parametro){
					   somma = Number(somma)+1
					   $("#somma").html(somma)
					   localStorage.setItem("somma1",somma)
					   
					   $("#bianca0").hide()
					   $("#bianca").hide()
					   $("#bianca1").hide()
					   $("#bianca2").hide()
					   
					   $("#palla1").hide()
					   $("#palla2").hide()
					   $("#palla3").hide()
					   $("#palla4").hide()
					   
					   playAudio('successSound2');
					   
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(1)
					   }
					   else{
					    prendinumeri3_20(1)
					   }
					   
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(0)
					   }
					   else{
					   prendinumeri_20(0)
					   }
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(1)
					   }
					   else{
					   prendinumeri_20(1)
					   }
					   
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(0)
					   }
					   else{
					   prendinumerimeno1_20(0)
					   }
					   
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(1)
					   }
					   else{
					   prendinumerimeno1_20(1)
					   }
					   
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(0)
					   }
					   else{
					   prendinumeri3_20(0)
					   }
					   
					   }
					   }
					   
					   
		});
		
		$(document).on("touchstart", "#val000", function(e){
					   
					   var valore = (Number(localStorage.getItem("session10"))) - (Number(localStorage.getItem("numerodue")));
					   localStorage.setItem("session10",valore)
								
					   var bonus=0
					   
					   localStorage.setItem("esatte","0")
					   $("#esatte2").html("0")
					   $("#esatte3").html("0")
					   
					   if(localStorage.getItem("round")=="2"){
					   $("#totale").html(valore+"/15")
					   var parametro = 15
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   }
					   else if(localStorage.getItem("round")=="3"){
					   $("#totale").html(valore+"/20")
					   var parametro = 20
					   var numero = 3;
					   var numero1 = 4;
					   var numero2 = 5;
					   var numero3 = 6;
					   var numero4 = 7;
					   var numero5 = 8;
					   }
					   else{
					   $("#totale").html(valore+"/10")
					   var parametro = 10
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   }
					   
					   $("#bianca1").hide()
					   $("#palla2").show()
					   
					   if(valore==parametro){
					   somma = Number(somma)+1
					   $("#somma").html(somma)
					   localStorage.setItem("somma1",somma)
					   
					   $("#bianca0").hide()
					   $("#bianca").hide()
					   $("#bianca1").hide()
					   $("#bianca2").hide()
					   
					   $("#palla1").hide()
					   $("#palla2").hide()
					   $("#palla3").hide()
					   $("#palla4").hide()
					   
					   playAudio('successSound2');
					   
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(1)
					   }
					   else{
					   prendinumeri3_20(1)
					   }
					   
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(0)
					   }
					   else{
					   prendinumeri_20(0)
					   }
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(1)
					   }
					   else{
					   prendinumeri_20(1)
					   }
					   
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(0)
					   }
					   else{
					   prendinumerimeno1_20(0)
					   }
					   
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(1)
					   }
					   else{
					   prendinumerimeno1_20(1)
					   }
					   
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(0)
					   }
					   else{
					   
					   }
					   
					   }
					   }
					   
					   
		});
		
		$(document).on("touchstart", "#val0000", function(e){
					   
			var valore = (Number(localStorage.getItem("session10"))) - (Number(localStorage.getItem("numeroquattro")));
			localStorage.setItem("session10",valore)
								
			var bonus=0
					   
			localStorage.setItem("esatte","0")
			$("#esatte2").html("0")
			$("#esatte3").html("0")
					   
					   if(localStorage.getItem("round")=="2"){
					   $("#totale").html(valore+"/15")
					   var parametro = 15
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   }
					   else if(localStorage.getItem("round")=="3"){
					   $("#totale").html(valore+"/20")
					   var parametro = 20
					   var numero = 3;
					   var numero1 = 4;
					   var numero2 = 5;
					   var numero3 = 6;
					   var numero4 = 7;
					   var numero5 = 8;
					   }
					   else{
					   $("#totale").html(valore+"/10")
					   var parametro = 10
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   }
					   
					   $("#bianca2").hide()
					   $("#palla4").show()
					   
					   if(valore==parametro){
					   somma = Number(somma)+1
					   $("#somma").html(somma)
					   localStorage.setItem("somma1",somma)
					   
					   $("#bianca0").hide()
					   $("#bianca").hide()
					   $("#bianca1").hide()
					   $("#bianca2").hide()
					   
					   $("#palla1").hide()
					   $("#palla2").hide()
					   $("#palla3").hide()
					   $("#palla4").hide()
					   
					   playAudio('successSound2');
					   
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(1)
					   }
					   else{
					   prendinumeri3_20(1)
					   }
					   
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(0)
					   }
					   else{
					   prendinumeri_20(0)
					   }
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(1)
					   }
					   else{
					   
					   }
					   
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(0)
					   }
					   else{
					   prendinumerimeno1_20(0)
					   }
					   
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(1)
					   }
					   else{
					   prendinumerimeno1_20(1)
					   }
					   
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(0)
					   }
					   else{
					   prendinumeri3_20(0)
					   }
					   
					   }
					   }
		});
		
		
		
		$(document).on("touchstart", "#val1", function(e){
					   
					   var parametro=10;
					   playAudio('successSound');
					   
					   $("#gioco").show()
					   
					   $("#bianca0").show()
					   
					   $("#palla1").hide()
					   
								
					   var valore = (Number(localStorage.getItem("session10"))) + (Number(uno));
					   localStorage.setItem("session10",valore)
					   
					   $("#bianca0").attr("src","palle/"+uno.replace("-","")+"n.png")
					   localStorage.setItem("numerouno",uno)
					   
					   
					   if(localStorage.getItem("round")=="2"){
					     parametro = 15;
					     $("#totale").html(valore+"/15")
					     var numero = 2;
					     var numero1 = 3;
					     var numero2 = 4;
					     var numero3 = 5;
					     var numero4 = 6;
					     var numero5 = 7;
					   
					     if((Number(localStorage.getItem("esatte")))==5){
					      var bonus = 10;
					     }
					     else if((Number(localStorage.getItem("esatte")))==10){
						  var bonus = 20;
						 }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 60;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 70;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 80;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 90;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 100;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 110;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 120;
					   }
						else{
					      var bonus = 0;
					     }
					   }
					   else if(localStorage.getItem("round")=="3"){
					     parametro = 20;
					     $("#totale").html(valore+"/20")
					   var numero = 3;
					   var numero1 = 4;
					   var numero2 = 5;
					   var numero3 = 6;
					   var numero4 = 7;
					   var numero5 = 8;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
						  var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 60;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 80;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 100;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 120;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 140;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 160;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 180;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 200;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 220;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 240;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   else{
						parametro = 10;
					    $("#totale").html(valore+"/10")
						var numero = 1;
					    var numero1 = 2;
					    var numero2 = 3;
					    var numero3 = 4;
					    var numero4 = 5;
					    var numero5 = 6;
					   
					    if((Number(localStorage.getItem("esatte")))==5){
					     var bonus = 5;
					    }
						else if((Number(localStorage.getItem("esatte")))==10){
					     var bonus = 10;
						}
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 15;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 25;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 35;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 45;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 55;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 60;
					   }
						else{
					     var bonus = 0;
					    }
					   }
					   
					   if(valore==parametro){
					      somma = Number(somma)+1
						  $("#somma").html(somma)
						  localStorage.setItem("somma1",somma)
					   
					   if(localStorage.getItem("round")=="2"){
					    $("#totale").html("0/15")
					   }
					   else if(localStorage.getItem("round")=="3"){
					    $("#totale").html("0/20")
					   }
					   else{
					     $("#totale").html("0/10")
					   }
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
					   
					      $("#palla1").hide()
					      $("#palla2").hide()
						  $("#palla3").hide()
					      $("#palla4").hide()
					   
					      playAudio('successSound2');
					   
						  localStorage.setItem("esatte",(Number(localStorage.getItem("esatte"))) + (Number(numero)))
					   
					      $("#esatte2").html((Number(localStorage.getItem("esatte"))))
					   
						  $("#esatte3").html((Number(localStorage.getItem("esatte"))))
					   

						  
						  if ((somma>=10)&&(somma<16)){
					   
					        var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					        localStorage.setItem("punteggio1",punto)
					        $("#punteggio").html(punto)
					   
					        if(localStorage.getItem("round")=="1"){
						     prendinumeri3(1)
						    }
					        else if(localStorage.getItem("round")=="2"){
					          prendinumeri3_15(1)
					        }
					        else{
						      prendinumeri3_20(1)
					        }
					   
					      }
						  else if((somma>=16)&&(somma<25)){
					   
					        var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					        localStorage.setItem("punteggio1",punto)
					        $("#punteggio").html(punto)
					   
						    $("#val4").show()
					   
					        if(localStorage.getItem("round")=="1"){
					          prendinumeri(0)
					        }
							else if(localStorage.getItem("round")=="2"){
					         prendinumeri_15(0)
					        }
					        else{
					         prendinumeri_20(0)
					        }
					      }
						  else if((somma>=25)&&(somma<30)){
					   
					        var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					        localStorage.setItem("punteggio1",punto)
					        $("#punteggio").html(punto)
					   
						     $("#val4").show()
					   
						     if(localStorage.getItem("round")=="1"){
					           prendinumeri(1)
					         }
					         else if(localStorage.getItem("round")=="2"){
					          prendinumeri_15(1)
					         }
					         else{
					          prendinumeri_20(1)
					         }
					   
						   }
					      else if((somma>=30)&&(somma<40)){
					   
					       var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					       localStorage.setItem("punteggio1",punto)
					       $("#punteggio").html(punto)
					   
					       $("#val4").show()

						    if(localStorage.getItem("round")=="1"){
					          prendinumerimeno1(0)
					        }
					        else if(localStorage.getItem("round")=="2"){
					         prendinumerimeno1_15(0)
							}
					        else{
					         prendinumerimeno1_20(0)
					        }
					   
						  }
					      else if((somma>=40)&&(somma<99)){
					   
					       var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					       localStorage.setItem("punteggio1",punto)
						   $("#punteggio").html(punto)
					   
					        $("#val4").show()
					   

					        if(localStorage.getItem("round")=="1"){
					          prendinumerimeno1(1)
					        }
					        else if(localStorage.getItem("round")=="2"){
					         prendinumerimeno1_15(1)
					        }
					        else{
					         prendinumerimeno1_20(1)
					        }
					   
						  }
						  else{
					   
					       var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
						   localStorage.setItem("punteggio1",punto)
					       $("#punteggio").html(punto)
					   
					        $("#val4").hide()
					   

					        if(localStorage.getItem("round")=="1"){
					          prendinumeri3(0)
					        }
					        else if(localStorage.getItem("round")=="2"){
					          prendinumeri3_15(0)
					        }
					        else{
					          prendinumeri3_20(0)
					        }
					   
					      }
						  
					   }

		 });
		
		
		
		$(document).on("touchstart", "#val2", function(e){
					   var parametro=10;
					   
					   playAudio('successSound');
					   
					   $("#bianca1").show()
					   $("#palla2").hide()
					   
					   var valore = (Number(localStorage.getItem("session10"))) + (Number(due));
					   localStorage.setItem("session10",valore)
					   
					   $("#bianca1").attr("src","palle/"+due.replace("-","")+"n.png")
					   localStorage.setItem("numerodue",due)
					   
					   if(localStorage.getItem("round")=="2"){
					   parametro = 15;
					   $("#totale").html(valore+"/15")
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 10;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
						  var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 60;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 70;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 80;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 90;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 100;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 110;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 120;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   else if(localStorage.getItem("round")=="3"){
					   parametro = 20;
					   $("#totale").html(valore+"/20")
					   var numero = 3;
					   var numero1 = 4;
					   var numero2 = 5;
					   var numero3 = 6;
					   var numero4 = 7;
					   var numero5 = 8;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
						  var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 60;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 80;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 100;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 120;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 140;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 160;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 180;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 200;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 220;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 240;
					   }
					   else{
					   var bonus = 0;
					   }

					   }
					   else{
					   parametro = 10;
					   $("#totale").html(valore+"/10")
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 5;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
					   var bonus = 10;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 15;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 25;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 35;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 45;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 55;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 60;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   
					   if(valore==parametro){
						  somma = Number(somma)+1
						  $("#somma").html(somma)
					      localStorage.setItem("somma1",somma)
					   
					   if(localStorage.getItem("round")=="2"){
					   $("#totale").html("0/15")
					   }
					   else if(localStorage.getItem("round")=="3"){
					   $("#totale").html("0/20")
					   }
					   else{
					   $("#totale").html("0/10")
					   }
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
					   
					     $("#palla1").hide()
					     $("#palla2").hide()
						 $("#palla3").hide()
					     $("#palla4").hide()
					   
						  playAudio('successSound2');
					   
					   localStorage.setItem("esatte",(Number(localStorage.getItem("esatte"))) + (Number(numero)))
					   
					   $("#esatte2").html((Number(localStorage.getItem("esatte"))))
					   $("#esatte3").html((Number(localStorage.getItem("esatte"))))
					   
  
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(1)
					   }
					   else{
					    prendinumeri3_20(1)
					   }
					   
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(0)
					   }
					   else{
					   prendinumeri_20(0)
					   }
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(1)
					   }
					   else{
					   prendinumeri_20(1)
					   }
					   
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(0)
					   }
					   else{
					   prendinumerimeno1_20(0)
					   }
					   
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(1)
					   }
					   else{
					   prendinumerimeno1_20(1)
					   }
					   
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(0)
					   }
					   else{
					   prendinumeri3_20(0)
					   }
					   
					   }
						  
					   }
					   

		});
		
		
		$(document).on("touchstart", "#val3", function(e){
					   var parametro=10;
					   
					   playAudio('successSound');
					   
					   $("#bianca").show()
					   $("#palla3").hide()
					   
					   var valore = (Number(localStorage.getItem("session10"))) + (Number(tre));
					   localStorage.setItem("session10",valore)
					   
					   $("#bianca").attr("src","palle/"+tre.replace("-","")+"n.png")
					   localStorage.setItem("numerotre",tre)
					   
					   if(localStorage.getItem("round")=="2"){
					   parametro = 15;
					   $("#totale").html(valore+"/15")
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 10;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
						  var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 60;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 70;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 80;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 90;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 100;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 110;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 120;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   else if(localStorage.getItem("round")=="3"){
					   parametro = 20;
					   $("#totale").html(valore+"/20")
					   var numero = 3;
					   var numero1 = 4;
					   var numero2 = 5;
					   var numero3 = 6;
					   var numero4 = 7;
					   var numero5 = 8;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
						  var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 60;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 80;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 100;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 120;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 140;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 160;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 180;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 200;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 220;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 240;
					   }
					   else{
					   var bonus = 0;
					   }

					   }
					   else{
					   parametro = 10;
					   $("#totale").html(valore+"/10")
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 5;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
					   var bonus = 10;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 15;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 25;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 35;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 45;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 55;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 60;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   
					   if(valore==parametro){
					   somma = Number(somma)+1
						  $("#somma").html(somma)
						  localStorage.setItem("somma1",somma)
					   
					   if(localStorage.getItem("round")=="2"){
					   $("#totale").html("0/15")
					   }
					   else if(localStorage.getItem("round")=="3"){
					   $("#totale").html("0/20")
					   }
					   else{
					   $("#totale").html("0/10")
					   }
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
					   
					      $("#palla1").hide()
					      $("#palla2").hide()
						  $("#palla3").hide()
					      $("#palla4").hide()
					   
					      playAudio('successSound2');
					   
					   localStorage.setItem("esatte",(Number(localStorage.getItem("esatte"))) + (Number(numero)))
					   
					   $("#esatte2").html((Number(localStorage.getItem("esatte"))))
					   $("#esatte3").html((Number(localStorage.getItem("esatte"))))
					   
						  
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(1)
					   }
					   else{
					   prendinumeri3_20(1)
					   }
					   
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(0)
					   }
					   else{
					   prendinumeri_20(0)
					   }
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(1)
					   }
					   else{
					   prendinumeri_20(1)
					   }
					   
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(0)
					   }
					   else{
					   prendinumerimeno1_20(0)
					   }
					   
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(1)
					   }
					   else{
					   prendinumerimeno1_20(1)
					   }
					   
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(0)
					   }
					   else{
					   prendinumeri3_20(0)
					   }
					   
					   }
						  
					   }
					   
								
		});
		
		
		$(document).on("touchstart", "#val4", function(e){
					   var parametro=10;
					   
					   playAudio('successSound');
					   
					   $("#bianca2").show()
					   $("#palla4").hide()
					   
					   var valore = (Number(localStorage.getItem("session10"))) + (Number(quattro));
					   localStorage.setItem("session10",valore)
					   
					   $("#bianca2").attr("src","palle/"+quattro.replace("-","")+"n.png")
					   localStorage.setItem("numeroquattro",quattro)

					   if(localStorage.getItem("round")=="2"){
					   parametro = 15;
					   $("#totale").html(valore+"/15")
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 10;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
						  var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 60;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 70;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 80;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 90;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 100;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 110;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 120;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   else if(localStorage.getItem("round")=="3"){
					   parametro = 20;
					   $("#totale").html(valore+"/20")
					   var numero = 3;
					   var numero1 = 4;
					   var numero2 = 5;
					   var numero3 = 6;
					   var numero4 = 7;
					   var numero5 = 8;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
						  var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 60;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 80;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 100;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 120;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 140;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 160;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 180;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 200;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 220;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 240;
					   }
					   else{
					   var bonus = 0;
					   }

					   }
					   else{
					   parametro = 10;
					   $("#totale").html(valore+"/10")
					   var numero = 1;
					   var numero1 = 2;
					   var numero2 = 3;
					   var numero3 = 4;
					   var numero4 = 5;
					   var numero5 = 6;
					   
					   if((Number(localStorage.getItem("esatte")))==5){
					   var bonus = 5;
					   }
					   else if((Number(localStorage.getItem("esatte")))==10){
					   var bonus = 10;
					   }
					   else if((Number(localStorage.getItem("esatte")))==15){
					   var bonus = 15;
					   }
					   else if((Number(localStorage.getItem("esatte")))==20){
					   var bonus = 20;
					   }
					   else if((Number(localStorage.getItem("esatte")))==25){
					   var bonus = 25;
					   }
					   else if((Number(localStorage.getItem("esatte")))==30){
					   var bonus = 30;
					   }
					   else if((Number(localStorage.getItem("esatte")))==35){
					   var bonus = 35;
					   }
					   else if((Number(localStorage.getItem("esatte")))==40){
					   var bonus = 40;
					   }
					   else if((Number(localStorage.getItem("esatte")))==45){
					   var bonus = 45;
					   }
					   else if((Number(localStorage.getItem("esatte")))==50){
					   var bonus = 50;
					   }
					   else if((Number(localStorage.getItem("esatte")))==55){
					   var bonus = 55;
					   }
					   else if((Number(localStorage.getItem("esatte")))==60){
					   var bonus = 60;
					   }
					   else{
					   var bonus = 0;
					   }
					   }
					   
					   if(valore==parametro){
					     somma = Number(somma)+1
						  $("#somma").html(somma)
					      localStorage.setItem("somma1",somma)
					   
					   if(localStorage.getItem("round")=="2"){
					   $("#totale").html("0/15")
					   }
					   else if(localStorage.getItem("round")=="3"){
					   $("#totale").html("0/20")
					   }
					   else{
					   $("#totale").html("0/10")
					   }
						  $("#bianca0").hide()
						  $("#bianca").hide()
						  $("#bianca1").hide()
						  $("#bianca2").hide()
					   
					     $("#palla1").hide()
					     $("#palla2").hide()
						 $("#palla3").hide()
					     $("#palla4").hide()
					   
						 playAudio('successSound2');
					   
					   localStorage.setItem("esatte",(Number(localStorage.getItem("esatte"))) + (Number(numero)))
					   
					   $("#esatte2").html((Number(localStorage.getItem("esatte"))))
					   $("#esatte3").html((Number(localStorage.getItem("esatte"))))

						  
					   if ((somma>=10)&&(somma<16)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero1)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(1)
					   }
					   else{
					   prendinumeri3_20(1)
					   }
					   
					   }
						  else if((somma>=16)&&(somma<25)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero2)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(0)
					   }
					   else{
					   prendinumeri_20(0)
					   }
					   }
						  else if((somma>=25)&&(somma<30)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero3)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri_15(1)
					   }
					   else{
					   prendinumeri_20(1)
					   }
					   
					   }
					   else if((somma>=30)&&(somma<40)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero4)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(0)
					   }
					   else{
					   prendinumerimeno1_20(0)
					   }
					   
						  }
					   else if((somma>=40)&&(somma<99)){
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero5)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").show()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumerimeno1(1)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumerimeno1_15(1)
					   }
					   else{
					   prendinumerimeno1_20(1)
					   }
					   
						  }
						  else{
					   
					   var punto = (Number(localStorage.getItem("punteggio1"))) + (Number(numero)) + (Number(bonus));
					   localStorage.setItem("punteggio1",punto)
					   $("#punteggio").html(punto)
					   
					   $("#val4").hide()
					   
					   
					   if(localStorage.getItem("round")=="1"){
					   prendinumeri3(0)
					   }
					   else if(localStorage.getItem("round")=="2"){
					   prendinumeri3_15(0)
					   }
					   else{
					   prendinumeri3_20(0)
					   }
					   
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
			params.value1 = "add_"+localStorage.getItem("email").replace("@","").replace(".","").replace(".","")+"";
			params.value2 = "param";
			
			options.params = params;
			options.chunkedMode = false;
			
			var ft = new FileTransfer();
			ft.upload(imageURI, encodeURI("http://msop.it/uploadaddall.php"), win, fail, options);
			
		}
		
		
		
		function win(r) {
			console.log("Code = " + r.responseCode);
			console.log("Response = " + r.response);
			console.log("Sent = " + r.bytesSent);
			

			$.ajax({
				   type:"GET",
				   url:"http://msop.it/addall/caricafoto.php?nome=add_"+localStorage.getItem("email").replace("@","").replace(".","").replace(".","")+".jpg&email="+localStorage.getItem("email")+"",
				   contentType: "application/json",
				   //data: {Lat:3,Longi:4},
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				    localStorage.setItem("nomefoto", "add_"+localStorage.getItem("email").replace("@","").replace(".","").replace(".",""));
				   //$.each(result, function(i,item){
				   
				   //});
				   
				   //alert(r.response);

				   
				   },
				   error: function(){
				   
				     navigator.notification.alert(
												'errore nel caricamento della foto, riprova in seguito',  // message
												alertDismissed,         // callback
												'Foto',            // title
												'OK'                  // buttonName
												);
				   
				   
				   },
			dataType:"jsonp"});
			
			
			
			
			
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


$(document).on("tap", "#mandaemail", function(e){
			   
	window.plugin.email.open({
		to:      "info@pokeranswer.it",
		subject: "Contattaci",
		body:    "Richiedi informazioni",
		isHtml:  true
	});
			   
});



