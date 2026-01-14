---
title: "#25 CSS 列印的小技巧：@media print、break-before/after/inside、@page"
datePublished: Tue Oct 10 2023 18:13:13 GMT+0000 (Coordinated Universal Time)
cuid: clnkn49dw000909jickb1e272
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1766033052075/447f7703-eb3e-40e9-ac24-e634abde27e6.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1766033063900/0cf3fa03-e692-43ed-af1c-1b4630896e02.png
tags: css3, css

sidebar:
  order: 2
---

網頁需要列印的情況，通常是一些表單頁面（收據、報告等）。上一篇我們講解了 CSS Media Queries，這篇我們要延伸來討論網頁列印時的情況。

> #### **↓ 今日學習重點 ↓**
> 
> * 了解如何設定列印樣式
>     
> * 了解如何防止元素換頁時被截半
>     
> * 了解如何處理列印頁面
>     

使用 Media Query 的 print 就能夠設定列印的樣式，以下有一些小技巧分享給大家。

```css
/* 當裝置是列印時，側邊欄不顯示 */
@media print {
    aside {
        display: none;
    }
}
```

---

## 1\. 開發者工具的列印模擬（以 Chrome 為例）

如果我們希望模擬列印時的樣式，可以使用開發者工具，以 Chrome 為例，按「點點點 &gt; More tools &gt; Emulate CSS media」，如下圖所示：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696848376698/eee0ee1d-b3f9-4c24-9e44-48e9ebcd7f09.png)

> 中文版是：點點點 &gt; 更多工具 &gt; 算繪 &gt; 模擬 CSS 媒體類型

---

## 2\. 預設 CSS 背景（`background`）無法列印

在瀏覽器中列印時，CSS 的背景色、背景圖預設會無法顯示，需要在要列印背景圖的元素上加上 `print-color-adjust: exact;`，而目前 Chrome, Edge, Opera 需要加上前綴 `-webkit-`。

```css
header {
    background-color: #ffa;
    /* 列印背景色或背景圖需要加入以下 CSS： */
    print-color-adjust: exact;
	-webkit-print-color-adjust: exact; /* for Chrome, Edge, Opera */
}
```

---

## 3\. 換頁設定：`break-before/after`

設定 `break-before: page;` 或 `break-after: page;` ，可以設定在元素的前或後強制換頁。

```css
.break-before { break-before: page; }
.break-after  { break-after: page; }
```

> 過去是使用 `page-break-before: always;` 與 `page-break-after: always;` 屬性，但現已被換為我們上面介紹的 `break-before: page;` 與 `break-after: page;` 屬性。
> 
> 延伸閱讀：[break-after - CSS: Cascading Style Sheets | MDN (](https://developer.mozilla.org/en-US/docs/Web/CSS/break-after)[mozilla.org](http://mozilla.org)[)](https://developer.mozilla.org/en-US/docs/Web/CSS/break-after)

---

## 4\. 防止元素換頁時被截兩半：`break-inside`

如果我們不希望換頁時 HTML 元素被截兩半，可以加上 `break-inside: avoid;` ，遇到在一頁內無法完全顯示時，就會換頁避免截半。

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696961079834/80f53aad-d91f-46b2-8f91-f457f79fef5f.png)

```css
.content {
    break-inside: avoid;
}
```

> 過去是使用 `page-break-inside: avoid;` 屬性，但現已被換為我們上面介紹的 `break-inside: avoid;` 屬性。
> 
> 延伸閱讀：  
> [break-inside - CSS: Cascading Style Sheets | MDN (](https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside)[mozilla.org](http://mozilla.org)[)](https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside)  
> [其實Css的內心還住著一位Print - iT 邦幫忙](https://ithelp.ithome.com.tw/articles/10198913)

---

## 5\. 設定頁面資訊：`@page`

透過 `@page` 可以設定 `margin`、`size`（尺寸及方向），還可以使用偽類選取特定頁面：

```css
/* 所有頁面 */
@page {
	size: A4 landscape;
	margin-top: 0;
	margin-left: 2cm;
}

@page :first  { margin-top: 25%;  } /* 第一頁 */
@page :left   { margin-left: 25%; } /* 雙數（裝訂的左側頁面） */
@page :right  { margin: 0;        } /* 單數（裝訂的右側頁面） */
```

其中 `size` 可以設定的常見尺寸有：A5、A4、A3、B5、B4 等；而可以設定的方向有：自動（`auto`）、橫向（`landscape`）、直向（`portrait`）。

> 延伸閱讀：[size - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@page/size)

---

## 6\. Safari 列印時的小陷阱

前陣子在 Mac Safari 上列印時發現有奇怪的狀況，用上述的 `break-before/after` 或 `page-break-before/after` 的語法都會有奇怪的換頁方式，或出現不明所以的空白。

後來測試了一陣子，終於解開了這個問題，以下給大家一些小建議：

1. 列印範圍盡量外層不要 `overflow: hidden;` ，也許是因此造成高度的誤判 (不確定)
    
2. 不要設為 `display: flex;` + 垂直置中
    
3. `break-inside` 或 `page-break-inside` 有時可以，有時不行 😢
    

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](https://cdn.hashnode.com/res/hashnode/image/upload/v1682564435616/c15640fc-6cee-4c33-a898-9cd6820f165a.png)