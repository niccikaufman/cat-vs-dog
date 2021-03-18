$(document).ready(function(){
  $("#cat-pic").click(function(){
    $("img#cat-pic").after("<p>MRRrRrEeeeEOoOOWWwWWwWWwWW</p>");
    $("img#cat-pic").siblings("p").first().click(function(){
      (this).remove();
    });
  }); 

  $("#dog-pic").click(function(){
    $("img#dog-pic").after("<p>WOOF WOOF WOOF</p>");
    $("img#dog-pic").siblings("p").first().click(function(){
      (this).remove();
    });
  });
});