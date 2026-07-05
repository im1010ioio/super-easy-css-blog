---
title: "SASS/SCSS (3) 使用檔案管理樣式 Partials / Modules (@use / @import / !default)"
datePublished: Sun Oct 05 2025 08:02:50 GMT+0000 (Coordinated Universal Time)
cuid: cmgdezqxz000002la9n3c8aio
ogImage: https://css.im1010ioio.dev/og-images/scss-use-import-default.png
tags: css3, css, sass, scss

sidebar:
  order: 3
---
![SASS/SCSS (3) 使用檔案管理樣式 Partials / Modules (@use / @import / !default)](/og-images/scss-use-import-default.png)

當專案越來越大，Code 越來越多，你可能會開始覺得把所有程式碼都塞在同一個 `style.scss` 檔案裡，變得很混亂。今天，我們就要來學習如何使用 Partials 和 Modules 的概念，把我們樣式拆分到不同的檔案裡。

---

## 一、為什麼要拆分檔案？

想像一下，一個大型網站可能有數千行的 CSS，如果全部寫在一起，光是找到你要修改的那一段，可能就要花上好幾分鐘。透過將樣式碼按功能或元件拆分成多個小檔案，例如 `_header.scss`, `_buttons.scss`, `_footer.scss` 等，我們可以獲得以下好處：

* **結構清晰**：每個檔案只負責一小部分樣式，一目了然。
    
* **維護方便**：想修改按鈕樣式，直接打開 `_buttons.scss` 就對了。
    
* **易於協作**：多人開發時，可以分工處理不同的樣式檔案，減少衝突。
    

---

## 二、什麼是 Partials？

在 SCSS 中，被拆分出來的這些小檔案被稱為「Partials」。為了告訴 Sass 編譯器：「嘿！這是一個局部檔案，你不要單獨把它編譯成一個獨立 CSS 檔」，我們會在檔案名稱的開頭加上一個底線 `_`。

例如，我們可以建立以下這些檔案：

* `_reset.scss` (清除瀏覽器預設樣式)
    
* `_variables.scss` (存放所有共用的變數)
    
* `_header.scss` (頁首的樣式)
    
* `_footer.scss` (頁尾的樣式)
    

這些以 `_` 開頭的檔案，只有在被別的 SCSS 引用時，它們的內容才會被編譯。

---

## 三、如何匯入檔案？ `@use` / `@import`

將樣式拆分成許多小檔案後，我們需要一個方法將它們全部整合到一個主要的 SCSS 檔案中 (例如 `style.scss`)，最後再編譯成單一的 CSS 檔。這就是 SCSS 中 `@use` 和 `@import` 語法派上用場的地方。

### 1\. 新的引用方式：`@use`

`@use` 是 Sass 在 2019 年推出的新一代匯入規則，也是現在官方最推薦的用法。  
解決了舊版 `@import` 的一些問題，讓樣式管理更安全、更明確。

`@use` 的最大特點是它會為匯入的檔案建立一個「命名空間 (namespace)」。  
預設的命名空間就是你的檔案名稱。

#### **使用方法：**

假設我們有一個變數專用的 `_variables.scss` SCSS 檔案：

```scss
// _variables.scss
$primary-color: #3498db;
$font-size: 16px;
```

我們可以在 `style.scss` 中這樣使用它：

```scss
// style.scss
@use 'variables'; // 不需要寫底線和副檔名

body {
  font-size: variables.$font-size; // 必須透過命名空間來存取變數
  color: variables.$primary-color;
}
```

看到差別了嗎？你必須明確地寫出 `variables.$font-size`，而不是直接寫 `$font-size`。這樣做的好處是，你永遠都能清楚地知道這個變數是從哪個檔案來的，避免了不同檔案中可能存在的變數名稱衝突問題。

你也可以使用 `as` 來自訂命名空間：

```scss
// style.scss
@use 'variables' as var; // 將命名空間取名為 var

body {
  font-size: var.$font-size;
  color: var.$primary-color;
}
```

### 2\. 即將走入歷史的舊版：`@import`

在 `@use` 出現之前，`@import` 是唯一的匯入方式。  
它的用法非常直覺，就是單純地將另一個檔案的內容「貼」進來。

#### **使用方法：**

```scss
// _variables.scss
$primary-color: #3498db;
$font-size: 16px;
```

```scss
// style.scss
@import 'variables';

body {
  font-size: $font-size; // 直接使用，不需要命名空間
  color: $primary-color;
}
```

看起來比 `@use` 更簡單，但它的缺點也很明顯，就是：  
`@import` **匯入的變數、Mixin 等在檔案中都會變成「全域」的。**

當專案越來越大，匯入的檔案越來越多時，很可能會不小心覆蓋掉之前定義的變數，或是搞不清楚這個變數到底來自哪裡，造成管理上的混亂。比方說：

* 在 `_variables.scss` 檔案中有個 `$primary-color` 的變數
    
* 在 `_new-function.scss` 又有個 `$primary-color` 的變數（例如用顏色區分新功能，所以主色不同）
    

### 3\. `@use` 和 `@import` 的主要區別

| 特性 | `@use` (推薦) | `@import` (舊版) |
| --- | --- | --- |
| **作用域** | 局部作用域，變數等內容只在該檔案中可用 (透過命名空間存取) | 全域作用域，所有匯入的變數都會變成全域變數 |
| **命名空間** | 預設使用檔案名稱作為命名空間，避免名稱衝突 | 沒有命名空間的概念 |
| **編譯速度** | 編譯速度較快，因為 Sass 知道每個模組的依賴關係 | 多次匯入同一個檔案會導致重複編譯，速度較慢 |
| **未來趨勢** | Sass 官方主力推薦，未來會逐漸取代 `@import` | 官方已計畫在未來版本中移除 |

雖然可能還是會在一些舊的專案或教學中看到 `@import` 的身影，但建議所有新專案都直接採用 `@use`，因為隨著 SASS/SCSS 一直更新，`@import` 隨時可能會將它棄用，不再支援。到時候要會了這個升級而改，也會是個痛。

---

## 四、解決 `@import` 的問題：用 `!default` 設定可被覆蓋的預設值

我們剛剛提到了 `@import` 容易造成變數覆蓋的問題，但在某些情境下，我們反而**希望**變數是「可以被覆蓋的」，例如在設計一個可以讓人客製化的 Library (函式庫) 或 Framework (框架) 時。這時候 `!default` 這個好用的標誌就派上用場了。

> `!default` 語法的意思是：「只有在這個變數**還沒有值**的情況下，才使用這個值。」

### **1\. 使用情境**

假設你正在開發一個按鈕函式庫 `_buttons.scss`，你希望提供預設的按鈕顏色和圓角，但同時也允許使用這個 Library 的人可以輕鬆客製化。

#### **(1) \_buttons.scss (你的 Library)：**

```scss
// _buttons.scss
// 使用 !default 來設定可以被覆蓋的預設值
$button-color: #3498db !default;
$button-border-radius: 5px !default;

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: $button-color;
  border-radius: $button-border-radius;
  color: #fff;
}
```

#### **(2) style.scss (使用者)：**

現在，如果使用者想要客製化按鈕顏色，他只需要在 `@import` 你的 `Library` **之前**，先定義好自己的變數即可。

```scss
// style.scss

// 1. 在匯入前，先定義好想要覆蓋的變數值
$button-color: #e74c3c; // 我想要紅色的按鈕

// 2. 匯入 Library
@import 'buttons';
```

### **2\. 編譯結果：**

因為在 Sass 編譯器讀到 `_buttons.scss` 裡的 `$button-color` 時，這個變數已經被我們設定成 `#e74c3c` 了，所以 `!default` 的值 `#3498db` 就會被忽略。

而 `$button-border-radius` 因為沒有被預先定義，所以會採用 `!default` 的 5px。

```css
/* style.css */

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #e74c3c; /* 成功被覆蓋 */
  border-radius: 5px; /* 沿用預設值 */
  color: #fff;
}
```

這個技巧在許多知名的 CSS 框架 (例如 [Bootstrap](https://getbootstrap.com/)) 中被大量使用，讓框架既能提供一套完整的預設樣式，又能保有高度的客製化彈性。

---

## 五、SCSS 專案架構範例

以下是個不錯的 SCSS 檔案專案架構，給大家參考看看：

### 1\. 資料夾與檔案結構

```css
scss/
|
|-- base/
|   |-- _reset.scss         # Reset/normalize
|   |-- _typography.scss    # 字體相關設定
|   `-- _base.scss          # HTML 標籤、body 等基礎樣式
|
|-- components/
|   |-- _buttons.scss       # 按鈕
|   |-- _cards.scss         # 卡片
|   |-- _forms.scss         # 表單
|   `-- _navigation.scss    # 導覽列
|
|-- layout/
|   |-- _header.scss        # 頁首
|   |-- _footer.scss        # 頁尾
|   |-- _sidebar.scss       # 側邊欄
|   `-- _grid.scss          # 網格系統
|
|-- themes/
|   |-- _light-theme.scss   # 淺色主題
|   `-- _dark-theme.scss    # 深色主題
|
|-- utils/ (或 abstracts/)
|   |-- _variables.scss     # 變數 (顏色、字體大小、間距等)
|   |-- _functions.scss     # Sass 函式
|   |-- _mixins.scss        # Mixins
|   `-- _placeholders.scss  # Placeholder selectors
|
|-- vendors/
|   |-- _bootstrap.scss     # 外部函式庫 (Bootstrap)
|   `-- _swiper.scss        # 外部函式庫 (Swiper)
|
|-- main.scss               # 【入口檔案 1】共用樣式的總入口
|-- index.scss              # 【入口檔案 2】首頁的總入口
|-- about.scss              # 【入口檔案 3】關於我們頁的總入口
`-- contact.scss            # 【入口檔案 4】聯絡我們頁的總入口
```

### 2\. `main.scss` 可能會像以下這樣：

```scss
// scss/main.scss

// 1. 工具類 (變數、Mixins)
@use 'utils/variables';
@use 'utils/mixins';

// 2. 外部函式庫
@use 'vendors/swiper';

// 3. 基礎設定
@use 'base/reset';
@use 'base/typography';
@use 'base/base';

// 4. 網站佈局 (所有頁面共用的頁首、頁尾)
@use 'layout/header';
@use 'layout/footer';
@use 'layout/grid';

// 5. 可重用元件 (所有頁面都可能用到的按鈕、卡片)
@use 'components/buttons';
@use 'components/cards';
```

### 3\. `index.scss` 可能會像以下這樣：

```scss
// scss/index.scss

// 1. 匯入共用的工具，這樣 _index.scss 裡面才能使用全域變數和 mixin
//    Sass 的 @use 很聰明，它不會在最終的 index.css 裡重複產生 base, components 的 CSS
//    它只會讓 _index.scss 能「讀取」到這些依賴。
@use 'utils/variables';
@use 'utils/mixins';

// 2. 匯入首頁自己的專屬樣式
@use 'pages/index';
```

### 4\. HTML 會這樣引用：

```xml
<!-- 在 index.html (首頁) 中 -->
<head>
  <link rel="stylesheet" href="css/main.css"> <!-- 共用樣式 -->
  <link rel="stylesheet" href="css/index.css"> <!-- 首頁專屬樣式 -->
</head>
```

你可能會覺得怎麼一下子列了那麼多，要開那麼多檔案，不過這其實這是在專案邊開發的過程邊整理的，所以不用太擔心要一步到位，而且隨時也可以依據不同的專案所需而有不同的調整。

總之，先來用前幾天開的專案來試試看，引用幾個 SCSS 檔案吧！

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](../../../assets/images/donate.png)