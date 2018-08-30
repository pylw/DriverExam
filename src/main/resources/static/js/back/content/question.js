// 从前台添加或修改获取的 question.img 是一个64位的图片详情  需要后台封装成图片并更改其地址
var question =  new Vue({
    el:"#question",
    data:{
        // 总数
        total : undefined,
        // 每页大小
        size : 20,
        // 总页数
        page: undefined,
        // 当前页
        current : 1,
        // 用于添加和修改字段
        q:{
        	questionId:undefined,
            licenseType:'',
            subject:'',
            questionType:'',
            question:'',
            img:'',
            optiona:'',
            optionb:'',
            optionc:'',
            optiond:'',
            answer:'',
            explain:'',
            imgFile:Object //图片资源
        },
        // 用于查询
        question:{
        	questionId:undefined,
            licenseType:'',
            subject:'',
            questionType:'',
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
        axios.post(
            '/question/total',
            null,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
			}
        ).then((r)=>{
            this.total=r.data;
            // 获得总页数
            this.page = Math.ceil(this.total/this.size); 
        })

        // 获取 size 条用户放到List中
        // 补  通过axios
        axios.post(
            '/admin/question/onepage',
            {
                'current':this.current,
                'size':this.size
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
			}
        ).then((r)=>{
            this.questionList = r.data;

        }).catch((error) => {
            console.log(error);
        })

    },
    methods:{
        // 封装初始化
        qInit(q,questionId='',licenseType='',subject='',questionType='',question='',img='',optiona='',optionb='',optionc='',optiond='',answer='',explain=''){
            q.questionId=questionId;
            q.licenseType=licenseType;
            q.subject=subject;
            q.questionType=questionType;
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
            axios.post(
                '/admin/question/onepage',
                {
                    'question':this.question.question,
                    'licenseType':this.question.licenseType,
                    'subject':this.question.subject,
                    'questionType':this.question.questionType,
                    'current':this.current,
                    'size':this.size
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then((r)=>{
                this.questionList = r.data;
    
            }).catch((error) => {
                console.log(error);
            }) 
        },
        // 点击编辑按钮后的处理
        showEdit(qq){
        	
            this.qInit(this.q,qq.questionId,qq.licenseType,qq.subject,qq.questionType,qq.question,qq.img,qq.optiona,qq.optionb,qq.optionc,qq.optiond,qq.answer,qq.explain);
        },
        // 点击添加按钮后的处理
        showAdd(){
            this.qInit(this.q);
        },
        // 点击删除按钮后的处理
        showRemove(questionId){
        	console.log(questionId)
            this.qInit(this.q,questionId);
        },
        // 更新问题信息 需处理好  img
        update(question){
            if(question.question==''|| question.licenseType==''||question.subject==''||question.questionType==''||question.answer==''||question.explain==''||question.optiona==''||question.optionb==''){
                return false;
            }
            // 检测所更新数据邮件或手机号 是否已存在  注意 要排除自身无修改的情况
            // 补  通过axios
//            var phone = document.getElementById("uphone");
//            console.log(phone);
//            phone.setCustomValidity('该电话已注册');

            // 更新数据库数据  密码无需更新
            // 补  通过axios
            console.log(this.q)
            let param = new window.FormData();
            
        	param.append('questionId', this.q.questionId);
            param.append('licenseType', this.q.licenseType);
            param.append('subject', this.q.subject);
            param.append('questionType', this.q.questionType);
            param.append('question', this.q.question);
            param.append('img', this.q.img);
            param.append('optiona', this.q.optiona);
            param.append('optionb', this.q.optionb);
            param.append('optionc', this.q.optionc);
            param.append('optiond', this.q.optiond);
            param.append('answer', this.q.answer);
            param.append('explain', this.q.explain);
            param.append('imgFile', this.q.imgFile);
            
            axios.post('/admin/question/update',param)


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
        selectImg(event){
            let that=this;
            this.q.imgFile = $(this.$el).find('#imgLocal')[0].files[0];//取到上传的图片
             console.log(this.q.imgFile);//由打印的可以看到，图片    信息就在files[0]里面
            let formData = new FormData();//通过formdata上传
            formData.append('file',this.q.imgFile);

            let file = event.target.files[0]
            let reader = new FileReader()
            let img = new Image()
            reader.readAsDataURL(file)
            reader.onloadend = (e) => {
                img.src = e.target.result
            }

            let canvas = this.$refs['imgPreview']
            let context = canvas.getContext('2d')
            img.onload = () => {
                img.width = 200
                img.height = 150
                // 设置canvas大小
                canvas.width = 200
                canvas.height = 150
                // 清空canvas
                context.clearRect(0, 0, 200, 150)
                // 画图
                context.drawImage(img, 0, 0, 200, 150)
            }

        },
        
        
        // 添加问题 同样需处理问题
        add(question){
            if(question.question==''|| question.licenseType==''||question.subject==''||question.questionType==''||question.answer==''||question.explain==''||question.optiona==''||question.optionb==''){
                return false;
            }
            // 增加数据 
            // 补  通过axios
            let param = new window.FormData();
            
        	param.append('questionId', this.q.questionId);
            param.append('licenseType', this.q.licenseType);
            param.append('subject', this.q.subject);
            param.append('questionType', this.q.questionType);
            param.append('question', this.q.question);
            param.append('img', this.q.img);
            param.append('optiona', this.q.optiona);
            param.append('optionb', this.q.optionb);
            param.append('optionc', this.q.optionc);
            param.append('optiond', this.q.optiond);
            param.append('answer', this.q.answer);
            param.append('explain', this.q.explain);
            param.append('imgFile', this.q.imgFile);
            
        	console.log(param)
            axios.post('/admin/question/add',param)
//            axios.post(
//                '/admin/question/add',
//                {
//                	'licenseType':this.q.licenseType,
//                    'subject':this.q.subject,
//                    'questionType':this.q.questionType,
//                    'question':this.q.question,
//                    'img':this.q.img,
//                    'optiona':this.q.optiona,
//                    'optionb':this.q.optionb,
//                    'optionc':this.q.optionc,
//                    'optiond':this.q.optiond,
//                    'answer':this.q.answer,
//                    'explain':this.q.explain,
//                    'formData':this.q.formData
//                }
//            ).then((r)=>{
//            })
            
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
            axios.post(
                '/admin/question/questionSize',
                {
                    'question':this.question.question,
                    'licenseType':this.question.licenseType,
                    'subject':this.question.subject,
                    'questionType':this.question.questionType
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
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
            axios.post(
                '/admin/question/delete',
                {
                    'questionId':id
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
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
        },
        // //把图片编码为Base64
        // toBase64(event){
        // 	if(event.target.files.length>0){
        //         let file = event.target.files[0];
        //         // 读取图片
        //         let reader = new FileReader();
        //         let img = new Image();
        //         this.imgName = file.name;
        //         reader.readAsDataURL(file);
        //         reader.onloadend = (event) => {
        //             img.src = event.target.result;
        //             this.base64 = reader.result;
        //         }
        //     }
            
        // }
        
    }

})