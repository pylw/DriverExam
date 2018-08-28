var storeKey = "user";
var storage = {
    fetch:function(){
        return JSON.parse(sessionStorage.getItem(storeKey) || "[]")
    },
    save:function(items){
        sessionStorage.setItem(storeKey,JSON.stringify(items));
    }
}
var back = new Vue({
	el:"#login",
	data:{
		user:{
			id:storage.fetch().id,
			username:storage.fetch().username,
			password:storage.fetch().password
		}
	},
	mounted(){
		
	},
	methods:{
		send() {
            $('#msg').text('');
            $('#msg').show();
            var username = this.user.username;
            if(this.user.username==""||this.user.username==null){
            	$('#msg').text('用户名不能为空');
            	return;
            }
            if(this.user.password==""||this.user.password==null){
            	$('#msg').text('密码不能为空');
            	return;
            }
            var password = md5(this.user.password);
            var pattern = /^1[34578]\d{9}$/;
            var phone = "";
        	var email = "";
            var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if(pattern.test(this.user.username)||reg.test(this.user.username)){
            	if (pattern.test(this.user.username)) {
            		phone = this.user.username;
            	}else{
            		email = this.user.username
            	}
            }else{
            	 $('#msg').text('用户名格式不正确');
            	 return;
            }

            axios.post(
                    '/admin/login', {
                    	"phone":phone,
                    	"email":email,
                    	"password":password
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then((response) =>{
                    if (response.data.adminId != null&&response.data.adminId!=undefined) {
                        this.user.id = response.data.adminId;
                        location.href = "/back.html";
                    } else{
                    	this.user.password = "";
                        $('#msg').text('用户名或密码错误');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
	},
	watch:{
		'user.id'(){
			storage.save(this.user);
			console.log(sessionStorage.getItem("user"))
		}
	}
});