var qNum = 7,
    answerArr = new Array(),
    flagArr = new Array(),
    musicMp3Arr = ['./audio/01.mp3', './audio/02大火.mp3', './audio/03倒带.mp3', './audio/04打字+消息声_缩混.mp3', './audio/05欢呼.mp3', './audio/06拍照.mp3', './audio/01.mp3', './audio/01.mp3', ],
    histroyBgImg = ['../img/06/guoji.png', '../img/06/hulianwang.png', '../img/06/qiyecaijing.png', '../img/06/shehui.png', '../img/06/weifafanzui.png', '../img/06/wentiyule.png', '../img/06/zainan.png', '../img/06/zhengwu.png'],
    ClickFlag = false,
    modifier = 2,
    isAudio = false; //每天的px

function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        alert("true==是微信环境")
        document.addEventListener("WeixinJSBridgeReady", function () {
            document.getElementById('audio').play();
        }, false);
        return true;
    } else {
        console.log("false==不是微信环境")
        return false;
    }
}
is_weixin()

$(document).ready(function () {

    // //触屏即加载音乐
    // document.addEventListener('touchstart', function () {
    //     document.getElementById('audio').play()
    // })

    // //进入微信页面即加载
    // document.addEventListener('WeixinJSBridgeReady', function () {
    //     document.getElementById('audio').play()
    // })

    //隐藏弹出框
    $(".hide-share-bg").hide()
    $(".share-content").hide()



    //音乐加载地址
    $("audio").attr("src", musicMp3Arr[0])
    var oAudio = $('#audio').get(0);
    oAudio.addEventListener("canplay", function () { //监听audio是否加载完毕
        isAudio = audio.paused
    });
    //判断音乐的播放和暂停
    $(".music-switch").click(function () {
        if (audio !== null) {
            if (isAudio) {
                oAudio.play();
                $(".music").addClass("play");
            } else {
                oAudio.pause();
                $(".music").removeClass("play");
            }
        }

    })

    var mySwiper = new Swiper('#eventsSwiper', {
        direction: 'vertical', // 垂直切换选项
        // loop: true, // 循环模式选项
        // allowSlideNext:false,  //禁止向右向下滑动

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        on: {
            init: function () {
                swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function () { //回调函数，swiper从一个slide过渡到另一个slide结束时执行。
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                this.slides.eq(this.realIndex).find('.ani').removeClass('ani'); //动画只展现一次，去除ani类名
                if ($(".swiper-slide-active").find(".question-answer")) { //判断当前页下有没有question-answer-》判断是不是选择题
                    $(".swiper-slide-active").find(".question-answer").parents(".swiper-slide-active").addClass("swiper-no-swiping");
                }
                if ($(".swiper-slide-active").find("#swiper-history")) { //如果是时间轴页面，禁止回退到选择题部分
                    mySwiper.allowSlidePrev = false
                }
                if ($(".swiper-slide-active").find("#slide_8")) { //如果是结果页面，可以向上回退到时间轴页面
                    mySwiper.allowSlidePrev = true
                }
            },
            touchEnd: function (event) { //数触摸释放时执行
                if (mySwiper.isEnd || mySwiper.realIndex == 6) {
                    AnswerInit();
                }
                $.setTimeoutFun()
            },
        }
    })

    // 时间轴页面滑动
    var historySwiper = new Swiper('#eventsSwiper #swiper-history .swiper-container', {
        loop: false,
        on: {
            init: function () {
                mySlides = '';
                for (var i = 0; i < historyList.length; i++) {
                    this.appendSlide('<div class="swiper-slide slide' + i + '"><a target="_self" href="' + historyList[i]['hrefEv'] + '"><div class="event-msg"><img class="srcImg" src="' + historyList[i]['srcImg'] + '"/><p>' + historyList[i]['title'] + '</p></div></div></a>');
                    if (historyList[i]['danmuContent']) {
                        $("#slide_7 .screen .s_show").append("<div class='magictime twisterInUp'><img src='" + historyList[i]['hraderImg'] + "'/><span>" + historyList[i]['danmuContent'] + "</span></div>")
                    }

                }
            },
            touchEnd: function () {
                if (historySwiper.activeIndex == 29) {
                    historySwiper.allowSlideNext = false
                } else {
                    historySwiper.allowSlideNext = true
                }

            }
        },

    })

    // 每一个label点击后，获取该选项对应的结果内容
    $("label").on("click", function () {
        let acIndex = mySwiper.realIndex + 1;
        anwser = "";
        $(this).find("input[type='radio']").attr("checked", "checked");
        if (IsAnwsered(acIndex - 1)) {
            $(".checked-img").css("display", "none");
            $(this).parent().find(".checked-img").toggle();
            ClickFlag = true;
            anwser = $(this).find("input[type='radio']:checked").val();
            ArrayInsert(acIndex - 1, anwser);
            PaginationChange(acIndex);
            $.setTimeoutFun();
        }
    })

    //切换页面之后做判断
    $.extend({
        'setTimeoutFun': function () {
            setTimeout(function () {
                //等待500ms，确保label绑定的事件执行
                if (isAudio) {
                    if ($(".music").hasClass("play") && !audio.paused) {
                        $(".music").addClass("play");
                        $("audio").attr("src", musicMp3Arr[mySwiper.realIndex])[0].play(); /*播放*/
                        audio.paused = false;
                    } else {
                        $(".music").removeClass("play");
                        $("audio").attr("src", musicMp3Arr[mySwiper.realIndex])[0].pause(); /*暂停*/
                        audio.paused = true;
                    }
                }


                var realIndex = mySwiper.realIndex + 1;
                if (ClickFlag) {
                    ClickFlag = false;
                    //本题已答

                    if (realIndex === 3) {
                        $("#slide_4 .mobile-hand .begin").show()
                        setInterval(function () {
                            $("#slide_4 .hand").slideToggle(1500);
                            $("#slide_4 .mobile-hand .begining").fadeToggle(1500);
                            $("#slide_4 .mobile-hand .begin").fadeToggle(1500);
                        }, 1300)
                    }

                    if (IsAnwsered(realIndex + 1) || realIndex === 6) {
                        // 下题已答就找出未答的最小题号
                        var questions = [];
                        for (var i = 0; i <= 6; i++) {
                            if (!IsAnwsered(i) && i != 0 && i != 6 && i != 7) {
                                questions.push(i);
                            }
                        }
                        if (questions.length) {
                            mySwiper.slideTo(questions[0] - 1, 1000, false);
                        } else {
                            //全部答完
                            // console.log("全部答完");
                            $(".swiper-slide-active").find(".question-answer").parents(".swiper-slide-active").removeClass("swiper-no-swiping");
                            mySwiper.slideNext();
                        }
                    } else {
                        $(".swiper-slide-active").find(".question-answer").parents(".swiper-slide-active").removeClass("swiper-no-swiping");
                        mySwiper.slideNext();
                    }
                }
            }, 500);
        },
    })

    //分享按钮点击后的分享到朋友圈和微信好友
    $(".share-btn").on("click", function () {
        $(".hide-share-bg").show();
        $(".share-content").show();
    });
    //点击取消关闭分享弹出框
    $(".cancel").on("click", function () {
        $(".hide-share-bg").hide();
        $(".share-content").hide();
    })
    //点击黑色的背景关闭分享弹出框
    $(".hide-share-bg").on("click", function () {
        $(".hide-share-bg").hide();
        $(".share-content").hide();
    })
    //点击分享到朋友圈
    $(".to-friend-group").on("click", function () {
        wx.ready(function () { //需在用户可能点击分享按钮前就先调用
            wx.updateTimelineShareData({
                title: '百大事件', // 分享标题
                link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: '', // 分享图标
                success: function () {
                    // 设置成功
                }
            })
        });
    })
    //点击分享给微信好友
    $(".to-friend-group").on("click", function () {
        wx.ready(function () { //需在用户可能点击分享按钮前就先调用
            wx.updateAppMessageShareData({
                title: '百大事件', // 分享标题
                desc: '', // 分享描述
                link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: '', // 分享图标
                success: function () {
                    // 设置成功
                }
            })
        });
    })

})

//判断索引题目是否已答
function IsAnwsered(index) {
    var qname = "q" + (index);
    anwser = $("input[name=" + qname + "]:checked").val();
    if (anwser != undefined) {
        return true;
    } else {
        return false;
    }
}

// 在label每点击一次，当前页数+1，并传给swiper-pagination-bullet
function PaginationChange(index) {
    $(".swiper-pagination-bullet").each(function () {
        if ($(this).html() == index) {
            $(this).addClass("pagination-checkyet");
        }
    });
}

//添加答案-》到answerArr[i]
function ArrayInsert(index, item) {
    var str = index + "-";
    var result = false;
    if (answerArr.length == 0) {
        answerArr.splice(index - 1, 0, str + item);
    } else {
        for (var i = 0; i < answerArr.length; i++) {
            if (isContains(answerArr[i], str)) {
                answerArr[i] = str + item;
                result = true;
                break;
            }
        }
        if (!result) {
            answerArr.splice(index - 1, 0, str + item);
        }
    }
}

//判断是不是同一道题的答案
function isContains(str, substr) {
    return new RegExp(substr).test(str);
}

//获取选项对应的答案
function AnswerInit() {
    $("input[type='radio']").attr("disabled", "disabled");
    if (answerArr.length > 0) {
        ShowAnwser(answerArr)
    } else {
        $("#slide_8").html('<div style="color:#fff">只有选择了才有结果呀~</div>')
    }
}

//结果分享页-》选项答案和标签
function ShowAnwser(data) {
    // console.log(data)
    let answerMonthSort = new Array();
    let answerDaySort = new Array();
    if (data) {
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i])
            let flag = $("#eventsSwiper").find(".question-" + (i + 1)).find(".answer-" + data[i]).find("ul li");
            if (flag.length > 1) {
                for (let i = 0; i < flag.length; i++) {
                    flagArr.push(flag[i].innerText)
                }
            } else {
                flagArr.push(flag.text())
            }
            $("#slide_8").find(".answer-last-" + (i + 1)).html($("#eventsSwiper").find(".question-" + (i + 1)).find(".answer-" + data[i]).find("span").text())
        }
        maxstringload(flagArr)
        flagDescribe(maxstringload(flagArr))
        $("#slide_8").find(".title-bg").html(flagDescribe(maxstringload(flagArr)))
    }
}

//判断出现最多次数的字符
function maxstringload(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i]; //key中存储的是每一个字符串
        if (obj[key]) { //判断这个键值对中有没有这个键
            obj[key]++;
        } else {
            obj[key] = 1; //obj[w]=1
        }
    }
    var maxCount = 0; //假设是出现次数最多的次数
    var maxString = ""; //假设这个字符串是次数出现最多的字符串
    for (var key in obj) {
        if (maxCount < obj[key]) {
            maxCount = obj[key]; //保存最大的次数
            maxString = key;
        }
    }
    return maxString;
}

//不同的标签对应不同的描述
function flagDescribe(item) {
    let describe = "2019年，"
    switch (item) {
        case "国际":
            describe += "你纵观时事，国内外动态尽收眼底";
            break;
        case "人文科技":
            describe += "你与有荣焉，见证着科技飞速发展";
            break;
        case "社会":
            describe += "你或悲或喜，看尽这世间人情冷暖";
            break;
        case "互联网":
            describe += "你畅游网络，掌握着一手热点资讯";
            break;
        case "企业":
            describe += "你享受人生，关心与生活相关的事";
            break;
        case "娱乐":
            describe += "你热爱八卦，总是奋斗在一线吃瓜";
            break;
        default:
            describe += "你慷慨激昂，为祖国点滴进步喝彩";
    }
    return describe;
}
