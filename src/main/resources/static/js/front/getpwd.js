Vue.component('app-head', {
    data: function() {
        return {}
    },
    methods: {

    },
    mounted() {
        $('#log').click(function() {
            location.href = "../index.html";
        });
        $('#register').click(function() {
            location.href = "register.html";
        });
    },
    template: `<div class="jumbotron jumbotron-fluid bg-gray py-3">
    <div class="container">
        <div class="row" style="color: blue;">
            <div class="col-lg-9">
                <span style="font-size: 35px;border-right: solid 1px;margin-right: 10px;">在线驾考答题系统</span><span>忘记密码</span>
            </div>
            <div class="col-lg-3">
                <button type="button" class="btn btn-link offset-6" data-toggle="modal" data-target="#exampleModal" id="log" style="text-decoration-line: none;">
                    登录
                </button>
                <button type="button" class="btn btn-link" id="register" style="text-decoration-line: none;">
                    注册
                </button>
            </div>
        </div>
    </div>
</div>`
});
Vue.component('app-first', {
    data: function() {
        return {}
    },
    methods: {},
    mounted() {
        $('#next').click(function() {
            var as = $('#verificationcode').val();
            if (as == 0) {
                $('#codemsg').text('验证码不能为空');
                drawPic();
            } else if (as != asd) {
                $('#codemsg').text('验证码不正确');
                drawPic();
            } else if (as == asd) {
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
                        if (response.data == true) {
                            $('#getpwdform').hide();
                            $('#containerb').css("display", "block");
                            axios.post(
                                    '/register/sendIdCode', {
                                        "name": $('#name').val()
                                    }, {
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    }
                                )
                                .then(function(response) {
                                    console.log(response);
                                })
                                .catch(function(error) {
                                    console.log(error);
                                });
                        } else if (response.data == false) {
                            $('#namemsg').text('用户名不存在，请输入正确的用户名');
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        });
        var asd;

        function randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }

        function randomColor(min, max) {
            var _r = randomNum(min, max);
            var _g = randomNum(min, max);
            var _b = randomNum(min, max);
            return "rgb(" + _r + "," + _g + "," + _b + ")";
        }
        document.getElementById("as").onclick = function(e) {
            drawPic();
        };

        function drawPic() {
            var $canvas = document.getElementById("canvas");
            var _str = "0123456789";
            var _picTxt = "";
            var _num = 4;
            var _width = $canvas.width;
            var _height = $canvas.height;
            var ctx = $canvas.getContext("2d");
            ctx.textBaseline = "bottom";
            ctx.fillStyle = randomColor(180, 240);
            ctx.fillRect(0, 0, _width, _height);
            for (var i = 0; i < _num; i++) {
                var x = (_width - 10) / _num * i + 10;
                var y = randomNum(_height / 2, _height);
                var deg = randomNum(-45, 45);
                var txt = _str[randomNum(0, _str.length)];
                _picTxt += txt;
                ctx.fillStyle = randomColor(10, 100);
                ctx.font = randomNum(16, 40) + "px SimHei";
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText(txt, 0, 0);
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            }
            for (var i = 0; i < _num; i++) {
                ctx.strokeStyle = randomColor(90, 180);
                ctx.beginPath();
                ctx.moveTo(randomNum(0, _width), randomNum(0, _height));
                ctx.lineTo(randomNum(0, _width), randomNum(0, _height));
                ctx.stroke();
            }
            for (var i = 0; i < _num * 10; i++) {
                ctx.fillStyle = randomColor(0, 255);
                ctx.beginPath();
                ctx.arc(randomNum(0, _width), randomNum(0, _height), 1, 0, 2 * Math.PI);
                ctx.fill();
            }
            asd = parseInt(_picTxt);
            return _picTxt;
        }
        drawPic();
    },
    template: `<div class="container">
    <form id="getpwdform">
        <div class="form-group row">
            <label for="name" class="col-lg-3 col-form-label">请填写您需要找回的帐号</label>
            <div class="col-lg-3">
                <input type="text" class="form-control" name="name" id="name" placeholder="请您输入邮箱">
            </div>
            <div class="col-lg-4">
                <span id="namemsg" style="color: red;"></span>
            </div>
        </div>
        <div class="form-group row">
            <label for="verificationcode" class="col-lg-3 col-form-label">验证码</label>
            <div class="col-lg-3">
                <input type="text" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" maxlength="4" class="form-control" name="verificationcode" id="verificationcode" placeholder="请输入验证码">
            </div>
            <canvas id="canvas" width="140px" height="38px"></canvas>
            <a href="#" id="as" style="text-decoration: none;">换一张</a>
            <div class="col-lg-4 offset-3">
                <span id="codemsg" style="color: red;"></span>
            </div>
        </div>
        <div class="form-group row">
            <div class="offset-lg-3 col-lg-3">
                <button id="next" type="button" class="btn btn-primary btn-block">下一步</button>
            </div>
        </div>
    </form>
</div>`
});
Vue.component('app-second', {
    data: function() {
        return {}
    },
    methods: {

    },
    mounted() {
        $('#nextb').click(function() {
            axios.post(
                    '/register/confirmCode', {
                        "name": $('#name').val(),
                        "code": $('#code').val(),
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then(function(response) {
                    console.log(response);
                    if (response.data == true) {
                        $('#containerb').css("display", "none");
                        $('#containerc').css("display", "block");
                    } else if (response.data == false) {
                        $('#codesmsg').text('验证码错误，请输入正确的验证码');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        });
    },
    template: `<div class="container" id="containerb" style="display: none;">
    <form id="getpwdformb">
        <div class="col-lg-8 offset-2 mb-3" style="padding-left: 5px;">验证码已发送至您的邮箱,请尽快填写验证码</div>
        <div class="form-group row">
            <label for="code" class="col-lg-2 col-form-label offset-2">验证码</label>
            <div class="col-lg-3">
                <input type="text" class="form-control" name="code" id="code" placeholder="请您输入验证码">
            </div>
            <div class="col-lg-4">
                <span id="codesmsg" style="color: red;"></span>
            </div>
        </div>
        <div class="form-group row">
            <div class="offset-lg-4 col-lg-3">
                <button type="button" class="btn btn-primary btn-block" id="nextb">下一步</button>
            </div>
        </div>
    </form>
</div>`
});
Vue.component('app-third', {
    data: function() {
        return {}
    },
    methods: {

    },
    mounted() {
        $('#nextc').click(function() {
            var pwda = $('#password').val();
            var pwdb = $('#passwordtwo').val();
            var mypassword = /^[A-Za-z0-9`~!@#$%^&*()_+-=/*.<>,;:?/{}'"]{8,16}$/;
            if (!mypassword.test(pwda)) {
                $('#passwordmsg').text('密码不符合规范 1)长度为8~16位 2)支持数字、大小写字母、标点符号 3)不允许有空格');
            } else {
                $('#passwordmsg').text("");
            }
            if (!mypassword.test(pwdb)) {
                $('#passwordtwomsg').text('密码不符合规范 1)长度为8~16位 2)支持数字、大小写字母、标点符号 3)不允许有空格');
            } else {
                $('#passwordtwomsg').text("");
            }
            if (!(pwda == pwdb)) {
                $('#passwordtwomsg').text('两次密码输入不一致');
            } else {
                $('#passwordtwomsg').text("");
                axios.post(
                        '/getpwds', {
                            "name": $('#name').val(),
                            "password": md5($('#password').val()),
                        }, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    )
                    .then(function(response) {
                        console.log(response);
                        if (response.data == true) {
                            $('#containerc').css("display", "none");
                            $('body').append('<h2 style="text-align: center;color: #37b5f8;margin-top: 150px;">您已成功设置新密码，请尽快登录</h2>');
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        });
    },
    template: `<div class="container" id="containerc" style="display: none;">
    <form id="getpwdformc">
        <div class="form-group row">
            <label for="password" class="col-lg-2 col-form-label offset-2">新密码</label>
            <div class="col-lg-3">
                <input type="password" class="form-control" name="password" id="password" placeholder="请您输入密码">
            </div>
            <div class="col-lg-4">
                <span id="passwordmsg" style="color: red;"></span>
            </div>
        </div>
        <div class="form-group row">
            <label for="passwordtwo" class="col-lg-2 col-form-label offset-2">确认新密码</label>
            <div class="col-lg-3">
                <input type="password" class="form-control" name="passwordtwo" id="passwordtwo" placeholder="请您再次输入密码">
            </div>
            <div class="col-lg-4">
                <span id="passwordtwomsg" style="color: red;"></span>
            </div>
        </div>
        <div class="form-group row">
            <div class="offset-lg-4 col-lg-3">
                <button type="button" class="btn btn-primary btn-block" id="nextc">完成</button>
            </div>
        </div>
    </form>
</div>`
});
new Vue({
    el: '#app',
});