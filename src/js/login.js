$(function(){
    //输入用户名
    $('#users').blur(function(){
           let re =/[\u4e00-\u9fa5]|\d{11}/
           if(re.test($(this).val())){
               alert('输入正确');
           }else{
            alert('输入错误');
           }
    })
    $('#pwd').blur(function(){
        let re = /\w{6,12}/;
        if(re.test($(this).val())){
            alert('密码正确')
        }
    })
})