

(function () {


    var app = angular.module('store', []);



    app.config(function ($httpProvider) {

    });

    app.controller('mainCtrl', ['$http', '$scope', '$timeout',  '$interval', '$window', function ($http, $scope, $timeout, $interval, $window) {

        $scope.chapelOpen           = true;
        $scope.soundOpen            = false;
        $scope.shopOpen             = false;
        $scope.lightsPageOpen       = false;
        $scope.contactPageOpen      = false;
        $scope.zoomPageOpen         = false;
        $scope.volumeOn             = false;
        $scope.zoomPageOpen         = false;
        $scope.contactPageOpen      = false;
        $scope.soundPageOpen        = false;
        $scope.lightPageOpen        = false;
        $scope.menuOpen              = false;
        $scope.homePageOpen         = true;
        $scope.menuItemsOn          = false;
        $scope.menuListClosed       = true;
        $scope.menu1                = false;
        $scope.menu2              = false;
        $scope.menu3              = false;
        $scope.audio                = new Audio('../audio/nav.wav')
        $scope.bgaudio              = new Audio('../images/web.wav')
  
        $scope.openShopPage = function(){

            $scope.bgaudio.play()

        }
        $scope.openMenu1 = function(){
            console.log("menu1")
            $scope.audio.play()
            $scope.menu1 = true;
            $scope.menu2 = false;;
            $scope.menu3 = false;
        }
        $scope.openMenu2 = function(){

            $scope.audio.play()
            $scope.menu2 = true;
            $scope.menu1 = false;
            $scope.menu3 = false;
            
        }
        
        $scope.openMenu3 = function(){

            $scope.audio.play()
            $scope.menu2 = false;
            $scope.menu1 = false;
            $scope.menu3 = true;
            
        }
        console.log("WE OUT HERE!")
        $scope.openShopPage()

        $scope.toggleMusic = function(){

            if(!$scope.volumeOn){

                $scope.volumeOn = true;
                $scope.bgaudio.play()

            }else{

                $scope.volumeOn = false;
            }

        }

        $scope.closeZoomPage = function(){

            if(!$scope.zoomPageOpen){

                $scope.zoomPageOpen = true;

            }else{

                $scope.zoomPageOpen = false;

            }
        }
        $scope.openMenu= ()=>{

            console.log("clickeddd")
            $scope.audio.play()
            
            if(!$scope.menuOpen){

                $scope.menuOpen = true;
                $scope.menuListClosed = false;
                var scope = $scope;
                //setTimeout(()=>{

                    $scope.menuItemsOn = true;

                //}, 2000)

            }else{
                var scope = $scope;
                
                $scope.audio.play()
                $scope.menuItemsOn = false;

               // setTimeout(()=>{

                    $scope.menuOpen = false;
                    $scope.menu1 = false;
                    $scope.menu2 = false;
                    $scope.menu3 = false;
                    console.log($scope.menuOpen)

               // }, 1000)
                
               // $scope.menuOpen = false;
            }
        }
        $scope.clickTest= function(){

            console.log("clicked")
            $('html, body').animate({
                scrollTop: $("#firstDiv").offset().top-100
            }, 1000);
        }
        $scope.clickTest()
        $scope.openContactPage     = function(){

                if(!$scope.contactPageOpen){

                    $scope.contactPageOpen      = true;
                    $scope.homePageOpen         = false;
                    $scope.soundOpen            = false;
                    $scope.soundPageOpen        = false;
                    $scope.lightsPageOpen       = false;

                }

        }
        
        $scope.openShopPage = function(){


            $scope.audio.play()

                if( !$scope.shopOpen){

                    $scope.homePageOpen = false;
                    $scope.soundOpen    = false;
                    $scope.shopOpen     = true;

                }

        }

        $scope.openSoundPage = function(){

            if(!$scope.soundOpen){

                    $scope.soundOpen        = true;
                    $scope.homePageOpen     = false;
                    $scope.contactPageOpen  = false;
                    $scope.lightsPageOpen   = false;

            }

        }

        $scope.openLightsPage = function(){

            if(!$scope.lightsPageOpen){

                $scope.lightsPageOpen   = true;
                $scope.soundOpen        = false;
                $scope.contactPageOpen  = false;
                $scope.homePageOpen     = false;

            }

        }

        $scope.openHomePage = function(){

            if(!$scope.homePageOpen){

                $scope.homePageOpen         = true;
                $scope.contactPageOpen      = false;
                $scope.soundOpen            = false;
                $scope.lightsPageOpen       = false;

            }

        }


    }]);


}());


