var practice = new Vue({
    el:"#practice",
    data:{
        // 汽车类型  小车 客车 货车 摩托车
        license:'小车',
        // 科目类型  科目1  科目4
        subject:'科目1',
        // 当前状态  顺序练习 随机练习
        type:'顺序练习',
        // 当前题目
        current:1,
        // 题目总数
        total:undefined,
        // 当前问题
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
            explain:'',
            //answer:''

        },
        // 问题集合 每次获取n个
        questionList:[],
        // 答对问题数
        right:0,
        // 打错问题书
        error:0,
        // 是否显示答题卡
        dtk:false,
        // 是否显示详情
        xj:false,
        // 选择答案
        answer:[],
        // 设置题目消息提示
        message:''
    },
    created() {
        // 初始化
        this.total = 1743;
    },
    methods:{
        // 多选时的确认按钮
        // 进行答案比较
        ok(){

        },
        // 单选时点击选项触发事件  
        //(方案1)通过当前问题Id，axios获取答案  判断所选答案是否正确 根据正确性改变当前所选项的class 正确为right 错误为error  并更改答题卡中当前题目的class
        //(方案2)直接在问题中包括答案 比较即可 然后更改样式
        select(option,event){

            // 例子  需注意逻辑处理
            var el = event.currentTarget;
            //el.addClass("right");
            $(el).addClass("success");
            $(el).addClass("error");
            $(document.getElementsByClassName("list-w")[0].getElementsByTagName("li")[this.current-1].getElementsByTagName("a")[0]).addClass("right");
            $(document.getElementsByClassName("list-w")[0].getElementsByTagName("li")[this.current-1].getElementsByTagName("a")[0]).addClass("error");
        },
        // 多选时触发事件
        // 将选项放入当前答案中 更改选项样式
        selects(option,event){

        },
        // 上一题
        pre(){
            
        },
        // 下一题
        next(){

        },
        // 答题卡显示与关闭
        datika(){
            this.dtk = !this.dtk;
        },
        // 详解显示与关闭
        xiangjie(){
            this.xj = !this.xj;
        }
    }
})