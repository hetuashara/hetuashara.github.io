jQuery(function($){
  var domain="hetus.net";    
  
  //Takes care of http
  $('a[href^="http://"]')
    .not('[href*="'+domain+'"]')
    .attr('target','_blank');
    
  //Takes care of https 
  $('a[href^="https://"]')
    .not('[href*="'+domain+'"]')
    .attr('target','_blank');
    });​