var result = new Vue({
    el:"#result",
    data:{
        // 获取传递的用户名
        userInfo:{
            username:'我是车神'
        },
        // 分数 传参获取
        score:undefined,
        // 正确题数 传参获取
        right:undefined,
        // 错误题数 传参获取
        error:undefined,
        // 未答题数 传参获取
        unanswere:undefined,
        // 答题时间 传参获取
        elapsed:undefined,
    },
    // 初始化  全部通过传参获取
    created(){
        this.score = 90;
        this.right = 45;
        this.error = 5;
        this.unanswere = 0;
        this.elapsed = 61;
        if(this.score>=90){
            $(".result-box").addClass("cheshen");
        }else{
            $(".result-box").addClass("shashou");
        }
    }
})