var test = new Vue({
    el:"#test",
    data:{
        // 科目
        subject:'',
        // 用户信息 可根据需求增加字段
        userInfo:{
            username:''
        },
        // 测试题数
        testNum:100,
        // 倒计时初始化 分钟和秒数
        minute:'01',
        second:'00',
        // 所获题目
        questList:[],
        // 当前题目
        question:{
            id:undefined,
            subject:'',
            license_type:'',
            question_type:'',
            question:'',
            optiona:'',
            optionb:'',
            optionc:'',
            optiond:'',
            img:'',
            explain:''
        },
        // 提示信息
        message:'',
        // 当前题数
        current:1,
        //用户答案保存
        answers:[],
        // 每题分数
        ts:undefined,
        // 当前分数  
        score:0,
        // 所花时间 交卷是传参
        elapsed:0
        
    },
    created() {
        // 初始化  通过传参获取 科目 userName  题数 每题分数 以及 时间和分钟数 和 axios 
        // 并检测是否答过试卷 并初始化question  根据question.question_type 初始化message
        

        //设置定时器
        var s =  setInterval(()=>{
            if(this.second=='00'&&this.minute=='00'){
                clearInterval(s);
                // 自动提交试卷
                return;
            }
            if(this.second=='00'){
                if(Number(this.minute)>10){
                    this.minute=String(Number(this.minute)-1);
                }else{
                    this.minute='0'+String(Number(this.minute)-1);
                }
                this.second = '59';
            }else if(Number(this.second>10)){
                this.second=String(Number(this.second)-1);
            }else{
                this.second='0'+String(Number(this.second)-1);
            }
            this.elapsed++;
        },1000);
    },
    methods:{
        // 上一题 点击后更改题目
        pre(){
            if(this.current==1){
                return false;
            }
            this.current--;
            //this.question = this.questList[this.current];
        },
        // 下一题
        next(){
            if(this.current==this.testNum){
                return false;
            }
            this.current++;
            //this.question = this.questList[this.current];
            // 更改message
        },
        // 点击题号获取题目
        getq(t){
            this.current= t;
            //this.question = this.questList[this.current];
            // 更改message
        },
        // 交卷 传参
        submit(){

        },
        // 单选 判断后进行分数计算
        select(option){
            this.answers.splice(current,1,option);
            // 通过axios 获取该题答案  

            // 比较答案是否正确 并根据正确性 给标题设立 class


            // 自动跳转
            if(this.current!=this.testNum){
                this.current++;
                //this.question = this.questList[this.current];
                // 更改message
            }
            
        },
        // 多选
        selects(option){
            this.answers.splice(current,1,this.answers[this.current]+option);
            // 设置点击后的class
        },
        // 多选的确认按钮  判断后进行分数计算
        mulAnswerOk(){
            
        }
    },
});
