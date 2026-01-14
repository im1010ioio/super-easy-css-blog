---
title: "#32 多種 CSS 顏色設定：變數 currentcolor、checkbox/radio 顏色、input placeholder、閃動的光標顏色、文字反白的顏色，用混色的 color-mix() 製作色彩系統"
datePublished: Thu Nov 09 2023 16:04:07 GMT+0000 (Coordinated Universal Time)
cuid: clordpsz2000309jo2ngc5rcv
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1766404538299/44dc46a8-c7ec-4524-ba4a-88b70187d12c.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1766404545664/4bfaebc0-8911-4dc1-9658-8db991f2d98c.png
tags: css3, css, color

sidebar:
  order: 2
---

上一篇我們了解了如何各種設定顏色的方式，這一篇我們要來了解關於其他顏色的小事，都很好用，像是顏色的變數 `currentcolor`、input 的顏色 `accent-color`、input 閃動的光標顏色、文字反白的顏色，甚至進階一點的混色 `color-mix()`。

> #### **↓ 今日學習重點 ↓**
> 
> * 了解 `currentcolor` 及他的使用時機
>     
> * 了解 `accent-color`、`placeholder`
>     
> * 了解怎麼改動 input 閃動的光標顏色
>     
> * 了解怎麼改動文字反白的顏色
>     
> * 了解 `color-mix()` 及如何使用
>     

---

## 1\. currentcolor

在 CSS 中有一個極好用的顏色變數，叫做 `currentcolor` ，顧名思義，它就是目前（文字）的顏色 `color`。讓我們看看這個例子，這是一個很常見有邊框的按鈕：

![CSS currentcolor](https://cdn.hashnode.com/res/hashnode/image/upload/v1699539146013/d0ddd9b1-8935-45a0-9047-043d4590de0d.png)

使用了 `currentcolor` 後，如果我們需要各種不同顏色的按鈕，這時候只要更改按鈕的 `color` 屬性，邊框的顏色就會跟著變了。很方便吧！

---

## 2\. checkbox/radio 顏色：accent-color

我們雖然無法改變瀏覽器中預設 input 勾選框的樣子，但是我們可以使用 CSS 中的 `accent-color` 改變它們勾起來時的顏色，例如下面例子，我們將 radio 和 checkbox 改為紫色：

![CSS accent-color](https://cdn.hashnode.com/res/hashnode/image/upload/v1699540567686/6c51fabd-8849-4298-9f75-38c48c546fc1.png)

> DEMO 連結：[accent-color](https://codepen.io/im1010ioio/pen/bGzWVWN)

如果這還無法滿足你的需求，要如何客製 radio 和 checkbox，預計會在互動章節時說明。

---

## 3\. input 上的預設文字：`::placeholder`

在輸入框上常常有淺色的文字，提示使用者這個欄位是要輸入什麼內容。

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1724394504194/0622d4f4-d345-492b-8338-3ad44f3be327.png)

我們也可以使用 CSS 設定他的顏色或其他樣式：

```css
input::placeholder{
    color: Gainsboro;
    font-weight: bold;
}
```

> DEMO 連結：[Input placeholder](https://codepen.io/im1010ioio/pen/YzoLGGv)

---

## 4\. input 閃動的光標顏色：`caret-color`

關於 input 還有一個小細節可以設定，就當我們 focus 在 input 上時，會有一個一閃一閃的標示文字在哪裡的直線，這個稱作「光標（英文是 caret 或 blinking-cursor）」。

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1724383820171/54225fcb-65b1-472a-8806-b154f53f527d.gif)

我們可以使用 CSS 的 `caret-color` 設定在想要改變的 input 上，改變它的顏色：

```css
input {
    caret-color: #647AF1;
}
```

---

## 5\. 文字反白的顏色：`::selection`

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1724391175388/98757a37-c98a-4215-8576-0b876b795d0e.png)

如果想改變 CSS 中文字反白的顏色，我們可以使用 `::selection` 這個語法：

```css
/* 改變全域文字的反白顏色 */
::selection {
  color: gold;
  background-color: red;
}

/* 改變 p 標籤的反白顏色 */
p::selection {
  color: white;
  background-color: blue;
}
```

> DEMO 連結：[CSS highlighted text color -- ::selection](https://codepen.io/im1010ioio/pen/YzoLWyp)

---

## 6\. color-mix()

### 基本寫法

`color-mix()` 是一個很新的 CSS 設定顏色的方式，不過支援度已經 100%，可以試著使用看看。它能夠將兩個顏色混在一起，基本寫法如下：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1699542387617/8000662e-1980-4274-9f4d-ee53c9914fd7.png)

不同色彩空間的運算方式不同，所以會造成混色結果不同，關於色彩空間的基本介紹請看上一篇：[#31 CSS 顏色設定：基本的 hex、rgb()、cmyk()、hsl()、hsb() 、hwb() 與明日之星的 lch()、oklch()](https://im1010ioio.hashnode.dev/css-colors-hex-rgb-hsl-lch-oklch)。

### 建立色彩系統很方便

或許，你會想如果請設計師給我色碼就好了，為何還要這樣設定呢？因為有了 `color-mix()` 後，在要規劃色彩系統時，我們能夠很快地針對各種顏色，透過添加白色或黑色，建立起各種顏色的深淺變化。與設計師溝通時只需要討論需要明或暗幾趴就好。

舉個例子，假設網站的主色是紫色，可以這樣建立出同色系的深淺顏色：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1699543984761/b04200db-a185-4415-897f-7b01784b0cea.png)

```css
:root{
	--primary: #647AF1;
	--primary-light-50: color-mix(in srgb, var(--primary) 50%, white);
}
```

> DEMO 連結：[color system with CSS color-mix()](https://codepen.io/im1010ioio/pen/eYxWJVQ)

除了主色，警告的顏色、成功的顏色等等，也能透過這個方式建立出一整套的顏色。這樣設定顏色，就不會有脫離 VIS 視覺識別系統設計的問題。

當然，如果你會使用 SASS (SCSS) 或 LESS 等預處理器，可以更輕鬆地使用迴圈（for / loop）寫出來。

> 延伸閱讀：[color-mix() - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)

### 其他

關於其他顏色變化的方式，還有「相對顏色（Relative colors）」與 `color-contrast()`，只不過現在都還不支援（0%），所以這邊就先不贅述了，有興趣的話可以看看這篇文章：[Create a color theme with CSS Relative Color Syntax, CSS color-mix(), and CSS color-contrast()](https://www.bram.us/2021/04/28/create-a-color-theme-with-css-relative-color-syntax-css-color-mix-and-css-color-contrast/)

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](https://cdn.hashnode.com/res/hashnode/image/upload/v1682564435616/c15640fc-6cee-4c33-a898-9cd6820f165a.png)