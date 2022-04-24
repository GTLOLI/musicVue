function remSize(){
    //获取设备宽度
    let deviceWidth = document.documentElement.clientWidth||window.innerWidth;
    if(deviceWidth>=750){
        deviceWidth = 750
    }
    if(deviceWidth<=320){
        deviceWidth = 320
    }
    //设计稿是750px
    //设计稿一半宽度就是375px
    //把页面的fontsize设置为设备宽度/7.5
    //那么1rem=100px
    //设计稿的宽度就是3.75rem
    document.documentElement.style.fontSize = (deviceWidth/7.5)+'px';
    //然后再把默认的字体设置为16px,因为1rme=100px,所以0.16rem=16px
    document.querySelector("body").style.fontSize=0.3+'rem';
}
remSize();
//当窗口变化的时候
window.onresize = function (){
    remSize();
}
