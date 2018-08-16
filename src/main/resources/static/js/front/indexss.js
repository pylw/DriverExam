new Vue({
    el: '#app',
    data: {
        login: {
            name: "",
            password: "",
        },
        asd: "",
        ase: ""
    },
    mounted() {
        $('#exampleModal').on('shown.bs.modal', function(e) {
            $('#name').focus();
        });
        $('#exampleModal').on('hidden.bs.modal', function(e) {
            $('#name').val("");
            $('#password').val("");
            $('#verificationcode').val("");
            $('#msg').hide();
            drawPic();
        });
        $('#logins').click(function() {
            $('#login').click();
        });
        $('#register').click(function() {
            $(window).attr('location', './front/register.html');
        });
        $('#quit').click(function() {
            $('#geren').css("display", "none");
            $('#log').show();
            $('#register').show();
        });
        // 验证码的生成
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
        // 登录按钮设置快捷键为回车键
        $(document).keydown(function(event) {
            if (event.keyCode == '13') {
                $('#login').click();
            }
        });
    },
    methods: {
        send() {
            $('#msg').text('');
            $('#msg').show();
            if (this.ase == 0) {
                $('#msg').text('验证码不能为空');
                this.login.password = '';
            } else if (this.ase != asd) {
                $('#msg').text('验证码不正确');
                this.login.password = '';
            } else if (this.ase == asd) {
                var loginname = this.login.name;
                this.login.password = md5(this.login.password);
                var obj = JSON.stringify(this.login)
                this.login.password = '';
                console.log(obj); //测试用
                axios.post(
                        '/login', obj, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    )
                    .then(function(response) {
                        if (response.data == true) {
                            console.log('登录成功');
                            $('#log').hide();
                            $('#register').hide();
                            $('#dropdownMenuButton').text(loginname);
                            $('#geren').css("display", "block");
                            $('#exampleModal').modal('hide');
                        } else if (response.data == false) {
                            $('#msg').text('用户名或密码错误');
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            if (key == "4-4-2") {
                alert("ss");
            }
        }
    }
});