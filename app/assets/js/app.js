$(document).ready(function () {


/// Random Planes ///

  var planes = ['p1', 'p2', 'p3', 'p4', 'p5'];
  var funk = Math.floor(Math.random() * planes.length);
  $('#plane').removeClass().addClass(planes[funk]);


/// Menu ///
$('li.products, li.services').on('mouseenter', function(){
  var link = this.getAttribute('class');
  $('#products, #services').removeClass();
  $('#'+link).addClass('active');
  closeMenus(1500);
});

closeMenus(1500);

function closeMenus(delay){
  $('#products, #services').off().on('mouseleave', function(){
    setTimeout(function(){
       $('#products, #services').removeClass();
    }, delay);
    console.log('fired');
  });
}

}); /// End of document.ready ///


/// Slider ///
$('#launch').leanModal();


/// Slider ///

/// $('#fader img:gt(0)').hide();

/// setInterval(function(){
/// $('#fader img:first-child')
///  .fadeOut('fast', function(){
///     $('#fader :first-child')
///     .fadeIn('fast')
///     .end()
///     .appendTo('#fader');
///   });
/// }, 4000);


/// Clocks ///

$(function() {
  setInterval(function(){
    var dt = new Date();
    //$('.time').text(dt);
  
    var sec_deg = dt.getSeconds() * (360/60);
    var min_deg = dt.getMinutes() * (360/60);

    // D
    var hr_deg = dt.getHours() * (360/12) + dt.getMinutes() * (360/60/12); 
    
    // HK
    var hr_deg_hk = (dt.getHours() + 7) * (360/12) + dt.getMinutes() * (360/60/12); 

    // NY
    var hr_deg_ny = (dt.getHours() - 5) * (360/12) + dt.getMinutes() * (360/60/12); 
    
    
    $('.clock .second-hand').css({'-webkit-transform':'rotate(' + sec_deg + 'deg)', '-moz-transform':'rotate(' + sec_deg + 'deg)', '-o-transform':'rotate(' + sec_deg + 'deg)', '-ms-transform':'rotate(' + sec_deg + 'deg)', 'transform':'rotate(' + sec_deg  + 'deg)'});

    $('.clock .minute-hand').css({'-webkit-transform':'rotate(' + min_deg + 'deg)', '-moz-transform':'rotate(' + min_deg + 'deg)', '-o-transform':'rotate(' + min_deg + 'deg)', '-ms-transform':'rotate(' + min_deg + 'deg)', 'transform':'rotate(' + min_deg + 'deg)'});

    // D
    $('.clock-d .hour-hand').css({'-webkit-transform':'rotate(' + hr_deg + 'deg)', '-moz-transform':'rotate(' + hr_deg + 'deg)', '-o-transform':'rotate(' + hr_deg + 'deg)', '-ms-transform':'rotate(' + hr_deg + 'deg)', 'transform':'rotate(' + hr_deg + 'deg)'});
    
     // HK    
     $('.clock-hk .hour-hand').css({'-webkit-transform':'rotate(' + hr_deg_hk + 'deg)', '-moz-transform':'rotate(' + hr_deg_hk + 'deg)', '-o-transform':'rotate(' + hr_deg_hk + 'deg)', '-ms-transform':'rotate(' + hr_deg_hk + 'deg)', 'transform':'rotate(' + hr_deg_hk + 'deg)'});
     
     // NY   
     $('.clock-ny .hour-hand').css({'-webkit-transform':'rotate(' + hr_deg_ny + 'deg)', '-moz-transform':'rotate(' + hr_deg_ny + 'deg)', '-o-transform':'rotate(' + hr_deg_ny + 'deg)', '-ms-transform':'rotate(' + hr_deg_ny + 'deg)', 'transform':'rotate(' + hr_deg_ny + 'deg)'});
    
  
  }, 1000);
});


/// Tabs ///

$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
})


/// Plus ///

$('.plus').click(function(){
  $('.p-menu').toggleClass('showPlus');
  //$(this).toggleClass("spin");
  $('.plus').css({'-webkit-transform':'rotate(' + 90 + 'deg)',  '-moz-transform':'rotate(' + 90 + 'deg)', '-o-transform':'rotate(' + 90 + 'deg)', '-ms-transform':'rotate(' + 90 + 'deg)', 'transform':'rotate(' + 90  + 'deg)'});
});


$('.dropdown').mouseleave(function(){
  $('.p-menu').removeClass('showPlus');
});


/// Language ///

if ($('#language-selected').is(':empty')){
  $('.menu li').each(function() {
    if($(this).attr('class') == 'selected'){
      var selected = $(this).find('.lang-code').html().toUpperCase();
        console.log($(this).find('.lang-code').html().toUpperCase());
        $('#language-selected').html(selected);
    }
  });
}

// The next following line displays and set selected
  $('.dropdownbox').click(function(){
  $('.menu').toggleClass('showMenu');
    $('.menu > li').click(function(){
      var selected = $(this).find('.lang-code').html().toUpperCase();
      console.log($(this).find('.lang-code').html().toUpperCase());
      $('#language-selected').html(selected);
      $('.menu').removeClass('showMenu');         
      });
  });

  // Close select box if nothing is selected
  $('#dropdown-wrapper').mouseleave(function(){
    $('.menu').removeClass('showMenu');
  });





// Test 

  // function that determines offset
      function positionRotator()
      {
        var rotator_size = 100%;
        var initial_width = $(window).width();      
        var offset = (rotator_size - ((initial_width - rotator_size))) * 1; /// THIS IS THE LINE
        $("#home-rotator .cycle-slideshow").css("left",offset);       
      }     
      
      // do initial positioning
      positionRotator();    
      
      // re-position if screen is resized
      $(window).resize(function() {
        positionRotator();              
      }); 



