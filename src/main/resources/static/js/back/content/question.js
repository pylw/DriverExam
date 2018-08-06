var question =  new Vue({
    el:"#question",
    data:{
        total : undefined,
        size : 10,
        page: undefined,
        current : 1,
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
        questionList:[{
            id:1,
            license_type:'A1',
            subject:1,
            question_type:'2',
            question:'驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？',
            img:'',
            optiona:'违章行为',
            optionb:'违法行为',
            optionc:'过失行为',
            optiond:'过失行为',
            answer:'2',
            explain:'<p>“违反道路交通安全法”，违反法律法规即为违法行为。官方已无违章/违规的说法。</p>'
        }]
    },
    created() {
        // 获取数据库用户总数
        // 补  通过axios
        this.total = 100;

        // 获得总页数
        this.page = Math.ceil(this.total/this.size);
        
        // 获取10条用户放到List中
        // 补  通过axios

    },
    methods:{
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
        updateList(){
            // 封装 获得List 传参(当前页this.current,每页this.size) 
            // 补  通过axios
        },
        showEdit(qq){
            this.qInit(this.q,qq.id,qq.license_type,qq.subject,qq.question_type,qq.question,qq.img,qq.optiona,qq.optionb,qq.optionc,qq.optiond,qq.answer,qq.explain);
        },
        showAdd(){
            this.qInit(this.q);
        },
        showRemove(id){
            this.qInit(this.q,id);
        },
        update(question){
            if(question.question==''|| question.license_type==''||question.subject==''||question.question_type==''||question.answer==''||question.explain==''||question.optiona==''||question.optionb==''){
                return false;
            }
            // 检测所更新数据邮件或手机号 是否已存在
            // 补  通过axios

            // 更新数据库数据  密码无需更新
            // 补  通过axios



            for(var i=0;i<this.questionList.length;i++){
                if(this.questionList[i].id==question.id){
                    var q = {id:undefined,
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
                        explain:''};
                    this.qInit(q,question.id,question.license_type,question.subject,question.question_type,question.question,question.img,question.optiona,question.optionb,question.optionc,question.optiond,question.answer,question.explain)
                    this.questionList.splice(i, 1, q);
                } 
            }
            $('#Modal').modal('hide');
        },
        add(question){
            if(question.question==''|| question.license_type==''||question.subject==''||question.question_type==''||question.answer==''||question.explain==''||question.optiona==''||question.optionb==''){
                return false;
            }
            // 增加数据 
            // 补  通过axios

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
        query(question){
            // 获取 total  并根据total 更改current
            // 补  通过axios
            
            if(this.current>Math.ceil(this.total/this.size)){
                this.current = Math.ceil(this.total/this.size);
            }
            // 更新userList
            this.updateList();
        },
        remove(id){
            // 从数据库删除数据
            // 补  通过axios


            // 更新total
            this.total-=1;
            this.page = Math.ceil(this.total/this.size);
            if(this.current>this.page){
                this.current = this.page;
            }
            // 更新List
            this.updateList();
        },
        first(){
            this.current = 1;
            
            // 更新List
            this.updateList();
        },
        pre(){
            if(this.current==1){
                return false;
            }
            this.current = this.current-1;

            // 更新List
            this.updateList();
        },
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
        next(){
            if(this.current==this.page){
                return false;
            }
            this.current = this.current+1;
            // 更新List
            this.updateList();
        },
        tail(){
            this.current = this.page;
            // 更新List
            this.updateList();
        }
    }

})