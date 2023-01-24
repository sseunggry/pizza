// 헤더 스크롤시 상단 고정
$(window).scroll(function(){

    let scroll = $(window).scrollTop();
    let headerHeight = $('header').outerHeight();
    let tabHeight = $('.tabWrap_top').outerHeight();

    if( $('body').children('.tabWrap_top').length > 0 ) {

        if( scroll > 0 ) {
            $('body').css('padding-top', headerHeight +  tabHeight);
            $('header').addClass('scroll');
            $('.tabWrap_top ').addClass('scroll');
        } else {
            $('body').css('padding-top',0);
            $('header').removeClass('scroll');
            $('.tabWrap_top ').removeClass('scroll');
        }
    } else {

        if ( scroll > 0 ) {
            $('body').css('padding-top', headerHeight);
            $('header').addClass('scroll');
        } else {
            $('body').css('padding-top',0);
            $('header').removeClass('scroll');
        }

    }
});

// event_banner close
$('.event_banner .btn_close').click(function(e){
    e.preventDefault();

    $('.event_banner, .event_banner p, .event_banner .btn_close').animate({width : 0, padding : 0}, 300).slideUp();
});


// header_sub
$('.backBtn').click(function(){
    history.back();
});


// select
$('.select.size .sizeBox').click(function(){

    $('.select.size .sizeBox').removeClass('active');
    $(this).addClass('active');

});

$('.select.edge .edgeList li').click(function(){

    $('.select.edge .edgeList li').removeClass('active');
    $(this).addClass('active');

    let edgeIndex = $('.select.edge .edgeList li').index(this);
    $('.pizzaDetail .product li').hide();
    $('.pizzaDetail .product li').eq(edgeIndex).show();
});

$('.select.topping .toppingList li').click(function(){
   let selectTopping = $('.select.topping .toppingList li.active').length;

   if( !$(this).hasClass('active') ){
        if ( selectTopping > 1 ) {
            alert('토핑은 최대 2개까지만 가능합니다');
        } else{
            $(this).addClass('active');
        }
   } else{
        $(this).removeClass('active');
   }

});

// 탭 여부에 따른 컨텐츠 높이
if ($('.wrap').children('.tabWrap_top').length > 0) {
        let headerHeight = $('header').outerHeight();
        let bottomMenuHeight = $('.bottomMenu').outerHeight();
        let tabHeight = $('.tabWrap_top').outerHeight();
        let conHeight = headerHeight + bottomMenuHeight + tabHeight;

        $('.container').css({'height' : `calc(100vh - ${conHeight}px)`});
}

// 수량 버튼 +,-
function orderCount(){
    let count;

    $('.btn_orderCount .minus').click(function(){
        let countTxt = $(this).siblings('.count');

        if ( countTxt.text() > 0 ) {
            count = countTxt.text();
            count--;
            countTxt.text(count);

        } else {
            countTxt.text(0);
            alert("최소 수량은 0 이상입니다.");
        }

    });

    $('.btn_orderCount .plus').click(function(){
        let countTxt = $(this).siblings('.count');

        if ( $(countTxt.text() >= 1) ) {
            count = countTxt.text();
            count++;
            countTxt.text(count);
        }
    });
};

orderCount();

// 장바구니 삭제버튼 인터랙션
$('button.delete').click(function(){
    let $cartLists = $(this).parent('.cartList li')

    $cartLists.hide(300);

    setTimeout(function(){
        $cartLists.remove();
        cartEmpty();
    }, 500);
});

function cartEmpty(){
    if ( $('.cartList li').length === 0 ) {
        $('.cartList_empty').show();
    }
}

// 메인 배너 스와이퍼
let swiper = new Swiper(".mainbanner", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 80,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });