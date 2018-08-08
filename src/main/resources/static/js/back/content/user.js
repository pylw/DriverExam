var user = new Vue({
    el:"#user",
    data:{
        total : undefined,
        size : 10,
        page: undefined,
        current : 1,
        u:{
            id:undefined,
            phone:'',
            email:'',
            userInfo:{
                username:'',
                sex:'',
                city:'',
                license_type:'',
                join_date:''
            }
        },

        user:{
            id:undefined,
            phone:'',
            email:'',
            userInfo:{
                username:'',
                sex:'',
                city:'',
                license_type:'',
                join_date:''
            }
        },
        cityList:['长沙'], // 得补全全部city
        userList:[],
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
    // beforeCreate() {
    //     // 获取数据库用户总数

    //     // 获取10条用户

    // },
    methods:{
        userInit(user,id=undefined,phone='',email='',username='',sex='',city='',license_type='',join_date=''){
            user.id=id;
            user.phone=phone;
            user.email=email;
            user.userInfo.username=username;
            user.userInfo.sex=sex;
            user.userInfo.city=city;
            user.userInfo.license_type=license_type;
            user.userInfo.join_date=join_date
        },
        updateList(){
            // 封装 获得List 传参(当前页this.current,每页this.size) 
            // 补  通过axios
        },
        showEdit(uu){
            this.userInit(this.u,uu.id,uu.phone,uu.email,uu.userInfo.username,uu.userInfo.sex,uu.userInfo.city,uu.userInfo.license_type,uu.userInfo.join_date);
        },
        showRemove(id){
            this.userInit(this.u,id);
        },
        update(user){
            if(user.phone==''|| user.userInfo.username==''||user.email==''){
                return false;
            }
            // 检测所更新数据邮件或手机号 是否已存在
            // 补  通过axios

            if(false){  // 如果 phone 存在  
                // 此处不能用 $("#")
                var phone = document.getElementById("uphone");
                phone.setCustomValidity('该电话已注册');
                return false;
            }

            if(false){  // 如果 phone 存在  
                // 此处不能用 $("#")
                var phone = document.getElementById("uemail");
                phone.setCustomValidity('该邮箱已注册');
                return false;
            }

            // 更新数据库数据  密码无需更新
            // 补  通过axios

            for(var i=0;i<this.userList.length;i++){
                if(this.userList[i].id==user.id){
                    this.userList.splice(i, 1, user);
                } 
            }
            $('#updateModal').modal('hide');
        },
        add(user){
            if(user.phone==''|| user.userInfo.username==''||user.email==''||user.userInfo.sex==''||user.userInfo.city==''||user.userInfo.license_type==''){
                return false;
            }
            // 检测所更新数据邮件或手机号 是否已存在
            // 补  通过axios

            if(false){  // 如果 phone 存在  
                // 此处不能用 $("#")
                var phone = document.getElementById("phone");
                phone.setCustomValidity('该电话已注册');
                return false;
            }

            if(false){  // 如果 phone 存在  
                // 此处不能用 $("#")
                var phone = document.getElementById("email");
                phone.setCustomValidity('该邮箱已注册');
                return false;
            }

            user.userInfo.join_date = new Date();  // 默认参加时间为当前时间
            // 增加数据  后台设置默认密码为
            // 补  通过axios

            // 总数增加
            this.total +=1;
            this.page = Math.ceil(this.total/this.size);

            // 更新userList  相等 不需要更新   不相等需要更新
            if(this.userList.length != this.size){
                this.updateList();
            }
            // 添加成功 将user清空
            this.userInit(user);
        },
        query(user){
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