$(document).ready(function(){

  // Initialize collapse button
  $("[data-activates='slide-out']").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  var prices = {
    st_m: '7.99',
    st_m2: '7.99',
    st_2y: '99.00',
    v_total: '9.00',
    v_decline: '0.00',
    v_extended: '3.00',
    v_coach: '7.00',
    v_mobile_no_florida: '11.00',
    v_mobile_florida: '11.00',
    v_wireless: '7.15',
    apple: '129.00',
    none: '0.00',
  };

  $("input[name='plan']").change(function() {
    let key = $(this).attr('id');
    $('.total').text(prices[key]);
  });

  /*$(".collapsible-item").click(function() {
    $('.expandable').text('expand_less');
  });*/
  $(".collapsible-header").click(function() {
    var was_active = $(this).hasClass('active');
    $('.expandable').text(was_active ? 'add': 'remove');
  });

  if(window.location.href.split("?")[1] == "demo=1") {
    $('#demo-1').show()
    $('#demo-2').hide()
  } else {
    $('#demo-2').show()
    $('#demo-1').hide()
  }
  
  $('.modal').modal();
});
