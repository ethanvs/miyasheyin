## 遍历+extend函数
#### 遍历函数包括了用于筛选、查找和串联元素的方法，返回了对应的jquery对象集合
````html
add:  $('ul li').add( $('li.className') )
children:   $('.app').children() 第一层，不会向下延伸
andSelf:    $('.app').find('ul li').andSelf() 返回包括ul li集合+className=app的集合
closest:    $('.item-box').closest('.group-box') 向上查找父级className为group-box的集合
each:       $('.item-box').closest('.group-box').each(function(item,index){$(item).addClass("className")}); 
            遍历数据，函数参数中item需要修改为jQuery结构
filter:     对集合过滤查找 例：$('ul li').filter('.className')
find:       对集合的子集进行过滤查找
````
#### extend函数 [参考文档地址](http://www.cnblogs.com/RascallySnake/archive/2010/05/07/1729563.html)
````html
浅复制      jQuery.extend( { a : { a : "a" } }, { a : { b : "b" } } );
深复制      jQuery.extend(true, { a : { a : "a" } }, { a : { b : "b" } } );
$.extend( true ,dest,src1,src2,src3...)
````
#### 作业
````html
遍历节点，取得数据，并放在数组或对象里面
````
