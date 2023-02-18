import{_ as n,X as s,Y as a,a0 as e}from"./framework-5ccfa493.js";const p={},t=e(`<h1 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h1><h2 id="真或假" tabindex="-1"><a class="header-anchor" href="#真或假" aria-hidden="true">#</a> 真或假</h2><p>Java中的真或假分别用，<code>true</code>or<code>false</code>来表示，但是在Java中不允许用1或0来表示，尽管其他语言是有这种用法</p><h2 id="if-else语句" tabindex="-1"><a class="header-anchor" href="#if-else语句" aria-hidden="true">#</a> if-else语句</h2><p>流程控制最基本的形式，其语法如下</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>if(布尔类型表达式){
    语句;
}else if(布尔类型表达式){
    语句;
}else{
    语句;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>布尔类型</code>表达式说明其计算结果是<code>boolean</code>类型，其中<code>else if</code>和<code>else</code>可以省略</p><h2 id="迭代语句" tabindex="-1"><a class="header-anchor" href="#迭代语句" aria-hidden="true">#</a> 迭代语句</h2><p><strong>迭代语句</strong>包含三种类型,只有当循环控制条件是false迭代才会停止，只要是true一直会循环</p><ul><li>while</li><li>do while</li><li>for</li></ul><h3 id="while和do-while" tabindex="-1"><a class="header-anchor" href="#while和do-while" aria-hidden="true">#</a> while和do while</h3><p>语法结构为</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">while</span><span class="token punctuation">(</span>布尔类型表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
    语句
<span class="token punctuation">}</span>

<span class="token keyword">do</span> 
    语句
<span class="token keyword">while</span><span class="token punctuation">(</span>布尔表达式<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>do while区别于while，其永远会执行一次</p><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><p>语法结构为</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>初始表达式<span class="token punctuation">;</span> 布尔表达式<span class="token punctuation">;</span> 步进表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
    语句
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述的三个表达式和语句其执行顺序为<code>初始表达式-&gt;布尔表达式-&gt;语句-&gt;步进表达式</code>,例如</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

输出
<span class="token number">0</span>
<span class="token operator">--</span><span class="token operator">-</span>
<span class="token number">1</span>
<span class="token operator">--</span><span class="token operator">-</span>
<span class="token number">2</span>
<span class="token operator">--</span><span class="token operator">-</span>
<span class="token number">3</span>
<span class="token operator">--</span><span class="token operator">-</span>
<span class="token number">4</span>
<span class="token operator">--</span><span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>逗号操作符</strong>，在for循环中可以使用逗号分割不同的变量，并且只能用于初始化表达式和步进表达式位置，如下所示</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span>j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-in" tabindex="-1"><a class="header-anchor" href="#for-in" aria-hidden="true">#</a> for in</h3><p>for in该语法在<code>Java5</code>中出现,又叫做<code>for-each</code>,其是用来操作数组和与集合，语法格式如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>初始表达式<span class="token operator">:</span>迭代目标<span class="token punctuation">)</span><span class="token punctuation">{</span>
    语句
<span class="token punctuation">}</span>

例如
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> n <span class="token operator">:</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2><h3 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h3><p><strong>return</strong>关键字作用有如下两方面，其一作为<code>方法</code>的返回值，其二，退出当前方法，并返回值</p><p>如下所示</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> n1<span class="token punctuation">,</span> <span class="token keyword">int</span> n2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n1 <span class="token operator">&gt;</span> n2<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> n1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n1 <span class="token operator">&lt;</span> n2<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> n2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span>  <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

输出<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述例子中，方法的返回类型是int，因此必须显式指明返回值，如果是void类型，其实也有return，只不过是隐式指明的</p><h3 id="break和return" tabindex="-1"><a class="header-anchor" href="#break和return" aria-hidden="true">#</a> break和return</h3><p>break和return是用于迭代循环中的关键字，其中break表示跳出循环体，continue表示结束本次循环，开始下一次循环</p><p>如下演示了for中break和return运用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// [1]</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 跳出循环</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 下一次循环</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token number">0</span> <span class="token number">2</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">8</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述例子，第i=9的时候循环跳出终止了;当i是奇数的时候，结束当前循环，不再执行下面语句，跳入下一次循环</p><p>下面是一些无限循环的一些小写法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h3><p>goto是跳转语句，在其他语言中存在，但在Java中并没有实现，只是作为保留关键字</p><p>尽管，Java没有goto跳转，但是有一个<code>label</code>标签，配合break和continue关键字，可以看到类似goto的功能,格式如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>label1<span class="token operator">:</span>
outer<span class="token operator">-</span>iteration <span class="token punctuation">{</span> 
  inner<span class="token operator">-</span>iteration <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// [1] </span>
  <span class="token comment">// ...</span>
  <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// [2] </span>
  <span class="token comment">// ...</span>
  <span class="token keyword">continue</span> label1<span class="token punctuation">;</span> <span class="token comment">// [3] </span>
  <span class="token comment">// ...</span>
  <span class="token keyword">break</span> label1<span class="token punctuation">;</span> <span class="token comment">// [4] </span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>outer-iteration和inner-iteration分别表示外层循环和内层循环，其中<code>continue label1;</code>停止当前这一次的内部循环和外部循环，然后重新进入下一次循环;<code>break label1</code>则表示终止内层和外层循环</p><p>下面是一个例子</p><p>NF</p>`,44),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","流程控制.html.vue"]]);export{r as default};
