$(function() {
    $('#verPicture').hide();
    $('#name').focus();
});
$('#logins').click(function() {
    location.href = "index.html";
}); 
var countdown = 60;       
var iscode = false;

function settime(obj) {           
    $('#getpwd').text('重新获取验证码');
    if (countdown == 0) {               
        obj.removeAttribute("disabled");    
        countdown = 60;               
        return;           
    } else {               
        obj.setAttribute("disabled", true);   
        $('#getpwd').text("重新发送(" + countdown + ")");            
        countdown--; 
        if (countdown == 58) {
            var mailaddress = $('#name').val();
            var myemail = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
            console.log(mailaddress);
            if (myemail.test(mailaddress)) {
                axios.post(
                        '/register/sendIdCode', mailaddress, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    )
                    .then(function(response) {
                        var code = $('#verificationcode').val();
                        if (response.data == code) {
                            iscode = true;
                            console.log('发送成功！');
                        } else if (response.data == false) {
                            $('#codemsg').text('验证码错误，请输入正确的验证码，或重新获取验证码');
                            console.log('"邮件发送失败！请重试！');
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }          
        }
    }           
    setTimeout(function() {               
        settime(obj)           
    }, 1000)       
};
var isname = false;

function isName(str) {
    var myemail = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    if (myemail.test(str)) {
        $('#namemsg').text("");
        axios.post(
                '/register/name', {
                    name: $('#name').val()
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(function(response) {
                console.log(response.data);
                if (response.data == true) {
                    $('#namemsg').text('用户名已存在');
                    isname = true;
                } else if (response.data == false) {
                    $('#namemsg').text('验证信息通过');
                }
            })
            .catch(function(error) {
                console.log(error);
                console.log('验证失败');
            });
    } else {
        $('#namemsg').text('你输入的用户名不是邮箱');
    }
};

function isPassword(str) {
    var mypassword = /^[A-Za-z0-9`~!@#$%^&*()_+-=/*.<>,;:?/{}'"]{8,16}$/;
    if (!mypassword.test(str)) {
        $('#passwordmsg').text('密码不符合规范 1)长度为8~16位 2)支持数字、大小写字母、标点符号 3)不允许有空格');
    } else {
        $('#passwordmsg').text('验证信息通过');
    }
};

function isPasswordTwo(str) {
    var mypassword = /^[A-Za-z0-9`~!@#$%^&*()_+-=*.<>,;:?{}'"]{8,16}$/;
    if (!mypassword.test(str)) {
        $('#passwordmsgtwo').text('密码不符合规范 1)长度为8~16位 2)支持数字、大小写字母、标点符号 3)不允许有空格');
    } else {
        var pa = $('#password').val();
        if (pa == str) {
            $('#passwordmsgtwo').text('验证信息通过');
        } else {
            $('#passwordmsgtwo').text('两次密码输入不一致');
        }
    }
};

function shows() {
    if (isSuccess == false) {
        $('#verPicture').show();
    }
    $('#verSliderBlocks').mouseleave(function() {
        $('#verPicture').hide();
        $('#verSliderBlock').css("background-color", "white");
        $('#ja').css("color", "black");
    });
    $('#verSliderBlock').mouseenter(function() {
        $('#verSliderBlock').css("background-color", "#1991fa");
        $('#ja').css("color", "white");
    });
};
new Vue({
    el: '#registerform',
    data: {
        register: {
            name: "",
            password: "",
        }
    },
    methods: {
        send() {
            this.register.password = md5(this.register.password);
            var obj = JSON.stringify(this.register)
            this.register.password = "";
            console.log(obj);
            if ((!isname) && iscode) {
                axios.post(
                        '/register', obj, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    )
                    .then(function(response) {
                        if (response.data == true) {
                            console.log('登录成功');
                        } else if (response.data == false) {
                            console.log('登录失败');
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        }
    }
});
var isSuccess = false;
var imgs = ["../img/verify0.jpg", "../img/verify1.jpg", "../img/verify2.jpg", "../img/verify3.jpg", "../img/verify4.jpg"]
var imgSrc = imgs[parseInt(Math.random() * 5)];
var slider = $(".verSliderBlock")[0];
var canvas = $("#verCanvas")[0];
var context = canvas.getContext("2d");
var img = document.createElement('img');
var rightDistance;
var topDistance;
var slideFlag = false;
var origin = 0;

Object.defineProperty(window, "distance", {
    set: function(distance) {
        this.value = distance;
        if (distance > 0 && distance < 246) {
            $(slider).css("left", distance);
            draw(distance);
        } else if (distance <= 0) {
            $(slider).css("left", 0);
            draw(0);
        } else {
            $(slider).css("left", 247);
            draw(247);
        }
    },
    get: function() {
        return this.value;
    }
});
initCanvas(imgSrc);

function verRefresh() {
    unbindSlide();
    imgSrc = imgs[parseInt(Math.random() * 5)];
    slideFlag = false;
    distance = 0;
    origin = 0;
    $(".verSlider p").html("向右滑动滑块填充拼图").removeClass();
    initCanvas(imgSrc);
}
$(".verRefresh").click(verRefresh);

function judgeDistance() {
    if (distance > rightDistance - 3 && distance < rightDistance + 3) {
        $(slider).css("left", 247);
        $(".verSlider p").html("验证成功").removeClass("hide").addClass("success");
        setTimeout(function() {
            console.log("success")
        }, 1000)
        $('#verPicture').hide();
        $('#canvas').text('验证信息通过');
        isSuccess = true;
        $('#verSliderBlock').css("left", "0px");
    } else {
        distance = 0;
        $(".verSlider p").html("验证失败").removeClass("hide").addClass("fail");
        setTimeout(verRefresh, 1000)
        $('#canvas').text('验证失败');
    }
}

function onmousedown(e) {
    if (isSuccess == false) {
        slideFlag = true;
        $(slider).addClass("active");
        origin = e.x;
    }
}

function onmousemove(e) {
    if (slideFlag) {
        $(".verSlider p").addClass("hide");
        distance = e.x - origin;
    }
}

function onmouseup(e) {
    if (slideFlag) {
        slideFlag = false;
        distance = e.x - origin;
        $(slider).removeClass("active");
        judgeDistance()
    }
}

function bindSlide() {
    slider.addEventListener("mousedown", onmousedown);
    document.addEventListener("mousemove", onmousemove, true);
    document.addEventListener("mouseup", onmouseup, true);
}

function unbindSlide() {
    slider.removeEventListener("mousedown", onmousedown);
    document.removeEventListener("mousemove", onmousemove, true);
    document.removeEventListener("mouseup", onmouseup, true);
}

function initCanvas(img_src) {
    $(".verLoading").show();
    img.src = img_src;
    img.onload = function() {
        $(".verLoading").hide();
        bindSlide(slider);
        rightDistance = parseInt(Math.random() * 100 + 110) + 25;
        topDistance = parseInt(Math.random() * 100 + 20);
        draw();
    };
}

function draw(left) {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    context.globalAlpha = 0.9;
    context.fillStyle = "#fff";
    context.fillRect(rightDistance, topDistance, 35, 35);
    context.globalAlpha = 0.5;
    context.strokeStyle = "#000";
    context.lineWidth = 1;
    context.strokeRect(rightDistance, topDistance, 35, 35);
    context.globalAlpha = 1;
    context.shadowBlur = 10;
    context.shadowColor = "#fff";
    context.strokeStyle = "#fff";
    context.strokeRect(left || 2, topDistance, 35, 35);
    context.drawImage(img, rightDistance - 25, topDistance, 35, 35, left || 2, topDistance, 35, 35);
}