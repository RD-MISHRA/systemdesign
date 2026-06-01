
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>OOP in C++ — Complete Reference</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet"/>
<style>
:root {
  --bg: #0d0d0f;
  --surface: #16161a;
  --surface2: #1e1e24;
  --border: #2a2a35;
  --accent: #7c6af7;
  --accent2: #f7706a;
  --accent3: #4ecdc4;
  --accent4: #f7c948;
  --text: #e8e8f0;
  --muted: #7a7a90;
  --code-bg: #111115;
  --pill-1: #3d2a6b;
  --pill-2: #1a3a3a;
  --pill-3: #3a1a1a;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  background:var(--bg);
  color:var(--text);
  font-family:'Syne',sans-serif;
  font-size:15px;
  line-height:1.6;
  min-height:100vh;
}

/* ── BACKGROUND GRID ── */
body::before{
  content:'';
  position:fixed;inset:0;
  background-image:
    linear-gradient(var(--border) 1px,transparent 1px),
    linear-gradient(90deg,var(--border) 1px,transparent 1px);
  background-size:40px 40px;
  opacity:.25;
  pointer-events:none;
  z-index:0;
}

/* ── LAYOUT ── */
.layout{display:flex;min-height:100vh;position:relative;z-index:1}

/* ── SIDEBAR ── */
.sidebar{
  width:260px;
  flex-shrink:0;
  background:var(--surface);
  border-right:1px solid var(--border);
  position:sticky;
  top:0;
  height:100vh;
  overflow-y:auto;
  padding:0;
}
.sidebar::-webkit-scrollbar{width:4px}
.sidebar::-webkit-scrollbar-track{background:transparent}
.sidebar::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px}

.sidebar-header{
  padding:24px 20px 16px;
  border-bottom:1px solid var(--border);
}
.sidebar-header h1{
  font-size:16px;
  font-weight:800;
  letter-spacing:-.02em;
  line-height:1.2;
}
.sidebar-header h1 span{color:var(--accent)}
.sidebar-header p{
  font-size:11px;
  color:var(--muted);
  margin-top:4px;
  font-family:'JetBrains Mono',monospace;
}

.nav-section{padding:12px 0}
.nav-label{
  font-size:10px;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:var(--muted);
  padding:8px 20px 4px;
}
.nav-item{
  display:flex;
  align-items:center;
  gap:10px;
  padding:9px 20px;
  cursor:pointer;
  transition:all .15s;
  border-left:3px solid transparent;
  font-size:13px;
  color:var(--muted);
}
.nav-item:hover{
  background:var(--surface2);
  color:var(--text);
  border-left-color:var(--border);
}
.nav-item.active{
  background:rgba(124,106,247,.1);
  color:var(--accent);
  border-left-color:var(--accent);
  font-weight:600;
}
.nav-dot{
  width:8px;height:8px;
  border-radius:50%;
  flex-shrink:0;
}

/* ── MAIN ── */
.main{flex:1;overflow-y:auto;padding:40px 48px}
.main::-webkit-scrollbar{width:6px}
.main::-webkit-scrollbar-track{background:transparent}
.main::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px}

/* ── HERO ── */
.hero{
  margin-bottom:48px;
  padding-bottom:40px;
  border-bottom:1px solid var(--border);
}
.hero-badge{
  display:inline-block;
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  background:rgba(124,106,247,.15);
  color:var(--accent);
  border:1px solid rgba(124,106,247,.3);
  padding:4px 12px;
  border-radius:20px;
  margin-bottom:16px;
  letter-spacing:.04em;
}
.hero h1{
  font-size:42px;
  font-weight:800;
  letter-spacing:-.04em;
  line-height:1.1;
  margin-bottom:12px;
}
.hero h1 em{
  font-style:normal;
  color:var(--accent);
}
.hero p{
  font-size:16px;
  color:var(--muted);
  max-width:560px;
  line-height:1.6;
}
.pillars-row{
  display:flex;
  gap:10px;
  margin-top:24px;
  flex-wrap:wrap;
}
.pillar-pill{
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  padding:6px 14px;
  border-radius:6px;
  border:1px solid;
  font-weight:500;
}
.pp1{background:rgba(124,106,247,.1);border-color:rgba(124,106,247,.4);color:#a99af7}
.pp2{background:rgba(247,112,106,.1);border-color:rgba(247,112,106,.4);color:#f7a09b}
.pp3{background:rgba(78,205,196,.1);border-color:rgba(78,205,196,.4);color:#7de0da}
.pp4{background:rgba(247,201,72,.1);border-color:rgba(247,201,72,.4);color:#f7d67a}

/* ── SECTION ── */
.section{margin-bottom:64px;scroll-margin-top:24px}
.section-header{
  display:flex;
  align-items:flex-start;
  gap:16px;
  margin-bottom:28px;
}
.section-icon{
  width:48px;height:48px;
  border-radius:12px;
  display:flex;align-items:center;justify-content:center;
  font-size:22px;
  flex-shrink:0;
}
.icon-purple{background:rgba(124,106,247,.15);border:1px solid rgba(124,106,247,.3)}
.icon-coral{background:rgba(247,112,106,.15);border:1px solid rgba(247,112,106,.3)}
.icon-teal{background:rgba(78,205,196,.15);border:1px solid rgba(78,205,196,.3)}
.icon-amber{background:rgba(247,201,72,.15);border:1px solid rgba(247,201,72,.3)}
.icon-green{background:rgba(100,200,100,.15);border:1px solid rgba(100,200,100,.3)}
.icon-blue{background:rgba(100,160,247,.15);border:1px solid rgba(100,160,247,.3)}

.section-meta h2{
  font-size:26px;
  font-weight:800;
  letter-spacing:-.03em;
  line-height:1.2;
}
.section-meta .tagline{
  font-size:13px;
  color:var(--muted);
  margin-top:4px;
  font-family:'JetBrains Mono',monospace;
}

/* ── EXPLANATION CARD ── */
.explain-card{
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:12px;
  padding:24px;
  margin-bottom:20px;
}
.explain-card p{
  color:#c0c0d0;
  line-height:1.7;
  font-size:14px;
}
.explain-card p+p{margin-top:10px}

/* ── KEY POINTS ── */
.key-points{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:12px;
  margin-bottom:20px;
}
.kp{
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:10px;
  padding:16px;
}
.kp-label{
  font-size:10px;
  font-weight:700;
  letter-spacing:.1em;
  text-transform:uppercase;
  margin-bottom:6px;
}
.kp p{font-size:13px;color:var(--muted);line-height:1.5}

/* ── SUB-SECTION ── */
.sub{margin-bottom:32px}
.sub-title{
  font-size:16px;
  font-weight:700;
  margin-bottom:12px;
  display:flex;
  align-items:center;
  gap:8px;
}
.sub-title::before{
  content:'';
  display:block;
  width:4px;height:18px;
  border-radius:2px;
  background:var(--accent);
  flex-shrink:0;
}
.sub-title.coral::before{background:var(--accent2)}
.sub-title.teal::before{background:var(--accent3)}
.sub-title.amber::before{background:var(--accent4)}
.sub-title.green::before{background:#78c878}
.sub-title.blue::before{background:#78aaef}

/* ── CODE BLOCK ── */
.code-wrap{
  background:var(--code-bg);
  border:1px solid var(--border);
  border-radius:10px;
  overflow:hidden;
  margin-bottom:16px;
}
.code-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:10px 16px;
  background:var(--surface);
  border-bottom:1px solid var(--border);
}
.code-dots{display:flex;gap:6px}
.code-dots span{
  width:10px;height:10px;
  border-radius:50%;
}
.code-dots span:nth-child(1){background:#ff5f57}
.code-dots span:nth-child(2){background:#febc2e}
.code-dots span:nth-child(3){background:#28c840}
.code-lang{
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  color:var(--muted);
}
.copy-btn{
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  color:var(--muted);
  background:none;
  border:1px solid var(--border);
  border-radius:5px;
  padding:3px 10px;
  cursor:pointer;
  transition:all .15s;
}
.copy-btn:hover{color:var(--text);border-color:var(--accent)}
pre{
  padding:20px;
  overflow-x:auto;
  font-family:'JetBrains Mono',monospace;
  font-size:13px;
  line-height:1.7;
  color:#cdd0e3;
}
pre::-webkit-scrollbar{height:4px}
pre::-webkit-scrollbar-track{background:transparent}
pre::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px}

/* syntax colors */
.kw{color:#b39dfd}       /* keyword */
.tp{color:#4ecdc4}       /* type */
.fn{color:#87ceeb}       /* function */
.st{color:#f7c948}       /* string */
.cm{color:#555570;font-style:italic} /* comment */
.nm{color:#f7a09b}       /* number/literal */
.op{color:#7a7a90}       /* operator */

/* ── OUTPUT BLOCK ── */
.output{
  background:#0a1a0a;
  border:1px solid #1a3a1a;
  border-radius:8px;
  padding:14px 18px;
  margin-bottom:16px;
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  line-height:1.8;
  color:#78c878;
}
.output-label{
  font-size:10px;
  color:#3a6a3a;
  font-weight:700;
  letter-spacing:.1em;
  text-transform:uppercase;
  margin-bottom:8px;
}

/* ── TABLE ── */
.ref-table{
  width:100%;
  border-collapse:collapse;
  font-size:13px;
  margin-bottom:20px;
}
.ref-table th{
  background:var(--surface2);
  color:var(--muted);
  font-size:11px;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;
  padding:10px 14px;
  text-align:left;
  border-bottom:1px solid var(--border);
}
.ref-table td{
  padding:10px 14px;
  border-bottom:1px solid rgba(42,42,53,.5);
  color:#c0c0d0;
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  vertical-align:top;
}
.ref-table tr:hover td{background:rgba(255,255,255,.02)}
.ref-table td:first-child{color:var(--accent);font-weight:500}

/* ── CALLOUT ── */
.callout{
  display:flex;
  gap:14px;
  padding:16px 18px;
  border-radius:10px;
  margin:16px 0;
  font-size:13px;
  line-height:1.6;
}
.callout.tip{background:rgba(78,205,196,.07);border:1px solid rgba(78,205,196,.2);color:#9de8e3}
.callout.warn{background:rgba(247,201,72,.07);border:1px solid rgba(247,201,72,.2);color:#f7d98a}
.callout.info{background:rgba(124,106,247,.07);border:1px solid rgba(124,106,247,.2);color:#b3a7f7}
.callout-icon{font-size:16px;flex-shrink:0;margin-top:1px}

/* ── DIVIDER ── */
.divider{
  border:none;
  border-top:1px solid var(--border);
  margin:40px 0;
}

/* ── TABS ── */
.tabs{display:flex;gap:2px;margin-bottom:16px;background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:4px;width:fit-content}
.tab-btn{
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  padding:7px 16px;
  border-radius:5px;
  border:none;
  background:transparent;
  color:var(--muted);
  cursor:pointer;
  transition:all .15s;
}
.tab-btn.active{background:var(--accent);color:#fff;font-weight:700}
.tab-content{display:none}
.tab-content.active{display:block}

/* ── RESPONSIVE ── */
@media(max-width:900px){
  .sidebar{display:none}
  .main{padding:24px 20px}
  .hero h1{font-size:28px}
}
</style>
</head>
<body>
<div class="layout">

<!-- SIDEBAR -->
<aside class="sidebar">
  <div class="sidebar-header">
    <h1>OOP in <span>C++</span></h1>
    <p>// complete reference</p>
  </div>
  <nav>
    <div class="nav-section">
      <div class="nav-label">Fundamentals</div>
      <div class="nav-item active" onclick="scrollTo('intro')">
        <span class="nav-dot" style="background:#7c6af7"></span>Introduction
      </div>
      <div class="nav-item" onclick="scrollTo('classes')">
        <span class="nav-dot" style="background:#7c6af7"></span>Classes & Objects
      </div>
    </div>
    <div class="nav-section">
      <div class="nav-label">4 Pillars</div>
      <div class="nav-item" onclick="scrollTo('encap')">
        <span class="nav-dot" style="background:#f7706a"></span>Encapsulation
      </div>
      <div class="nav-item" onclick="scrollTo('inherit')">
        <span class="nav-dot" style="background:#4ecdc4"></span>Inheritance
      </div>
      <div class="nav-item" onclick="scrollTo('poly')">
        <span class="nav-dot" style="background:#f7c948"></span>Polymorphism
      </div>
      <div class="nav-item" onclick="scrollTo('abstract')">
        <span class="nav-dot" style="background:#78c878"></span>Abstraction
      </div>
    </div>
    <div class="nav-section">
      <div class="nav-label">Advanced</div>
      <div class="nav-item" onclick="scrollTo('constructors')">
        <span class="nav-dot" style="background:#78aaef"></span>Constructors & Destructor
      </div>
      <div class="nav-item" onclick="scrollTo('friends')">
        <span class="nav-dot" style="background:#78aaef"></span>Friend & Static
      </div>
      <div class="nav-item" onclick="scrollTo('templates')">
        <span class="nav-dot" style="background:#78aaef"></span>Templates
      </div>
      <div class="nav-item" onclick="scrollTo('exceptions')">
        <span class="nav-dot" style="background:#78aaef"></span>Exception Handling
      </div>
      <div class="nav-item" onclick="scrollTo('overload')">
        <span class="nav-dot" style="background:#78aaef"></span>Operator Overloading
      </div>
    </div>
    <div class="nav-section">
      <div class="nav-label">Quick Ref</div>
      <div class="nav-item" onclick="scrollTo('ref')">
        <span class="nav-dot" style="background:#555570"></span>Cheat Sheet
      </div>
    </div>
  </nav>
</aside>

<!-- MAIN CONTENT -->
<main class="main">

<!-- HERO -->
<div class="hero" id="intro">
  <div class="hero-badge">// Object-Oriented Programming</div>
  <h1>OOP in <em>C++</em></h1>
  <p>A complete reference covering all OOP concepts — from classes and objects to polymorphism, templates, and exception handling. With full code examples and output.</p>
  <div class="pillars-row">
    <span class="pillar-pill pp1">Encapsulation</span>
    <span class="pillar-pill pp2">Inheritance</span>
    <span class="pillar-pill pp3">Polymorphism</span>
    <span class="pillar-pill pp4">Abstraction</span>
  </div>
</div>

<!-- ════════════════════════════════════════
     CLASSES & OBJECTS
════════════════════════════════════════ -->
<section class="section" id="classes">
  <div class="section-header">
    <div class="section-icon icon-purple">🧱</div>
    <div class="section-meta">
      <h2>Classes & Objects</h2>
      <div class="tagline">// blueprint vs instance</div>
    </div>
  </div>

  <div class="explain-card">
    <p>A <strong>class</strong> is a user-defined data type — a blueprint that defines data (attributes) and behavior (methods). An <strong>object</strong> is an instance of a class — an actual entity created from the blueprint.</p>
    <p>In C++, a class can have <code>public</code>, <code>private</code>, and <code>protected</code> members. By default, class members are <code>private</code>. The <code>struct</code> keyword is similar but defaults to <code>public</code>.</p>
  </div>

  <div class="code-wrap">
    <div class="code-header">
      <div class="code-dots"><span></span><span></span><span></span></div>
      <span class="code-lang">C++</span>
      <button class="copy-btn" onclick="copyCode(this)">copy</button>
    </div>
    <pre><span class="cm">// ─── Class Definition ───────────────────────────────</span>
<span class="kw">#include</span> <span class="st">&lt;iostream&gt;</span>
<span class="kw">#include</span> <span class="st">&lt;string&gt;</span>
<span class="kw">using namespace</span> std<span class="op">;</span>

<span class="kw">class</span> <span class="tp">Car</span> <span class="op">{</span>
<span class="kw">private</span><span class="op">:</span>
    <span class="cm">// Attributes (data members)</span>
    string brand<span class="op">;</span>
    <span class="tp">int</span> year<span class="op">;</span>
    <span class="tp">double</span> speed<span class="op">;</span>

<span class="kw">public</span><span class="op">:</span>
    <span class="cm">// Constructor</span>
    <span class="fn">Car</span><span class="op">(</span>string b<span class="op">,</span> <span class="tp">int</span> y<span class="op">)</span> <span class="op">:</span> brand<span class="op">(</span>b<span class="op">),</span> year<span class="op">(</span>y<span class="op">),</span> speed<span class="op">(</span><span class="nm">0</span><span class="op">)</span> <span class="op">{}</span>

    <span class="cm">// Member functions (methods)</span>
    <span class="kw">void</span> <span class="fn">accelerate</span><span class="op">(</span><span class="tp">double</span> amount<span class="op">) {</span>
        speed <span class="op">+=</span> amount<span class="op">;</span>
    <span class="op">}</span>

    <span class="kw">void</span> <span class="fn">display</span><span class="op">()</span> <span class="kw">const</span> <span class="op">{</span>
        cout <span class="op">&lt;&lt;</span> brand <span class="op">&lt;&lt;</span> <span class="st">" ("</span> <span class="op">&lt;&lt;</span> year <span class="op">&lt;&lt;</span> <span class="st">") - Speed: "</span> <span class="op">&lt;&lt;</span> speed <span class="op">&lt;&lt;</span> <span class="st">" km/h\n"</span><span class="op">;</span>
    <span class="op">}</span>
<span class="op">};</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="cm">// Creating objects (instances)</span>
    <span class="tp">Car</span> car1<span class="op">(</span><span class="st">"Toyota"</span><span class="op">,</span> <span class="nm">2020</span><span class="op">);</span>
    <span class="tp">Car</span> car2<span class="op">(</span><span class="st">"BMW"</span><span class="op">,</span> <span class="nm">2023</span><span class="op">);</span>

    car1<span class="op">.</span><span class="fn">accelerate</span><span class="op">(</span><span class="nm">60</span><span class="op">);</span>
    car2<span class="op">.</span><span class="fn">accelerate</span><span class="op">(</span><span class="nm">120</span><span class="op">);</span>

    car1<span class="op">.</span><span class="fn">display</span><span class="op">();</span>
    car2<span class="op">.</span><span class="fn">display</span><span class="op">();</span>
    <span class="kw">return</span> <span class="nm">0</span><span class="op">;</span>
<span class="op">}</span></pre>
  </div>
  <div class="output">
    <div class="output-label">output</div>
Toyota (2020) - Speed: 60 km/h
BMW (2023) - Speed: 120 km/h
  </div>

  <div class="key-points">
    <div class="kp"><div class="kp-label" style="color:#a99af7">Class</div><p>Blueprint/template. Defined once. No memory allocated.</p></div>
    <div class="kp"><div class="kp-label" style="color:#a99af7">Object</div><p>Instance of a class. Memory is allocated. Each has its own copy of data members.</p></div>
    <div class="kp"><div class="kp-label" style="color:#a99af7">this pointer</div><p>Implicit pointer inside every non-static member function pointing to the calling object.</p></div>
  </div>
</section>

<hr class="divider"/>

<!-- ════════════════════════════════════════
     ENCAPSULATION
════════════════════════════════════════ -->
<section class="section" id="encap">
  <div class="section-header">
    <div class="section-icon icon-coral">🔒</div>
    <div class="section-meta">
      <h2>Encapsulation</h2>
      <div class="tagline">// bundling data + behavior, hiding internals</div>
    </div>
  </div>

  <div class="explain-card">
    <p>Encapsulation is the bundling of data (attributes) and the functions that operate on them into a single unit (class), while <strong>restricting direct access</strong> to the internal state.</p>
    <p>This is achieved using <strong>access specifiers</strong>: <code>private</code> (only same class), <code>protected</code> (same class + subclasses), <code>public</code> (everyone). Data is kept private; controlled access is through getter/setter methods.</p>
  </div>

  <div class="code-wrap">
    <div class="code-header">
      <div class="code-dots"><span></span><span></span><span></span></div>
      <span class="code-lang">C++ — Encapsulation</span>
      <button class="copy-btn" onclick="copyCode(this)">copy</button>
    </div>
    <pre><span class="kw">class</span> <span class="tp">BankAccount</span> <span class="op">{</span>
<span class="kw">private</span><span class="op">:</span>
    string ownerName<span class="op">;</span>
    <span class="tp">double</span> balance<span class="op">;</span>       <span class="cm">// hidden from outside</span>
    string accountNo<span class="op">;</span>

<span class="kw">public</span><span class="op">:</span>
    <span class="fn">BankAccount</span><span class="op">(</span>string name<span class="op">,</span> string no<span class="op">,</span> <span class="tp">double</span> initial<span class="op">)</span>
        <span class="op">:</span> ownerName<span class="op">(</span>name<span class="op">),</span> accountNo<span class="op">(</span>no<span class="op">),</span> balance<span class="op">(</span>initial<span class="op">)</span> <span class="op">{}</span>

    <span class="cm">// Getter — read-only access</span>
    <span class="tp">double</span> <span class="fn">getBalance</span><span class="op">()</span> <span class="kw">const</span> <span class="op">{</span> <span class="kw">return</span> balance<span class="op">; }</span>
    string <span class="fn">getOwner</span><span class="op">()</span>  <span class="kw">const</span> <span class="op">{</span> <span class="kw">return</span> ownerName<span class="op">; }</span>

    <span class="cm">// Controlled modification through methods</span>
    <span class="kw">void</span> <span class="fn">deposit</span><span class="op">(</span><span class="tp">double</span> amount<span class="op">) {</span>
        <span class="kw">if</span> <span class="op">(</span>amount <span class="op">&gt;</span> <span class="nm">0</span><span class="op">)</span> balance <span class="op">+=</span> amount<span class="op">;</span>     <span class="cm">// validation!</span>
        <span class="kw">else</span> cout <span class="op">&lt;&lt;</span> <span class="st">"Invalid deposit\n"</span><span class="op">;</span>
    <span class="op">}</span>

    <span class="kw">void</span> <span class="fn">withdraw</span><span class="op">(</span><span class="tp">double</span> amount<span class="op">) {</span>
        <span class="kw">if</span> <span class="op">(</span>amount <span class="op">&gt;</span> <span class="nm">0</span> <span class="op">&amp;&amp;</span> amount <span class="op">&lt;=</span> balance<span class="op">)</span>
            balance <span class="op">-=</span> amount<span class="op">;</span>
        <span class="kw">else</span> cout <span class="op">&lt;&lt;</span> <span class="st">"Insufficient funds\n"</span><span class="op">;</span>
    <span class="op">}</span>

    <span class="kw">void</span> <span class="fn">display</span><span class="op">()</span> <span class="kw">const</span> <span class="op">{</span>
        cout <span class="op">&lt;&lt;</span> <span class="st">"Account: "</span> <span class="op">&lt;&lt;</span> accountNo
             <span class="op">&lt;&lt;</span> <span class="st">" | Owner: "</span> <span class="op">&lt;&lt;</span> ownerName
             <span class="op">&lt;&lt;</span> <span class="st">" | Balance: $"</span> <span class="op">&lt;&lt;</span> balance <span class="op">&lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    <span class="op">}</span>
<span class="op">};</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="tp">BankAccount</span> acc<span class="op">(</span><span class="st">"Alice"</span><span class="op">,</span> <span class="st">"ACC001"</span><span class="op">,</span> <span class="nm">5000</span><span class="op">);</span>
    acc<span class="op">.</span><span class="fn">deposit</span><span class="op">(</span><span class="nm">1000</span><span class="op">);</span>
    acc<span class="op">.</span><span class="fn">withdraw</span><span class="op">(</span><span class="nm">200</span><span class="op">);</span>
    acc<span class="op">.</span><span class="fn">withdraw</span><span class="op">(</span><span class="nm">10000</span><span class="op">);</span>   <span class="cm">// blocked!</span>
    <span class="cm">// acc.balance = 999999;  // ERROR: private!</span>
    acc<span class="op">.</span><span class="fn">display</span><span class="op">();</span>
    <span class="kw">return</span> <span class="nm">0</span><span class="op">;</span>
<span class="op">}</span></pre>
  </div>
  <div class="output">
    <div class="output-label">output</div>
Insufficient funds
Account: ACC001 | Owner: Alice | Balance: $5800
  </div>

  <table class="ref-table">
    <tr><th>Specifier</th><th>Same Class</th><th>Subclass</th><th>Outside</th></tr>
    <tr><td>private</td><td>✓</td><td>✗</td><td>✗</td></tr>
    <tr><td>protected</td><td>✓</td><td>✓</td><td>✗</td></tr>
    <tr><td>public</td><td>✓</td><td>✓</td><td>✓</td></tr>
  </table>
</section>

<hr class="divider"/>

<!-- ════════════════════════════════════════
     INHERITANCE
════════════════════════════════════════ -->
<section class="section" id="inherit">
  <div class="section-header">
    <div class="section-icon icon-teal">🧬</div>
    <div class="section-meta">
      <h2>Inheritance</h2>
      <div class="tagline">// reuse and extend existing classes</div>
    </div>
  </div>

  <div class="explain-card">
    <p>Inheritance allows a <strong>derived class</strong> (child) to inherit attributes and methods from a <strong>base class</strong> (parent), enabling code reuse and establishing an IS-A relationship.</p>
    <p>C++ supports <strong>5 types</strong> of inheritance: Single, Multiple, Multilevel, Hierarchical, and Hybrid. The base class constructor is called before the derived class constructor.</p>
  </div>

  <div class="sub">
    <div class="sub-title teal">Single Inheritance</div>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-dots"><span></span><span></span><span></span></div>
        <span class="code-lang">C++</span>
        <button class="copy-btn" onclick="copyCode(this)">copy</button>
      </div>
      <pre><span class="kw">class</span> <span class="tp">Animal</span> <span class="op">{</span>            <span class="cm">// Base class</span>
<span class="kw">protected</span><span class="op">:</span>
    string name<span class="op">;</span>
    <span class="tp">int</span> age<span class="op">;</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="fn">Animal</span><span class="op">(</span>string n<span class="op">,</span> <span class="tp">int</span> a<span class="op">) :</span> name<span class="op">(</span>n<span class="op">),</span> age<span class="op">(</span>a<span class="op">)</span> <span class="op">{}</span>
    <span class="kw">void</span> <span class="fn">eat</span><span class="op">()</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> name <span class="op">&lt;&lt;</span> <span class="st">" is eating\n"</span><span class="op">; }</span>
    <span class="kw">void</span> <span class="fn">breathe</span><span class="op">()</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> name <span class="op">&lt;&lt;</span> <span class="st">" is breathing\n"</span><span class="op">; }</span>
<span class="op">};</span>

<span class="kw">class</span> <span class="tp">Dog</span> <span class="op">:</span> <span class="kw">public</span> <span class="tp">Animal</span> <span class="op">{</span>   <span class="cm">// Derived class inherits Animal</span>
<span class="kw">private</span><span class="op">:</span>
    string breed<span class="op">;</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="cm">// base constructor called via initializer list</span>
    <span class="fn">Dog</span><span class="op">(</span>string n<span class="op">,</span> <span class="tp">int</span> a<span class="op">,</span> string b<span class="op">) :</span> <span class="fn">Animal</span><span class="op">(</span>n<span class="op">,</span> a<span class="op">),</span> breed<span class="op">(</span>b<span class="op">)</span> <span class="op">{}</span>
    <span class="kw">void</span> <span class="fn">bark</span><span class="op">()</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> name <span class="op">&lt;&lt;</span> <span class="st">" says: Woof!\n"</span><span class="op">; }</span>
    <span class="kw">void</span> <span class="fn">info</span><span class="op">()</span> <span class="op">{</span>
        cout <span class="op">&lt;&lt;</span> name <span class="op">&lt;&lt;</span> <span class="st">" | Age: "</span> <span class="op">&lt;&lt;</span> age <span class="op">&lt;&lt;</span> <span class="st">" | Breed: "</span> <span class="op">&lt;&lt;</span> breed <span class="op">&lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    <span class="op">}</span>
<span class="op">};</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="tp">Dog</span> d<span class="op">(</span><span class="st">"Rex"</span><span class="op">,</span> <span class="nm">3</span><span class="op">,</span> <span class="st">"Labrador"</span><span class="op">);</span>
    d<span class="op">.</span><span class="fn">eat</span><span class="op">();</span>      <span class="cm">// inherited from Animal</span>
    d<span class="op">.</span><span class="fn">breathe</span><span class="op">();</span>  <span class="cm">// inherited from Animal</span>
    d<span class="op">.</span><span class="fn">bark</span><span class="op">();</span>     <span class="cm">// Dog's own method</span>
    d<span class="op">.</span><span class="fn">info</span><span class="op">();</span>
<span class="op">}</span></pre>
    </div>
    <div class="output">
      <div class="output-label">output</div>
Rex is eating
Rex is breathing
Rex says: Woof!
Rex | Age: 3 | Breed: Labrador
    </div>
  </div>

  <div class="sub">
    <div class="sub-title teal">Multiple Inheritance</div>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-dots"><span></span><span></span><span></span></div>
        <span class="code-lang">C++</span>
        <button class="copy-btn" onclick="copyCode(this)">copy</button>
      </div>
      <pre><span class="kw">class</span> <span class="tp">Flyable</span> <span class="op">{</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="kw">void</span> <span class="fn">fly</span><span class="op">()</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> <span class="st">"Flying!\n"</span><span class="op">; }</span>
<span class="op">};</span>

<span class="kw">class</span> <span class="tp">Swimmable</span> <span class="op">{</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="kw">void</span> <span class="fn">swim</span><span class="op">()</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> <span class="st">"Swimming!\n"</span><span class="op">; }</span>
<span class="op">};</span>

<span class="cm">// Duck inherits from BOTH Flyable and Swimmable</span>
<span class="kw">class</span> <span class="tp">Duck</span> <span class="op">:</span> <span class="kw">public</span> <span class="tp">Flyable</span><span class="op">,</span> <span class="kw">public</span> <span class="tp">Swimmable</span> <span class="op">{</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="kw">void</span> <span class="fn">quack</span><span class="op">()</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> <span class="st">"Quack!\n"</span><span class="op">; }</span>
<span class="op">};</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="tp">Duck</span> d<span class="op">;</span>
    d<span class="op">.</span><span class="fn">fly</span><span class="op">();</span>    <span class="cm">// from Flyable</span>
    d<span class="op">.</span><span class="fn">swim</span><span class="op">();</span>   <span class="cm">// from Swimmable</span>
    d<span class="op">.</span><span class="fn">quack</span><span class="op">();</span>  <span class="cm">// Duck's own</span>
<span class="op">}</span></pre>
    </div>
    <div class="output">
      <div class="output-label">output</div>
Flying!
Swimming!
Quack!
    </div>
  </div>

  <div class="callout warn">
    <span class="callout-icon">⚠️</span>
    <span><strong>Diamond Problem:</strong> When two base classes share a common ancestor, use <code>virtual</code> inheritance to avoid ambiguity: <code>class B : virtual public A</code></span>
  </div>

  <table class="ref-table">
    <tr><th>Type</th><th>Description</th><th>Syntax</th></tr>
    <tr><td>Single</td><td>One parent, one child</td><td>class B : public A</td></tr>
    <tr><td>Multiple</td><td>Multiple parents</td><td>class C : public A, public B</td></tr>
    <tr><td>Multilevel</td><td>Chain A→B→C</td><td>class C : public B</td></tr>
    <tr><td>Hierarchical</td><td>One parent, multiple children</td><td>class B, C : public A</td></tr>
    <tr><td>Hybrid</td><td>Combination of above</td><td>mixed</td></tr>
  </table>
</section>

<hr class="divider"/>

<!-- ════════════════════════════════════════
     POLYMORPHISM
════════════════════════════════════════ -->
<section class="section" id="poly">
  <div class="section-header">
    <div class="section-icon icon-amber">🎭</div>
    <div class="section-meta">
      <h2>Polymorphism</h2>
      <div class="tagline">// one interface, many forms</div>
    </div>
  </div>

  <div class="explain-card">
    <p>Polymorphism means "many forms." The same function name behaves differently based on context. C++ has two kinds:</p>
    <p><strong>Compile-time (Static)</strong> — resolved at compile time via function overloading and operator overloading.</p>
    <p><strong>Runtime (Dynamic)</strong> — resolved at runtime via virtual functions and pointers/references to base classes.</p>
  </div>

  <div class="tabs">
    <button class="tab-btn active" onclick="switchTab(this,'poly','compile')">Compile-time</button>
    <button class="tab-btn" onclick="switchTab(this,'poly','runtime')">Runtime</button>
  </div>

  <div id="poly-compile" class="tab-content active">
    <div class="sub">
      <div class="sub-title amber">Function Overloading</div>
      <div class="code-wrap">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">C++ — Compile-time Polymorphism</span>
          <button class="copy-btn" onclick="copyCode(this)">copy</button>
        </div>
        <pre><span class="kw">class</span> <span class="tp">Calculator</span> <span class="op">{</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="cm">// Same name, different parameter types</span>
    <span class="tp">int</span>    <span class="fn">add</span><span class="op">(</span><span class="tp">int</span> a<span class="op">,</span> <span class="tp">int</span> b<span class="op">)</span>        <span class="op">{</span> <span class="kw">return</span> a <span class="op">+</span> b<span class="op">; }</span>
    <span class="tp">double</span> <span class="fn">add</span><span class="op">(</span><span class="tp">double</span> a<span class="op">,</span> <span class="tp">double</span> b<span class="op">)</span>  <span class="op">{</span> <span class="kw">return</span> a <span class="op">+</span> b<span class="op">; }</span>
    <span class="tp">int</span>    <span class="fn">add</span><span class="op">(</span><span class="tp">int</span> a<span class="op">,</span> <span class="tp">int</span> b<span class="op">,</span> <span class="tp">int</span> c<span class="op">)</span> <span class="op">{</span> <span class="kw">return</span> a <span class="op">+</span> b <span class="op">+</span> c<span class="op">; }</span>
<span class="op">};</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="tp">Calculator</span> calc<span class="op">;</span>
    cout <span class="op">&lt;&lt;</span> calc<span class="op">.</span><span class="fn">add</span><span class="op">(</span><span class="nm">2</span><span class="op">,</span> <span class="nm">3</span><span class="op">)       &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>   <span class="cm">// int version: 5</span>
    cout <span class="op">&lt;&lt;</span> calc<span class="op">.</span><span class="fn">add</span><span class="op">(</span><span class="nm">2.5</span><span class="op">,</span> <span class="nm">3.5</span><span class="op">)   &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>   <span class="cm">// double version: 6</span>
    cout <span class="op">&lt;&lt;</span> calc<span class="op">.</span><span class="fn">add</span><span class="op">(</span><span class="nm">1</span><span class="op">,</span> <span class="nm">2</span><span class="op">,</span> <span class="nm">3</span><span class="op">)    &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>   <span class="cm">// 3-arg version: 6</span>
<span class="op">}</span></pre>
      </div>
      <div class="output">
        <div class="output-label">output</div>
5
6
6
      </div>
    </div>
  </div>

  <div id="poly-runtime" class="tab-content">
    <div class="sub">
      <div class="sub-title amber">Virtual Functions (Runtime Polymorphism)</div>
      <div class="code-wrap">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-lang">C++ — Runtime Polymorphism</span>
          <button class="copy-btn" onclick="copyCode(this)">copy</button>
        </div>
        <pre><span class="kw">class</span> <span class="tp">Shape</span> <span class="op">{</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="cm">// virtual keyword enables runtime dispatch</span>
    <span class="kw">virtual</span> <span class="tp">double</span> <span class="fn">area</span><span class="op">()</span> <span class="kw">const</span> <span class="op">{</span> <span class="kw">return</span> <span class="nm">0</span><span class="op">; }</span>
    <span class="kw">virtual</span> <span class="tp">void</span>   <span class="fn">draw</span><span class="op">()</span> <span class="kw">const</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> <span class="st">"Drawing shape\n"</span><span class="op">; }</span>
    <span class="kw">virtual</span> <span class="op">~</span><span class="fn">Shape</span><span class="op">()</span> <span class="op">{}</span>  <span class="cm">// virtual destructor — essential!</span>
<span class="op">};</span>

<span class="kw">class</span> <span class="tp">Circle</span> <span class="op">:</span> <span class="kw">public</span> <span class="tp">Shape</span> <span class="op">{</span>
    <span class="tp">double</span> radius<span class="op">;</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="fn">Circle</span><span class="op">(</span><span class="tp">double</span> r<span class="op">)</span> <span class="op">:</span> radius<span class="op">(</span>r<span class="op">)</span> <span class="op">{}</span>
    <span class="tp">double</span> <span class="fn">area</span><span class="op">()</span> <span class="kw">const override</span> <span class="op">{</span> <span class="kw">return</span> <span class="nm">3.14159</span> <span class="op">*</span> radius <span class="op">*</span> radius<span class="op">; }</span>
    <span class="kw">void</span>   <span class="fn">draw</span><span class="op">()</span> <span class="kw">const override</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> <span class="st">"Drawing Circle\n"</span><span class="op">; }</span>
<span class="op">};</span>

<span class="kw">class</span> <span class="tp">Rectangle</span> <span class="op">:</span> <span class="kw">public</span> <span class="tp">Shape</span> <span class="op">{</span>
    <span class="tp">double</span> w<span class="op">,</span> h<span class="op">;</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="fn">Rectangle</span><span class="op">(</span><span class="tp">double</span> w<span class="op">,</span> <span class="tp">double</span> h<span class="op">) :</span> w<span class="op">(</span>w<span class="op">),</span> h<span class="op">(</span>h<span class="op">)</span> <span class="op">{}</span>
    <span class="tp">double</span> <span class="fn">area</span><span class="op">()</span> <span class="kw">const override</span> <span class="op">{</span> <span class="kw">return</span> w <span class="op">*</span> h<span class="op">; }</span>
    <span class="kw">void</span>   <span class="fn">draw</span><span class="op">()</span> <span class="kw">const override</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> <span class="st">"Drawing Rectangle\n"</span><span class="op">; }</span>
<span class="op">};</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="cm">// Base class pointer → calls correct derived method</span>
    <span class="tp">Shape</span><span class="op">*</span> shapes<span class="op">[] = {</span>
        <span class="kw">new</span> <span class="tp">Circle</span><span class="op">(</span><span class="nm">5</span><span class="op">),</span>
        <span class="kw">new</span> <span class="tp">Rectangle</span><span class="op">(</span><span class="nm">4</span><span class="op">,</span> <span class="nm">6</span><span class="op">)</span>
    <span class="op">};</span>

    <span class="kw">for</span> <span class="op">(</span><span class="kw">auto</span> s <span class="op">:</span> shapes<span class="op">) {</span>
        s<span class="op">-&gt;</span><span class="fn">draw</span><span class="op">();</span>
        cout <span class="op">&lt;&lt;</span> <span class="st">"Area: "</span> <span class="op">&lt;&lt;</span> s<span class="op">-&gt;</span><span class="fn">area</span><span class="op">() &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
        <span class="kw">delete</span> s<span class="op">;</span>
    <span class="op">}</span>
<span class="op">}</span></pre>
      </div>
      <div class="output">
        <div class="output-label">output</div>
Drawing Circle
Area: 78.5398
Drawing Rectangle
Area: 24
      </div>
    </div>
    <div class="callout info">
      <span class="callout-icon">ℹ️</span>
      <span>C++ uses a <strong>vtable</strong> (virtual function table) to implement runtime polymorphism. Each class with virtual functions gets a vtable; each object gets a hidden <code>vptr</code> pointing to it.</span>
    </div>
  </div>
</section>

<hr class="divider"/>

<!-- ════════════════════════════════════════
     ABSTRACTION
════════════════════════════════════════ -->
<section class="section" id="abstract">
  <div class="section-header">
    <div class="section-icon icon-green">🎯</div>
    <div class="section-meta">
      <h2>Abstraction</h2>
      <div class="tagline">// hide complexity, expose essentials</div>
    </div>
  </div>

  <div class="explain-card">
    <p>Abstraction hides internal implementation details and exposes only what's necessary. In C++, it's achieved using <strong>abstract classes</strong> (classes with at least one pure virtual function) and <strong>interfaces</strong>.</p>
    <p>A pure virtual function is declared with <code>= 0</code>. A class with any pure virtual function is an <strong>abstract class</strong> — it cannot be instantiated; it can only be subclassed.</p>
  </div>

  <div class="code-wrap">
    <div class="code-header">
      <div class="code-dots"><span></span><span></span><span></span></div>
      <span class="code-lang">C++ — Abstract Classes & Pure Virtual</span>
      <button class="copy-btn" onclick="copyCode(this)">copy</button>
    </div>
    <pre><span class="cm">// Abstract class — cannot be instantiated directly</span>
<span class="kw">class</span> <span class="tp">Vehicle</span> <span class="op">{</span>
<span class="kw">protected</span><span class="op">:</span>
    string model<span class="op">;</span>
    <span class="tp">int</span> speed<span class="op">;</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="fn">Vehicle</span><span class="op">(</span>string m<span class="op">,</span> <span class="tp">int</span> s<span class="op">) :</span> model<span class="op">(</span>m<span class="op">),</span> speed<span class="op">(</span>s<span class="op">)</span> <span class="op">{}</span>

    <span class="cm">// Pure virtual — MUST be overridden</span>
    <span class="kw">virtual void</span> <span class="fn">start</span><span class="op">()</span>    <span class="kw">= 0</span><span class="op">;</span>
    <span class="kw">virtual void</span> <span class="fn">fuelType</span><span class="op">()</span> <span class="kw">= 0</span><span class="op">;</span>

    <span class="cm">// Concrete method (shared behavior)</span>
    <span class="kw">void</span> <span class="fn">showInfo</span><span class="op">()</span> <span class="op">{</span>
        cout <span class="op">&lt;&lt;</span> <span class="st">"Model: "</span> <span class="op">&lt;&lt;</span> model
             <span class="op">&lt;&lt;</span> <span class="st">" | Max Speed: "</span> <span class="op">&lt;&lt;</span> speed <span class="op">&lt;&lt;</span> <span class="st">" km/h\n"</span><span class="op">;</span>
    <span class="op">}</span>
    <span class="kw">virtual</span> <span class="op">~</span><span class="fn">Vehicle</span><span class="op">() {}</span>
<span class="op">};</span>

<span class="kw">class</span> <span class="tp">ElectricCar</span> <span class="op">:</span> <span class="kw">public</span> <span class="tp">Vehicle</span> <span class="op">{</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="fn">ElectricCar</span><span class="op">(</span>string m<span class="op">,</span> <span class="tp">int</span> s<span class="op">)</span> <span class="op">:</span> <span class="fn">Vehicle</span><span class="op">(</span>m<span class="op">,</span> s<span class="op">)</span> <span class="op">{}</span>
    <span class="kw">void</span> <span class="fn">start</span><span class="op">()</span>    <span class="kw">override</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> model <span class="op">&lt;&lt;</span> <span class="st">": Silent motor hum...\n"</span><span class="op">; }</span>
    <span class="kw">void</span> <span class="fn">fuelType</span><span class="op">()</span> <span class="kw">override</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> <span class="st">"Fuel: Electric Battery\n"</span><span class="op">; }</span>
<span class="op">};</span>

<span class="kw">class</span> <span class="tp">Motorcycle</span> <span class="op">:</span> <span class="kw">public</span> <span class="tp">Vehicle</span> <span class="op">{</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="fn">Motorcycle</span><span class="op">(</span>string m<span class="op">,</span> <span class="tp">int</span> s<span class="op">)</span> <span class="op">:</span> <span class="fn">Vehicle</span><span class="op">(</span>m<span class="op">,</span> s<span class="op">)</span> <span class="op">{}</span>
    <span class="kw">void</span> <span class="fn">start</span><span class="op">()</span>    <span class="kw">override</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> model <span class="op">&lt;&lt;</span> <span class="st">": VROOM!\n"</span><span class="op">; }</span>
    <span class="kw">void</span> <span class="fn">fuelType</span><span class="op">()</span> <span class="kw">override</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> <span class="st">"Fuel: Petrol\n"</span><span class="op">; }</span>
<span class="op">};</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="cm">// Vehicle v;  // ERROR: cannot instantiate abstract class!</span>
    <span class="tp">Vehicle</span><span class="op">*</span> v1 <span class="op">=</span> <span class="kw">new</span> <span class="tp">ElectricCar</span><span class="op">(</span><span class="st">"Tesla Model 3"</span><span class="op">,</span> <span class="nm">250</span><span class="op">);</span>
    <span class="tp">Vehicle</span><span class="op">*</span> v2 <span class="op">=</span> <span class="kw">new</span> <span class="tp">Motorcycle</span><span class="op">(</span><span class="st">"Ducati"</span><span class="op">,</span> <span class="nm">299</span><span class="op">);</span>

    <span class="kw">for</span> <span class="op">(</span><span class="kw">auto</span> v <span class="op">: {</span>v1<span class="op">,</span> v2<span class="op">}) {</span>
        v<span class="op">-&gt;</span><span class="fn">showInfo</span><span class="op">();</span>
        v<span class="op">-&gt;</span><span class="fn">start</span><span class="op">();</span>
        v<span class="op">-&gt;</span><span class="fn">fuelType</span><span class="op">();</span>
        cout <span class="op">&lt;&lt;</span> <span class="st">"---\n"</span><span class="op">;</span>
        <span class="kw">delete</span> v<span class="op">;</span>
    <span class="op">}</span>
<span class="op">}</span></pre>
  </div>
  <div class="output">
    <div class="output-label">output</div>
Model: Tesla Model 3 | Max Speed: 250 km/h
Tesla Model 3: Silent motor hum...
Fuel: Electric Battery
---
Model: Ducati | Max Speed: 299 km/h
Ducati: VROOM!
Fuel: Petrol
---
  </div>
</section>

<hr class="divider"/>

<!-- ════════════════════════════════════════
     CONSTRUCTORS & DESTRUCTORS
════════════════════════════════════════ -->
<section class="section" id="constructors">
  <div class="section-header">
    <div class="section-icon icon-blue">⚙️</div>
    <div class="section-meta">
      <h2>Constructors & Destructor</h2>
      <div class="tagline">// object lifecycle management</div>
    </div>
  </div>

  <div class="explain-card">
    <p>A <strong>constructor</strong> is a special method called when an object is created. A <strong>destructor</strong> is called when the object is destroyed. C++ provides 5 types of constructors.</p>
  </div>

  <div class="code-wrap">
    <div class="code-header">
      <div class="code-dots"><span></span><span></span><span></span></div>
      <span class="code-lang">C++ — All Constructor Types</span>
      <button class="copy-btn" onclick="copyCode(this)">copy</button>
    </div>
    <pre><span class="kw">class</span> <span class="tp">Student</span> <span class="op">{</span>
<span class="kw">private</span><span class="op">:</span>
    string name<span class="op">;</span>
    <span class="tp">int</span>    rollNo<span class="op">;</span>
    <span class="tp">int</span><span class="op">*</span>   grades<span class="op">;</span>   <span class="cm">// dynamic memory</span>
    <span class="tp">int</span>    count<span class="op">;</span>

<span class="kw">public</span><span class="op">:</span>
    <span class="cm">// 1. Default Constructor</span>
    <span class="fn">Student</span><span class="op">()</span> <span class="op">:</span> name<span class="op">(</span><span class="st">"Unknown"</span><span class="op">),</span> rollNo<span class="op">(</span><span class="nm">0</span><span class="op">),</span> grades<span class="op">(</span><span class="kw">nullptr</span><span class="op">),</span> count<span class="op">(</span><span class="nm">0</span><span class="op">)</span> <span class="op">{</span>
        cout <span class="op">&lt;&lt;</span> <span class="st">"Default constructor called\n"</span><span class="op">;</span>
    <span class="op">}</span>

    <span class="cm">// 2. Parameterized Constructor</span>
    <span class="fn">Student</span><span class="op">(</span>string n<span class="op">,</span> <span class="tp">int</span> r<span class="op">,</span> <span class="tp">int</span> c<span class="op">)</span>
        <span class="op">:</span> name<span class="op">(</span>n<span class="op">),</span> rollNo<span class="op">(</span>r<span class="op">),</span> count<span class="op">(</span>c<span class="op">)</span> <span class="op">{</span>
        grades <span class="op">=</span> <span class="kw">new</span> <span class="tp">int</span><span class="op">[</span>count<span class="op">]();</span>  <span class="cm">// heap allocation</span>
        cout <span class="op">&lt;&lt;</span> <span class="st">"Parameterized constructor: "</span> <span class="op">&lt;&lt;</span> name <span class="op">&lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    <span class="op">}</span>

    <span class="cm">// 3. Copy Constructor (deep copy)</span>
    <span class="fn">Student</span><span class="op">(</span><span class="kw">const</span> <span class="tp">Student</span><span class="op">&amp;</span> other<span class="op">)</span>
        <span class="op">:</span> name<span class="op">(</span>other<span class="op">.</span>name<span class="op">),</span> rollNo<span class="op">(</span>other<span class="op">.</span>rollNo<span class="op">),</span> count<span class="op">(</span>other<span class="op">.</span>count<span class="op">)</span> <span class="op">{</span>
        grades <span class="op">=</span> <span class="kw">new</span> <span class="tp">int</span><span class="op">[</span>count<span class="op">];</span>
        <span class="kw">for</span> <span class="op">(</span><span class="tp">int</span> i <span class="op">=</span> <span class="nm">0</span><span class="op">;</span> i <span class="op">&lt;</span> count<span class="op">;</span> i<span class="op">++)</span>
            grades<span class="op">[</span>i<span class="op">] =</span> other<span class="op">.</span>grades<span class="op">[</span>i<span class="op">];</span>  <span class="cm">// deep copy</span>
        cout <span class="op">&lt;&lt;</span> <span class="st">"Copy constructor: "</span> <span class="op">&lt;&lt;</span> name <span class="op">&lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    <span class="op">}</span>

    <span class="cm">// 4. Move Constructor (C++11)</span>
    <span class="fn">Student</span><span class="op">(</span><span class="tp">Student</span><span class="op">&amp;&amp;</span> other<span class="op">)</span> noexcept
        <span class="op">:</span> name<span class="op">(</span>move<span class="op">(</span>other<span class="op">.</span>name<span class="op">)),</span> rollNo<span class="op">(</span>other<span class="op">.</span>rollNo<span class="op">),</span>
          grades<span class="op">(</span>other<span class="op">.</span>grades<span class="op">),</span> count<span class="op">(</span>other<span class="op">.</span>count<span class="op">)</span> <span class="op">{</span>
        other<span class="op">.</span>grades <span class="op">=</span> <span class="kw">nullptr</span><span class="op">;</span>  <span class="cm">// transfer ownership</span>
        cout <span class="op">&lt;&lt;</span> <span class="st">"Move constructor: "</span> <span class="op">&lt;&lt;</span> name <span class="op">&lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    <span class="op">}</span>

    <span class="cm">// 5. Destructor</span>
    <span class="op">~</span><span class="fn">Student</span><span class="op">()</span> <span class="op">{</span>
        <span class="kw">delete</span><span class="op">[]</span> grades<span class="op">;</span>  <span class="cm">// free heap memory</span>
        cout <span class="op">&lt;&lt;</span> <span class="st">"Destructor: "</span> <span class="op">&lt;&lt;</span> name <span class="op">&lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    <span class="op">}</span>

    <span class="kw">void</span> <span class="fn">display</span><span class="op">()</span> <span class="kw">const</span> <span class="op">{</span>
        cout <span class="op">&lt;&lt;</span> name <span class="op">&lt;&lt;</span> <span class="st">" | Roll: "</span> <span class="op">&lt;&lt;</span> rollNo <span class="op">&lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    <span class="op">}</span>
<span class="op">};</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="tp">Student</span> s1<span class="op">;</span>                           <span class="cm">// default</span>
    <span class="tp">Student</span> s2<span class="op">(</span><span class="st">"Alice"</span><span class="op">,</span> <span class="nm">101</span><span class="op">,</span> <span class="nm">5</span><span class="op">);</span>          <span class="cm">// parameterized</span>
    <span class="tp">Student</span> s3<span class="op">(</span>s2<span class="op">);</span>                       <span class="cm">// copy</span>
    <span class="tp">Student</span> s4<span class="op">(</span>move<span class="op">(</span><span class="tp">Student</span><span class="op">(</span><span class="st">"Bob"</span><span class="op">,</span><span class="nm">102</span><span class="op">,</span><span class="nm">3</span><span class="op">)));</span> <span class="cm">// move</span>
<span class="op">}</span>  <span class="cm">// destructors called here (LIFO order)</span></pre>
  </div>
  <div class="output">
    <div class="output-label">output</div>
Default constructor called
Parameterized constructor: Alice
Copy constructor: Alice
Parameterized constructor: Bob
Move constructor: Bob
Destructor: Bob
Destructor: Alice (copy)
Destructor: Alice
Destructor: Unknown
  </div>
</section>

<hr class="divider"/>

<!-- ════════════════════════════════════════
     FRIEND & STATIC
════════════════════════════════════════ -->
<section class="section" id="friends">
  <div class="section-header">
    <div class="section-icon icon-blue">🤝</div>
    <div class="section-meta">
      <h2>Friend & Static</h2>
      <div class="tagline">// special access + class-level members</div>
    </div>
  </div>

  <div class="tabs">
    <button class="tab-btn active" onclick="switchTab(this,'fs','friend')">Friend</button>
    <button class="tab-btn" onclick="switchTab(this,'fs','static')">Static</button>
  </div>

  <div id="fs-friend" class="tab-content active">
    <div class="explain-card">
      <p>A <strong>friend function</strong> or <strong>friend class</strong> can access private and protected members of a class. It's declared inside the class with the <code>friend</code> keyword but defined outside.</p>
    </div>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-dots"><span></span><span></span><span></span></div>
        <span class="code-lang">C++ — Friend Function</span>
        <button class="copy-btn" onclick="copyCode(this)">copy</button>
      </div>
      <pre><span class="kw">class</span> <span class="tp">Box</span> <span class="op">{</span>
<span class="kw">private</span><span class="op">:</span>
    <span class="tp">double</span> length<span class="op">,</span> width<span class="op">,</span> height<span class="op">;</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="fn">Box</span><span class="op">(</span><span class="tp">double</span> l<span class="op">,</span> <span class="tp">double</span> w<span class="op">,</span> <span class="tp">double</span> h<span class="op">) :</span> length<span class="op">(</span>l<span class="op">),</span> width<span class="op">(</span>w<span class="op">),</span> height<span class="op">(</span>h<span class="op">)</span> <span class="op">{}</span>

    <span class="cm">// Declare friend function — grants access to private members</span>
    <span class="kw">friend</span> <span class="tp">double</span> <span class="fn">calcVolume</span><span class="op">(</span><span class="kw">const</span> <span class="tp">Box</span><span class="op">&amp;</span> b<span class="op">);</span>
    <span class="kw">friend</span> <span class="kw">void</span>   <span class="fn">compareBoxes</span><span class="op">(</span><span class="kw">const</span> <span class="tp">Box</span><span class="op">&amp;</span> b1<span class="op">,</span> <span class="kw">const</span> <span class="tp">Box</span><span class="op">&amp;</span> b2<span class="op">);</span>
<span class="op">};</span>

<span class="cm">// Friend function defined outside — accesses private members directly</span>
<span class="tp">double</span> <span class="fn">calcVolume</span><span class="op">(</span><span class="kw">const</span> <span class="tp">Box</span><span class="op">&amp;</span> b<span class="op">) {</span>
    <span class="kw">return</span> b<span class="op">.</span>length <span class="op">*</span> b<span class="op">.</span>width <span class="op">*</span> b<span class="op">.</span>height<span class="op">;</span>  <span class="cm">// ✓ private access allowed</span>
<span class="op">}</span>

<span class="kw">void</span> <span class="fn">compareBoxes</span><span class="op">(</span><span class="kw">const</span> <span class="tp">Box</span><span class="op">&amp;</span> b1<span class="op">,</span> <span class="kw">const</span> <span class="tp">Box</span><span class="op">&amp;</span> b2<span class="op">) {</span>
    <span class="tp">double</span> v1 <span class="op">=</span> b1<span class="op">.</span>length <span class="op">*</span> b1<span class="op">.</span>width <span class="op">*</span> b1<span class="op">.</span>height<span class="op">;</span>
    <span class="tp">double</span> v2 <span class="op">=</span> b2<span class="op">.</span>length <span class="op">*</span> b2<span class="op">.</span>width <span class="op">*</span> b2<span class="op">.</span>height<span class="op">;</span>
    cout <span class="op">&lt;&lt;</span> <span class="op">(</span>v1 <span class="op">&gt;</span> v2 <span class="op">?</span> <span class="st">"Box1 is larger\n"</span> <span class="op">:</span> <span class="st">"Box2 is larger\n"</span><span class="op">);</span>
<span class="op">}</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="tp">Box</span> b1<span class="op">(</span><span class="nm">3</span><span class="op">,</span><span class="nm">4</span><span class="op">,</span><span class="nm">5</span><span class="op">),</span> b2<span class="op">(</span><span class="nm">2</span><span class="op">,</span><span class="nm">6</span><span class="op">,</span><span class="nm">7</span><span class="op">);</span>
    cout <span class="op">&lt;&lt;</span> <span class="st">"Volume 1: "</span> <span class="op">&lt;&lt;</span> <span class="fn">calcVolume</span><span class="op">(</span>b1<span class="op">) &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    cout <span class="op">&lt;&lt;</span> <span class="st">"Volume 2: "</span> <span class="op">&lt;&lt;</span> <span class="fn">calcVolume</span><span class="op">(</span>b2<span class="op">) &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    <span class="fn">compareBoxes</span><span class="op">(</span>b1<span class="op">,</span> b2<span class="op">);</span>
<span class="op">}</span></pre>
    </div>
    <div class="output">
      <div class="output-label">output</div>
Volume 1: 60
Volume 2: 84
Box2 is larger
    </div>
  </div>

  <div id="fs-static" class="tab-content">
    <div class="explain-card">
      <p><strong>Static members</strong> belong to the class, not to any specific object. All objects share the same static member. Static methods can only access static data.</p>
    </div>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-dots"><span></span><span></span><span></span></div>
        <span class="code-lang">C++ — Static Members</span>
        <button class="copy-btn" onclick="copyCode(this)">copy</button>
      </div>
      <pre><span class="kw">class</span> <span class="tp">Employee</span> <span class="op">{</span>
<span class="kw">private</span><span class="op">:</span>
    string name<span class="op">;</span>
    <span class="tp">int</span> id<span class="op">;</span>
    <span class="kw">static</span> <span class="tp">int</span> totalEmployees<span class="op">;</span>   <span class="cm">// shared by all objects</span>
    <span class="kw">static</span> <span class="tp">double</span> companyBudget<span class="op">;</span>

<span class="kw">public</span><span class="op">:</span>
    <span class="fn">Employee</span><span class="op">(</span>string n<span class="op">) :</span> name<span class="op">(</span>n<span class="op">)</span> <span class="op">{</span>
        id <span class="op">=</span> <span class="op">++</span>totalEmployees<span class="op">;</span>  <span class="cm">// increment shared counter</span>
    <span class="op">}</span>

    <span class="op">~</span><span class="fn">Employee</span><span class="op">()</span> <span class="op">{</span> <span class="op">--</span>totalEmployees<span class="op">; }</span>

    <span class="cm">// Static method — called on class, not object</span>
    <span class="kw">static</span> <span class="tp">int</span>    <span class="fn">getTotal</span><span class="op">()</span>   <span class="op">{</span> <span class="kw">return</span> totalEmployees<span class="op">; }</span>
    <span class="kw">static</span> <span class="tp">double</span> <span class="fn">getBudget</span><span class="op">()</span>  <span class="op">{</span> <span class="kw">return</span> companyBudget<span class="op">; }</span>
    <span class="kw">static</span> <span class="kw">void</span>   <span class="fn">setBudget</span><span class="op">(</span><span class="tp">double</span> b<span class="op">) {</span> companyBudget <span class="op">=</span> b<span class="op">; }</span>

    <span class="kw">void</span> <span class="fn">show</span><span class="op">()</span> <span class="op">{</span> cout <span class="op">&lt;&lt;</span> <span class="st">"ID:"</span> <span class="op">&lt;&lt;</span> id <span class="op">&lt;&lt;</span> <span class="st">" Name:"</span> <span class="op">&lt;&lt;</span> name <span class="op">&lt;&lt;</span> <span class="st">"\n"</span><span class="op">; }</span>
<span class="op">};</span>

<span class="cm">// Static member definitions outside class</span>
<span class="tp">int</span>    <span class="tp">Employee</span><span class="op">::</span>totalEmployees <span class="op">=</span> <span class="nm">0</span><span class="op">;</span>
<span class="tp">double</span> <span class="tp">Employee</span><span class="op">::</span>companyBudget  <span class="op">=</span> <span class="nm">0.0</span><span class="op">;</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="tp">Employee</span><span class="op">::</span><span class="fn">setBudget</span><span class="op">(</span><span class="nm">500000</span><span class="op">);</span>
    cout <span class="op">&lt;&lt;</span> <span class="st">"Employees: "</span> <span class="op">&lt;&lt;</span> <span class="tp">Employee</span><span class="op">::</span><span class="fn">getTotal</span><span class="op">() &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>

    <span class="tp">Employee</span> e1<span class="op">(</span><span class="st">"Alice"</span><span class="op">),</span> e2<span class="op">(</span><span class="st">"Bob"</span><span class="op">),</span> e3<span class="op">(</span><span class="st">"Charlie"</span><span class="op">);</span>
    e1<span class="op">.</span><span class="fn">show</span><span class="op">();</span> e2<span class="op">.</span><span class="fn">show</span><span class="op">();</span> e3<span class="op">.</span><span class="fn">show</span><span class="op">();</span>

    cout <span class="op">&lt;&lt;</span> <span class="st">"Total: "</span> <span class="op">&lt;&lt;</span> <span class="tp">Employee</span><span class="op">::</span><span class="fn">getTotal</span><span class="op">() &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
<span class="op">}</span></pre>
    </div>
    <div class="output">
      <div class="output-label">output</div>
Employees: 0
ID:1 Name:Alice
ID:2 Name:Bob
ID:3 Name:Charlie
Total: 3
    </div>
  </div>
</section>

<hr class="divider"/>

<!-- ════════════════════════════════════════
     TEMPLATES
════════════════════════════════════════ -->
<section class="section" id="templates">
  <div class="section-header">
    <div class="section-icon icon-blue">🧩</div>
    <div class="section-meta">
      <h2>Templates</h2>
      <div class="tagline">// generic programming</div>
    </div>
  </div>

  <div class="explain-card">
    <p>Templates allow writing <strong>generic code</strong> that works with any data type. C++ has <strong>function templates</strong> and <strong>class templates</strong>. The compiler generates specific code for each type used (template instantiation).</p>
  </div>

  <div class="code-wrap">
    <div class="code-header">
      <div class="code-dots"><span></span><span></span><span></span></div>
      <span class="code-lang">C++ — Function & Class Templates</span>
      <button class="copy-btn" onclick="copyCode(this)">copy</button>
    </div>
    <pre><span class="cm">// ─── Function Template ───────────────────────────────</span>
<span class="kw">template</span> <span class="op">&lt;</span><span class="kw">typename</span> T<span class="op">&gt;</span>
T <span class="fn">maxOf</span><span class="op">(</span>T a<span class="op">,</span> T b<span class="op">) {</span>
    <span class="kw">return</span> <span class="op">(</span>a <span class="op">&gt;</span> b<span class="op">)</span> <span class="op">?</span> a <span class="op">:</span> b<span class="op">;</span>
<span class="op">}</span>

<span class="cm">// ─── Class Template ───────────────────────────────────</span>
<span class="kw">template</span> <span class="op">&lt;</span><span class="kw">typename</span> T<span class="op">&gt;</span>
<span class="kw">class</span> <span class="tp">Stack</span> <span class="op">{</span>
<span class="kw">private</span><span class="op">:</span>
    vector<span class="op">&lt;</span>T<span class="op">&gt;</span> data<span class="op">;</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="kw">void</span> <span class="fn">push</span><span class="op">(</span>T val<span class="op">)    {</span> data<span class="op">.</span><span class="fn">push_back</span><span class="op">(</span>val<span class="op">); }</span>
    <span class="kw">void</span> <span class="fn">pop</span><span class="op">()          {</span> <span class="kw">if</span><span class="op">(!</span>data<span class="op">.</span><span class="fn">empty</span><span class="op">())</span> data<span class="op">.</span><span class="fn">pop_back</span><span class="op">(); }</span>
    T    <span class="fn">top</span><span class="op">()</span> <span class="kw">const</span>   <span class="op">{</span> <span class="kw">return</span> data<span class="op">.</span><span class="fn">back</span><span class="op">(); }</span>
    <span class="tp">bool</span> <span class="fn">empty</span><span class="op">()</span> <span class="kw">const</span> <span class="op">{</span> <span class="kw">return</span> data<span class="op">.</span><span class="fn">empty</span><span class="op">(); }</span>
    <span class="tp">int</span>  <span class="fn">size</span><span class="op">()</span> <span class="kw">const</span>  <span class="op">{</span> <span class="kw">return</span> data<span class="op">.</span><span class="fn">size</span><span class="op">(); }</span>
<span class="op">};</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="cm">// Function template — same code, different types</span>
    cout <span class="op">&lt;&lt;</span> <span class="fn">maxOf</span><span class="op">(</span><span class="nm">10</span><span class="op">,</span> <span class="nm">20</span><span class="op">)        &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>  <span class="cm">// int: 20</span>
    cout <span class="op">&lt;&lt;</span> <span class="fn">maxOf</span><span class="op">(</span><span class="nm">3.14</span><span class="op">,</span> <span class="nm">2.71</span><span class="op">)    &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>  <span class="cm">// double: 3.14</span>
    cout <span class="op">&lt;&lt;</span> <span class="fn">maxOf</span><span class="op">(</span>string<span class="op">(</span><span class="st">"abc"</span><span class="op">),</span> string<span class="op">(</span><span class="st">"xyz"</span><span class="op">)) &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>  <span class="cm">// string: xyz</span>

    <span class="cm">// Class template — stack of ints</span>
    <span class="tp">Stack</span><span class="op">&lt;</span><span class="tp">int</span><span class="op">&gt;</span> s<span class="op">;</span>
    s<span class="op">.</span><span class="fn">push</span><span class="op">(</span><span class="nm">10</span><span class="op">);</span> s<span class="op">.</span><span class="fn">push</span><span class="op">(</span><span class="nm">20</span><span class="op">);</span> s<span class="op">.</span><span class="fn">push</span><span class="op">(</span><span class="nm">30</span><span class="op">);</span>
    cout <span class="op">&lt;&lt;</span> <span class="st">"Top: "</span> <span class="op">&lt;&lt;</span> s<span class="op">.</span><span class="fn">top</span><span class="op">() &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    s<span class="op">.</span><span class="fn">pop</span><span class="op">();</span>
    cout <span class="op">&lt;&lt;</span> <span class="st">"After pop: "</span> <span class="op">&lt;&lt;</span> s<span class="op">.</span><span class="fn">top</span><span class="op">() &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
<span class="op">}</span></pre>
  </div>
  <div class="output">
    <div class="output-label">output</div>
20
3.14
xyz
Top: 30
After pop: 20
  </div>
</section>

<hr class="divider"/>

<!-- ════════════════════════════════════════
     EXCEPTION HANDLING
════════════════════════════════════════ -->
<section class="section" id="exceptions">
  <div class="section-header">
    <div class="section-icon icon-blue">🛡️</div>
    <div class="section-meta">
      <h2>Exception Handling</h2>
      <div class="tagline">// graceful error management</div>
    </div>
  </div>

  <div class="explain-card">
    <p>Exception handling in C++ uses <code>try</code>, <code>catch</code>, and <code>throw</code> to separate error-handling code from normal logic. Exceptions can be any type — ints, strings, or custom exception classes.</p>
  </div>

  <div class="code-wrap">
    <div class="code-header">
      <div class="code-dots"><span></span><span></span><span></span></div>
      <span class="code-lang">C++ — Exception Handling</span>
      <button class="copy-btn" onclick="copyCode(this)">copy</button>
    </div>
    <pre><span class="cm">// Custom exception class</span>
<span class="kw">class</span> <span class="tp">DivisionByZeroException</span> <span class="op">:</span> <span class="kw">public</span> exception <span class="op">{</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="kw">const</span> <span class="tp">char</span><span class="op">*</span> <span class="fn">what</span><span class="op">()</span> <span class="kw">const noexcept override</span> <span class="op">{</span>
        <span class="kw">return</span> <span class="st">"Error: Division by zero!"</span><span class="op">;</span>
    <span class="op">}</span>
<span class="op">};</span>

<span class="kw">class</span> <span class="tp">NegativeInputException</span> <span class="op">:</span> <span class="kw">public</span> exception <span class="op">{</span>
    string msg<span class="op">;</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="fn">NegativeInputException</span><span class="op">(</span><span class="tp">int</span> val<span class="op">)</span>
        <span class="op">:</span> msg<span class="op">(</span><span class="st">"Error: Negative input ("</span> <span class="op">+</span> to_string<span class="op">(</span>val<span class="op">) +</span> <span class="st">")"</span><span class="op">)</span> <span class="op">{}</span>
    <span class="kw">const</span> <span class="tp">char</span><span class="op">*</span> <span class="fn">what</span><span class="op">()</span> <span class="kw">const noexcept override</span> <span class="op">{</span>
        <span class="kw">return</span> msg<span class="op">.</span><span class="fn">c_str</span><span class="op">();</span>
    <span class="op">}</span>
<span class="op">};</span>

<span class="tp">double</span> <span class="fn">safeDivide</span><span class="op">(</span><span class="tp">int</span> a<span class="op">,</span> <span class="tp">int</span> b<span class="op">) {</span>
    <span class="kw">if</span> <span class="op">(</span>b <span class="op">==</span> <span class="nm">0</span><span class="op">)</span>  <span class="kw">throw</span> <span class="tp">DivisionByZeroException</span><span class="op">();</span>
    <span class="kw">if</span> <span class="op">(</span>a <span class="op">&lt;</span> <span class="nm">0</span><span class="op">)</span>  <span class="kw">throw</span> <span class="tp">NegativeInputException</span><span class="op">(</span>a<span class="op">);</span>
    <span class="kw">return</span> <span class="kw">static_cast</span><span class="op">&lt;</span><span class="tp">double</span><span class="op">&gt;(</span>a<span class="op">) /</span> b<span class="op">;</span>
<span class="op">}</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="tp">int</span> tests<span class="op">[][</span><span class="nm">2</span><span class="op">] = {{</span><span class="nm">10</span><span class="op">,</span><span class="nm">2</span><span class="op">}, {</span><span class="nm">5</span><span class="op">,</span><span class="nm">0</span><span class="op">}, {-</span><span class="nm">4</span><span class="op">,</span><span class="nm">2</span><span class="op">}};</span>

    <span class="kw">for</span> <span class="op">(</span><span class="kw">auto</span><span class="op">&amp;</span> t <span class="op">:</span> tests<span class="op">) {</span>
        <span class="kw">try</span> <span class="op">{</span>
            cout <span class="op">&lt;&lt;</span> t<span class="op">[</span><span class="nm">0</span><span class="op">] &lt;&lt;</span> <span class="st">"/"</span> <span class="op">&lt;&lt;</span> t<span class="op">[</span><span class="nm">1</span><span class="op">] &lt;&lt;</span> <span class="st">" = "</span>
                 <span class="op">&lt;&lt;</span> <span class="fn">safeDivide</span><span class="op">(</span>t<span class="op">[</span><span class="nm">0</span><span class="op">],</span> t<span class="op">[</span><span class="nm">1</span><span class="op">]) &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
        <span class="op">}</span>
        <span class="kw">catch</span> <span class="op">(</span><span class="kw">const</span> <span class="tp">DivisionByZeroException</span><span class="op">&amp;</span> e<span class="op">) {</span>
            cout <span class="op">&lt;&lt;</span> e<span class="op">.</span><span class="fn">what</span><span class="op">() &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
        <span class="op">}</span>
        <span class="kw">catch</span> <span class="op">(</span><span class="kw">const</span> <span class="tp">NegativeInputException</span><span class="op">&amp;</span> e<span class="op">) {</span>
            cout <span class="op">&lt;&lt;</span> e<span class="op">.</span><span class="fn">what</span><span class="op">() &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
        <span class="op">}</span>
        <span class="kw">catch</span> <span class="op">(...) {</span>       <span class="cm">// catch-all</span>
            cout <span class="op">&lt;&lt;</span> <span class="st">"Unknown error\n"</span><span class="op">;</span>
        <span class="op">}</span>
    <span class="op">}</span>
<span class="op">}</span></pre>
  </div>
  <div class="output">
    <div class="output-label">output</div>
10/2 = 5
Error: Division by zero!
Error: Negative input (-4)
  </div>
</section>

<hr class="divider"/>

<!-- ════════════════════════════════════════
     OPERATOR OVERLOADING
════════════════════════════════════════ -->
<section class="section" id="overload">
  <div class="section-header">
    <div class="section-icon icon-blue">➕</div>
    <div class="section-meta">
      <h2>Operator Overloading</h2>
      <div class="tagline">// custom behavior for operators</div>
    </div>
  </div>

  <div class="explain-card">
    <p>C++ allows you to redefine the behavior of operators (<code>+</code>, <code>-</code>, <code>==</code>, <code>&lt;&lt;</code>, etc.) for user-defined types using the <code>operator</code> keyword. This makes custom classes behave like built-in types.</p>
  </div>

  <div class="code-wrap">
    <div class="code-header">
      <div class="code-dots"><span></span><span></span><span></span></div>
      <span class="code-lang">C++ — Operator Overloading</span>
      <button class="copy-btn" onclick="copyCode(this)">copy</button>
    </div>
    <pre><span class="kw">class</span> <span class="tp">Vector2D</span> <span class="op">{</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="tp">double</span> x<span class="op">,</span> y<span class="op">;</span>
    <span class="fn">Vector2D</span><span class="op">(</span><span class="tp">double</span> x <span class="op">=</span> <span class="nm">0</span><span class="op">,</span> <span class="tp">double</span> y <span class="op">=</span> <span class="nm">0</span><span class="op">) :</span> x<span class="op">(</span>x<span class="op">),</span> y<span class="op">(</span>y<span class="op">)</span> <span class="op">{}</span>

    <span class="cm">// + operator: add two vectors</span>
    <span class="tp">Vector2D</span> <span class="kw">operator</span><span class="op">+(</span><span class="kw">const</span> <span class="tp">Vector2D</span><span class="op">&amp;</span> v<span class="op">)</span> <span class="kw">const</span> <span class="op">{</span>
        <span class="kw">return</span> <span class="tp">Vector2D</span><span class="op">(</span>x <span class="op">+</span> v<span class="op">.</span>x<span class="op">,</span> y <span class="op">+</span> v<span class="op">.</span>y<span class="op">);</span>
    <span class="op">}</span>

    <span class="cm">// * operator: scalar multiplication</span>
    <span class="tp">Vector2D</span> <span class="kw">operator</span><span class="op">*(</span><span class="tp">double</span> scalar<span class="op">)</span> <span class="kw">const</span> <span class="op">{</span>
        <span class="kw">return</span> <span class="tp">Vector2D</span><span class="op">(</span>x <span class="op">*</span> scalar<span class="op">,</span> y <span class="op">*</span> scalar<span class="op">);</span>
    <span class="op">}</span>

    <span class="cm">// == operator: equality check</span>
    <span class="tp">bool</span> <span class="kw">operator</span><span class="op">==(</span><span class="kw">const</span> <span class="tp">Vector2D</span><span class="op">&amp;</span> v<span class="op">)</span> <span class="kw">const</span> <span class="op">{</span>
        <span class="kw">return</span> x <span class="op">==</span> v<span class="op">.</span>x <span class="op">&amp;&amp;</span> y <span class="op">==</span> v<span class="op">.</span>y<span class="op">;</span>
    <span class="op">}</span>

    <span class="cm">// += operator</span>
    <span class="tp">Vector2D</span><span class="op">&amp;</span> <span class="kw">operator</span><span class="op">+=(</span><span class="kw">const</span> <span class="tp">Vector2D</span><span class="op">&amp;</span> v<span class="op">) {</span>
        x <span class="op">+=</span> v<span class="op">.</span>x<span class="op">;</span> y <span class="op">+=</span> v<span class="op">.</span>y<span class="op">;</span>
        <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span><span class="op">;</span>
    <span class="op">}</span>

    <span class="cm">// << operator: output stream (friend)</span>
    <span class="kw">friend</span> ostream<span class="op">&amp;</span> <span class="kw">operator</span><span class="op">&lt;&lt;(</span>ostream<span class="op">&amp;</span> os<span class="op">,</span> <span class="kw">const</span> <span class="tp">Vector2D</span><span class="op">&amp;</span> v<span class="op">) {</span>
        <span class="kw">return</span> os <span class="op">&lt;&lt;</span> <span class="st">"("</span> <span class="op">&lt;&lt;</span> v<span class="op">.</span>x <span class="op">&lt;&lt;</span> <span class="st">", "</span> <span class="op">&lt;&lt;</span> v<span class="op">.</span>y <span class="op">&lt;&lt;</span> <span class="st">")"</span><span class="op">;</span>
    <span class="op">}</span>
<span class="op">};</span>

<span class="tp">int</span> <span class="fn">main</span><span class="op">()</span> <span class="op">{</span>
    <span class="tp">Vector2D</span> v1<span class="op">(</span><span class="nm">1</span><span class="op">,</span><span class="nm">2</span><span class="op">),</span> v2<span class="op">(</span><span class="nm">3</span><span class="op">,</span><span class="nm">4</span><span class="op">);</span>
    cout <span class="op">&lt;&lt;</span> <span class="st">"v1 = "</span>    <span class="op">&lt;&lt;</span> v1 <span class="op">&lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    cout <span class="op">&lt;&lt;</span> <span class="st">"v1+v2 = "</span> <span class="op">&lt;&lt;</span> <span class="op">(</span>v1 <span class="op">+</span> v2<span class="op">) &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    cout <span class="op">&lt;&lt;</span> <span class="st">"v1*3 = "</span>  <span class="op">&lt;&lt;</span> <span class="op">(</span>v1 <span class="op">*</span> <span class="nm">3</span><span class="op">) &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    cout <span class="op">&lt;&lt;</span> <span class="st">"Equal? "</span>  <span class="op">&lt;&lt;</span> <span class="op">(</span>v1 <span class="op">==</span> v2 <span class="op">?</span> <span class="st">"yes"</span> <span class="op">:</span> <span class="st">"no"</span><span class="op">) &lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
    v1 <span class="op">+=</span> v2<span class="op">;</span>
    cout <span class="op">&lt;&lt;</span> <span class="st">"v1 after += : "</span> <span class="op">&lt;&lt;</span> v1 <span class="op">&lt;&lt;</span> <span class="st">"\n"</span><span class="op">;</span>
<span class="op">}</span></pre>
  </div>
  <div class="output">
    <div class="output-label">output</div>
v1 = (1, 2)
v1+v2 = (4, 6)
v1*3 = (3, 6)
Equal? no
v1 after += : (4, 6)
  </div>
</section>

<hr class="divider"/>

<!-- ════════════════════════════════════════
     CHEAT SHEET
════════════════════════════════════════ -->
<section class="section" id="ref">
  <div class="section-header">
    <div class="section-icon icon-purple">📋</div>
    <div class="section-meta">
      <h2>Cheat Sheet</h2>
      <div class="tagline">// quick reference</div>
    </div>
  </div>

  <table class="ref-table">
    <tr><th>Concept</th><th>Keyword / Syntax</th><th>Purpose</th></tr>
    <tr><td>Class</td><td>class ClassName { };</td><td>Define a blueprint</td></tr>
    <tr><td>Object</td><td>ClassName obj(args);</td><td>Instantiate a class</td></tr>
    <tr><td>Constructor</td><td>ClassName() { }</td><td>Init on creation</td></tr>
    <tr><td>Destructor</td><td>~ClassName() { }</td><td>Cleanup on destroy</td></tr>
    <tr><td>Inheritance</td><td>class B : public A { }</td><td>IS-A relationship</td></tr>
    <tr><td>Virtual fn</td><td>virtual void fn() { }</td><td>Enable runtime polymorphism</td></tr>
    <tr><td>Pure virtual</td><td>virtual void fn() = 0;</td><td>Make class abstract</td></tr>
    <tr><td>Override</td><td>void fn() override { }</td><td>Explicitly override virtual fn</td></tr>
    <tr><td>Friend</td><td>friend void fn(Class&);</td><td>Allow private access</td></tr>
    <tr><td>Static member</td><td>static int count;</td><td>Shared across all objects</td></tr>
    <tr><td>Template fn</td><td>template&lt;typename T&gt; T fn(T a)</td><td>Generic function</td></tr>
    <tr><td>Template class</td><td>template&lt;typename T&gt; class C</td><td>Generic class</td></tr>
    <tr><td>Try/Catch</td><td>try { } catch(ex& e) { }</td><td>Handle exceptions</td></tr>
    <tr><td>Throw</td><td>throw ExceptionType();</td><td>Raise an exception</td></tr>
    <tr><td>Operator overload</td><td>Type operator+(const Type& t)</td><td>Custom operator behavior</td></tr>
    <tr><td>this pointer</td><td>return *this;</td><td>Refer to current object</td></tr>
  </table>

  <div class="callout tip">
    <span class="callout-icon">💡</span>
    <span><strong>Rule of Five (C++11):</strong> If you define any of — destructor, copy constructor, copy assignment, move constructor, move assignment — you should define all five to manage resources correctly.</span>
  </div>
</section>

</main>
</div>

<script>
function scrollTo(id) {
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

function copyCode(btn) {
  const pre = btn.closest('.code-wrap').querySelector('pre');
  const text = pre.innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'copied!';
    btn.style.color = '#4ecdc4';
    setTimeout(() => { btn.textContent = 'copy'; btn.style.color = ''; }, 1800);
  });
}

function switchTab(btn, group, tab) {
  const wrap = btn.closest('.section');
  wrap.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  wrap.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(group + '-' + tab).classList.add('active');
}

// Sidebar active tracking on scroll
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navItems.forEach(n => n.classList.remove('active'));
      const map = {intro:'Introduction',classes:'Classes & Objects',encap:'Encapsulation',inherit:'Inheritance',poly:'Polymorphism',abstract:'Abstraction',constructors:'Constructors & Destructor',friends:'Friend & Static',templates:'Templates',exceptions:'Exception Handling',overload:'Operator Overloading',ref:'Cheat Sheet'};
      navItems.forEach(n => { if (n.textContent.trim() === map[id]) n.classList.add('active'); });
    }
  });
}, {threshold: 0.3});
sections.forEach(s => observer.observe(s));
</script>
</body>
</html>
Done

You are out of free messages until 5:30 AM
Get more




Claude is AI and can make mistakes. Please double-check responses.
