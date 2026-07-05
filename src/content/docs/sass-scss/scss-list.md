---
title: "SASS/SCSS (10) 資料結構 List (列表)"
datePublished: Sun Oct 12 2025 15:16:49 GMT+0000 (Coordinated Universal Time)
cuid: cmgnuktis000202ji4mx38fol
ogImage: https://css.im1010ioio.dev/og-images/scss-list.png
tags: css3, css, sass, scss

sidebar:
  order: 10
---
![SASS/SCSS (10) 資料結構 List (列表)](/og-images/scss-list.png)

在 SASS/SCSS 中，我們已經使用變數、Mixin 和 Function 等語法來幫我們管理 CSS Code 了，但是它還是可能會亂，例如散亂的單一變數，除了寫註解外，還有什麼辦法能夠讓 Code 更有結構呢？

答案是 SCSS 的資料結構——Lists 和 Maps，其實昨天在寫 Function 時有稍微帶過，今天，我們就更近一步先來仔細研究 Lists 吧！

---

## 一、List 語法

List (列表) 就跟它聽起來一樣，就是個簡單有序的集合，一系列用逗號或空格分隔的值，有一點像其他程式語言中的陣列。非常適合用來存放一組有順序或有關聯性的簡單資料。

SCSS 的 List 中不同的值可以使用空格或逗號分隔，只要它在 List 中保持一致即可。內容可以包涵不同類型的值。

### 1\. 基本語法

```scss
// SCSS
$font-stack: Helvetica, Arial, sans-serif; // 用逗號分隔
$gutters: 10px 20px 30px;                  // 用空格分隔
$animation-timing: ease-in, 1s, 2s;        // 可以包含不同類型的值
```

### 2\. 用空格區分時，使用中括號 `[]` 更清楚定義

不過如果使用空格區分，就會不清楚這是不是多個**數值在同一個 List 的值內**，這時可以使用中括號 `[]` 區隔開來，會更清楚。

```scss
// SCSS

// 定義一個包含「網格線名稱」和「軌道寬度」的 List
// 如果沒有中括號，Sass 會搞不清楚結構
$grid-definition: [main-start] 1fr [content-start] 1fr [main-end];

.container {
    grid-template-columns: $grid-definition;
}
```

在這個 SCSS 例子中，我們用中括號 `[]` 將網格線的名稱包起來。這樣讓 SCSS 能夠正確地將 `[main-start]`、`1fr`、`[content-start]` 等等，都視為 `$grid-definition` 這個 List 中的**獨立項目**。

如果沒有外層的中括號，SCSS 的解析就會變得困難且容易出錯。  
使用中括號可以明確地告訴 Sass：「這整個中括號內的內容，是一個完整 List 的值」。

### 3\. 需要產出有斜線 `/` 的結果時，使用 list 模組的**函式** `list.slash()`

像我們之前在 [SCSS 運算符號](https://ithelp.ithome.com.tw/articles/10394784)中提到的，現在 CSS 越來越常使用 `/` 作為分隔語法的一部分，再加上過去斜線在 SCSS 是除法的意思，直接使用斜線分隔非常容易產生錯誤。

所以，為了避免混淆，不能直接用斜線來定義一個 List。

當你需要用 Sass 的變數、迴圈或函式「動態產生」一個本身就包含 `/` 作為分隔符的 CSS 屬性值時，你就需要 `list.slash()` 函式。

要使用這個函式，你需要在檔案開頭引入 Sass 的 list 模組：

```scss
// SCSS
@use "sass:list";

// 一個動態設定 grid 位置的 mixin
@mixin grid-position($col-start, $col-end, $row-start, $row-end) {
    // 這裡必須用 list.slash() 來組合 "1 / 3" 這樣的字串
    grid-column: list.slash($col-start, $col-end);
    grid-row: list.slash($row-start, $row-end);
}

.item-1 {
    @include grid-position(1, 3, 1, 2);
}

.item-2 {
    // 動態組合 "2 / span 3"
    @include grid-position(1, 2, 2, "span 3");
}
```

**編譯後的結果是：**

```css
/* CSS */
.item-1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
}

.item-2 {
    grid-column: 1 / 2;
    grid-row: 2 / "span 3";
}
```

---

## 二、Lists 的實用工具函式 `sass:list`

僅僅是定義 List 還不夠，Sass 更厲害的是可以對這些資料進行操作。透過內建的 `sass:list` 模組，可以存取、修改、合併 List，讓樣式的管理更動態與自動化：

* `list.length()`: 取得 List 長度
    
* `list.nth()`: 取得特定位置的項目
    
* `list.append()`: 在列表最後新增項目
    
* `list.join()`: 連接兩個列表
    
* `list.index()`: 尋找項目在列表中的位置
    

要使用這些函式，記得在檔案開頭先引入模組： `@use "sass:list";`

```scss
// SCSS
@use "sass:list";
```

---

### 1\. `list.length()`: 取得 List 長度

這個函式會回傳列表中包含多少個項目，非常適合用在迴圈中，根據列表的項目數量來動態生成樣式。

#### (1) 語法

```scss
list.length($list)
```

* **用途**：計算列表中的項目總數。
    
* **回傳值**：一個數字。
    

#### **(2) 範例**

```scss
// SCSS
@use "sass:list";

$colors: #ff0000, #00ff00, #0000ff, #ffff00;

// list.length($colors) 的結果會是 4
.info {
    // 可以在 content 中顯示列表長度，方便除錯
    content: "這個顏色列表總共有 " + list.length($colors) + " 個顏色。";
}
```

#### **(3) 編譯後的結果**

```css
/* CSS */
.info {
    content: "這個顏色列表總共有 4 個顏色。";
}
```

---

### 2\. `list.nth()`: 取得特定位置的項目

這個函式可以幫助你抓取列表中特定位置的項目。

#### (1) 語法

```scss
list.nth($list, $n)
```

* **用途**：讀取列表中第 `$n` 個項目的值。
    
* **注意**：Sass 列表的索引是**從 1 開始**，而不是像 JS 陣列一樣從 0 開始。
    
* `$n` 也可以是負數，例如 `-1` 代表最後一個項目，`-2` 代表倒數第二個項目。
    

#### **(2) 範例**

```scss
// SCSS
@use "sass:list";

$font-sizes: 12px, 16px, 24px, 32px;

.title {
    // 取得第 3 個項目 (24px)
    font-size: list.nth($font-sizes, 3);
}

.caption {
    // 取得倒數第 1 個項目 (32px)
    font-size: list.nth($font-sizes, -1);
}
```

#### **(3) 編譯後的結果**

```css
/* CSS */
.title {
    font-size: 24px;
}

.caption {
    font-size: 32px;
}
```

---

### 3\. `list.append()`: 在列表最後新增項目

這個函式會在既有的 List **尾端**加上一個新項目，並回傳一個**全新的 List** (原始 List 不會被改變)。

#### (1) 語法

```scss
list.append($list, $value, $separator: auto)
```

* **用途**：擴充列表。
    
* `$separator`：  
    可以指定新 List 的分隔符（省略不寫，就會是 `auto`），可以是：
    
    * `comma` (逗號)、
        
    * `space` (空格)
        
    * `slash` (斜線) 或
        
    * `auto` (預設值 → 沿用原始 List 的分隔符)。
        

#### **(2) 範例**

```scss
// SCSS
@use "sass:list";

$default-spacers: 10px, 20px, 30px;

// 在尾端加上 40px
$extended-spacers: list.append($default-spacers, 40px, $separator: auto);

// $extended-spacers 現在是 (10px, 20px, 30px, 40px)

.container {
    // 取得新 List 的最後一個值
    padding: list.nth($extended-spacers, -1);
}
```

#### **(3) 編譯後的結果**

```css
/* CSS */
.container {
    padding: 40px;
}
```

---

### 4\. `list.join()`: 連接兩個列表

這個函式可以將兩個列表合併成一個全新的大列表。

#### (1) 語法

```scss
list.join($list1, $list2, $separator: auto, $bracketed: auto)
```

* **用途**：組合多個列表。
    
* `$separator`：同樣可以指定新列表的分隔符。
    
* `$bracketed`：決定新列表是否要用中括號 `[]` 包起來。
    

#### **(2) 範例**

```scss
// SCSS
@use "sass:list";

$text-colors: #333, #555, #777;
$background-colors: #eee, #ddd;

// 將兩個列表合併，並用逗號分隔
$all-colors: list.join($text-colors, $background-colors, $separator: comma);

// $all-colors 現在是 (#333, #555, #777, #eee, #ddd)

.first-color {
  color: list.nth($all-colors, 1); // #333
}
```

#### **(3) 編譯後的結果**

```css
/* CSS */
.first-color {
  color: #333;
}
```

---

### 5\. `list.index()`: 尋找項目在列表中的位置

這個函式會回傳某個值在 List 中**第一次**出現的位置 (索引)。  
如果該值不存在於列表中，則回傳 `null`。

#### (1) 語法

```scss
list.index($list, $value)
```

* **用途**：檢查某個值是否存在，或取得其索引值。
    
* **回傳值**：一個數字 (索引值) 或 `null`。
    

#### **(2) 範例**

```scss
// SCSS
@use "sass:list";

$z-layers: "modal", "dropdown", "tooltip";

// 尋找 'dropdown' 的位置，回傳 2
$dropdown-index: list.index($z-layers, "dropdown");

// 尋找 'header' 的位置，回傳 null
$header-index: list.index($z-layers, "header");

.dropdown-menu {
    // 可以根據索引值來計算 z-index
    z-index: $dropdown-index; // 結果為 2
}

@if not $header-index {
    // 由於 $header-index 是 null，這個警告會被觸發
    @warn "在 z-layers 列表中找不到 'header'。";
}
```

#### **(3) 編譯後的結果**

```css
/* CSS */
.dropdown-menu {
    z-index: 2;
}
```

在編譯過程中，你還會在 Console（終端機）中看到警告訊息：`Warning: 在 z-layers 列表中找不到 'header'。`

---

## 三、綜合應用範例：動態生成 z-index 層級

透過使用這些 List 函式，昨天學到的 Function，我們可以建立一個非常實用的 `z-index` 管理系統。

假設我們定義了一個關於 `z-index` 層級順序的 List：

```scss
// SCSS
@use "sass:list";

// 統一管理 z-index 層級
$z-layers: "behind", "default", "dropdown", "sticky", "modal", "overlay";

// 建立一個名叫 z 的函式來取得指定層級的 z-index 值
@function z($layer-name) {
    $index: list.index($z-layers, $layer-name);

    @if $index == null {
        @error "在 $z-layers 中找不到 '#{$layer-name}' 這個層級。請檢查拼寫是否正確。";
    }

    // list.index 回傳的是索引值，剛好可以直接當作 z-index 使用
    @return $index;
}

// 使用函式來設定 z-index
.modal {
    // z("modal") 會回傳 5
    z-index: z("modal");
}

.dropdown-menu {
    // z("dropdown") 會回傳 3
    z-index: z("dropdown");
}

.footer {
    // z("behind") 會回傳 1，如果需要，我們可以夠過算數讓它變成負值
    z-index: z("behind") * -1;
}

.some-element {
    // 如果傳入一個不存在的名稱，編譯時就會報錯，可能無法完整編譯
    z-index: z("non-existent-layer");
}
```

**編譯後的結果：**

```css
/* CSS */
.modal {
    z-index: 5;
}

.dropdown-menu {
    z-index: 3;
}

.footer {
    z-index: -1;
}
```

在這個範例中，我們利用 `list.index()` 來找每個區塊對應的順序，讓 `z-index` 的管理變得集中、更容易理解。

而且，當你需要調整層級順序，或在中間插入一個新層級時，只需要修改 `$z-layers` 這一個 List，所有有使用這個 `z()` 函式的地方都會自動更新，大大提升了效率。

---

好的！今天就先到這裡囉！  
之前沒有好好研究過 SCSS 中的 List，今天真正了解後，覺得有點相見恨晚，早點認識的話，我的 Code 可能就會更整齊了。XD

明天，我們再來好好研究 SCSS 中的 Map。

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](../../../assets/images/donate.png)