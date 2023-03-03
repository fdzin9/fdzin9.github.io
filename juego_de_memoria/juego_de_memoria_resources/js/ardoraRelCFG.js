//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien hecho!!!"; messageTime=""; messageError="NOOOOOO :´c"; messageErrorG="NOOOOOO :´c"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="anVlZ29fZGVfbWVtb3JpYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["","","","","","","",""];
var iL=["<div  align='center'><img alt='' src='juego_de_memoria_resources/media/240px-Lanzarote__Canary_Islands__-_OSM_Mapnik.svg.png'></div>","<div  align='center'><img alt='' src='juego_de_memoria_resources/media/266px-LocBaleares.svg.png'></div>","<div  align='center'><img alt='' src='juego_de_memoria_resources/media/220px-Gc01_cropped_no_watermark.jpg'></div>","<div  align='center'><img alt='' src='juego_de_memoria_resources/media/Fuerteventura_NWW.png'></div>","<div  align='center'><img alt='' src='juego_de_memoria_resources/media/Tenerife__Canary_Islands_ESA23970088.jpeg'></div>","<div  align='center'><img alt='' src='juego_de_memoria_resources/media/images.jpg'></div>","<div  align='center'><img alt='' src='juego_de_memoria_resources/media/descarga__1_.jpg'></div>","<div  align='center'><img alt='' src='juego_de_memoria_resources/media/descarga__2_.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>La Gomera</p>","<p>Lanzarote</p>","<p>Ibiza</p>","<p>Fuerteventura</p>","<p>Gran Canaria</p>","<p>Mallorca</p>","<p>Tenerife</p>","<p>Formenter</p>"]; ansRL=["MQ==","NQ==","NA==","Mw==","Ng==","Mg==","Nw==","MA=="];
var iR=["","","","","","","",""];
var auR=[8,1,6,4,3,2,5,7];
