var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
     paginationClickable:true,
     mousewheelControl:true,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

    }
});
(function(){
    var audio = document.createElement("audio");
    audio.src="assets/imgs/JingleBells.mp3";
    audio.loop="loop";
    audio.play();
    var player = document.querySelector(".play");
    player.addEventListener("click",function(){
        if(audio.paused){
            audio.play();
            document.querySelector(".music").style.animationPlayState="running";
            document.querySelector(".music").style["-webkit-animation-play-state"]="running";
            document.querySelector("#mPlay").className="play";
        }else{
            document.querySelector(".music").style.animationPlayState="paused";
            document.querySelector(".music").style["-webkit-animation-play-state"]="paused";
            audio.pause();
            document.querySelector("#mPlay").className="no-play";
        }
    })
})();

