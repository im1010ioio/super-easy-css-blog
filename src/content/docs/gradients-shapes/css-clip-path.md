---
title: "#43 用 CSS clip-path 剪裁各種形狀的色塊/圖片/影片"
datePublished: Mon Sep 23 2024 17:12:52 GMT+0000 (Coordinated Universal Time)
cuid: cm1f9mydi000b0al83t0i0z7i
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1766463116355/68a6acb1-bf24-4d17-b911-e6e4c1007d03.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1766463126265/fa27c301-9bd9-4983-918a-171320e88cb6.png
tags: css3, css, 2articles1week, clipping-path

sidebar:
  order: 7
---

在 CSS 中除了使用 border 來繪製形狀，還有一個語法 `clip-path` 也可以繪製圖形，它可以將東西指定在某個形狀內，例如圓形、多邊形，甚至是使用 SVG 路徑等特殊形狀。

它的概念類似於 Photoshop 中的剪裁遮色片，是將東西「剪裁」掉，裡面可以放入各種 HTML 元素，從色塊、圖片到影片都可以。

> #### **↓ 今日學習重點 ↓**
> 
> * 學會使用 CSS `clip-path` 繪製各種圖形
>     

---

## 一、基本語法

`clip-path` 的語法很簡單，就是使用它定義好的方法，可以是各種形狀（例如：`circle()`、`polygon()` 等）或 SVG 路徑。

```css
.element {
  clip-path: 形狀();
}
```

---

## 二、各種形狀

### 1\. 圓形 `circle()`

`circle()` 的用法是：指定半徑和中心點來控制圓的位置和大小。

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1727106561350/7b61dad2-7f53-4537-b278-f12b2e23a953.png align="center")

```css
.element {
  clip-path: circle(50%);
}
```

上面的例子，是剪裁成一個直徑為寬高最小邊一半的圓形，且圓心位於元素中心。

另外，也可以通過傳入具體的長度值來控制圓的大小和位置：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1727106566595/7a4fad73-abd2-4617-9096-08d46f74dacf.png align="center")

```css
.element {
  clip-path: circle(40px at 50% 50%);
}
```

這將圓的半徑設為 40px，且圓心位於元素中心 (50% 50%)。

---

### 2\. 橢圓形 `ellipse()`

`ellipse()` 的用法是：指定橢圓的 x 軸和 y 軸半徑來控制形狀：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1727106766998/4f62a33e-c80e-4c77-bd0f-778c4b25a3b8.png align="center")

```css
.element {
  clip-path: ellipse(50% 30% at 50% 50%);
}
```

這段 Code 將元素剪裁為一個 x 軸半徑為 50%、y 軸半徑為 30% 且位於中心點的橢圓形。

---

### 3\. 多邊形 `polygon()`

如果需要剪裁出任意形狀，那麼多邊形 `polygon()` 最適合了。  
使用方式是：透過多個坐標來描繪出所需的形狀。

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1727107233140/1f9f3af5-9d0f-4cd3-9e84-95b5eaacaa97.png align="center")

```css
.element {
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}
```

這是一個三角形的例子。`polygon()` 裡的參數是百分比，代表點的 x、y 坐標。此例中，三個頂點分別位於（50% 0%）、（100% 100%）和（0% 100%），形成一個向上的三角形。

---

### 4\. 使用 SVG 路徑 path

除了基本形狀，還可以使用 SVG 路徑 (`path()`) 來剪裁更複雜的圖形。

```css
.element {
  clip-path: path("M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
}
```

這段 Code 中，在 `path()` 中放了一段 SVG 的路徑，生成一個特別形狀的裁剪區域。

比方說，我們可以剪裁一部影片的外緣，符合背景圖的中電視的框框，就會像以下 DEMO：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1727110276403/9e7bcd82-8663-4567-b6ab-883eca33f923.png align="center")

> DEMO: [CSS clip-path SVG path](https://codepen.io/im1010ioio/pen/JjgjJZa)

我是使用 Figma 照著電視框繪製大概的輪廓，匯出 SVG 後，再複製檔案中的 path。  
要再講究一點的話，可能還會再影片上面再疊一層電視的反光，不過這次先沒有。

不過，SVG 的 path 過具體的座標來繪製的，而不是直接使用百分比來表示，所以用這種方法無法根據 RWD（響應式設計）來進行縮放。

另外，值得注意的是：目前 `clip-path` 不支援用連結的方式放入外部的 SVG 檔案。

這個 DEMO 我放了 YouTube 影片，自動播放並隱藏播放介面（4秒後的），想要了解怎麼設定的，可以去看前幾篇文章：

> [#36 HTML &lt;video&gt; 用影片當背景，使用 iframe 嵌入 Youtube自動播放/ IG/ TikTok/ X (Twitter) 影片](https://ithelp.ithome.com.tw/articles/10351751)

---

## 三、支援 `transition` 動畫效果

`clip-path` 支援動畫效果，我們可以為 `clip-path` 屬性設定 `transition` 過渡效果，做到形狀之間的漸變。（雖然我們還沒有講解過 `transition` ，但先在這裡偷渡一下）

```css
.element {
  clip-path: circle(50%);
  transition: clip-path 0.5s ease;
}

.element:hover {
  clip-path: circle(70%);
}
```

當滑鼠 hover 停在上面時，圓形會逐漸由小變大。

---

## 四、`clip-path` 小工具：Clippy

如果想要像使用繪圖軟體一樣，直覺地操作 CSS clip-path，有人做了個小工具 —— Clippy，讓你可以直接在網頁上拉動每一個點，然後產出 Code，大家可以去玩玩看喔！

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726474314675/43bdeae8-3ac2-4c0f-9298-4ef7c06f3419.png align="center")

> 連結：[Clippy — CSS clip-path maker](https://bennettfeely.com/clippy/)

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](https://cdn.hashnode.com/res/hashnode/image/upload/v1682564435616/c15640fc-6cee-4c33-a898-9cd6820f165a.png align="center")