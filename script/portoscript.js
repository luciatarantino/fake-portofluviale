$(document).ready(function(){
    
  //$(".rslides").responsiveSlides()  ;
    
  $(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 400,            // Integer: Speed of the transition, in milliseconds
  timeout: 3500,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
  nav: true,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "",   // String: Text for the "previous" button
  nextText: "",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});  

    
    $("#nuovoslider ul.rslides_tabs li a").html("");
    
    //REGOLE PER PULSANTE TORNA SU
    $(".tornasu").click(function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop:0},1000);
    });//fine .click
    
    
    $(document).scroll(function(){
            //console.log($(document).scrollTop()); -- dimmi quanto scrollo da su
        //prima condizione    
        if($(document).scrollTop()>500){
                $(".tornasu").fadeIn(800);
            }
        
            else{
            $(".tornaSu").fadeOut(800);
        } 
        
        //seconda condizione 
        if($(document).scrollTop()>100)
        {
                $("header section").css("height","120");
                $("header .destra .lingue div").css("margin-top","10");
                $("#menuico").css("margin-top","35");
        } 
        else
        {
                $("header section").css("height","140");
                $("header .destra .lingue div").css("margin-top","25");
                $("#menuico").css("margin-top","60");
        }
        
    });//fine .scroll
    /*
    $("#menuico").click(function(){
            
        //console.log($("#menuico").hasClass("hamburger"));  -- PONE LA DOMANDA: HAI LA CLASSE "hamburger"? risponde TRUE or FALSE
        
        if ($("#menuico").hasClass("hamburger"))
        {
            $("#menuico").removeClass("hamburger").addClass("close");
            
            $("header nav")                
                .css({"width":"70%","height":"30px","margin":"0 auto","font-size":".7em"})
                .animate({width:"100%",height:"40px",fontSize:"1em"},200)
                .fadeIn(300);
                
        }
        
        else
        {
           $("#menuico").removeClass("close").addClass("hamburger");
           //$("header nav").fadeOut(300);
        }
        
        
        
            
    });//fine .click
    */
    
    $("#menuico").click(function(){
        /*
        if ($("#menuico").hasClass("close"))
        {
            $("#menuico").removeClass("close");
        }
        
        else
        {
           $("#menuico").addClass("close");
        }
     */
      $("#menuico").toggleClass("close")  
      
        if ($("#menuico").hasClass("close"))
            {
             $("header nav").fadeIn(500) ; 
            }
        
        else{
            $("header nav").fadeout(500) ;
        }
        
        
    });//fine .click
    
    
    
});//chiudo ready