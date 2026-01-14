---
title: "#21 CSS Position：relative、absolute、fixed、sticky 找到適合的定位"
datePublished: Fri Oct 06 2023 17:52:21 GMT+0000 (Coordinated Universal Time)
cuid: clnewm11p000708jv6mh336es
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1765897799340/41ae494f-ba78-4877-949f-4c3b5f386ff5.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1696614691577/b27aac34-1eb6-4149-91c9-82d1dd269fe3.png
tags: css3, css, css-position

sidebar:
  order: 9
---

CSS Position 屬性可以用來設定元素在網頁中的位置，也是必學的屬性之一。  
它主要有 5 個定位方式：`static`、`relative`、`absolute`、`fixed` 和 `sticky`。

> #### **↓ 今日學習重點 ↓**
> 
> * 了解 5 種 CSS Position 定位方式
>     
> * 了解 z-index
>     

---

## 1\. 靜態定位（`static`）

靜態定位是元素的預設值，通常不需要特別指定。元素會按照正常 HTML display 的 flow 排列（如：`block`、`inline`、`inline-block`、`flex`、`grid`、`margin`、`padding` 等），這些特性我們之前的文章都有介紹過。

```css
.static-item {
    position: static;
}
```

---

## 2\. 相對定位（`relative`）

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696609022655/ecc911aa-a923-4d2d-9439-00cb3c7d5e8b.png align="center")

元素設定為相對定位後，基本上還是依照正常的 flow 排列，不過你可以使用上下左右（`top`、`bottom`、`left` 和 `right`）屬性來微調它的位置，它會依據自己本來所在的位置「相對地」改變位置。

此外，因為設定 `relative` 後，沒有設定上下左右的話，基本上不會有任何對於畫面的影響，所以常常也被當成「被其他定位為方式依據」的設定。

```css
.relative-item {
    position: relative;
    top: 10px;
    left: 20px;
}
```

---

## 3\. 絕對定位（`absolute`）

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696784663813/e2503880-56ca-4b0d-b985-a2a4af7a5384.png align="center")

設為絕對定位的元素，會依據「父層中距離自己最近有定位的元素」定位，也就是除了 `static` 以外的定位屬性都可以作為定位的對象。要注意，它是找離自己最近的，當網頁規模很多層時容易出錯，所以要規劃好 HTML 中元素之間的關係。

如果都沒有有定位的元素的話，它會依據瀏覽器視窗（`viewport`）大小定位。

```css
.container {
    position: relative;

    .absolute-item {
        position: absolute;
        top: 50px;
        left: 100px;
    }
}
```

---

## 4\. 固定定位（`fixed`）

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696612845672/991b06f7-1f93-43df-8124-40a9923b8c92.png align="center")

設為固定定位的元素，將依據「瀏覽器的視窗大小（`viewport`）」進行定位，即使頁面滾動，也會保持固定的位置。

```css
.fixed-item {
    position: fixed;
    top: 50px;
    left: 100px;
}
```

最常見的應用，就是運用在回到頂端的按鈕或廣告上：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696608379479/4430f81b-e020-43fb-b3e9-f41a24d34080.png align="center")

### 固定定位（`fixed`）+ `filter`/`backdrop-filter` 的陷阱

如果 fixed 項目的父層上有 `filter` 或 `backdrop-filter` 屬性，該 fixed 項目就不會依據「瀏覽器的視窗大小」進行定位，而是依據「該 HTML 的父層」定位。

雖然我有點忘記當初是因為什麼版型，遇到這樣的陷阱，  
但我這邊可以做個實例給大家參考看看：

> [Conflict between fixed item and filter (backdrop-filter)](https://codepen.io/im1010ioio/pen/VwoLvey)

\*\*解法：\*\*改變 `filter` 的元素，或是改使用 `sticky` 做到類似效果。

> 延伸閱讀：
> 
> [#46 CSS 特效：濾鏡 filter 與可以製作毛玻璃效果的 backdrop-filter](https://im1010ioio.hashnode.dev/css-filter-backdrop-filter)  
> [filter与fixed冲突的原因及解决方案 - 掘金](https://juejin.cn/post/6844904117974859783)

---

## 5\. 黏貼定位（`sticky`）

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696613151095/75058ba8-4465-4b54-a60d-0c2bf15951f1.png align="center")

當元素被設為黏貼定位的元素時：

* 它的「左右」會依據「父層中距離自己最近有定位的元素」定位，
    
* 它的「上下」會依據正常的 flow 排列；
    
* 不過，在畫面滾動時它的「上下」會依據「瀏覽器的視窗大小（`viewport`）」定位，
    
* 如果畫面滾到父層之外，則會一起被滾離視窗範圍。
    

光有說的有難表達，實際效果請參考 DEMO，會有更清楚的了解：

> [DEMO 連結：Position Sticky](https://codepen.io/im1010ioio/pen/OJrarNm)

```css
.container {
    position: relative;

    .sticky-item {
        position: sticky;
        top: 50px;
        left: 100px;
    }
}
```

和絕對定位一樣，它是找離自己最近的，當網頁規模很多層時容易出錯，所以要規劃好 HTML 中元素之間的關係。

這個屬性非常好用，適合應用在標題，或是表格中的表頭：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696611389076/6ec0d9d1-488d-4779-b8fd-1e67ba2b9bb0.png align="center")

或是一些特殊的設計：

> 例如，這個網站的日期標題設計：[Sidebar](https://sidebar.io/)

### 黏貼定位（`sticky`）的陷阱

> 如果在 `<table>` 中的元素設定了 `sticky`，它的邊框（`border`）將無法一起跟著滾動，會造成 `sticky` 的東西與其他它底下的東西沒有格線區隔。
> 
> [DEMO 連結：Sticky thead](https://codepen.io/im1010ioio/pen/xxmQmvO)
> 
> 解法：使用 `box-shadow` 或 `::before` / `::after` 製作邊框。

---

## 6\. z-index

有使用到定位的元素（除了的 `static` 以外），有可能會有前後重疊的情況，這時候我們可以透過 `z-index` 屬性設定他們的前後關係，`z-index` 的值設定數字就可以了，預設是 `auto`。而他的規則是：

* 數字越大越前面；
    
* 如果數字一樣，後面的在前面。
    

```css
.fixed-item {
    position: fixed;
    top: 50px;
    left: 100px;
    z-index: 1;
}
.absolute-item {
    position: absolute;
    top: 50px;
    left: 100px;
    z-index: 1;
}
.sticky-item {
    position: sticky;
    top: 50px;
    left: 100px;
    z-index: 2;
}
```

Edge 的開發者偵錯工具，有酷炫的 3D View 可以參考網頁中的前後關係：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696614484749/aadd1e46-781b-41fd-9212-8b56f82eb8bc.png align="center")

> 延伸閱讀：[z-index - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index)

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](https://cdn.hashnode.com/res/hashnode/image/upload/v1682564435616/c15640fc-6cee-4c33-a898-9cd6820f165a.png align="center")