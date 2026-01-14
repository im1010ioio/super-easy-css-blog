---
title: "SASS/SCSS (8) 邏輯 @if, @each, @for 與 @while"
datePublished: Thu Oct 09 2025 16:07:00 GMT+0000 (Coordinated Universal Time)
cuid: cmgjm1sr9000102l180luej0o
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1766736107046/6dbad666-4681-4c3f-a48e-2c76a2dd54e8.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1766736113464/a3fb7325-adb4-4b15-9ec0-f1fcfeacc465.png
tags: css3, css, sass, scss

sidebar:
  order: 8
---
![SASS/SCSS (8) 邏輯 @if, @each, @for 與 @while](https://cdn.hashnode.com/res/hashnode/image/upload/v1766736107046/6dbad666-4681-4c3f-a48e-2c76a2dd54e8.png)

今天，我們來介紹 SCSS 中最像「程式語言」的部分——SCSS 的控制指令 (Control Directives)，它們能讓你的樣式擁有真正的「邏輯」，根據條件、迴圈來自動生成樣式，也就是所謂的：

* `@if`**：如果 A 否則 B**
    
* `@each`**：處理「每一個」重複**
    
* `@for`**：由數字跑迴圈**
    
* `@while`**：條件成立就不斷循環**
    

---

## 一、`@if`：如果 A 否則 B

`@if` 就如同其他程式語言中的 `if/else` 判斷式，它允許你根據一個條件是否成立，來決定要套用哪一段樣式。這在建立可自訂主題或樣式的 Mixin 時特別有用。

### 1\. 語法

```scss
@if 條件 {
    ...
} @else if 條件 {
    ... 
} @else {
    ...
}
```

### 2\. 應用範例

讓我們來建立一個可以根據主題模式 (`light` 或 `dark`) 來改變文字顏色的 Mixin：

```scss
// SCSS
@mixin theme-text-color($theme) {
    @if $theme == dark {
        // 如果傳入的 $theme 是 'dark'
        color: #ffffff; // 文字變白色
        background-color: #333333;
    } @else if $theme == light {
        // 如果傳入的 $theme 是 'light'
        color: #333333; // 文字變深灰色
        background-color: #ffffff;
    } @else {
        // 如果都不是
        color: #666666; // 預設為灰色
        background-color: #eeeeee;
    }
}

.dark-mode {
    @include theme-text-color(dark);
}

.light-mode {
    @include theme-text-color(light);
}
```

**編譯後的 CSS：**

```css
/* CSS */
.dark-mode {
    color: #ffffff;
    background-color: #333333;
}

.light-mode {
    color: #333333;
    background-color: #ffffff;
}
```

---

## 二、`@each`：處理「每一個」重複

當你需要為一系列相似的元素（例如社群媒體圖示、顏色按鈕）設定樣式時，`@each` 就很好用！

它能「遍歷」一個列表 (List) 或類似物件 (Map) 資料格式（之後會再詳細介紹）中的每一個項目，並為其生成對應的樣式，讓你告別複製貼上的惡夢。

### 1\. 語法

```scss
@each $item in $list { ... }

// 或

@each $key, $value in $map { ... }
```

### 2\. 應用範例

假設我們要為幾個不同顏色的按鈕產生對應的 class，這邊使用了 SCSS Map 資料格式：

```scss
// SCSS
@use "sass:color";

// 使用 Map (鍵值對) 來儲存按鈕名稱和顏色
$button-colors: (
    "primary": #3498db,
    "success": #2ecc71,
    "danger": #e74c3c,
);

// 使用 @each 遍歷 $button-colors 這個 Map
@each $name, $color in $button-colors {
    // #{} 用來將變數嵌入選擇器名稱中
    .btn-#{$name} {
        background-color: $color;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;

        &:hover {
            background-color: color.adjust($color, $lightness: 10%); // hover 時將顏色調亮
        }
    }
}
```

**編譯後的 CSS：**

`@each` 會自動幫我們產生三個完整的按鈕樣式：

```css
/* CSS */
.btn-primary {
    background-color: #3498db;
    /* 略... */
}
.btn-primary:hover {
    background-color: #5faee3;
}

.btn-success {
    background-color: #2ecc71;
    /* 略... */
}
.btn-success:hover {
    background-color: #54d98c;
}

.btn-danger {
    background-color: #e74c3c;
    /* 略... */
}
.btn-danger:hover {
    background-color: #ed7669;
}
```

---

## 三、`@for`：由數字跑迴圈

`@for` 是迴圈，會依據你的數字跑很多次，每次都帶入不同的數字進去，並且最後產出每次跑的結果。

SCSS 中的 `@for` 通常可以用在格線系統、有順序的動畫延遲（`animation-delay`、`transition-delay`）等等要重複依序撰寫的部分。

### 1\. 語法

```scss
// 包含結尾
@for $i from 開始 through 結尾 { ...}

// 不包含結尾
@for $i from 開始 to 結尾 { ...}
```

### 2\. 應用範例 1

讓我們來用 `@for` 快速建立一個 12 欄位的格線系統中，用來設定欄寬的 class：

```scss
// SCSS
@use "sass:math";

.row {
    display: flex;
}

// 從 1 跑到 12
// $i 指的是每一次的數字
@for $i from 1 through 12 {
    .col-#{$i} {
        // 計算每一欄的寬度百分比
        width: math.div(100%, 12) * $i;
    }
}
```

**編譯後的 CSS：**

SCSS 會自動幫你產生 `.col-1` 到 `.col-12` 所有 class，並計算好寬度。

```css
/* CSS */
.row {
    display: flex;
}

.col-1 {
    width: 8.3333333333%;
}

.col-2 {
    width: 16.6666666667%;
}
/* ... 以此類推 ... */
.col-12 {
    width: 100%;
}
```

### 3\. 應用範例 2

再一個常見的例子，用 `@for` 搭配 `animation-delay` 讓清單項目一個個淡入出現。

```scss
// SCSS 
// 定義一個名為 'fade-in' 的動畫 
@keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0);    }
}

.list-item {
    opacity: 0; // 預設先隱藏
    animation: fade-in 0.5s ease-in-out forwards; // forwards 讓動畫停在最後一格
}

// 假設我們最多有 5 個清單項目
@for $i from 1 through 5 {
    // 使用 :nth-child() 來選取每一個 li
    .list-item:nth-child(#{$i}) {
        // 每個項目的動畫延遲時間為 (i - 1)  0.2 秒
        animation-delay: ($i - 1)  0.2s;
    }
}
```

**編譯後的 CSS：**

SCSS 會依序為每個 `.list-item` 產生對應的 `animation-delay`，創造出依序出現的效果，這樣就不用自己手動一個個設定 `animation-delay` 了。

```css
/* CSS */
@keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0);    }
}

.list-item {
    opacity: 0;
    animation: fade-in 0.5s ease-in-out forwards;
}

.list-item:nth-child(1) { animation-delay: 0s;   }
.list-item:nth-child(2) { animation-delay: 0.2s; }
.list-item:nth-child(3) { animation-delay: 0.4s; }
.list-item:nth-child(4) { animation-delay: 0.6s; }
.list-item:nth-child(5) { animation-delay: 0.8s; }
```

---

## 四、`@while`：條件成立就不斷循環

`@while` 是比較少用到的迴圈，它的作用是當指定的條件為 `true` 時，就不斷重複執行某段樣式碼。

所以，**使用它時要特別小心**，要確定迴圈內有條件能讓最後結果變為 `false`，否則會造成「無限迴圈」，最後會讓編譯器當掉。

### 1\. 語法

```scss
@while 條件 {
    ...
    讓條件改變，讓他有結束的時候
}
```

### 2\. 應用範例

想讓標題 `<h1>` 到 `<h6>` 的字體大小，從 `1.25rem` 開始，每級遞增 `0.5rem`。

```scss
// SCSS
$headings: 6; // 我們有 6 個層級的標題
$base-heading-font-size: 1.25rem;

@while $headings > 0 {
    h#{$headings} {
        font-size: $base-heading-font-size + (0.5rem * (6 - $headings));
    }

    // 每跑一次，$headings 的數字就減 1，
    // 當他減為 0 時，不符合開頭的條件，@while 就會停止了
    $headings: $headings - 1; 
}
```

**編譯後的 CSS：**

```css
/* CSS */
h6 { font-size: 1.25rem; }
h5 { font-size: 1.75rem; }
h4 { font-size: 2.25rem; }
h3 { font-size: 2.75rem; }
h2 { font-size: 3.25rem; }
h1 { font-size: 3.75rem; }
```

---

雖然之前看到，原生的 CSS 也將有一點邏輯判斷的規劃 `if()`，但是還未全面支援（[Can I Use](https://caniuse.com/css-if)），而且也不如目前 SASS/SCSS 的完整，有 `@if`、`@each`、`@for` 與 `@while` 這幾種常用的。

想要寫程式讓樣式的 Code 可以少寫一點，目前還是得要要靠像 SASS/SCSS 這樣的 CSS 預處理器。  
快來試著好好善用他們吧！讓你的樣式變得簡潔又容易維護。

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](https://cdn.hashnode.com/res/hashnode/image/upload/v1682564435616/c15640fc-6cee-4c33-a898-9cd6820f165a.png)