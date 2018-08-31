// function generate(type) {
// 	var n = noty({
// 		text        : type,
// 		type        : type,
// 		dismissQueue: true,
// 		timeout     : 10000,
// 		closeWith   : ['click'],
// 		layout      : 'topCenter',
// 		theme       : 'defaultTheme',
// 		maxVisible  : 10
// 	});
// 	console.log('html: ' + n.options.id);
// }

// function generateAll() {
// 	generate('alert');
// 	generate('information');
// 	generate('error');
// 	generate('warning');
// 	generate('notification');
// 	generate('success');
// }

// function humaneNoty(pretags){
// 	for (var i = 0; i < pretags.length; i++) { (function(el){
// 		el.onclick = function () {
// 		   eval(el.innerHTML)
// 		}
// 	 }(pretags[i])) }
// }
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
	el:"#back",
	data:{
		user:{
			id:storage.fetch().id,
			username:storage.fetch().username,
			password:storage.fetch().password
		}
	},
	created(){
		
	},
	methods:{
		loginOut(){
			this.user.username="";
			this.user.id=undefined;
			this.user.password="";
			storage.save(this.user);
			location.href = "/login.html";
		}
	}
});