---
title: "CSS 選擇器入門：Tag、Class、Id、孩子兄弟、偽類一次搞懂"
datePublished: Sat Sep 23 2023 18:16:16 GMT+0000 (Coordinated Universal Time)
cuid: clmwcqp60000009l25ya54qhq
ogImage: https://css.im1010ioio.dev/og-images/css-selectors.png
tags: css3, css

sidebar:
  order: 9
---
![Css 選擇器總整理！](/og-images/css-selectors.png)

本篇會用實例與註解說明各種實用的 CSS 選取器，由於很多所以可以先存起來，之後要用到時再查詢。

我的 Photoshop 老師[游閔州](https://www.facebook.com/james8photoshop)曾說過：「掌握了 Photoshop 中的選取範圍，就掌握了大部分的 Photoshop 功能。」在 CSS 上，也是同樣的道理，掌握了 CSS 選擇器，我想可能就掌握了一半的 CSS。因為兩者都是選取到某個範圍，然後針對這個範圍進行調整。

所以，大家一起來學好選擇器吧！選擇器也許能做到比你想像中還要多的事情。

> #### ↓ 今日學習重點 ↓
> 
> * 了解 CSS 各種實用的選擇器
>     

---

> 另外，關於選擇器的好文大家也可以參考看看：  
> [\[CSS\] 選擇器表 (Selectors) - iT 邦幫忙](https://ithelp.ithome.com.tw/articles/10243699)  
> [金魚都能懂的 CSS 選取器 - 金魚都能懂了你還怕學不會嗎 :: 第 11 屆 iThome 鐵人賽](https://ithelp.ithome.com.tw/users/20112550/ironman/2799)

---

### 1\. 選擇 Tag、Class、Id

上篇我們有介紹過這三種選擇器，這三種是我們最常使用的選擇器。  
寫個範例給大家說明：

#### HTML

```xml
<body id="app" class="main-content container"> ... </body>
```

#### CSS

如果將 tag 選擇器直接接上 Class 或 Id 選擇器，代表的是「選取該 Class/Id 的 Tag」，權重會相加而增加喔！

如果使用逗號隔開，則會同時選到 2 個選擇器（群組式宣告）。

```css
body              { ... } /* 選取 Tag */
#app              { ... } /* 選取 Id */
.main-content     { ... } /* 選取 Class */

body#app          { ... } /* 選取 Id 為 app 的 body */
body.main-content { ... } /* 選取 Class 為 main-content 的 body */

body, .list       { ... } /* 同時選取 Tag 與 Class */
```

---

### **2\. 選擇孩子/兄弟**

#### 選取孩子

要選取孩子，使用空格隔開就可以了，會選取到底下全部的孩子。如果只想要選取到自己的第一層（親生的）孩子，要在中間加上大於 `>` 符號，有時候我們不希望樣式干擾到孫子的樣式（比如說子選單），就會使用這個語法。

#### 選取兄弟

要選取到兄弟，使用加號 `+` 是選取到後面的第一個。如果要選取到後面全部兄弟，而是使用波浪號 `~`。那選取到前面的呢？目前沒有辦法做到。

以下以一個常見的導覽列 navbar 作為例子，大家可以試想看看會選到什麼：

#### HTML

```xml
<nav>
    <h1>iT 邦幫忙</h1>
    <a class="item" href="#">2023鐵人賽</a>
    <ul class="list list-start">
        <li class="item">
            <a href="#">技術問答</a>
        </li>
        <li class="item">
            <a href="#">技術文章</a>
        </li>
    </ul>
    <ul class="list list-end">
        <li class="item">
            <a href="#">發文</a>
        </li>
        <li class="item">
            <span>個人資料</span>
            <ul class="list list-start">
                <li class="item">
                    <a href="#">個人檔案</a>
                </li>
                <li class="item">
                    <a href="#">個人檔案</a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
```

#### CSS

```css
.list *     { ... } /* 選取 list 底下的所有東西 */
nav   .item { ... } /* 選取到 nav 下所有的 "item" class   (所有的小孩) */
nav > .item { ... } /* 選取到 nav 下第一層的 "item" class (親生的小孩) */
h1  + .list { ... } /* 選取 h1 後面第一個 "list" class */
h1  ~ .list { ... } /* 選取 h1 後面所有的 "list" class */
```

---

### **3\. 選擇順序**

CSS 選擇順序分為 `nth-child` 與 `nth-of-type` 兩種，

* `nth-child` 是選取同層的兄弟，不限種類，以下為例，連同 `li`、`hr` 也會一同列入計算的範圍；
    
* `nth-of-type` 則是選取同層「同一種」的兄弟，以下為例，只會計算 `li` 的數量。
    

#### HTML

```xml
<ul>
    <li>最新商品</li>
    <hr>
    <li>熱門商品</li>
    <hr>
    <li>商品據點</li>
    <hr>
    <li>品牌故事</li>
</ul>
```

#### CSS

```css
/* 選取同層元素，會連不同種類的 tag 一起找（li, hr...） */
li:first-child         { ... } /* 第一個 */
li:last-child          { ... } /* 最後一個 */
li:nth-child(3)        { ... } /* 第 3 個 */
li:nth-last-child(2)   { ... } /* 到數第 2 個 */
li:nth-child(odd)      { ... } /* 基數 */
li:nth-child(even)     { ... } /* 偶數 */
li:nth-child(n+4)      { ... } /* 第 4 個（含自己）以後的 */
li:nth-child(3n)       { ... } /* 3 的倍數 */
li:nth-child(3n-1)     { ... } /* 3 的倍數減 1 */

/* 選取同層的同一種元素，只會找與自己同樣的 tag (只找 li) */
/* 括號內的寫法與上面 nth-child() 一樣 */
li:first-of-type        { ... } /* 第一個 */
li:last-of-type         { ... } /* 最後一個 */
li:nth-of-type(3)       { ... } /* 第 3 個 */
li:nth-last-of-type(2)  { ... } /* 到數第 2 個 */
```

> 延伸閱讀：[CSS3選擇器「:nth-child()」與「:nth-of-type()」用法大不同](https://www.minwt.com/webdesign-dev/css/10885.html)

---

### **4\. 操作狀態（偽類）**

這系列的選擇器可以操控元素與互動的各種狀態，常常用在 HTML 的 `a`、`button` 或 `input` 上。

#### HTML

```xml
<a href="#pricing">價目表</a>

<!-- 當連結寫上別的元素的 id 名稱，點擊後可快速移動到該元素的所在位置 -->
<!-- 這就是網頁的錨點，URL 上會帶上連結 #pricing (hash link) -->
<div id="pricing"></div>
```

#### CSS

```css
/* 最常用的 */
a:link          { ... } /* 連結未被拜訪過，預設的樣式 */
a:visited       { ... } /* 連結已被拜訪過 */
a:hover         { ... } /* 移上去的時候（停懸） */
a:active        { ... } /* 點擊到放開前 */
a:focus         { ... } /* 當元素被聚焦（使用滑鼠或 Tab） */

/* 進階的 */
a:focus-within  { ... } /* 當子層的元素有被聚焦時 */
a:focus-visible { ... } /* 使用鍵盤聚焦元素時（例外：input, textarea 使用滑鼠聚焦也會吃這段） */
div:target      { ... } /* 當元素的 id (錨點) 與 URL 上的 hash 相同 */
```

有了這些選擇器，我們可以做到許多基本的互動效果，更詳細的實例 DEMO 預計會放在未來的互動章節裡。

> 延伸閱讀：  
> [浅谈 :focus 伪类选择器和聚焦后 outline 边框的设置问题 - 掘金](https://juejin.cn/post/7179149715458490405)  
> [:target - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:target)

---

### **5\. Input 狀態**

* [當 `<inp`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:target)`ut>` 沒有 `disabled` 屬性時就是 `enabled` 狀態，反之就是 `disabled`。
    
* `checked` 專門用在 `type="radio"` 或 `type="chechbox"` 的 `<input>` 上。
    

#### HTML

```xml
<input type="checkbox">
<input type="checkbox" disabled>
```

#### CSS

```css
input:enabled  { ... } /* 可以操作時 */
input:disabled { ... } /* 不可以操作時 */
input:checked  { ... } /* 勾選起來時 */
```

---

### 6\. 文字相關

#### HTML

```xml
<p>這樣的篤定是美麗的，但變化無常更是美麗。<p>
<p lang="en-US">Such certainty is beautiful, but uncertainty is more beautiful.<p>
```

#### CSS

```css
p::first-letter { ... } /* p 的第一個字母 */
p::first-line   { ... } /* p 的第一行 */
p::selection    { ... } /* p 的反白樣式 */
*:lang(en-US)   { ... } /* 選擇是美式英文的所有東西 */
```

---

---

## 繼續學習：CSS 選擇器進階

掌握了基本選擇器後，還有更強大的進階選擇器等你探索！包括偽元素 `::before`/`::after`、屬性選擇器、父層選擇器 `:has` 等等，學會之後能做到更多只靠 CSS 就能實現的效果。

👉 **繼續閱讀下一篇：[CSS 選擇器進階：偽元素 before/after、屬性選擇器、:has 父層選擇器](/basics/css-selectors-advanced)**

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](../../../assets/images/donate.png)