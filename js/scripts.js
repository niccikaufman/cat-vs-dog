$(document).ready(function(){
  $("#cat-pic").click(function(){
    $("ul#cat").prepend("<li>MRRrRrEeeeEOoOOWWwWWwWWwWW</li>");
    $("ul#cat").children("li").first().click(function(){
      $(this).remove();
    });
  }); 

  $("#dog-pic").click(function(){
    $("ul#dog").prepend("<li>WOOF WOOF WOOF</li>");
    $("ul#dog").children("li").first().click(function(){
      $(this).remove();
    });
  });
});