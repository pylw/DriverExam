// 可自行根据后台接口进行修改
var user = new Vue({
    el:"#user",
    data:{
        // 总数
        total : undefined,
        // 每页显示大小
        size : 10,
        // 总页数
        page: undefined,
        // 当前页
        current : 1,
        // userInfo 信息  需要修改 根据后台接收参数修改  更改后 html页面{{}}内容也要修改  此字段用于修改
        u:{
            id:undefined,
            phone:'',
            email:'',
            username:'',
            sex:'',
            city:'',
            license_type:'',
            join_date:''
        },
        // userInfo 信息  需要修改 根据后台接收参数修改  更改后 html页面{{}}内容也要修改  此字段用于 添加和查询
        user:{
            id:undefined,
            phone:'',
            email:'',
            username:'',
            sex:'',
            city:'',
            license_type:'',
            join_date:''
        
        },
        // 所有城市 有待增加 
        cityList:['长沙'], // 得补全全部city
        // 用户列表 需要获取
        userList:[],
    },
    // 初始化
    created() {

        // 补  通过axios
        axios.post(
                '/admin/user', null, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then((response) => {
            	//获取所有的用户
                this.userList = response.data;
                // 获取数据库用户总数
                this.total = this.userList.length;
                // 获得总页数
                this.page = Math.ceil(this.total/this.size);
                console.log(this.userList);
            })
            .catch((error) => {
                console.log(error);
            });

    },
    // beforeCreate() {
    //     // 获取数据库用户总数

    //     // 获取10条用户

    // },
    methods:{
        // 进行初始化
        userInit(user,id=undefined,phone='',email='',username='',sex='',city='',license_type='',join_date=''){
            user.id=id;
            user.phone=phone;
            user.email=email;
            user.username=username;
            user.sex=sex;
            user.city=city;
            user.license_type=license_type;
            user.join_date=join_date
        },
        // 更新userList
        updateList(){
            // 封装 获得List 传参(当前页this.current,每页this.size) 
            // 补  通过axios
        },
        // 点击编辑按钮后的信息处理
        showEdit(uu){
            this.userInit(this.u,uu.id,uu.phone,uu.email,uu.username,uu.sex,uu.city,uu.license_type,uu.join_date);
        },
        // 点击删除按钮的处理
        showRemove(id){
            this.userInit(this.u,id);
        },
        
        // 更新处理
        update(user){
            if(user.phone==''|| user.username==''||user.email==''){
                return false;
            }
            // 检测所更新数据邮件或手机号 是否已存在
             //补  通过axios
            var havePhone = false;
            
             axios.post(
                 '/register/name', {name :user.phone}, {
                     headers: {
                         'Content-Type': 'application/json'
                     }
                 }
             )
             .then((response) => {
            	havePhone = response.data;
            	console.log(havePhone);
            	if(havePhone){  // 如果 phone 存在  
                    // 此处不能用 $("#")
                    var phone = document.getElementById("uphone");
                    console.log(phone);
                    phone.setCustomValidity('该电话已注册');
                    return false;
                }
             })
             .catch((error) => {
                 console.log(error);
             });
             
             console.log(havePhone);
            
            if(havePhone){  // 如果 phone 存在  
                // 此处不能用 $("#")
                var phone = document.getElementById("uphone");
                phone.setCustomValidity('该电话已注册');
                return false;
            }

            if(havePhone){  // 如果 phone 存在  
                // 此处不能用 $("#")
                var phone = document.getElementById("uemail");
                phone.setCustomValidity('该邮箱已注册');
                return false;
            }

            // 更新数据库数据  密码无需更新
            // 补  通过axios

//            for(var i=0;i<this.userList.length;i++){
//                if(this.userList[i].id==user.id){
//                    this.userList.splice(i, 1, user);
//                } 
//            }
            $('#updateModal').modal('hide');
        },
        // 添加信息
        add(user){
            if(user.phone==''|| user.username==''||user.email==''||user.sex==''||user.city==''||user.license_type==''){
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

            user.join_date = new Date();  // 默认参加时间为当前时间
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
        // 查询处理
        query(user){
            // 获取 total  并根据total 更改current
            // 补  通过axios
            
            if(this.current>Math.ceil(this.total/this.size)){
                this.current = Math.ceil(this.total/this.size);
            }
            // 更新userList
            this.updateList();
        },
        // 删除处理
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
        // 点击页面 跳转页
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