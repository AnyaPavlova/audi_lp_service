$(document).ready(function() {   

  //Делаем фиксированное меню
  var  $afterblock = $("#special-offers");
  var $afterblock_position = $afterblock.offset().top - 50;
  $(window).scroll(function () {
    if ($(window).scrollTop() > $afterblock_position) {
      $('.top-menu').addClass('top-menu__sticky');        
      $('#scroll-top').fadeIn(700);
    }
    else {
      $('.top-menu').removeClass('top-menu__sticky');
      $('#scroll-top').fadeOut(700);
    }
  });  

  /*Переход по якорю*/
  function GoToLink(e) {
    e.preventDefault();  
    var mylink = $(this).attr('href'); //значение ссылки    
    var headerheight= $(".top-menu").outerHeight(); //вычисляем высоту fixed меню
    var positionblock = $(mylink).offset().top - headerheight; //вычисляем позицию блока и вычитаем высоту меню
    $('html, body').animate({ scrollTop: positionblock }, 1100);
  };
  $(".menu__link").on("click", GoToLink); 

  //Активный пункт меню при прокрутке
  var links = $('[data-link]');
  var sections = $('[data-section]');
  var currentSection = null; //активная секция

  $(window).scroll(function () {

    sections.each(function(index, SectionElement) { //проверяем каждую секцию
      var foundItem = $(SectionElement).offset().top + ($(SectionElement).outerHeight() / 2) > $(window).scrollTop();      //true, если верхняя точка блока + высота/2 больше, чем текущий скролл
      if (foundItem) {
        currentSection = $(SectionElement).data('section');
        setLinkHover(currentSection);
        console.log(currentSection);
        return false; //если условие выполнено, то выходим из цикла
      }
    });    

  });
  function setLinkHover(currentSection) {
    $('.menu__link').removeClass('menu__link--active');
    links.each(function(index, LinkElement) {
      if( $(LinkElement).data('link') === currentSection ) {          
        $(LinkElement).addClass('menu__link--active');
        return false;
      } 
    });
  };
  //End Активный пункт меню при прокрутке

});