export const sketch = `<pre class="language-python"><code class="language-python"><span class="token keyword">import</span> gradio <span class="token keyword">as</span> gr
<span class="token keyword">def</span> <span class="token function">sketch_recognition</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span><span class="token comment"> # Implement your sketch recognition model here...</span>

gr<span class="token punctuation">.</span>Interface<span class="token punctuation">(</span>fn<span class="token operator">=</span>sketch_recognition<span class="token punctuation">,</span> inputs<span class="token operator">=</span><span class="token string">"sketchpad"</span><span class="token punctuation">,</span> outputs<span class="token operator">=</span><span class="token string">"label"</span><span class="token punctuation">).</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>`;

export const chat = `<pre class="language-python"><code class="language-python"><span class="token keyword">import</span> gradio <span class="token keyword">as</span> gr
<span class="token keyword">def</span> <span class="token function">chat</span><span class="token punctuation">(</span>message<span class="token punctuation">, </span>history<span class="token punctuation"></span>)<span class="token punctuation">:</span>
    <span class="token keyword">pass </span><span class="token comment"> # Implement your chatbot here...</span>

gr<span class="token punctuation">.</span>ChatInterface<span class="token punctuation">(</span>fn<span class="token operator">=</span>chat<span class="token punctuation">).</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>`;

export const stable_diffusion = `<pre class="language-python"><code class="language-python"><span class="token keyword">import</span> gradio <span class="token keyword">as</span> gr
<span class="token keyword">def</span> <span class="token function">generate</span><span class="token punctuation">(</span>prompt<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass </span><span class="token comment"> # Implement your image generation model here...</span>

gr<span class="token punctuation">.</span>Interface<span class="token punctuation">(</span>fn<span class="token operator">=</span>generate<span class="token punctuation">,</span> inputs<span class="token operator">=</span><span class="token string">"prompt"</span><span class="token punctuation">,</span> outputs<span class="token operator">=</span><span class="token string">"image"</span><span class="token punctuation">).</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>`;
