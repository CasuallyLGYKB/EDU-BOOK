// function main() {
	
// 	var sorce = "http://lgybetter.oicp.net:13400/login";
// 	var request = new Request(sorce);

// 	// var fd = new FormData();
// 	// fd.append("name","kb");
// 	// fd.append("password","123");

// 	fetch(request,{
// 		method:"POST",
// 		headers: { 
// 			'Content-Type': 'application/x-www-form-urlencoded' ,
// 			'connection':'keep-alive'
// 		},
// 		mode:'cors',
// 		// body:fd
// 		body: 'name=strtf&password=123' 
// 	})
// 	.then(function(res){
// 		return res.json();
// 	})
// 	.then(function(json) {
// 		console.log(json);
// 	})

// }



function main(){
	// $.get("http://api.douban.com/labs/bubbler/user/:id/bubs",function(data,status){
	// 	console.log("数据: \n" + JSON.stringify(data) + "\n状态: " + status); 
	// })

	var name = $("#nameip").val();
	var password = $("#pwip").val();
	// console.log(name + password);

	$.ajax({
        url: "http://lgybetter.oicp.net:13400/login",
        type: 'POST',
        dataType: 'JSON',
        data:{
        	name:name,
        	password:password
        },
        success: function (res) {
        	console.log(JSON.stringify(res)); 
        }
    });
}