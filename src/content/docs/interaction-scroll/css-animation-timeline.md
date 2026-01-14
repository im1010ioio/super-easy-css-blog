---
title: "#70 純 CSS 也能做滾動動畫了！animation-timeline 讓東西邊滾邊動"
datePublished: Sun Sep 21 2025 15:15:04 GMT+0000 (Coordinated Universal Time)
cuid: cmftu9oxj000102ld6jx0fl3j
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1766596447749/79def804-427a-4cc8-8e15-6b2afffd2d1c.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1766596453428/7dbbd95b-bf87-426a-93d7-7639b3bc93c8.png
tags: css3, css, css-animation, scroll-animation, animation-timeline

sidebar:
  order: 9
---

你一定看過那種很酷的網頁：當你向下滾動時，背景圖片移動得比前景文字慢，或者某個元素會隨著滾動淡入、旋轉、放大，創造出引人入勝的深度和故事感。

這種效果，我們稱之為「**捲動式動畫** (Scroll-driven Animations)」或「**視差滾動** (Parallax Scrolling)」。

> 為了寫這篇，我發現了一個超實用的網站！
> 
> 這個網站 [Scroll-driven Animations](https://scroll-driven-animations.style/) 收集了許多由滾動驅動的動畫， 甚至還有程式碼，CSS 與 JS 版本都有：
> 
> ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758461571838/718510e2-4808-4a32-926b-c279bace4b0a.gif align="left")

過去，要實現這種效果，幾乎是 JS 的專屬任務。我們需要監聽 `scroll` 事件，不斷計算元素的位置，然後用 JS 去更新它的 CSS 樣式。這樣做不僅麻煩，而且在效能不好的裝置上，還可能因為頻繁的計算導致畫面卡頓。

但是現在，CSS 有了原生解決方案，能將動畫與滾動完美連結的新屬性 —— `animation-timeline`。 讓我們可以**用滾動的位置來驅動 CSS 動畫的進度**，完全告別 JS！

> 注意：這個語法 Firefox 暫不支援，不過 Safari 最新的 iOS26 將支援，所以我認為這是值得期待的新屬性，詳情請看 [Can I Use](https://caniuse.com/mdn-css_properties_animation-timeline)。 （本系列文章介紹的語法，都是大於等於 3 個瀏覽器以上有支援的）

---

## 一、核心概念：從「時間軸」到「滾動軸」

在我們開始之前，先來理解一個最重要的觀念轉變。

傳統的 CSS `@keyframes` 動畫是基於**時間**的。 例如，`animation-duration: 3s;` 代表這個動畫會在 3 秒內從 0% 播放到 100%。

而 `animation-timeline` 所做的事情，就是把這個**時間軸**，替換成**滾動軸**。

動畫不再關心「過了幾秒」，而是關心「**您滾動了多少距離**」。 例如，我們可以設定： 當使用者從頁面頂部滾動到底部時，動畫剛好從 0% 播放到 100%。

滾動條，就是您的動畫進度條。

---

## 二、實現方式與語法

要啟用這個新功能，我們主要會用到幾個新屬性，它們通常會一起搭配使用。

### 1\. `animation-timeline` - 跟隨哪一個進度軸

這個屬性負責**指定**動畫要跟隨哪一個進度軸。它可以接受 `scroll()` 或 `view()` 函式。

#### (1) `scroll()`

將動畫連結到一個**滾動容器 (scroller)** 的滾動進度上。0% 代表滾動條在起點，100% 代表在終點。

##### **語法：**

```css
div {
    animation-timeline: scroll( [scroller] [axis] );
    /* 參數順序可對調 */
}
```

* `scroller` (滾動容器)：指定要監聽哪一個滾動條。
    
    * `nearest` (預設值): 尋找最近的、擁有滾動條的祖先元素。
        
    * `root`: 文件的根元素，通常指整個頁面的滾動條。
        
    * `self`: 元素自身的滾動條（需設定 `overflow: scroll` 等）。
        
* `axis` (軸向)：決定要監測哪個方向的滾動條。
    
    * `block` (預設值): 塊軸。在「橫書模式」下指的就是垂直滾動 (`y`)。
        
    * `inline`: 行內軸。在「橫書模式」下指的就是水平滾動 (`x`)。
        
    * `y`: 垂直軸。
        
    * `x`: 水平軸。
        

> **注意**：單獨使用 `scroll()` 等同於 `scroll(nearest block)`。如果指定的軸向沒有滾動條，動畫將不會觸發。

#### (2) `view()`

將動畫連結到**元素自身在可見區域 (Viewport) 中的可見進度**上。當元素進入或離開畫面時，動畫會隨之推進。

##### **語法：**

```css
div {
    animation-timeline: view( [axis] [inset] );
}
```

* `axis` (軸向)： 與 `scroll()` 中的 `axis` 相同 (`block`, `inline`, `x`, `y`)。
    
* `inset` (邊距)： 調整用來判斷「可見性」的區域範圍，可以設定一個或兩個值 (start/end)。例如 `view(block 100px 200px)` 表示當元素進入「距離視窗頂部 100px、距離視窗底部 200px」這個縮小的區域時，動畫才會開始播放。
    

### 2\. `animation-range` - 滾動範圍

如果 `animation-timeline` 是指定「跟誰跑」，那 `animation-range` 就是定義「**從哪裡跑到哪裡**」。 它是 `animation-range-start` 和 `animation-range-end` 的縮寫，用來精確設定動畫在時間軸上的生效區間（從 0% 播放到 100% 的範圍）。

##### **語法：**

它的值通常由**開始點**和**結束點**兩部分組成：

```css
div {
    animation-range: [開始點] [結束點];
}
```

這些點可以使用非常這些「範圍名稱 (timeline-range-name)」來定義：

* `cover`: 涵蓋元素**從開始進入**視窗，到**完全離開**視窗的整個過程。
    
* `contain`: 元素**完全包含**在視窗內的過程。
    
* `entry`: 元素從**開始進入**視窗，到**完全進入**視窗的過程。
    
* `exit`: 元素從**開始離開**視窗，到**完全離開**視窗的過程。
    
* `entry-crossing`: 元素**橫跨**視窗「起始邊緣」的過程。
    
* `exit-crossing`: 元素**橫跨**視窗「結束邊緣」的過程。
    

**精細微調與縮寫：**

* **搭配百分比**：你可以在範圍名稱後加上百分比或長度，進行更精確的控制。例如：
    
    * `entry 0%`: 指元素頂部剛好碰到視窗底部的那一刻。
        
    * `entry 100%`: 指元素底部剛好碰到視窗底部的那一刻。
        
    * `exit 50%`: 指元素中心點離開視窗頂部的那一刻。
        
* **預設值**：`normal` 是預設值，代表時間軸的起點或終點。
    
* **單值縮寫**：
    
    * `animation-range: entry;` 等同於 `animation-range: entry 0% entry 100%;`
        

> **推薦小工具**：[View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
> 
> ![View Timeline Ranges Visualizer](https://cdn.hashnode.com/res/hashnode/image/upload/v1758460992807/e42f7b07-fa27-4748-a2b5-b7cdff501b7c.png align="left")
> 
> 這些範圍名稱的對應位置可能有點抽象，推薦使用 [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) 這個工具來幫助你理解它們，它幫助你視覺化這些進度，這個和開頭的分享是同個作者做的。

---

## 三、實際範例

### 1\. 方式一：匿名的時間軸 `scroll()` 和 `view()`

這是最直覺也最簡單的方法，直接在元素的動畫屬性中，使用函式來指定動畫要跟隨的進度。

這裡我們使用做了常見的兩種應用方式：

* 頁面滾動進度條
    
* 文字段落由左淡入出現
    

> DEMO 連結：[CSS Scroll-driven Animation with animation-timeline (scroll() & view())](https://codepen.io/im1010ioio/pen/emJmOmp)

#### **(1)** `scroll()` **的應用：頁面滾動進度條**

讓我們來製作了一個簡單的頂部進度條，它的寬度會隨著整個頁面的滾動而變化。

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758463620418/7c859152-ab9d-40d8-87f2-4072ca8a34f5.gif align="center")

```css
#progressbar{
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 10px;
    background-color: yellow;
    transform-origin: top left; /* 讓縮放從左邊開始 */

    /* 將 pagePercent 動畫連結到頁面滾動條 */
    animation-name: pagePercent;
    animation-direction: alternate;
    animation-timeline: scroll();
}
@keyframes pagePercent {
    from { transform: scaleX(0); }
    to {   transform: scaleX(1); }
}
```

這裡的 `animation-timeline: scroll();` 是核心：

* 它告訴 `#progressbar` 的動畫進度要完全跟隨**滾動條**的進度。
    
* 因為沒有指定 `scroller`，它會預設跟隨 `root` (根滾動條)，也就是整個頁面。當頁面滾到最頂部時，進度條 `scaleX` 為 0；滾到最底部時，`scaleX` 為 1。
    

#### **(2)** `view()` 的應用：文字段落由左淡入出現

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758463736715/a3fab549-9c6a-4d2a-a32e-14bea7477b14.gif align="center")

另外一個範例則是讓每一個 `<p>` 段落在進入畫面時，  
才觸發自己的淡入兼移入動畫（不過這個動畫效果更常出現在照片上）。

```css
p {
    opacity: 0; /* 初始狀態為透明 */

    /* 將 moveIn 動畫連結到元素自身的可見進度 */
    animation: moveIn linear forwards;
    animation-timeline: view();
    animation-range: entry 50% cover 50%;
}

@keyframes moveIn {
    0%   { translate: -10%; opacity: 0; }
    100% { translate: 0%;   opacity: 1; }
}
```

關於這裡的 `animation-timeline: view();` ：

* 將動畫的時間軸，綁定到**每一個** `<p>` 文字段落，進入畫面到結束的過程。
    
* `animation-range: entry 50% cover 50%;` 表示動畫的播放區間：
    
    * 動畫會在 `<p>` 元素的中心點 (`50%`) 進入 (`entry`) 視窗時開始，
        
    * 並在它的中心點到達視窗頂部 (`cover 50%`) 時播放完畢。
        

#### (3) 進階用法：一次使用多個動畫（時間軸）

一個元素可以同時執行多個動畫，並讓它們分別跟隨不同的匿名時間軸。只需要用逗號 `,` 隔開多個動畫設定即可。

**範例**：  
讓一個方塊在**整個頁面滾動時會旋轉**（使用 `scroll()`），  
同時，當它**自己進入畫面中央時會改變顏色**（使用 `view()`）。

```css
.box {
  /* 1. 定義兩個動畫，用逗號分隔 */
  animation-name: rotate-effect, color-effect;
  /* 2. 按順序讓每個動畫跟隨各自的時間軸 */
  animation-timeline: scroll(root), view();
  /* 其他動畫屬性... */
}
```

這裡的對應關係是**按順序的**：第一個動畫 `rotate-effect` 會跟隨第一個時間軸 `scroll(root)`，而第二個動畫 `color-effect` 則會跟隨第二個時間軸 `view()`。

---

### 2\. 方式二：為時間軸命名： `scroll-timeline-name` 用法

在 `scroll()` 和 `view()` 成為標準前，我們需要用比較繁瑣的兩個步驟來定義時間軸：

1. **在滾動容器上定義並命名時間軸**
    
2. **在動畫元素上引用該時間軸**
    

雖然比較麻煩，不建議使用，但是了解的話，萬一遇到了，就能看得懂。

> DEMO 連結：[CSS Scroll-driven Animation with animation-timeline (named scroll progress timelines)](https://codepen.io/im1010ioio/pen/xbZxWKJ)

#### (1) 等同於 `scroll()` 的基本用法

我們用語剛剛的第一個例子「頁面滾動進度條」改寫看看，重點是「**要在滾動容器上定義並命名時間軸**」：

```css
/* 在滾動容器上定義並命名時間軸 */ 
html {
    /* 在 html 這個滾動容器上，建立一個名為 --page-percent 的時間軸 */
    scroll-timeline-name: --page-percent;
}

#progressbar {
    animation-name: pagePercent;
    /* 在動畫元素上引用該時間軸 */
    animation-timeline: --page-percent;
}

/* keyframes 略 */
```

#### (2) 等同於 `view()` 的基本用法

我們用語剛剛的第二個例子「文字段落由左淡入出現」改寫看看，重點是「**追蹤「自身」在滾動容器中的 viewprot 進度」**：

```css
p {
    opacity: 0; /* 初始狀態為透明 */

    /* 追蹤 p 元素「自身」在滾動容器中的 viewprot 進度 */
    view-timeline-name: --p-appearance;

    /* 將 moveIn 動畫連結到我們剛剛在它自己身上創建的 --p-appearance 時間軸 */
    animation: moveIn linear forwards;
    animation-timeline: --p-appearance;
    animation-range: entry 50% cover 50%;
}

/* keyframes 略 */
```

#### (3) 如果同個滾動容器有多個時間軸

如果一個滾動容器上要定義多個命名的時間軸，可以在 `scroll-timeline-name` 用逗號 `,` 隔開多個動畫名稱即可：

```css
html {
    scroll-timeline-name:
        --page-percent,
        --square-timeline;
}
```

---

`animation-timeline` 將動畫的控制權從 JS 交還給了瀏覽器本身，這代表著無與倫比的流暢與效能。不只能做視差效果，還能用來做滾動進度條、圖片的 Lazyload 動畫、飛入效果等等，可能性無窮無盡，甚至挑戰常見的 JS 套件（如 [GSAP](https://gsap.com/) 等等）。

雖然目前還需要注意瀏覽器的支援度，但接下來就等待你來試試看這個語法囉！  
希望有朝一日能全面支援，這樣的話會很方便！

這是滾動系列的最後一篇了！  
明天開始我們來補充一些之前沒有提到過的新語法。

另外，與滾動相關的 CSS，之前有一個新語法 `container-type: scroll-state` （[Chrome for Developer 的介紹文章](https://developer.chrome.google.cn/blog/css-scroll-state-queries?hl=zh-tw)），未來或許能讓我們用 `@container` 查詢來偵測元素的滾動狀態，但目前 Safari 和 Firefox 都尚未支援，所以就還沒有寫這篇囉！如果未來這語法支援了，也許我會再寫篇來介紹。

---

> **延伸閱讀：**
> 
> * [MDN - animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)
>     
> * [Chrome for Developer - 使用捲動式動畫呈現捲動時的元素動畫](https://developer.chrome.com/docs/css-ui/scroll-driven-animations?hl=zh-tw)
>     
> * [animation-timeline : view() | scroll() | gsap scroll killer](https://codepen.io/abhishek-bhardwaj/pen/QWzqpgz)
>     

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](https://cdn.hashnode.com/res/hashnode/image/upload/v1682564435616/c15640fc-6cee-4c33-a898-9cd6820f165a.png align="center")