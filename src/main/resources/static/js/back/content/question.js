// 从前台添加或修改获取的 question.img 是一个64位的图片详情  需要后台封装成图片并更改其地址
var question =  new Vue({
    el:"#question",
    data:{
        // 总数
        total : undefined,
        // 每页大小
        size : 10,
        // 总页数
        page: undefined,
        // 当前页
        current : 1,
        // 用于添加和修改字段
        q:{
            id:undefined,
            license_type:'',
            subject:'',
            question_type:'',
            question:'',
            img:'',
            optiona:'',
            optionb:'',
            optionc:'',
            optiond:'',
            answer:'',
            explain:''
        },
        // 用于查询
        question:{
            id:undefined,
            license_type:'',
            subject:'',
            question_type:'',
            question:'',
            img:'',
            optiona:'',
            optionb:'',
            optionc:'',
            optiond:'',
            answer:'',
            explain:''
        },
        // 问题列表
        questionList:[]
    },
    created() {
        // 获取数据库用户总数
        // 补  通过axios
        axios.get(
            'question/total'
        ).then((r)=>{
            this.total=r.data;
            // 获得总页数
            this.page = Math.ceil(this.total/this.size); 
        })

        // 获取 size 条用户放到List中
        // 补  通过axios
        axios.get(
            '/question',
            {
                'current':this.current,
                'size':this.size
            }
        ).then((r)=>{
            this.questionList = r.data;

        }).catch((error) => {
            console.log(error);
        })

    },
    methods:{
        // 封装初始化
        qInit(q,id='',license_type='',subject='',question_type='',question='',img='',optiona='',optionb='',optionc='',optiond='',answer='',explain=''){
            q.id=id;
            q.license_type=license_type;
            q.subject=subject;
            q.question_type=question_type;
            q.question=question;
            q.img=img;
            q.optiona=optiona;
            q.optionb=optionb;
            q.optionc=optionc;
            q.optiond=optiond;
            q.answer = answer;
            q.explain = explain;
        },
        // 更新问题列表
        updateList(){
            // 封装 获得List 传参(当前页this.current,每页this.size) 
            // 补  通过axios
            axios.get(
                '/question',
                {
                    'current':this.current,
                    'size':this.size
                }
            ).then((r)=>{
                this.questionList = r.data;
    
            }).catch((error) => {
                console.log(error);
            }) 
        },
        // 点击编辑按钮后的处理
        showEdit(qq){
            this.qInit(this.q,qq.id,qq.license_type,qq.subject,qq.question_type,qq.question,qq.img,qq.optiona,qq.optionb,qq.optionc,qq.optiond,qq.answer,qq.explain);
        },
        // 点击添加按钮后的处理
        showAdd(){
            this.qInit(this.q);
        },
        // 点击删除按钮后的处理
        showRemove(id){
            this.qInit(this.q,id);
        },
        // 更新问题信息 需处理好  img
        update(question){
            if(question.question==''|| question.license_type==''||question.subject==''||question.question_type==''||question.answer==''||question.explain==''||question.optiona==''||question.optionb==''){
                return false;
            }
            // 检测所更新数据邮件或手机号 是否已存在  注意 要排除自身无修改的情况
            // 补  通过axios
            var phone = document.getElementById("uphone");
            console.log(phone);
            phone.setCustomValidity('该电话已注册');

            // 更新数据库数据  密码无需更新
            // 补  通过axios



            // 更新完成后重新获取数据
            this.updateList();

            // 不获取直接更改当前List的值
            // for(var i=0;i<this.questionList.length;i++){
            //     if(this.questionList[i].id==question.id){
            //         var q = {id:undefined,
            //             license_type:'',
            //             subject:'',
            //             question_type:'',
            //             question:'',
            //             img:'',
            //             optiona:'',
            //             optionb:'',
            //             optionc:'',
            //             optiond:'',
            //             answer:'',
            //             explain:''};
            //         this.qInit(q,question.id,question.license_type,question.subject,question.question_type,question.question,question.img,question.optiona,question.optionb,question.optionc,question.optiond,question.answer,question.explain)
            //         this.questionList.splice(i, 1, q);
            //     } 
            // }
            $('#Modal').modal('hide');
        },
        // 添加问题 同样需处理问题
        add(question){
            if(question.question==''|| question.license_type==''||question.subject==''||question.question_type==''||question.answer==''||question.explain==''||question.optiona==''||question.optionb==''){
                return false;
            }
            // 增加数据 
            // 补  通过axios
            axios.post(
                'question/add',
                {
                    'question':this.q
                }
            ).then((r)=>{

            })

            // 总数增加
            this.total +=1;
            this.page = Math.ceil(this.total/this.size);


            // 更新userList  相等 不需要更新   不相等需要更新
            if(this.question.length != this.size){
                this.updateList();
            }
            // 添加成功 将user清空
            $('#Modal').modal('hide');
        },
        // 查询问题
        query(question){
            // 获取 total  并根据total 更改current  mybatis 使用if 操作 判断question 中的字段不为空 进行选择查询
            // 补  通过axios
            axios.get(
                'question/total',
                {
                    'question':this.question
                }
            ).then((r)=>{
                this.current = 1;
                this.total = r.data;
                this.page =  Math.ceil(this.total/this.size);
            })

            // if(this.current>Math.ceil(this.total/this.size)){
            //     this.current = Math.ceil(this.total/this.size);
            // }
            // 更新userList
            this.updateList();
        },
        // 删除问题
        remove(id){
            // 从数据库删除数据
            // 补  通过axios
            axios.get(
                '/question/delete',
                {
                    'id':id
                }
            ).then((r)=>{
                
            })

            // 更新total
            this.total-=1;
            this.page = Math.ceil(this.total/this.size);
            if(this.current>this.page){
                this.current = this.page;
            }
            // 更新List
            this.updateList();
        },
        // 首页
        first(){
            this.current = 1;
            
            // 更新List
            this.updateList();
        },
        // 前一页
        pre(){
            if(this.current==1){
                return false;
            }
            this.current = this.current-1;

            // 更新List
            this.updateList();
        },
        // 点击页 获取
        pn(p){
            if(p>this.current){
                this.current = p;
            }
            if(p<this.current){
                this.current = p;
            }
            // 更新List
            this.updateList();
        },
        // 下一页
        next(){
            if(this.current==this.page){
                return false;
            }
            this.current = this.current+1;
            // 更新List
            this.updateList();
        },
        // 尾页
        tail(){
            this.current = this.page;
            // 更新List
            this.updateList();
        }
    }

})