import{_ as e,V as t,W as i,X as n,a2 as o,Y as a,a0 as l}from"./framework-073ee25c.js";const c={},p=n("h1",{id:"vue基础",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue基础","aria-hidden":"true"},"#"),a(" vue基础")],-1),r=n("h2",{id:"创建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建","aria-hidden":"true"},"#"),a(" 创建")],-1),d=n("li",null,"想让vue工作，就必须创建一个vue实例，并且要传入一个配置对象",-1),u=n("li",null,"root容器内代码依然符合HTML规范，只不过混入一些vue的语法",-1),v=n("li",null,"root容器内的代码叫做vue模板",-1),h=n("li",null,"一个容器对应一个vue实例，不能出现多对多，一对多等",-1),k=n("li",null,"在真实开发中只有一个vue实例，并且配合着组件一起使用",-1),b=n("li",null,"一旦data数据发生改变，模板中用到的数据也会发生改变",-1),m=l(`<p>注意区分：</p><ol><li>一个容器对应一个vue实例，不能出现多对多，一对多等</li><li>js表达式和js代码<br> 表达式：一个表达式会生成一个值，放在任何一个需要值的地方。<br> 比如</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a<span class="token punctuation">,</span>
a<span class="token operator">+</span>b<span class="token punctuation">,</span>
<span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
x<span class="token operator">===</span>y<span class="token operator">?</span><span class="token string">&#39;a&#39;</span><span class="token operator">:</span><span class="token string">&quot;b&quot;</span>
js代码语句：<span class="token keyword">if</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h2><ol><li>插值语法 功能：用于解析标签体内容 写法：<code>{{xxx}}</code>,xxx是指js表达式，可以直接读取data中的所有属性</li><li>指令语法 功能：用于解析标签，包括标签属性，标签体内容，绑定事件等等 举例：<code>v-bind:href=&quot;xxx&quot;</code><br> 简写 <code>:href=&quot;xxx&quot;</code>,xxx是指js表达式，同杨可以读取data中所有属性<br> 备注：vue有很多v-开头的指令，v-bind只是举例</li></ol><h2 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h2><ol><li>单向绑定v-bind,数据只能从data流向页面</li><li>双向绑定v-model，数据和data是双向的<br> 只用于表单元素</li><li>备注：双向绑定只能用于表单元素</li></ol><h2 id="el和data" tabindex="-1"><a class="header-anchor" href="#el和data" aria-hidden="true">#</a> el和data</h2><ol><li>el有两种写法 <ol><li>new vue时候直接配置el属性</li><li>先创建vue实例，然后使用v.$mount(&#39;#root&#39;)</li></ol></li><li>data有两种写法 <ol><li>对象式</li><li>函数式<br> 如何选择：现阶段哪种都可，<strong>使用组件必须用函数式</strong><br> 注意事项：函数式一定要用一般函数，不要用箭头函数</li></ol></li></ol><h2 id="数据模型" tabindex="-1"><a class="header-anchor" href="#数据模型" aria-hidden="true">#</a> 数据模型</h2><h3 id="object-defineproperty" tabindex="-1"><a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a> Object.defineProperty</h3><p>作用：js用于直接在对象上定义一个属性，或者修改一个属性，并且返回该对象<br> 格式：<code>Object.defineProperty(对象，属性名字符串,{一些属性或方法})</code>,最常见的如下</p><p>常见属性<br><code>value:18</code>, // 设置属性的值<br><code>enumerable:true</code>, //控制属性是否可以枚举，默认是否<br><code>Writable:true</code>,//控制属性是否能被修改，默认是否<br><code>configurable:true</code>,//控制属性是否可以被删除，默认是否</p><p>常见方法※<br><code>get和set方法</code><br> 作用：当对象内的属性调用的时候会调用，get表示读取调用，set表示赋值调用<br> 写法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">get</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;有人读取age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
或简写
<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据代理" tabindex="-1"><a class="header-anchor" href="#数据代理" aria-hidden="true">#</a> 数据代理</h3><p>是什么？ 数据代理是通过一个对象来操作另一个对象中属性的操作 读或写<br> 例如</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token comment">// 数据代理obj1中的属性</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">.</span>x
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>x <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue数据代理" tabindex="-1"><a class="header-anchor" href="#vue数据代理" aria-hidden="true">#</a> vue数据代理</h2><p>基本原理<br> 通过object.defineProperty()把data中的属性添加到vm上 为每一个添加到vm上的属性，添加getter和setter方法 在getter和setter内部去操作data中对应的属性</p><h2 id="mvvm模型" tabindex="-1"><a class="header-anchor" href="#mvvm模型" aria-hidden="true">#</a> MVVM模型</h2><h2 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理" aria-hidden="true">#</a> 事件处理</h2><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><ol><li>使用<code>v-on:xx</code>或者<code>@xx </code>绑定事件，其中xxx是事件名</li><li>事件的回调需要配置在methods对象中，最终会在vm上</li><li>methods中的函数不要写成箭头函数，否则this就不是vm了</li><li>methods中配置的一般函数都是被vue管理的函数，this指向vm或者组件实例</li><li><code>@click=&quot;demo&quot;</code> 等同于<code>@click=&#39;demo($event)&#39;</code>,后者可以传参<br> 例如<br> 使用时<code>event.target.value</code>指定事件发生所指向的对象进行赋值</li></ol><h3 id="事件修饰符" tabindex="-1"><a class="header-anchor" href="#事件修饰符" aria-hidden="true">#</a> 事件修饰符</h3><p>1-3常用<br> 写法<br><code>@click.修饰符</code></p><p>事件修饰符如下</p><ol><li>prevent 阻止默认事件<br> 例如在超链接标签增加点击事件，点击后执行对应方法，而不会去跳转链接</li><li>stop 阻止事件冒泡</li><li>once 事件只触发一次</li><li>capture 使用事件捕获模式</li><li>self 只有event.target是当前操作元素才触发事件</li><li>passive 事件默认行为立刻执行，无需等待事件回调执行完毕</li></ol><h3 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h3><p>使用方法<br><code>v-on:keyup/down.案件名</code></p><ol><li><p>vue中常见的按键别名</p><ul><li>回车 enter</li><li>删除或退格 delete</li><li>退出 esc</li><li>空格 space</li><li>换行 tab 必须配合keydown使用</li><li>上 up</li><li>下 down</li><li>左 left</li><li>右 right</li></ul></li><li><p>vue未提供别名的按键，可以用按键原始的key值绑定，但注意要转换为kebab-case端横线命名<br> 如<code>@keyup.caps-lock=&#39;showInfo&#39;</code></p></li><li><p>系统修饰键 ctrl alt shift meta徽标键</p><ol><li>配合keyup用，按下按键同时，必须再按下其他键，随后释放其他键，事件才能触发</li><li>配合keydown使用，正常触发按键</li></ol></li><li><p>也可以使用keycode去指定具体按键，不推荐</p></li><li><p>Vue.config.keyCode.自定义键名 = 键码，可以去定制按键别名</p></li></ol>`,31);function x(s,f){return t(),i("div",null,[p,r,n("ol",null,[d,u,v,h,k,n("li",null,o(s.xxx)+"要写成js表达式，xxx可以自动读取data中的所有属性",1),b]),m])}const _=e(c,[["render",x],["__file","vue基础.html.vue"]]);export{_ as default};
