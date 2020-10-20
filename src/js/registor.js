class Reg{
    constructor(){
        //初始化
        this.init();
    }
    init(){
        //输入手机号码
        this.code_phone = ele('#code_phone');
        //获取右侧验证码
        //获取验证码
        this.message = ele('#message');
        //获取验证码按钮
        this.get_message = ele('#get_message');
        //密码
        this.code_pwd = ele('#code_pwd');
        //确认密码
        this.sure = ele('#sure');
        //获取提交按钮
        this.btn = ele('#btn');
        //添加事件
        this.addEvent();
        
        //判断内容是否正确
        this.arr = [false,false,false,false,false]
        this.time = 60;
    }
    addEvent(){
        let that = this;
         //输入手机号码
        this.code_phone.onblur = function(){
            let code_phone = this.value;
            let re = /\d{11}/;
            if(re.test(code_phone)){
                alert('输入正确');
                that.arr[0] = true;
            }else{
                alert('输入错误');
                that.arr[0] = false;
            }
        }
        //获取短信验证码
    
        this.get_message.onclick = function(){
            setInterval(()=>{
                this.value = '还剩' + this.time + '秒';
                this.time--;
                console.log(this.time)
            },1000)
        }
        //密码
        this.code_pwd.onblur = function(){
            let pwd = this.value;
            let re = /\w{6,12}/;
            if(re.test(pwd)){
                that.arr[3] = true;
            }else{
                alert('请输入数字，字母，下划线！');
                that.arr[3] = false;
            }
        }
        //确认密码
        this.sure.onblur = function(){
            let ok = this.value;
            let pwd = this.code_pwd.value;
            if(ok === pwd){
                that.arr[4] = true;
            }else{
                 that.arr[4] = false;
                alert('两次密码不一致');
               
            }
        }
        this.btn.onclick = function(){
             if(that.arr.indexOf(false) === -1){
                 let code_phone = that.code_phone.value;
                 let pwd = that.code_pwd.value;
                 //获取cookie
                 
             }
        }
            
    }
}
function ele(selector){
    return document.querySelector(selector);
}

new Reg();