---
title: "CSS block、inline、inline-block：網頁排版的御三家"
datePublished: Tue Oct 03 2023 03:05:43 GMT+0000 (Coordinated Universal Time)
cuid: cln9qm90b000909l8f3zvfkdl
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1766403329127/ef1c311e-6c92-49c2-bf90-8074636ee579.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1766403338151/6b179278-7954-4efb-8f87-78e6ca467635.png
tags: css3, css

sidebar:
  order: 5
---
![CSS block、inline、inline-block：網頁排版的御三家](https://cdn.hashnode.com/res/hashnode/image/upload/v1766403329127/ef1c311e-6c92-49c2-bf90-8074636ee579.png)

在 CSS 中，`display` 屬性是一個關鍵的屬性，它可以改變 HTML 元素在網頁中的顯示方式。本篇我們將學習三種常見的 `display` 屬性值：`block`、`inline` 和 `inline-block`，並了解它們的特性和使用情境。

> #### ↓ 今日學習重點 ↓
> 
> * 了解網頁上三種常見的 display 屬性：block、inline、inline-block
>     

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695955967084/ea5bc0e5-97d7-4b54-acc2-54b41afa817c.png)

---

## 1\. block

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695955980889/fe41a861-f2b9-4cc6-84cf-994e7b645d85.png)

Block 區塊級元素通常會單獨占據一行，佔據父層的整個寬度。我們在講解 HTML 時曾經有提過好幾種預設為 block 的 HTML 元素，如：div、h1 等等。

```css
.example-block {
    display: block;
}
```

### 一、Float 排版：讓 Block 能夠浮起來

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695955991271/71ea9ffa-e6cb-40fb-9c17-8a283239cb93.png)

block 如果加上 float 屬性可以浮起來，可以往左飄也可以往右飄，這在過去是最主流的排版方式之一，只不過 flex 出現後就減少了。

不過，如果父層裡全是浮起來的元素，父層會沒有自己的高度（因為孩子全部浮起來了）。

這個時候我們可以在 float 元素的後面，新增一個元素（可以使用偽類）設置 clear 屬性為 both，意思是清除兩邊的浮動，這樣父層的高度就能包含浮動元素（新建個東西把浮起來的孩子抓回地面的概念）。

```css
.child {
    float: left;
}

.parent::after {
    content: "";
    display: block;
    clear: both;
}
```

另外一種新方法則是：將父層設為 `display: flow-root`。

```css
.child {
    float: left;
}

.parent {
    display: flow-root;
}
```

> 延伸閱讀：[快速了解CSS display:flow-root声明 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2020/05/css-display-flow-root/)

### 2\. Float ：文繞圖

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695956005736/7dc5b2ed-f464-444c-a535-06ddca7a2b32.png)

利用 float 的特性，與 inline 元素放在一起，我們可以很輕鬆就做出文繞圖的版面。

### 3\. 使用 margin: auto 可左右置中

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696303333270/d2ce6d92-54eb-441e-8b6c-8e6b40245484.png)

當 block 元素有固定寬度時，而且 `margin` 的左右設為 `auto` 時，可以簡單達到左右置中效果。

---

## 二、inline

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695956046208/bb5c08e2-7263-4dc4-aaca-2946820ffec6.png)

inline 元素不會獨立占據一行，而是在同一行內與其他 inline 元素共享空間，並根據自身內容的大小進行調整。我們在講解 HTML 時曾經也有提過好幾種預設為 inline 的 HTML 元素，包括 `<span>`、`<a>`、`<strong>`、`<em>`、`<img>` 等。

```css
.example-inline {
  display: inline;
}
```

### 1\. 無法設置上下 margin

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695956018947/06e67521-f6fc-4f32-b78e-57d59e4a2290.png)

inline 的元素無法設置 margin 的上與下，但是 margin 的左右可以。而 padding 是都可以設置，但是垂直高度不會推開。

### 2\. 可以調整 vertical-align 與 line-height

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695956072982/9ad93a2a-8e66-4375-888b-5d4eda25a655.png)

雖然 inline 的元素無法使用 margin 調整自己的上與下，但是還有兩個屬性可以調整自己的垂直方向：

* `line-height`（行高），行高直接設定 1、2、3⋯⋯指的是倍數，除了倍數外也可以直接設定絕對單位。一般來說，文章的 `line-height` 設為 1.5 - 2，閱讀起來會比較舒服。
    
* `vertical-align` 是文字的對齊方式，預設是 `baseline`，它是字母底部的基線，如圖所示。
    

### 3\. inline 的細部設定

#### (1) text-align

`text-align` 決定文字排列的方向，可設置 `left`、`center`、`right`、`justify`。

#### (2) letter-spacing

`letter-spacing` 可調整文字的間距，這個間距是加在文字的後面。不過，講究的話，要注意如果搭配置中（如：`text-align: center;`），會因為這個間距而導致不是完全置中喔，如圖所示：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696310370977/3d91c645-11e1-4464-aca0-09e2ae80334a.png)

遇到這個情況，可以使用 `margin` 或 `padding` 作微調。當 `letter-spacing` 數值小時，可能會看不太出來，但是當數值越大偏移的感覺就會越明顯。

#### text-indent

`text-indent` 可設定文字首行縮排，設為負的就會變成凸排。

---

## 三、inline-block

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695956091903/0d3440b5-130f-4ec1-a4ff-f005453eb0b8.png)

inline-block 結合了 block 和 inline 的特性，它讓元素既能夠在同一行內排列，又能夠設置寬度、高度、margin 和 padding，也可以像 inline 一樣用父層設定 `text-align`，全部的內容就會往右、置中、往左排列。

```css
.container {
    text-align: right;
}

.example-inline-block {
    display: inline-block;
}
```

### 1\. 使用情境：icon

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695979487037/877cb1c9-5ee8-4751-be04-c0ee4131c49d.png)

inline-block 的特性這非常好用，最常使用情況在設定文字旁邊搭配 icon 的時候。

### 2\. 小提醒：關於縮排時的空白

我們在寫 html 的時候這些縮排排版都是空白，瀏覽器會把這重複的空白視為一個。

```xml
<div class="content-social">
    <div class="icon"></div>
    <div class="icon"></div>
    <div class="icon"></div>
</div>
```

若直接用 inline 或 inline-block 排版，就會多出這些空白，這時候可以於外層加上 font-size: 0; 消除空白。

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695983275169/3f5dba7d-4976-4568-88d2-84d4f1df7b61.png)

但是因為 CSS 字體預設會繼承爸爸的設定，如果裡面的子層要顯示文字，文字會一起不見，這時候要在子層內加回 `font-size` 設定。

如果講究間距的寬度，每次要這樣設定稍微有點麻煩。下篇我們將解釋 `flex`，可以更輕鬆完成版面排版。

---

雖然現在幾乎都使用 `flex` 排版了，但是了解 `block`、`inline` 和 `inline-block` 的特性，能夠讓你排版的時候更靈活，遇到一些特殊情況也許還會需要。大家也可以來練習看看傳統的排版方式。

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](../../../assets/images/donate.png)