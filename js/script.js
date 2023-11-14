// Update progress function
function updateProgress(barId, labelId, current, total) {
    const bar = document.getElementById(barId);
    const label = document.getElementById(labelId);
    const percentage = (current / total) * 100;
    
    bar.querySelector('.progress').style.width = `${percentage}%`;
    label.textContent = `${current}${label.dataset.unit}`;
  }
  
  // Simulate progress updates
  updateProgress('progress-bar-1', 'progress-label-1', 1300, 2000); // Update for 1300万
  updateProgress('progress-bar-2', 'progress-label-2', 10, 20); // Update for 10個
  updateProgress('progress-bar-3', 'progress-label-3', 8, 10); // Update for ５種類
  


$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 5,//スライドを画面に3枚見せる
    slidesToScroll: 5,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 2,//スライドを画面に2枚見せる
            slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に1枚見せる
            slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        }
    }
]
});



$(function() {
    var rangePercent = $('[type="range"]').val();
    $('[type="range"]').on('change input', function() {
      rangePercent = $('[type="range"]').val();
      $('h4').html(rangePercent+'<span></span>');
      $('[type="range"], h4>span').css('filter', 'hue-rotate(-' + rangePercent + 'deg)');
      // $('h4').css({'transform': 'translateX(calc(-50% - 20px)) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
      $('h4').css({'transform': 'translateX(-50%) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
    });
  })

