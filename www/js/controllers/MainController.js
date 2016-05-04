angular.module('starter.controllers', ['ngSanitize', 'ngStorage'])

.controller('MainController', function($q,$scope, $sce, $localStorage, $log,$interval,$http ) {

  
  $scope.master = {};
  $scope.level=""+ getUrlVars().floor;

  $scope.stats= ""+getUrlVars().status;



 /*function getDB(){
  $log.log("get DB ran");
  $http.post("./php/getDB.php")
    $http.post("./php/getDB.php").success(function(data){
        $scope.items = data;

        $log.log("SUCESS IN GETTING DB");
       });
 }*/
 
 function storUp(level,stats,stor){
  if (stor !== undefined){
  $log.log(level);  
  $log.log("B:" +stor);

  stor[0]= level;


  $log.log("A:" + stor);
  $log.log("i=4:"+ $localStorage.stor[4]);
  if(stats[0]=== 0){
    for(var i=1;i<4;i++){
      $localStorage.stor[i]=stats[i];
    }
  }else if(stats[0]==1){
    for(var j=1;j<4;j++){
      $localStorage.stor[j+3]=stats[j];
    }
  }else{

  }
$log.log("stor:"+ stor);
} else{
 stor =[];
}
$interval(function(){releaseStor($scope,$localStorage);}, 5000);
 }

function releaseStor($scope,$localStorage){
	var some1;
try{
  $scope.elevation = "B"+$localStorage.stor[0]  ;
  $log.log($scope.elevation);
}catch(e){
   $scope.elevation="MBB vs NB-IOT";
   $localStorage.stor=[0,0,0,0,0,0,0];
}

try{
//m1
        if ($localStorage.stor[1] == 1 ) {

          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m1 = some1;
        } else if ($localStorage.stor[1] == 3&& $localStorage.stor[1] !== undefined) {

          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m1 = some1;
        } else {
          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m1 = some1;
        }
//m2
        if ($localStorage.stor[2] == 1 ) {

          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m2 = some1;
        } else if ($localStorage.stor[2] == 3 && $localStorage.stor[2] !== undefined) {

          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m2 = some1;
        } else {
          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m2 = some1;
        }    
//m3
         if ($localStorage.stor[3] == 1 ) {

          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.m3 = some1;
        } else if ($localStorage.stor[3] == 3&& $localStorage.stor[3] !== undefined) {

          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.m3 = some1;
        } else {
          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m3 = some1;
        }
      }catch(e){
          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.m1 = some1;
          $scope.m2 = some1;
          $scope.m3 = some1;
      }

      try{
//n1
        if ($localStorage.stor[4] == 1 ) {

          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n1 = some1;
        } else if ($localStorage.stor[4] == 3 && $localStorage.stor[4] !== undefined) {

          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n1 = some1;
        } else {
          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n1 = some1;
        }
//n2
        if ($localStorage.stor[5] == 1 ) {

          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n2 = some1;
        } else if ($localStorage.stor[5] == 3 && $localStorage.stor[5] !== undefined ) {

          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n2 = some1;
        } else {
          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n2 = some1;
        }
//n3
        if ($localStorage.stor[6] == 1 ) {

          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/car.png\' /> ');
          $scope.n3 = some1;
        } else if ($localStorage.stor[6] == 3 && $localStorage.stor[5] !== undefined) {

          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/disconnection.png\' /> ');
          $scope.n3 = some1;
        } else {
          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n3 = some1;
        }
      }catch(e){
          some1 = $sce.trustAsHtml('<img class= \"overlay\" src= \'../Misc/concrete1.jpg\' /> ');
          $scope.n1 = some1;
          $scope.n2 = some1;
          $scope.n3 = some1;
      }

  //$log.log("5 seconds");


  
}

storUp($scope.level,$scope.stats,$localStorage.stor);
//$interval(function(){releaseStor($scope,$localStorage);}, 5000);



function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}
  


});