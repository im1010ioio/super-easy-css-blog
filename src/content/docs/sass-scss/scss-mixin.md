---
title: "SASS/SCSS (4) Mixins @mixin & @include"
datePublished: Mon Oct 06 2025 16:04:32 GMT+0000 (Coordinated Universal Time)
cuid: cmgfbn2ld000002ji8pvyehrv
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1766722530282/c1c3ef52-9431-400b-a23f-782364b83a8f.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1766722541326/8d502917-cef3-4caf-8fa1-5bba74e2e40e.png
tags: css3, css, sass, scss, mixin, mixins

sidebar:
  order: 4
---
![SASS/SCSS (4) Mixins @mixin & @include](https://cdn.hashnode.com/res/hashnode/image/upload/v1766722530282/c1c3ef52-9431-400b-a23f-782364b83a8f.png)

好的，我們已經學會了如何用變數來管理重複的數值，以及如何用 Partials 來組織我們的檔案結構。現在，我們要來學習一個更強大的功能，解決「重複撰寫一大段樣式碼」的問題，它就是 Mixin！

---

## 一、Mixin 是什麼？

在寫 CSS 的過程中，你一定會遇到某些樣式組合需要不斷重複使用的情況。例如：置中一個元素的 Flexbox 寫法、寬度與高度、清除浮動的樣式，或是特定的按鈕風格等等。如果每次都手動複製貼上，不僅麻煩，未來要修改時還得一個個找出來改，非常沒有效率。

`@mixin` 語法可以把一大段常用的樣式宣告打包起來，然後在任何你需要的地方，用一行簡單的指令 `@include` 就把它們全部「呼叫」進來。

* `@mixin`： 用來**定義**一個樣式組合包。
    
* `@include`： 用來**使用**這個你定義好的樣式組合包。
    

---

## 二、Mixin 基本用法

讓我們來看一個最簡單的例子：Flex 的水平垂直置中，非常經常出現，這時候我們可以考慮把它做成 Mixin。

### **1\. 首先，使用** `@mixin` 來定義它

```scss
// SCSS
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### **2\. 接著，在需要的地方用** `@include` 來使用它

```scss
// SCSS
.container {
    @include flex-center;
    height: 100vh;
}

.card {
    @include flex-center;
    width: 300px;
}
```

### **3\. 編譯後的 CSS**

SCSS 編譯後，`@include flex-center;` 這段就會被剛剛的 Mixin 所取代。

```css
/* CSS */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
}
```

這樣只要定義一次，就可以無限次重複使用！

---

## 三、Mixin 的傳入參數 (Arguments)

Mixin 的強大之處不僅於此。它還可以讓你「傳入參數」，就像其他程式語言 Function 的參數一樣，把不同的值傳進來，讓你的樣式變得更靈活。好比做成一台果汁機，都是打成果汁：丟進蘋果，就產出蘋果汁，丟進橘子，就產出橘子汁。

### 1\. 傳入參數的用法

例如，我們想建立一個可以自訂大小和顏色的圓形 Mixin。

```scss
// SCSS
// 定義 mixin 並設定接收 $size 和 $bg-color 兩個參數
@mixin circle($size, $bg-color) {
    width: $size;
    height: $size;
    background-color: $bg-color;
    border-radius: 50%;
}
```

在使用時，我們就可以傳入不同的值，來產生各種不同的圓形樣式。

```scss
// SCSS
.avatar {
    @include circle(100px, #f1c40f);
}

.status-dot {
    @include circle(10px, #2ecc71);
}
```

### **2\. 編譯後的 CSS**

```css
/* CSS */
.avatar {
    width: 100px;
    height: 100px;
    background-color: #f1c40f;
    border-radius: 50%;
}

.status-dot {
    width: 10px;
    height: 10px;
    background-color: #2ecc71;
    border-radius: 50%;
}
```

### 3\. 設定參數的預設值

你也可以為參數設定「預設值」。如果在 `@include` 時沒有傳入該參數的值，就會自動使用這個預設值。

```scss
// SCSS
// 幫 $bg-color 設定預設值為 #3498db (藍色)
@mixin circle($size, $bg-color: #3498db) {
  width: $size;
  height: $size;
  background-color: $bg-color;
  border-radius: 50%;
}

.big-circle {
  // 只傳入 $size，顏色會使用預設的藍色
  @include circle(200px);
}
```

---

## 四、實用範例：用 Mixin 管理 RWD 斷點

Mixin 最經典也最受歡迎的應用之一，就是用來管理響應式設計 (RWD) 的媒體查詢 (Media Queries)。手動寫 `@media (min-width: ...px)` 非常繁瑣且容易出錯。

而且目前 Media Queries 斷點的數值還不能使用原生 CSS 的變數（聽說有在規劃中），但是 SCSS 可以，使用 SCSS 變數與 Mixin 管理斷點會讓 Code 變得很乾淨。

我們可以把不同的裝置斷點定義成 Mixin。

### 1\. `@mixin` 與 `@content` 的用法

```scss
// SCSS

// 先用變數定義斷點寬度
$tablet-width: 768px;
$desktop-width: 1024px;

// 定義 tablet 的 mixin
@mixin tablet {
    @media (min-width: $tablet-width) {
        @content;
    }
}

// 定義 desktop 的 mixin
@mixin desktop {
    @media (min-width: $desktop-width) {
        @content;
    }
}
```

這裡的 `@content` 是一個特殊的指令，它會將你稍後在使用 Mixin 時，額外傳入的樣式區塊內容，放到 `@content` 所在的位置。

### **2\. 使用起來會像這樣**

```scss
// SCSS
.container {
    padding: 15px; // 手機版的樣式

    @include tablet {
        // 平板版的樣式會被放到 @content 的位置
        padding: 30px;
    }

    @include desktop {
        // 電腦版的樣式
        padding: 50px;
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

### **3\. 編譯後的 CSS**

```css
/* CSS */
.container {
  padding: 15px;
}

@media (min-width: 768px) {
  .container {
    padding: 30px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 50px;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

透過 Mixin，這樣 CSS 的 Code 是不是變得更簡潔又易懂了呢？  
大家也快去試試看吧！在開發時，就可以邊整理屬於你自己的各種 Mixin。

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](https://cdn.hashnode.com/res/hashnode/image/upload/v1682564435616/c15640fc-6cee-4c33-a898-9cd6820f165a.png)