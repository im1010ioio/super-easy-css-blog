---
title: "SASS/SCSS (9) 函式 (Function) - 打造你自己的工具箱"
datePublished: Fri Oct 10 2025 17:06:57 GMT+0000 (Coordinated Universal Time)
cuid: cmgl3mqtg000802k48q861ayt
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1766736584812/e8e8c676-ffe4-46b7-b0bf-dcabb164b021.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1766736592190/f7fb270a-6e28-4b3f-abbb-db29f8b170ea.png
tags: css3, css, sass, scss

sidebar:
  order: 9
---
![SASS/SCSS (9) 函式 (Function) - 打造你自己的工具箱](https://cdn.hashnode.com/res/hashnode/image/upload/v1766736584812/e8e8c676-ffe4-46b7-b0bf-dcabb164b021.png)

我們已經一路學習了 SCSS 的變數、顏色、邏輯判斷與迴圈等等，你可能已經覺得 SCSS 非常強大了。但今天，我們要來認識 SCSS 中一個更厲害的用法：Function 函式。

Function 能讓你為你的樣式打造屬於你自己的工具。

假設，你經常需要做一些重複性的計算，或要根據不同的輸入產生特定的樣式。每次都要重寫一遍，那這樣就會很難維護。這時候，Function 就可以派上用場了！

---

## 一、Function 函式是什麼？

Function 是一段可以重複使用的 code。它可以接收一些參數，執行特定的操作，然後回傳一個結果。

這個結果可以是任何 SCSS 支援的資料型別，例如數字、顏色、字串、布林值 (是否)，或是是 List 列表、Map。Function 有以下好處：

* **重複利用**：將常用的計算或邏輯封裝成函式，可以在 Code 中的任何地方重複呼叫，避免重複撰寫。
    
* **抽象化，變得好讀**：  
    當你將複雜的邏輯抽象成一個有意義的函式名稱時，你的 Code 會更容易讓人理解。將底層的實現細節隱藏起來，你只需要知道函式能做什麼，而不需要關心它是怎麼做的。
    
* **好維護**：如果需要修改某個計算的邏輯，只需要修改那個 Function，所有有用到的地方都會自動更新，大大降低維護成本。
    

### 1\. 語法

在 SCSS 中，它的基本語法如下：

```scss
@function 函式名稱($參數1, $參數2: 參數2預設值, ...) {
    // 執行一些操作
    @return 結果;
}
```

* `函式名稱`：  
    你需要為你的函式取一個有意義的名稱。
    
* `$參數`：Function 可以接受零個或多個參數。每個參數都需要以 `$` 符號開頭，就像變數一樣。
    
* `@return`：  
    Function 必須使用 `@return` 關鍵字來回傳一個結果。如果沒有回傳值，這個 Function 就不會產生任何有用的結果。
    

### 2\. 預設參數與可變參數

#### (1) 預設參數

另外，跟 Mixin 一樣，也可以給參數預設值，如果不傳值這個參數就會套用預設值。  
寫法是緊接著這個參數，使用冒號 `:` 隔開，例如 `$參數2: 參數2預設值`。

#### (2) 可變參數 (Arbitrary Arguments List)

SCSS Function 也支援可變參數，意思是可以傳入任意數量的參數給 Function。  
這在處理列表 List 或未知的數量時特別有用。我們使用 `...` 來表示可變參數。

```scss
@function sum($numbers...) {
    $total: 0;
    @each $number in $numbers {
        $total: $total + $number;
    }
    @return $total;
}

.box {
    width: sum(10px, 20px, 5px); // 傳入三個參數
    height: sum(1em, 2em); // 傳入兩個參數
}
```

編譯後的 CSS：

```css
.box {
    width: 35px;
    height: 3em;
}
```

這個`sum` Function 可以接收任意數量的數字，並將它們加總回傳。

---

## 二、**Function** 與 Mixin 的差異？

你可能會覺得 Function 和我們之前學過的 Mixin 有點像，它們都能讓我們重複利用 SCSS Code。  
但它們之間有一個關鍵的區別：

* **Function** `@function`：  
    一定會 `@return` **回傳一個值**。多用於計算、處理數據。
    
* **Mixin** `@mixin`：  
    **複製貼上一段 CSS 程式碼**。多用於生成一大段 CSS，需要 `@include` 使用。
    

---

## **三、應用範例**

讓我們來看一些實用的例子，會更清楚它適合用在哪裡。

### **1.** `px` 轉 `em`

假設我們常常需要將 `px` 像素轉換成 `em`。

```scss
// 定義一個 Function，將 px 轉換為 em
@function pxToEm($pixels, $base-font-size: 16px) {
    @return $pixels / $base-font-size * 1em;
}

// 使用 Function
.element {
    font-size: pxToEm(24px); // 將 24px 轉換為 em
    padding: pxToEm(10px) pxToEm(20px); // 同時轉換 padding
}
```

這樣，編譯後的 CSS 會是這樣：

```css
.element {
    font-size: 1.5em;
    padding: 0.625em 1.25em;
}
```

在這個例子中，`pxToEm` 函式接收兩個參數：

* `$pixels` 是要轉換的像素值，
    
* `$base-font-size` 是一個可選參數，它有一個預設值 `16px`。如果我們在呼叫函式時沒有提供 `$base-font-size`，它就會使用預設值。
    

### **2.** 針對背景色，調整文字為淺色或深色

SCSS 內建了許多強大的顏色函式，但你也可以建立自己的顏色處理函式，以滿足特定的設計需求。

假設我們想根據傳入的顏色，自動判斷是深色還是淺色，然後回傳適合的文字顏色（白色或深色），讓文字永遠保持清楚、好讀。

```scss
@function set-text-color($color) {
    $red: red($color);
    $green: green($color);
    $blue: blue($color);

    // 亮度公式 (基於 ITU-R BT.709)
    $brightness: (($red * 0.2126) + ($green * 0.7152) + ($blue * 0.0722));

    @if $brightness > 180 {
        // 假設 180 是亮色的閾值
        @return #333; // 淺色背景，使用深色文字
    } @else {
        @return #fff; // 深色背景，使用白色文字
    }
}

.button {
    background-color: #3f51b5; // 一個深藍色
    color: set-text-color(#3f51b5);
}

.alert {
    background-color: #ffeb3b; // 一個亮黃色
    color: set-text-color(#ffeb3b);
}
```

這樣，編譯後的 CSS 會像這樣：

```css
.button {
    background-color: #3f51b5;
    color: #ffffff;
}

.alert {
    background-color: #ffeb3b;
    color: #333333;
}
```

### 3\. 優化格線系統的寬度計算

還記得昨天我們在 `@for` 迴圈那篇寫的欄寬計算嗎？ `width: math.div(100%, 12) * $i;`。  
這段邏輯如果常常用到，就很適合抽出來變成一個函式：

```scss
// SCSS
@use "sass:math";

// 定義一個計算欄寬的函式，並給予 $total-columns 預設值 12
@function grid-width($span, $total-columns: 12) {
    @return math.div($span, $total-columns) * 100%;
}

// 在 @for 迴圈中呼叫函式
@for $i from 1 through 12 {
    .col-#{$i} {
        // 程式碼變得超乾淨！
        width: grid-width($i);
    }
}
```

編譯出來的結果會跟之前完全一樣，但我們的 SCSS Code 更乾淨，表達的意思也更清楚、更好讀、更好維護。

### 4 .字串處理

你也可以用 Function 來處理字串，例如將字串轉換為大寫、小寫，或者拼接字串。

```scss
@function capitalize($string) {
    @return str-to-upper-case(str-slice($string, 1, 1)) + str-to-lower-case(str-slice($string, 2));
}

.title::before {
    content: capitalize("hello world");
}
```

編譯後的 CSS：

```css
.title::before {
    content: "Hello world";
}
```

這個 `capitalize` 函式將字串的第一個字母轉換為大寫，其餘字母轉換為小寫。

### 5\. 處理 Lists 與 Maps

Function 很適合處理 SCSS 的 Lists 與 Maps 資料型別 (雖然還沒有仔細介紹 Lists 與 Maps，但大家先看一下怎麼運用的)。

可以用它來提取、組合或轉換這些複雜的資料結構。

假設我們有一個列表，包含不同斷點的尺寸，我們想用一個函式來獲取指定斷點的尺寸。

```scss
$breakpoints: (
    "small": 768px,
    "medium": 992px,
    "large": 1200px,
);

@function get-breakpoint-size($name) {
    @if map-has-key($breakpoints, $name) {
        @return map-get($breakpoints, $name);
    } @else {
        @error "未知的斷點名稱: #{$name}. 可用的斷點有: #{map-keys($breakpoints)}";
    }
}

.container {
    max-width: get-breakpoint-size("medium");
}

@media (min-width: get-breakpoint-size("large")) {
    .hero {
        font-size: 2em;
    }
}
```

編譯後的 CSS：

```css
.container {
    max-width: 992px;
}

@media (min-width: 1200px) {
    .hero {
        font-size: 2em;
    }
}
```

在這個例子中，我們寫了一個名叫 `get-breakpoint-size` 的 Function，接收一個斷點的名稱，接著使用 `map-has-key` 和 `map-get` (SCSS 預設 Function)，從 `$breakpoints` Map 中取得他對應的值。

如果名稱不存在，則使用 `@error` 語句拋出一個錯誤，這對於 Debug 來說非常有用 (之後也會詳細介紹 Debug 的相關語法)。

---

## 四、別忘了 Sass 內建的 Function

雖然可以自訂 Function，但其實 Sass 已經幫你準備好一個非常強大的工具箱了！像我們之前用過的 `math.div()`、`color.adjust()` 與 `color.scale()` 等等都是內建 Function。

在自己動手打造自己的 Function 之前，不妨先查一下[官方文件](https://sass-lang.com/documentation/modules/)，看看是不是已經有現成的工具可以用了！

---

如果能好好善用 Function，你的 SCSS Code 就會更簡潔、好讀，省下你未來維護的許多時間。現在，就快來練習看看 SCSS Function 吧！

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](../../../assets/images/donate.png)