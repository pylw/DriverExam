Vue.component('app-head', {
    data: function() {
        return {

        }
    },
    methods: {

    },
    template: `
    <div class="jumbotron jumbotron-fluid py-2 mb-0" style="background-color: white;color: #37b5f8">
    <div class="container">
        <div class="row" style="margin-left:-50px;">
            <h2 style="font-size: 45px;font-family: SimHei" id="cl">在线驾考答题系统</h2>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-link offset-6" data-toggle="modal" data-target="#exampleModal" id="log" style="text-decoration-line: none;">
                登录
            </button>
            <button type="button" class="btn btn-link" id="register" style="text-decoration-line: none;">
                注册
            </button>
            <div class="dropdown offset-6" id="geren" style="display: none;">
                <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="border: 0;text-decoration-line: none;">
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" id="personal">个人中心</a>
                    <a class="dropdown-item" href="#">账号设置</a>
                    <a class="dropdown-item" href="#" id="quit">退出</a>
                </div>
            </div>
        </div>
    </div>
</div>
    `
});
Vue.component('app-nav', {
    data: function() {
        return {

        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            if (key == "4-4-2") {
                console.log("ss");
            }
        }
    },
    template: `
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#37b5f8" text-color="#fff" active-text-color="#ffd04b" style="width: 100%;margin-right: 0px;margin-left: 0px;">
        <el-menu-item index="0" style="margin-left: 52px;">首页</el-menu-item>
        <el-submenu index="1">
            <template slot="title">科目一</template>
            <el-menu-item index="1-1">模拟考试</el-menu-item>
            <el-menu-item index="1-2">随机练习</el-menu-item>
            <el-menu-item index="1-3">顺序练习</el-menu-item>
            <el-submenu index="1-4">
                <template slot="title">专项练习</template>
                <el-menu-item index="1-4-1">单选题</el-menu-item>
                <el-menu-item index="1-4-2">多选题</el-menu-item>
                <el-menu-item index="1-4-3">判断题</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">科目二</el-menu-item>
        <el-menu-item index="3">科目三</el-menu-item>
        <el-submenu index="4">
            <template slot="title">科目四</template>
            <el-menu-item index="4-1">模拟考试</el-menu-item>
            <el-menu-item index="4-2">随机练习</el-menu-item>
            <el-menu-item index="4-3">顺序练习</el-menu-item>
            <el-submenu index="4-4">
                <template slot="title">专项练习</template>
                <el-menu-item index="4-4-1">单选题</el-menu-item>
                <el-menu-item index="4-4-2">多选题</el-menu-item>
                <el-menu-item index="4-4-3">判断题</el-menu-item>
            </el-submenu>
        </el-submenu>
        <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
    </el-menu>
    `
});
Vue.component('app-body', {
    data: function() {
        return {

        }
    },
    methods: {

    },
    template: `
    <div class="row">
    <div id="cards">
        <el-card class="box-card">
            <div class="row" id="kmi">
                <img src="http://beijing.jiakaobaodian.com/core-assets/jiakao/application/home/files/cd9c3b69a1d8d0bc72b839ebdaeb5fd4.png" alt="" style="width: 30px;height: 30px;margin-top: 10px;"> 科目一
            </div>
             <div class="row">
                <div class="pa">
                    <img src="http://beijing.jiakaobaodian.com/core-assets/jiakao/application/home/files/7920c46acf795cfe91990d3bb8c8635c.png" alt="" class="paa">
                    <a href="#" target="_blank" class="aclass">顺序练习</a>
                </div>
                <div class="pa">
                    <img src="http://beijing.jiakaobaodian.com/core-assets/jiakao/application/home/files/29f60eac40621dffb37c38f8d584f215.png" alt="" class="paa">
                     <a href="#" target="_blank" class="aclass">随机练习</a>
                </div>
            </div>
             <div class="row">
                <div class="pa">
                    <img src="http://beijing.jiakaobaodian.com/core-assets/jiakao/application/home/files/cd9c3b69a1d8d0bc72b839ebdaeb5fd4.png" alt="" class="paa">
                    <a href="#" target="_blank" class="aclass">专项练习</a>
                </div>
                <div class="pa">
                    <img src="http://beijing.jiakaobaodian.com/core-assets/jiakao/application/home/files/f117d8ae0fca3bffd25ff4511664e607.png" alt="" class="paa"> 
                    <a href="#" target="_blank" class="aclass">错题复习</a>
                </div>
             </div>
            <div class="row" style="margin-top: 20px;">
                <div class="col-lg-6 offset-3">
                    <el-button type="primary" class="btn-block">模拟考试</el-button>
                </div>
            </div>
        </el-card>
    </div>
    <div id="cardss">
    <el-card class="box-card">
    <div class="row" id="kmi">
        <img src="http://beijing.jiakaobaodian.com/core-assets/jiakao/application/home/files/cd9c3b69a1d8d0bc72b839ebdaeb5fd4.png" alt="" style="width: 30px;height: 30px;margin-top: 10px;"> 科目四
    </div>
     <div class="row">
        <div class="pa">
            <img src="http://beijing.jiakaobaodian.com/core-assets/jiakao/application/home/files/7920c46acf795cfe91990d3bb8c8635c.png" alt="" class="paa">
            <span><a href="#" target="_blank" class="aclass">顺序练习</a> </span>
        </div>
        <div class="pa">
            <img src="http://beijing.jiakaobaodian.com/core-assets/jiakao/application/home/files/29f60eac40621dffb37c38f8d584f215.png" alt="" class="paa">
             <a href="#" target="_blank" class="aclass">随机练习</a>
        </div>
    </div>
     <div class="row">
        <div class="pa">
            <img src="http://beijing.jiakaobaodian.com/core-assets/jiakao/application/home/files/cd9c3b69a1d8d0bc72b839ebdaeb5fd4.png" alt="" class="paa">
            <a href="#" target="_blank" class="aclass">专项练习</a>
        </div>
        <div class="pa">
            <img src="http://beijing.jiakaobaodian.com/core-assets/jiakao/application/home/files/f117d8ae0fca3bffd25ff4511664e607.png" alt="" class="paa"> 
            <a href="#" target="_blank" class="aclass">错题复习</a>
        </div>
     </div>
    <div class="row" style="margin-top: 20px;">
        <div class="col-lg-6 offset-3">
            <el-button type="primary" class="btn-block">模拟考试</el-button>
        </div>
    </div>
</el-card>
    </div>
</div>
    `
});
Vue.component('app-login', {
    data: function() {
        return {
            login: {
                name: "",
                password: "",
            },
            asd: "",
            ase: ""
        }
    },
    mounted() {
        var template = null
        $('#exampleModal').on('show.bs.modal', function(e) {
            if (template == null) {
                template = $(this).html()
            } else {
                $(this).html(template)
            }

            function randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }

            function randomColor(min, max) {
                var _r = randomNum(min, max);
                var _g = randomNum(min, max);
                var _b = randomNum(min, max);
                return "rgb(" + _r + "," + _g + "," + _b + ")";
            }


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
            document.getElementById("as").onclick = function(e) {
                drawPic();
            };
            drawPic();
        });
        $('#exampleModal').on('shown.bs.modal', function(e) {
            $('#name').focus();
        });
        $('#exampleModal').on('hidden.bs.modal', function(e) {
            $('#name').val("");
            $('#password').val("");
            $('#verificationcode').val("");
            $('#msg').hide();
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

        // 登录按钮设置快捷键为回车键
        $(document).keydown(function(event) {
            if (event.keyCode == '13') {
                $('#login').click();
            }
        });
    },
    methods: {
        logins() {
            $('#login').click();
        },
        send() {
            console.log(asd);
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
        }
    },
    template: `
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop='static' data-keyboard="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">用户登录</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <form id="updateform">
                        <div class="form-group row">
                            <label for="name" class="col-sm-3 col-form-label">用户名</label>
                            <div class="col-sm-5">
                                <input type="text" v-model="login.name" class="form-control" name="name" id="name" placeholder="手机/邮箱" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="password" class="col-sm-3 col-form-label">密码</label>
                            <div class="col-sm-5">
                                <input type="password" v-model="login.password" maxlength="16" class="form-control" name="password" id="password" placeholder="请输入密码">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="verificationcode" class="col-sm-3 col-form-label">验证码</label>
                            <div class="col-sm-3">
                                <input type="text" v-model="ase" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" maxlength="4" class="form-control" name="verificationcode" id="verificationcode" placeholder="请输入验证码">
                            </div>
                            <canvas id="canvas" width="140px" height="38px"></canvas>
                            <a href="#" id="as" style="text-decoration: none;">换一张</a>
                            <button @click="send" type="button" class="btn" name="login" id="login" style="display: none;"></button>
                            <p id="msg" style="color: red" class="col-sm-8"></p>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <nav class="nav">
                    <a class="nav-link active" href="./front/getpwd.html">忘记密码</a>
                </nav>
                <button type="button" class="btn btn-primary" name="logins" id="logins" @click="logins">登录</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
            </div>
        </div>
    </div>
</div>
    `
});
Vue.component('apps', {
    data: function() {
        return {

        }
    },
    methods: {

    },
    template: `<div><app-head></app-head>
    <app-nav></app-nav>
    <app-body></app-body>
    <app-login></app-login></div>`
});
new Vue({
    el: '#app'
})