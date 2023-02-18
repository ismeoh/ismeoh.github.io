import{_ as s,X as a,Y as e,Z as p,a0 as n}from"./framework-5ccfa493.js";const t={},o=n(`<h1 id="js数据类型" tabindex="-1"><a class="header-anchor" href="#js数据类型" aria-hidden="true">#</a> JS数据类型</h1><p>ECMAScript有6种简单数据类型</p><ul><li>Undefined</li><li>Null</li><li>Boolean</li><li>Number</li><li>String</li><li>Symbol(6新增)</li></ul><p>一种复杂数据类型<code>object</code>，无序名值对</p><h2 id="typedef操作符" tabindex="-1"><a class="header-anchor" href="#typedef操作符" aria-hidden="true">#</a> typedef操作符</h2><p>由于ECMAScript类型都是松散的，所以需要typeof来确定数据类型，主要会返回如下</p><ul><li>&quot;undefined&quot;表示值未定义</li><li>&quot;boolean&quot;表示值为布尔值</li><li>&quot;string&quot;表示值为字符串</li><li>&quot;number&quot;表示值为数值</li><li>&quot;object&quot;表示值为对象（而不是函数）或 null</li><li>&quot;function&quot;表示值为函数</li><li>&quot;symbol&quot;表示值为符号</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="undefined" tabindex="-1"><a class="header-anchor" href="#undefined" aria-hidden="true">#</a> undefined</h2><p>相当于给变量赋值undefined，一般出现在let或var只是声明但是没初始化</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//undefined test </span>
<span class="token keyword">let</span> age<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有定义的变量，不会输出<code>undefined</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> age<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 报错</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是使用<code>typedef</code>测试没有定义的变量，仍然会显示<code>undefined</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> age<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> sex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>undefined</code>会被当做<code>false</code>值，例如在<code>if</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>        <span class="token keyword">let</span> age<span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// false不执行</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>age<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// fasle取反执行</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>sex<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 未声明报错</span>

        <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>undefined</code>一般不自己给变量指定</p><h2 id="null" tabindex="-1"><a class="header-anchor" href="#null" aria-hidden="true">#</a> null</h2><p><code>null</code>也是一个特殊值，一般用于给对象初始化，所以null表示一个空对象指针<br> 当判断对象是否被重新赋值一个对象引用，可以方便的检查</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//object</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>car <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//检查是否重新赋值</span>
    <span class="token comment">// </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>null</code>与<code>undefined</code>表面上相等</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>null</code> 可以显示的使用，但是<code>undefined</code>的不能。即前者可以给变量赋值，后者一般不自己给变量指定undefined</p><p><code>null</code>仍然被认为一个<code>false</code>值，同<code>undefined</code></p><h2 id="boolearn" tabindex="-1"><a class="header-anchor" href="#boolearn" aria-hidden="true">#</a> boolearn</h2><p>两个字面值<code>true</code>or<code>false</code></p>`,27),c=n(`<p><code>True</code>不是<code>true</code>,<code>False</code>不是<code>false</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> flag2 <span class="token operator">=</span> <span class="token string">&#39;True&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flag <span class="token operator">==</span> flag2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换成<code>boolearn</code>值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 显示转化</span>
<span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> msgBoolean <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换规则</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/20230203121955.png" alt="20230203121955"></p><p>一般if会自动执行转换，不需要自行显式转换</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;true 执行&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> number</h2><p>表示整数和浮点数</p><p>可以用二进制、八进制、十六进制表示</p><p>浮点数要求必须包含小数点，且小数点后有一个数字</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> floatNum <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> floatNum <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> floatNum2 <span class="token operator">=</span> <span class="token number">.1</span><span class="token punctuation">;</span> <span class="token comment">// 不推荐</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浮点数占内存空间是存储整数两倍，因此如<code>1.0</code>会自动转换成整数<code>1</code></p><p>科学计数法表示，如同其他语言</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/20230203123533.png" alt="20230203123533"></p><p>默认会将小数点有6个0或多余6个0的数转换成浮点数科学计数法,如图</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/20230203125436.png" alt="20230203125436"></p><p>浮点数的精度，是小数点后17位，但是<code>0.1+0.2</code>不会等于0.3</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> f1 <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> f2 <span class="token operator">=</span> <span class="token number">0.2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f1<span class="token operator">+</span>f2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0.30000000000000004</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function l(i,d){return a(),e("div",null,[o,p(" `true`不等于1，`false`不等于0  \n\n```js\nlet flag = true;\nconsole.log(flage == true)// false\n\n``` "),c])}const r=s(t,[["render",l],["__file","04-js-data-type.html.vue"]]);export{r as default};