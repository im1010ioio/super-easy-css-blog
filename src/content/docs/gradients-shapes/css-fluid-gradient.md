---
title: "#40 使用 CSS filter blur 製作簡易的任意形狀漸層 (流動/暈染背景)"
datePublished: Fri Sep 20 2024 08:10:56 GMT+0000 (Coordinated Universal Time)
cuid: cm1afyh59003209l6h9bmfaxz
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1766409039242/859e1069-ea1c-4c09-b163-3cce8a83df0b.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1766409048560/063ccaed-9c61-4213-bc6d-5c837e7c1167.png
tags: css3, css, 2articles1week, gradients-in-css

sidebar:
  order: 4
---

在平面設計中，還有一種很常見的漸層，既不是線性漸層，也不屬於圓形/圓錐漸層，是任意形狀漸層漸層，也有人稱之為流動 (Fluid gradient) 或暈染漸層，就像本系列文的封面圖。

這個封面我是使用 Figma 的套件「[Noisy Gradients](https://www.figma.com/community/plugin/1174390287006360600)」產出的，另外這個套件還有在漸層上加上了噪點，讓平滑的顏色增添一點磨砂材質感覺。

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694417958400/77ae1fab-6b90-47e7-92ea-12dd57311262.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp)

不過先不論噪點，其實要製作這種背景很簡單，我們其實只要將東西模糊，並且把數值調到很大後，就能得到這樣的漸層，就像以下這樣：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1718163917580/f0d14388-6aeb-41c2-9d05-4ef3d529be1a.gif)

> #### **↓ 今日學習重點 ↓**
> 
> * 學習 CSS `filter` `blur()` 特效
>     
> * 使用偽元素 `::before` / `::after` 製作裝飾元素
>     
> * 使用 `box-shadow` 製作裝飾元素
>     

---

## 基本語法

在網頁上，要做到這個效果，我們可以使用 CSS `filter` 中的 `blur()` 特效：

```css
div {
    filter: blur(數值+單位);
}
```

當然 CSS `filter` 中，還有許多有趣的特效，我們之後會再探討。  
有興趣的話，可以先去研究：

> 延伸閱讀：[filter - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

---

## 實作 DEMO

所以，今天我們就來把我們的主視覺刻出來吧！

### 1\. 製作出圓形

首先，因為背景算是裝飾性元素，而且我目前沒有打算做動畫，不需要逐一控制他們的位置，所以我不想要寫太多 HTML 元素。

於是，我打算使用 CSS 偽元素 `::before` 繪製出一個圓形，剩下的圓形則是使用 `box-shadow` 繪製：

> 減少不必要的 DOM 元素的話，可以提升渲染效能：
> 
> 1. **減少 DOM 節點**：  
>     每增加一個 DOM 元素，瀏覽器都需要計算它的布局、樣式和渲染。利用 CSS 來替代裝飾性元素可以減少 DOM 中的節點數量，降低複雜度，從而可提升渲染效能。
>     
> 2. **渲染和重繪效率**：  
>     `::before` 和 `::after` 這類偽元素不會增加實際的 DOM 節點，讓得瀏覽器在進行重新佈局（reflow）和重繪（repaint）時的工作量減少。同樣，用 `box-shadow` 來實現陰影效果也比增加多個 HTML 元素更有效率。
>     
> 3. **瀏覽器優化**：  
>     現代瀏覽器高度優化了 CSS 的渲染性能，透過 CSS 製作裝飾性的元素通常比增加額外的 DOM 元素更有效率。
>     

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726816638968/1e8bec58-4d77-44cb-924a-e257bf6ca2c4.png)

```css
body{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: white;
    &::before{
        content: "";
        position: absolute;
        top: 35%;
        right: -10vw;
        display: block;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        width: 60vw;
        background: #EEE365;
        box-shadow:
            -30vw 20vh 0 0 #31BB4C,
            -50vw -30vh 0 25vw #54D5E4;
    }
}
```

### 2\. 加上模糊效果

接著在圓形上加上模糊效果，就完成囉！

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726814296929/a4f845e5-4689-481c-8d1d-e6680f78ebea.png)

```css
body{
    &:before{
        filter: blur(10rem);
    }
}
```

> DEMO: [CSS fluid gradient](https://codepen.io/im1010ioio/pen/ZEdgPXx)

今天的內容就是這麼簡單，如果希望顏色是別的形狀，也可以繪製成別的形狀，再加以模糊。

不過，值得注意的是：如果今天我希望這些圓形會動，想要製作動畫，我就會將圓形拆成不同的 HTML 元素，以便我操控。

用 CSS 繪製不同的形狀與 CSS 的動畫製作，我們陸陸續續會在之後提到，敬請期待！

---

## 進階

如果加上 CSS or JS 動畫，就會變得很炫！類似像這樣：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1718162313917/1206f43c-8abc-4142-a7e4-e79ca6167850.gif)

還有以下也是份很好的教學：

> 延伸閱讀：[網頁的流動背景怎麼做？讓你的網站背景不再死版 | ThisWeb](https://www.thisweb.dev/post/smooth-liquid-bg)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726817435215/dc795e68-6263-4610-9103-d2d9e694cccc.webp)

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](https://cdn.hashnode.com/res/hashnode/image/upload/v1682564435616/c15640fc-6cee-4c33-a898-9cd6820f165a.png)