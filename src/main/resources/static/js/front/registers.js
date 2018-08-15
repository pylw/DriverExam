Vue.component('app-head', {
    data: function() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    },
    template: `<div class="jumbotron jumbotron-fluid bg-gray py-3">
    <div class="container">
        <div class="row" style="color: blue;">
            <div class="col-lg-9">
                <span style="font-size: 35px;border-right: solid 1px;margin-right: 10px;">在线驾考答题系统</span><span>注册账号</span>
            </div>
            <div class="col-lg-3">
                我已注册，现在就
                <a class="btn btn-primary" href="#" role="button" id="logins">登录</a>
            </div>
        </div>
    </div>
</div>`
});
Vue.component('app-body', {
    data: function() {
        return {
            register: {
                name: "",
                password: "",
            },
            isname: "",
            iscode: ""
        }
    },
    methods: {
        send() {
            if ($('#name').val() == "") {
                $('#namemsg').text("用户名不能为空");
            }
            if ($('#password').val() == "") {
                $('#passwordmsg').text("密码不能为空");
            }
            if ($('#passwordtwo').val() == "") {
                $('#passwordmsgtwo').text("密码不能为空");
            }
            if ($('#verificationcode').val() == "") {
                $('#codemsg').text("验证码不能为空");
            }
            this.register.password = md5(this.register.password);
            var obj = JSON.stringify(this.register)
            this.register.password = "";
            console.log(obj);
            console.log(iscode);
            console.log(isname);
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
                            console.log('注册成功');
                            $('#registerform').hide();
                            $('body').append("<p>您已成功注册，请尽快登录</p>");
                        } else if (response.data == false) {
                            console.log('注册失败');
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        showss() {
            console.log("ss");

        }
    },
    mounted() {
        $('#verPicture').hide();
        $('#name').focus();
        $('#logins').click(function() {
            location.href = "../index.html";
        });
        $('#getpwd').click(function() {
            settime(this);
        }); 
        var countdown = 60;       

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
                        console.log("ss");
                        // axios.post(
                        //         '/register/sendIdCode', {
                        //             "name": mailaddress
                        //         }, {
                        //             headers: {
                        //                 'Content-Type': 'application/json'
                        //             }
                        //         }
                        //     )
                        //     .then(function(response) {
                        //         console.log(response);
                        //     })
                        //     .catch(function(error) {
                        //         console.log(error);
                        //     });
                    }          
                }
            }           
            setTimeout(function() {               
                settime(obj)           
            }, 1000)       
        };
        $('#verificationcode').change(function() {
            getcode(this.value);
        });

        function getcode(str) {
            axios.post(
                    '/register/confirmCode', {
                        "name": $('#name').val(),
                        "code": str
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then(function(response) {
                    if (response.data == true) {
                        iscode = true;
                        console.log('验证成功！');
                    } else if (response.data == false) {
                        $('#codemsg').text('验证码错误，请输入正确的验证码，或重新获取验证码');
                        console.log('"验证失败！');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        };

        $('#name').change(function() {
            isName(this.value);
        });
        $('#password').change(function() {
            isPassword(this.value);
        });
        $('#passwordtwo').change(function() {
            isPasswordTwo(this.value);
        });

        function isName(str) {
            var myemail = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
            if (myemail.test(str)) {
                $('#namemsg').text("");
                axios.post(
                        '/register/name', {
                            "name": $('#name').val()
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
                            isname = false;
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

        $('#verSliderBlocks').mouseenter(function() {
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
    },
    template: `<div class="row-lg-6 offset-3 mt-5">
    <div class="col-lg-10">
        <div class="container">
            <form class="registerform" id="registerform">
                <div class="form-group row">
                    <label for="name" class="col-lg-2 col-form-label">用户名</label>
                    <div class="col-lg-4">
                        <div class="verPicture" id="verPicture">
                            <canvas id="verCanvas" width="285px" height="145px" style="position: absolute;z-index: 1;"></canvas>
                        </div>
                        <input v-model="register.name" type="text" class="form-control" name="name" id="name" placeholder="请输入邮箱">
                    </div>
                    <div class="col-lg-4">
                        <span id="namemsg" style="color: red;"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-lg-2 col-form-label">密码</label>
                    <div class="col-lg-4">
                        <input v-model="register.password" type="password" class="form-control" name="password" id="password" placeholder="请设置登录密码" maxlength="16">
                    </div>
                    <div class="col-lg-4">
                        <span id="passwordmsg" style="color: red;"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="passwordtwo" class="col-lg-2 col-form-label">再次确认密码</label>
                    <div class="col-lg-4">
                        <input type="password" class="form-control" name="passwordtwo" id="passwordtwo" placeholder="请再次输入密码" maxlength="16">
                    </div>
                    <div class="col-lg-4">
                        <span id="passwordmsgtwo" style="color: red;"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="passwordtwo" class="col-lg-2 col-form-label">验证码</label>
                    <div class="verification col-lg-4 ml-3" style="background-color: #f7f9fa;border:1px solid #e4e7eb;border-radius: 5px;" id="verSliderBlocks">
                        <div class="verSlider" id="verSlider">
                            <!-- 滑块 -->
                            <div id="verSliderBlock" class="verSliderBlock" style="left: 0px; position: absolute;background-color: white;height: 38px;width: 36px;cursor: pointer;box-shadow: 0 0 3px rgba(0,0,0,.3)"><span style="margin-left: 6px;font-size: x-large;" id="ja">→</span></div><span class="offset-2 mt-2">向右滑动滑块填充拼图</span>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <span id="canvas" style="color: red;"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="verificationcode" class="col-lg-2 col-form-label">验证码</label>
                    <div class="col-lg-2">
                        <input id="verificationcode" type="text" class="form-control" placeholder="请输入验证码"/>
                    </div>
                    <button name="" type="button" id="getpwd" class="btn btn-dark"">获取验证码</button>
                    <div class="col-lg-4">
                        <span id="codemsg" style="color: red;"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="offset-lg-2 col-lg-4">
                        <button @click="send" type="button" class="btn btn-primary btn-block" id="send">注册</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>`
});
new Vue({
    el: '#app'
});