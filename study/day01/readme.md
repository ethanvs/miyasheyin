## jQuery第一天课程内容
### $jQuery优势亮点
````html
1.体积小，灵巧  write less,do more
2.简化js操作
    例：js  document.getElementById('mainNode') V jQuery  $('#mainNode')  简洁方便
3.超强的兼容性：各浏览器通用
    例：js原生语法
        var node = document.getElementById('id');
        node.addEventListener(……)//firefox chrome
        node.attachEvent(……)//IE
        // 如果是用class或tag取值，还需要对返回的数组进行遍历绑定事件
        jQuery封装后
        $('#id').on(……)
4.基于上述3，封装并提供了各种方法和函数库
5.链式操作，方便$('#id').removeClass().hide().siblings().addClass().show()……;
6.ajax封装http请求，并解决原生xhr对象在ie和其它浏览器上的兼容性
````
### $基础语法规则  
````html 
1.语法结构：$(dom标识).操作函数()
    例：$('body'),$('<div></div>'),$('#id'),$('.className'),$('h1')
    例：$('ul li').removeClass('className');
    
2.如何引用 
    <script type="text/javascript"></script>
    window.$ && window.jQuery
    加载 window.onload  $(function(){})
    $(document).ready(function(){……}); 简化 $(function(){……});

3.链式操作：$(dom标识).操作函数().操作函数().操作函数().操作函数()
    例：$('ul li').removeClass('className').siblings().addClass('className').show();

4.演示dom对象和jQuery对象的区别及转换

````
### $选择器用法、性能、优先级别  
````html
1.选择器用法
    id选择器：$('#id') 干净整洁，不用再加任何的标识
        反例$('body #id')
        正例$('#id'),$('#id .className'),$('#id h1')
    class选择器：$('.className')，在class名字的前面是个英文符号“.”，而id是“#”号标识
        例：$('.className') $('.className1.className2') $('.className1 .className11')
        $('.className,.className2,.className3')
    标签选择器：不用加.或#，直接书写标签名
        例：$('h1'),$('ul li')
    选择器加筛选功能
        $().first() $().last() $('ul li:eq(2)') $('ul li:odd') $('ul li:even') $('ul li:gt(3)')
        $('.className:hidden')  $('.className:visible')
        $('[data-word="study"]')  <div data-word="study">asdfasdfaf</div>
        $(':password')          <input type="password">
2.性能、优先级别
    $('#id') > $('h1') > $('.className') > $('模糊匹配')
````
### $事件委托机制、绑定事件  
````html
1.事件委托机制
    普通绑定是把事件直接绑定在目标节点上面
        例$('.className').click(function(e){
            // dosomething 
        })
        // 对于动态植入的目标节点无法生效 因为事件直接委托在目标上面，而目标还没有生成，事件委托自然是失败的。
    动态绑定是把事件绑定在目标节点的某个已存在的父级节点之上，事件触发时候，先从父级节点出发，向下查找目标节点的标识
        $('ul').on('click','li',function(e){
            // dosomething
        })
````
### 练习
````html
多个div元素，分别以id class 标签名 属性等，获取jquery对象，并绑定点击事件，抛出文本提示信息
````
### 作业
````html
table切换 如demo01
````