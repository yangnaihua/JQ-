$(function() {
	$(myform).validate({// 需要在此处配置上验证的相关项
		debug : true ,	// 意味着此时的提交按钮失效
		submitHandler : function(form) {	// 是进行提交处理
			// form.submit() ;
			// ajax调用
			console.log("*********** ajax异步调用") ;
		} ,
		highlight : function(element,errorClass) {
			id = $(element).attr("id") ;	// 产生错误的元素的id
			divObj = id + "Div" ;
			$("#" + divObj).attr("class","form-group has-error") ;
		} ,
		unhighlight : function(element,errorClass) {
			id = $(element).attr("id") ;	// 产生错误的元素的id
			divObj = id + "Div" ;
			$("#" + divObj).attr("class","form-group has-success") ;
		} ,
		errorPlacement : function(error,element) {
			id = $(element).attr("id") ; 
			spanObj = id + "Span" ;
			$("#" + spanObj).empty() ;	// 清空已有元素内容
			$("#" + spanObj).append(error) ; // 在指定元素中追加错误信息
		} ,
		messages : {
			"photo" : {
				accept : "该文件不允许使用，只允许上传图片"
			}
		} ,
		errorClass : "text-danger" ,
		success : function(msg,element) {
			id = $(element).attr("id") ;
			spanObj = id + "Span" ;
			$("#" + spanObj).empty() ;	// 清空已有元素内容
			$("#" + spanObj).append("<span class='text-success glyphicon glyphicon-ok'></span>") ; // 在指定元素中追加错误信息
		} ,
		rules : {	// 编写所有的具体验证规则
			"mid" : {	// name是表单参数“id”，这里面设置它所需要的规则
				required : true ,
				email : true 
			} ,
			"name" : {	// name是表单参数“id”，这里面设置它所需要的规则
				required : true 
			} ,
			"phone" : {
				required : true ,
				digits : true ,
				maxlength : 11 ,
				minlength : 7
			},
			"password" : {	// name是表单参数“id”，这里面设置它所需要的规则
				required : true 
			},
			"conf" : {	// name是表单参数“id”，这里面设置它所需要的规则
				required : true  ,
				equalTo : "#password"
			},
			"sex" : {	// name是表单参数“id”，这里面设置它所需要的规则
				required : true 
			},
			"inst" : {	// name是表单参数“id”，这里面设置它所需要的规则
				required : true 
			} ,
			"city" : {	// name是表单参数“id”，这里面设置它所需要的规则
				required : true 
			} , 
			"note" : {	// name是表单参数“id”，这里面设置它所需要的规则
				required : true 
			}, 
			"photo" : {	// name是表单参数“id”，这里面设置它所需要的规则
				required : true ,
				accept : ["jpg","png"] 
			}
		}
	}) ;	// 绑定验证
})