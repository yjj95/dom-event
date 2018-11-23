//$(".wrapper").on('click',false)//阻止传播和默认事件
//如果有很多个popover都需要监听，是很耗费内存的
//节省内存
$(".wrapper").on("click",function(e){
   $(".popover").show()
   $(document).one("click",function(){
      $(".popover").hide()
   })
   //阻止事件冒泡
   e.stopPropagation()//IE8会阻止checkbox的默认事件
})