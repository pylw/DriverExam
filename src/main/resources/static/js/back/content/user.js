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
            userId:undefined,
            phone:'',
            email:'',
            username:'',
            sex:'',
            city:'',
            licenseType:'',
            joinDate:''
        },
        // userInfo 信息  需要修改 根据后台接收参数修改  更改后 html页面{{}}内容也要修改  此字段用于 添加和查询
        user:{
            userId:undefined,
            phone:'',
            email:'',
            username:'',
            sex:'',
            city:'',
            licenseType:'',
            joinDate:''
        
        },
        // 所有城市 有待增加 
        cityList:['长沙'], // 得补全全部city
        // 用户列表 需要获取
        userList:[],
    },
    
    // 初始化
    created() {

    	//获取总用户数
    	axios.post(
    			'/admin/user/total',{
    				
    	            "phone":this.user.phone,
    	            "email":this.user.email,
    	            "username":this.user.username,
    	            "sex":this.user.sex,
    	            "city":this.user.city,
    	            "licenseType":this.user.licenseType
    			},
    			{
                    headers: {
                        'Content-Type': 'application/json'
                    }
    			}
    			).then((response) => {
    				// 获取数据库用户总数
                    this.total = response.data;
                    // 获得总页数
                    this.page = Math.ceil(this.total/this.size);
                });

    	this.updateList();
    },
    // beforeCreate() {
    //     // 获取数据库用户总数

    //     // 获取10条用户

    // },
    methods:{
        // 进行初始化
        userInit(user,userId=undefined,phone='',email='',username='',sex='',city='',licenseType='',joinDate=''){
            user.userId=userId;
            user.phone=phone;
            user.email=email;
            user.username=username;
            user.sex=sex;
            user.city=city;
            user.licenseType=licenseType;
            user.joinDate=joinDate;
        },
        // 更新userList
        updateList(){
            // 封装 获得List 传参(当前页this.current,每页this.size) 
            // 补  通过axios
        	 axios.post(
                     '/admin/user/onepage', {
                     	"size":this.size,
                     	"current":this.current,
                     	"phone":this.user.phone,
         	            "email":this.user.email,
         	            "username":this.user.username,
         	            "sex":this.user.sex,
         	            "city":this.user.city,
         	            "licenseType":this.user.licenseType
                     }, {
                         headers: {
                             'Content-Type': 'application/json'
                         }
                     }
                 )
                 .then((response) => {
                 	//获取所有的用户
                     this.userList = response.data;
                     
                     console.log(this.userList);
                 })
                 .catch((error) => {
                     console.log(error);
                 });
        },
        // 点击编辑按钮后的信息处理
        showEdit(uu){
            this.userInit(this.u,uu.userId,uu.phone,uu.email,uu.username,uu.sex,uu.city,uu.licenseType,uu.joinDate);
        },
        // 点击删除按钮的处理
        showRemove(userId){
            this.userInit(this.u,userId);
        },
        
        // 更新处理
        async update(user){
//        	console.log(user.userId);
        	var uphone = document.getElementById("uphone");
        	var uusername =document.getElementById("uusername");
        	var uemail = document.getElementById("uemail");
            if(user.phone==''){
            	uphone.setCustomValidity('请填写此字段');
                return false;
            }
            if(user.username==''){
            	uusername.setCustomValidity('请填写此字段');
                return false;
            }
            if(user.email==''){
            	uemail.setCustomValidity('请填写此字段');
                return false;
            }
            // 检测所更新数据邮件或手机号 是否已存在
             //补  通过axios
            var havePhone = true;
            await axios.post(
                 '/admin/havePhone', {"phone" :user.phone,"userId":user.userId}, {
                     headers: {
                         'Content-Type': 'application/json'
                     }
                 }
             )
             .then((response) => {
            	 havePhone = response.data;
            	 if(havePhone){  // 如果 phone 存在  
	                // 此处不能用 $("#")
	                uphone.setCustomValidity('该电话已注册');
	                uemail.setCustomValidity('');
            	 }else{
	            	 var haveEmail = false;
	                 axios.post(
	                         '/admin/haveEmail',{"email":user.email,"userId":user.userId}, {
	                             headers: {
	                                 'Content-Type': 'application/json'
	                             }
	                         }
	                     )
	                     .then((response) => {
	                     	haveEmail = response.data;
	                     	if(haveEmail){  // 如果 phone 存在  
	     		                // 此处不能用 $("#")
	                     		uphone.setCustomValidity('');
	     		                uemail.setCustomValidity('该邮箱已注册');
	     		            }else{
		                     	axios.post(
		                                '/admin/user/update', {
		                                	"userId":user.userId,
		                                    "phone":user.phone,
		                                    "email":user.email,
		                                    "username":user.username,
		                                    "sex":user.sex,
		                                    "city":user.city,
		                                    "licenseType":user.licenseType,
		                                    
		                                }, {
		                                    headers: {
		                                        'Content-Type': 'application/json'
		                                    }
		                                }
		                            )
		                            .then((response) => {
		                            	this.updateList();
		                            	$('#updateModal').modal('hide');
		                            });
	     		            }
	                     });
            	 }
             });
//            var haveEmail = false;
//            axios.post(
//                    '/admin/haveEmail',{"email":user.email,"userId":user.userId}, {
//                        headers: {
//                            'Content-Type': 'application/json'
//                        }
//                    }
//                )
//                .then((response) => {
//                	haveEmail = response.data;
//                	if(haveEmail){  // 如果 phone 存在  
//		                // 此处不能用 $("#")
//		                var phone = document.getElementById("uemail");
//		                phone.setCustomValidity('该邮箱已注册');
//		                return false;
//		            }
//
//                });
            

            
            // 更新数据库数据  密码无需更新
//            axios.post(
//                    '/admin/user/update', {
//                    	"userId":user.userId,
//                        "phone":user.phone,
//                        "email":user.email,
//                        "username":user.username,
//                        "sex":user.sex,
//                        "city":user.city,
//                        "licenseType":user.licenseType,
//                        
//                    }, {
//                        headers: {
//                            'Content-Type': 'application/json'
//                        }
//                    }
//                )
//                .then((response) => {
//                	this.updateList();
//                });
//            // 补  通过axios
//
////            for(var i=0;i<this.userList.length;i++){
////                if(this.userList[i].userId==user.userId){
////                    this.userList.splice(i, 1, user);
////                } 
////            }

//            $('#updateModal').modal('hide');
        },
        // 添加信息
        async add(user){
        	var phone = document.getElementById("phone");
        	var username =document.getElementById("username");
        	var email = document.getElementById("email");
            if(user.phone==''){
            	phone.setCustomValidity('请填写此字段');
                return false;
            }
            if(user.username==''){
            	username.setCustomValidity('请填写此字段');
                return false;
            }
            if(user.email==''){
            	email.setCustomValidity('请填写此字段');
                return false;
            }
            if(user.sex==''||user.city==''||user.licenseType==''){
                return false;
            }
            // 检测所更新数据邮件或手机号 是否已存在
            // 补  通过axios
            var havePhone = true;
            axios.post(
                 '/register/name', {"name" :user.phone}, {
                     headers: {
                         'Content-Type': 'application/json'
                     }
                 }
             )
             .then((response) => {
            	 havePhone = response.data;
            	 if(havePhone){  // 如果 phone 存在  
                     // 此处不能用 $("#")
            		 //alert("ph "+ havePhone);
//            		 alert("ph"+ havePhone);
                     phone.setCustomValidity('该电话已注册');
                     email.setCustomValidity('');
                 }else{
                	 var haveEmail = true;
                     axios.post(
                             '/register/name',{"name":user.email}, {
                                 headers: {
                                     'Content-Type': 'application/json'
                                 }
                             }
                         )
                         .then((response) => {
                         	haveEmail = response.data;
                         	if(haveEmail){  // 如果 phone 存在  
                                 // 此处不能用 $("#")
//                         		alert("em"+ haveEmail);
                                 var email = document.getElementById("email");
                                 phone.setCustomValidity('');
                                 email.setCustomValidity('该邮箱已注册');
                             }else{
                                 user.joinDate = new Date();  // 默认参加时间为当前时间
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
                             }
                         });
                 }
             });
             
//            var haveEmail = false;
//            await axios.post(
//                    '/register/name',{"name":user.email}, {
//                        headers: {
//                            'Content-Type': 'application/json'
//                        }
//                    }
//                )
//                .then((response) => {
//                	haveEmail = response.data;
//                	alert("ph"+ havePhone);
//                	if(haveEmail){  // 如果 phone 存在  
//                        // 此处不能用 $("#")
////                		alert("em"+ haveEmail);
//                        var email = document.getElementById("email");
//                        email.setCustomValidity('该邮箱已注册');
//                    }
//                });
//            
//            
//            user.joinDate = new Date();  // 默认参加时间为当前时间
//            // 增加数据  后台设置默认密码为
//            // 补  通过axios
//
//            // 总数增加
//            this.total +=1;
//            this.page = Math.ceil(this.total/this.size);
//
//            // 更新userList  相等 不需要更新   不相等需要更新
//            if(this.userList.length != this.size){
//                this.updateList();
//            }
//            // 添加成功 将user清空
//            this.userInit(user);
        },
        // 查询处理
        async query(user){
            // 获取 total  并根据total 更改current
            // 补  通过axios
        	await axios.post(
        			'/admin/user/total',{
        				
        	            "phone":this.user.phone,
        	            "email":this.user.email,
        	            "username":this.user.username,
        	            "sex":this.user.sex,
        	            "city":this.user.city,
        	            "licenseType":this.user.licenseType
        			},
        			{
                        headers: {
                            'Content-Type': 'application/json'
                        }
        			}
        			).then((response) => {
        				// 获取数据库用户总数
                        this.total = response.data;
                        // 获得总页数
                        this.current = 1;
                        this.page = Math.ceil(this.total/this.size);
                    });
            // 更新userList
            this.updateList();
        },
        // 删除处理
        async remove(userId){
            // 从数据库删除数据
        	await axios.post(
                    '/admin/user/reomve',{"userId":userId}, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then((response) => {
                	haveEmail = response.data;
                });
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