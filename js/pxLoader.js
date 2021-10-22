$(function () {
    var loader = new PxLoader()
    var bg = loader.addImage('./img/bg.jpg');
    var bg_first = loader.addImage('./img/0/bg-first.jpg');
    var up = loader.addImage('./img/0/up.png');

    //选项选中后的圆圈
    var checkedImg = loader.addImage('./img/checkedImg.png');

    //第一题
    var questionNumOne = loader.addImage('./img/01/01@2x.png');
    var leftOne = loader.addImage('./img/01/01-A.png');
    var leftTwo = loader.addImage('./img/01/01-C.png');
    var leftThree = loader.addImage('./img/01/01-E.png');
    var leftFour = loader.addImage('./img/01/01-B.png');
    var leftFive = loader.addImage('./img/01/01-D.png');

    //第二题
    var lightThree = loader.addImage('./img/02/laightThree.png');
    var questionNumTwo = loader.addImage('./img/02/02@2x.png');
    var face = loader.addImage('./img/02/face.gif');
    var secondAnswerOne = loader.addImage('./img/02/answer-1.png');
    var secondAnswerTwo = loader.addImage('./img/02/answer-2.png');
    var secondAnswerThree = loader.addImage('./img/02/answer-3.png');
    var secondAnswerFour = loader.addImage('./img/02/answer-4.png');
    var secondAnswerFive = loader.addImage('./img/02/answer-5.png');

    //第三题
    var nightLight = loader.addImage('./img/03/nightLight.png');
    var questionNumThree = loader.addImage('./img/03/03@2x.png');
    var mobile = loader.addImage('./img/03/mobile.png');
    var begin = loader.addImage('./img/03/begin.png');
    var hand = loader.addImage('./img/03/hand.png');
    var begining = loader.addImage('./img/03/begining.png');
    var thirdBorderOne = loader.addImage('./img/03/border-1.png');
    var thirdBorderTwo = loader.addImage('./img/03/border-2.png');
    var thirdBorderThree = loader.addImage('./img/03/border-3.png');
    var thirdBorderFour = loader.addImage('./img/03/border-4.png');
    var thirdBorderFive = loader.addImage('./img/03/border-5.png');
    var thirdEmjoyOne = loader.addImage('./img/03/emjoy-1.png');
    var thirdEmjoyTwo = loader.addImage('./img/03/emjoy-2.png');
    var thirdEmjoyThree = loader.addImage('./img/03/emjoy-3.png');
    var thirdEmjoyFour = loader.addImage('./img/03/emjoy-4.png');
    var thirdEmjoyFive = loader.addImage('./img/03/emjoy-5.png');

    //第四题
    var giveMeFive = loader.addImage('./img/04/giveMeFive.gif');
    var colouredRibbon = loader.addImage('./img/04/colouredRibbon.png');
    var cup = loader.addImage('./img/04/cup.png');
    var questionNumFour = loader.addImage('./img/04/4@2x.png');
    var fourthAnswerOne = loader.addImage('./img/04/fourthAnswerOne.png');
    var fourthAnswerTwo = loader.addImage('./img/04/fourthAnswerTwo.png');
    var fourthAnswerThree = loader.addImage('./img/04/fourthAnswerThree.png');
    var fourthAnswerTFour = loader.addImage('./img/04/fourthAnswerFour.png');

    //第五题
    var questionNumFive = loader.addImage('./img/05/05@2x.png');
    var rotateBg = loader.addImage('./img/05/rotate.png')
    var fifthAnswerOne = loader.addImage('./img/05/01.png');
    var fifthAnswerTwo = loader.addImage('./img/05/02.png');
    var fifthAnswerThree = loader.addImage('./img/05/03.png');
    var fifthAnswerFour = loader.addImage('./img/05/04.png');
    var fifthAnswerFive = loader.addImage('./img/05/05.png');

    //时间轴页
    var line = loader.addImage('./img/06/line.png');

    //结果分享页
    var borderTop = loader.addImage('./img/07/border-top.png');
    var borderBottom = loader.addImage('./img/07/border-bottom.png');
    var shareBtn = loader.addImage('./img/07/share-btn.png');
    var titleBg = loader.addImage('./img/07/title-bg.png');
    var signTop = loader.addImage('./img/07/sign-01.png');
    var signBottom = loader.addImage('./img/07/sign-02.png');


    loader.addCompletionListener(function () {
        up.className = "up";
        $(".index-bottom").append(up);
        $(".checked-img").attr("src", checkedImg.src);
        $("#eventsSwiper").css("background-image", "url(" + bg.src + ")");
        //第一题
        $("#slide_1").css("background-image", "url(" + bg_first.src + ")");
        $("#slide_2 .question-num-one").css("background-image", "url(" + questionNumOne.src + ")");
        $("#slide_2 .left-answer .answer-one").css("background-image", "url(" + leftOne.src + ")");
        $("#slide_2 .left-answer .answer-two").css("background-image", "url(" + leftTwo.src + ")");
        $("#slide_2 .left-answer .answer-three").css("background-image", "url(" + leftThree.src + ")");
        $("#slide_2 .right-answer .answer-four").css("background-image", "url(" + leftFour.src + ")");
        $("#slide_2 .right-answer .answer-five").css("background-image", "url(" + leftFive.src + ")");
        //第二题
        $("#slide_3 .light-three").css("background-image", "url(" + lightThree.src + ")");
        $("#slide_3 .question-num-two").css("background-image", "url(" + questionNumTwo.src + ")");
        $("#slide_3 .face").css("background-image", "url(" + face.src + ")");
        $("#slide_3 .second-answer-one").css("background-image", "url(" + secondAnswerOne.src + ")");
        $("#slide_3 .second-answer-two").css("background-image", "url(" + secondAnswerTwo.src + ")");
        $("#slide_3 .second-answer-three").css("background-image", "url(" + secondAnswerThree.src + ")");
        $("#slide_3 .second-answer-four").css("background-image", "url(" + secondAnswerFour.src + ")");
        $("#slide_3 .second-answer-five").css("background-image", "url(" + secondAnswerFive.src + ")");
        //第三题
        $("#slide_4 .question-num-three").css("background-image", "url(" + questionNumThree.src + ")");
        $("#slide_4 .night-light").css("background-image", "url(" + nightLight.src + ")");
        $("#slide_4 .mobile").css("background-image", "url(" + mobile.src + ")");
        $("#slide_4 .begin").css("background-image", "url(" + begin.src + ")");
        $("#slide_4 .hand").css("background-image", "url(" + hand.src + ")");
        $("#slide_4 .begining").css("background-image", "url(" + begining.src + ")");
        //第三题的选项背景框
        $("#slide_4 .third-border-one").css("background-image", "url(" + thirdBorderOne.src + ")");
        $("#slide_4 .third-border-two").css("background-image", "url(" + thirdBorderTwo.src + ")");
        $("#slide_4 .third-border-three").css("background-image", "url(" + thirdBorderThree.src + ")");
        $("#slide_4 .third-border-four").css("background-image", "url(" + thirdBorderFour.src + ")");
        $("#slide_4 .third-border-five").css("background-image", "url(" + thirdBorderFive.src + ")");
        //第三题的选项表情
        $("#slide_4 .third-emjoy-one").attr("src", thirdEmjoyOne.src);
        $("#slide_4 .third-emjoy-two").attr("src", thirdEmjoyTwo.src);
        $("#slide_4 .third-emjoy-three").attr("src", thirdEmjoyThree.src);
        $("#slide_4 .third-emjoy-four").attr("src", thirdEmjoyFour.src);
        $("#slide_4 .third-emjoy-five").attr("src", thirdEmjoyFive.src);
        //第四题
        $("#slide_5 .question-num-four").css("background-image", "url(" + questionNumFour.src + ")");
        $("#slide_5 .give-me-five").css("background-image", "url(" + giveMeFive.src + ")");
        $("#slide_5 .coloured-ribbon").css("background-image", "url(" + colouredRibbon.src + ")");
        $("#slide_5 .cup").css("background-image", "url(" + cup.src + ")");
        //第四题答案
        $("#slide_5 .fourth-question-answer .fourth-answer-one").css("background-image", "url(" + fourthAnswerOne.src + ")");
        $("#slide_5 .fourth-question-answer .fourth-answer-two").css("background-image", "url(" + fourthAnswerTwo.src + ")");
        $("#slide_5 .fourth-question-answer .fourth-answer-three").css("background-image", "url(" + fourthAnswerThree.src + ")");
        $("#slide_5 .fourth-question-answer .fourth-answer-four").css("background-image", "url(" + fourthAnswerTFour.src + ")");
        //第五题
        $("#slide_6 .question-num-five").css("background-image", "url(" + questionNumFive.src + ")");
        $("#slide_6 .rotate-square").css("background-image", "url(" + rotateBg.src + ")");
        $("#slide_6 .fifth-question-answer .fifth-answer-one").css("background-image", "url(" + fifthAnswerOne.src + ")");
        $("#slide_6 .fifth-question-answer .fifth-answer-two").css("background-image", "url(" + fifthAnswerTwo.src + ")");
        $("#slide_6 .fifth-question-answer .fifth-answer-three").css("background-image", "url(" + fifthAnswerThree.src + ")");
        $("#slide_6 .fifth-question-answer .fifth-answer-four").css("background-image", "url(" + fifthAnswerFour.src + ")");
        $("#slide_6 .fifth-question-answer .fifth-answer-five").css("background-image", "url(" + fifthAnswerFive.src + ")");
        //时间轴页
        $("#slide_7 .speck .line").css("background-image", "url(" + line.src + ")");
        //结果分享页
        $("#slide_8 .border-top").css("background-image", "url(" + borderTop.src + ")");
        $("#slide_8 .border-bottom").css("background-image", "url(" + borderBottom.src + ")");
        $("#slide_8 .share-btn").css("background-image", "url(" + shareBtn.src + ")");
        $("#slide_8 .title-bg").css("background-image", "url(" + titleBg.src + ")");
        $("#slide_8 .sign-top").css("background-image", "url(" + signTop.src + ")");
        $("#slide_8 .sign-bottom").css("background-image", "url(" + signBottom.src + ")");

    });
    loader.start();
})