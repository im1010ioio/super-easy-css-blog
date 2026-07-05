---
title: "用 CSS border 繪製三角形箭頭 (等腰/直角三角形)"
datePublished: Sun Sep 22 2024 15:07:17 GMT+0000 (Coordinated Universal Time)
cuid: cm1dpplyg004w09l798fnehva
ogImage: https://css.im1010ioio.dev/og-images/css-border-triangle.png
tags: css3, css, triangle, border

sidebar:
  order: 6
---
![用 CSS border 繪製三角形箭頭 (等腰/直角三角形)](/og-images/css-border-triangle.png)

在 CSS 中，可以使用邊框 `border` 來繪製三角形，通常會被當成箭頭使用，用在提示框的邊緣或操作步驟按鈕上。

![](../../../assets/images/gradients-shapes/3371caf9_c834_4c8d_b47f_b1e145e8fa79_1783261093637.png)

> #### **↓ 今日學習重點 ↓**
> 
> * 學會用 `border` 繪製等腰與直角三角形
>     

---

## CSS `border` 三角形原理

首先我們先來觀察 CSS `border`，讓我們把一個正方形的邊框加粗，而且把四邊的顏色換成不一樣的：

![](../../../assets/images/gradients-shapes/ecde6883_ad99_4a7d_8044_b1e2dd8b41d0_1783261093650.png)

我們會發現邊框與邊框之間會變成斜線的形狀，區隔出兩種顏色。

這時候如果我們再把這個方形的寬高設為零看看：

![](../../../assets/images/gradients-shapes/91ac9be0_5bdd_401f_8872_fbc72d9c2879_1783261093664.png)

```css
.tri {
    height: 0px;
    width: 0px;
    border-top: 50px solid #F28095;
    border-left: 50px solid #99F2C8;
    border-right: 50px solid #FDD478;
    border-bottom: 50px solid #7ABFDE;
}
```

你會發現，我們得到了 4 個三角形。有了這 4 個三角形，我們就能夠畫出等腰三角形和直角三角形，只要我們把不需要的地方改為透明或是 0 就行了。

> DEMO: [CSS Triangle](https://codepen.io/im1010ioio/pen/jOjXwBP)

---

## 等腰三角形

要繪製「向上」的等腰三角形，我以下方的邊框為主，設定想要的顏色與寬度大小；接著左右兩邊的邊框設定一樣的寬度並且為透明（不一樣寬就會是歪斜的三角形）；我們不需要上方的邊框，所以不去設定它；這樣就完成了，而反之亦然，可以參考下圖。

![](../../../assets/images/gradients-shapes/dc2713d4_720a_4af0_b5d3_662159b7d842_1783261093677.png)

```css
.tri {
    height: 0px;
    width: 0px;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 50px solid #328fa8;
 }
```

---

## 直角三角形

要繪製「直角位於左上」的直角三角形，我們需要上方與左方的邊框，設定想要的寬度與顏色後，其他的邊框都不需要，所以不用設定，這樣就完成囉！其他的直角設定方式都一樣，可以參考下圖：

![](../../../assets/images/gradients-shapes/516ae452_4f18_4e44_8738_14c6869f3d51_1783261093689.png)

```css
 .tri {
    height: 0px;
    width: 0px;
    border-top: 50px solid #328fa8;
    border-right: 50px solid transparent;
 }
```

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](../../../assets/images/donate.png)