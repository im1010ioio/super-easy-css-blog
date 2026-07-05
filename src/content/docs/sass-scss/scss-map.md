---
title: "SASS/SCSS (11) 資料結構 Map"
datePublished: Mon Oct 13 2025 14:58:25 GMT+0000 (Coordinated Universal Time)
cuid: cmgp9d0e3000202lfdx745ajn
ogImage: https://css.im1010ioio.dev/og-images/scss-map.png
tags: css3, css, sass, scss

sidebar:
  order: 11
---
![SASS/SCSS (11) 資料結構 Map](/og-images/scss-map.png)

昨天學到的 List 是個簡單的列表，今天我們要來看看 SCSS 中的 Map，它有點像 json 資料。

假設專案裡有 5 個主要顏色、4 個斷點、6 種字體大小。如果用傳統的變數，你會有 15 個散亂的變數 `$variable`。但是用了 Map，就可以把它們全部收納在一個變數裡，讓結構一目了然。

---

## 一、Map 語法

### 1\. 基本語法

Map 是由「鍵值對 (key-value pairs)」組成，比方說像下面這樣，一個名稱（key）對應一個值（value）：

```scss
// SCSS

// 單層 Map
$spacing: (
    space-1: .5rem,
    space-2: 1rem,
    space-3: 1.5rem
);

// 巢狀 Map
$theme-config: (
    "colors": (
        "primary": #3498db,
        "accent": #f1c40f,
        "success": #2ecc71,
        "danger": #e74c3c
    ),
    "breakpoints": (
        "sm": 576px,
        "md": 768px,
        "lg": 1024px
    ),
    "font-sizes": (
        "base": 1rem,
        "large": 1.25rem,
        "small": 0.875rem
    )
);

$theme-mode: (
    "light": (
        "bg-color": #ffffff,
        "text-color": #333333
    ),
    "dark": (
        "bg-color": #333333,
        "text-color": #ffffff
    )
);
```

如上面例子，這樣就定義好了一個 Map 資料結構，此外 Map 還有一些特點：

* Map 可以多層巢狀包起來，管理複雜樣式
    
* key 的名稱不能重複，否則編譯時會有錯誤
    
* 最後一個 key 和 value 後的逗號可以省略
    
* 和 List 一樣，也可存放多種值的類型，如字串、顏色、布林值（`true` / `false`）、數字等等
    

---

## **二、Maps 的實用工具函式** `sass:map`

和 List 一樣，Sass 也為了 Maps 準備了許多函式可以運用，取得值、檢查、合併、移除等等功能：

* `map.get()`: 讀取 Map 中指定 key 的 value（最常用、最重要）
    
* `map.merge()`：合併兩個 Map
    
* `map.remove()`：移除項目
    
* `map.has-key()`: 檢查 Map 中是否存在某個 key，回傳 `true` 或 `false`
    

要使用 Map 的函式，你必須先在檔案頂部引入 `sass:map` 模組。

```scss
@use "sass:map";
```

---

### 1\. `map.get()`：讀取數值

這是最基本也最重要的函式，用於從指定的 Map 中，透過 Key 取出對應的 Value。  
如果找不到對應的 Key，它會回傳 `null`（空值）。

#### **(1) 語法**

```scss
map.get($map, $key)
```

* `$map`: 你要讀取的目標 Map。
    
* `$key`: 你想讀取的資料標籤（Key）。
    

#### **(2) 範例 1：取值**

這邊以最開頭的 Map 資料為例子，示範了取得單層與巢狀 Map 資料。在取得巢狀 Map 的值時，你需要一層一層地使用 `map.get()`。

```scss
// SCSS
@use "sass:map";

.button-primary {
    // 取得單層 Map 資料, $spacing 中的 space-1
    padding: map.get($spacing, "space-1");

    // 取得巢狀 Map 資料, $theme-config 中的 $colors 的 primary
    background-color: map.get(map.get($theme-config, "colors"), "primary");
}
```

#### (3) **範例 1，編譯結果**

```css
/* CSS */
.button-primary {
    padding: 0.5rem;
    background-color: #3498db;
}
```

#### (4) 搭配 Function 取得巢狀 Map 資料

遇到巢狀 Map 時，每次都寫兩層 `map.get()` 實在太囉嗦了！  
其實，我們可以寫一個 Function，讓讀取設定變得更簡潔一點。

```scss
// SCSS
@use "sass:map";

// 建立一個可以讀取多層 key 的函式
@function theme($keys...) {
    $value: $theme-config;
    @each $key in $keys {
        $value: map.get($value, $key);
    }
    @return $value;
}

// 使用這個 Function
.button-primary {
    background-color: theme("colors", "primary"); // 乾淨多了
}
h1 {
    font-size: theme("font-sizes", "large");
}
```

#### (5) 範例 2：搭配 `@each` 迴圈，一次產生多個樣式

當你需要為一系列的 UI 設定不同但有規律的樣式時，使用 Map 搭配 `@each` 迴圈就是個很棒的方法。

```scss
// SCSS
@use "sass:map";

// 使用 @each 迴圈和 map.get 來遍歷巢狀 Map 中的 "colors"
@each $color-name, $color-code in map.get($theme-config, "colors") {
    .btn-#{$color-name} {
        background-color: $color-code;
    }
}
```

#### (6) 範例 2，編譯結果

```scss
.btn-primary { background-color: #3498db; }
.btn-accent { background-color: #f1c40f; }
.btn-success { background-color: #2ecc71; }
.btn-danger { background-color: #e74c3c; }
```

上面的 Code 會自動產生出 `.btn-primary`, `.btn-accent`, `.btn-success`, `.btn-danger` 四個 class，為它們各自設定好背景顏色，變得很有效率。

---

### 2\. `map.merge()`：合併兩個 Map

當你需要將兩個 Map 的內容合併時，`map.merge` 就派上用場了。

#### **(1) 語法**

```scss
map.merge($map1, $map2)
```

它會回傳一個全新的 Map，如果兩個 Map 中有相同的 Key，後者（`$map2`）的 Value 將會覆蓋前者（`$map1`）。

#### **(2) 範例**

```scss
// SCSS
@use "sass:map";

// 基本色票
$base-colors: (
    "primary": #007bff,
    "secondary": #6c757d,
);

// 擴充色票
// 裡面的 secondary 合併後會覆蓋掉 $base-colors 的 "secondary"
$extended-colors: (
    "secondary": #5a6268,
    "success": #28a745,
);

// 合併成最終的色票
$final-colors: map.merge($base-colors, $extended-colors);


// 使用 map.get 使用新 Map 的值
.alert-success {
    color: map.get($final-colors, "success"); // #28a745
}
.btn-secondary {
    background-color: map.get($final-colors, "secondary"); // #5A6268
}
```

#### (3) 編譯結果

```scss
/* CSS */
.alert-success {
    color: #28a745;
}

.btn-secondary {
    background-color: #5a6268;
}
```

這個函式在擴充既有設定（例如不同配色的佈景主題）時非常好用。

---

### 3\. `map.remove()`：移除項目

如果你想從一個 Map 中移除一個或多個項目，並得到一個新的 Map，就可以使用 `map.remove`。

#### **(1) 語法**

```scss
map.remove($map, $keys...)
```

* `$map`: 你要操作的目標 Map。
    
* `$keys...`: 你想移除的一個或多個 Key（用逗號分隔）。
    

#### **(2) 範例**

```scss
// SCSS
@use "sass:map";

$font-sizes: (
    "small": 12px,
    "normal": 16px,
    "large": 20px,
    "extra-large": 24px,
);

// 假設我們只需要基本的字體大小，移除特大號的設定
$basic-font-sizes: map.remove($font-sizes, "extra-large");

// 也可以一次移除多個
$minimal-font-sizes: map.remove($font-sizes, "large", "extra-large");

.title {
    // 如果是 map.get($basic-font-sizes, "extra-large") 
    // 將會回傳 null 而沒有編譯出來，它因為被刪掉了
    font-size: map.get($basic-font-sizes, "extra-large"); // null
}
```

---

### 4\. `map.has-key()`：檢查是否存在

在取用 Map 的值之前，先檢查一下 Key 是否存在是一個好習慣，可以避免 Sass 編譯時出錯。  
`map.has-key` 會回傳 `true` 或 `false`。

#### **(1) 語法**

```scss
map.has-key($map, $key)
```

#### **(2) 範例**

這個函式最常用於搭配 `@if` 條件式，讓你的 mixin 或 function 更穩定，不會因為抓不到不存在的值而壞掉。

這個例子中，我們用 Map 來升級之前學過的 RWD Mixin，讓它直接從 `$breakpoints` 中讀取斷點設定。

```scss
// SCSS
@use "sass:map";

$breakpoints: (
    "sm": 576px,
    "md": 768px,
    "lg": 992px,
);

@mixin respond-to($key) {
    // 先檢查 $key 是否存在於 $breakpoints 中
    @if map.has-key($breakpoints, $key) {
        @media (min-width: map.get($breakpoints, $key)) {
            @content;
        }
    } @else {
        // 如果不存在，就發出警告訊息
        @warn "未找到 #{$key} 這個斷點設定。";
    }
}

// 使用方式
.sidebar {
    @include respond-to("md") {
        // 正常運作
        width: 300px;
    }
    @include respond-to("xl") {
        // 會在編譯時顯示警告
        width: 500px;
    }
}
```

#### (3) 編譯結果，Console 控制台訊息

```scss
// Console
@warn:18  未找到 xl 這個斷點設定。
```

---

好的！今天就先到這裡囉！

SCSS 中的 List 與 Map 都是讓樣式更有結構的好方法，我之前都沒有好好應用他們，有點可惜。  
他們搭配了 SCSS 的 Function 或迴圈等等，就能大大地減少重複的 Code，可以讓樣式更 DRY（Don’t Repeat Yourself）。

我們學到這裡幾乎就已經把 SASS/SCSS 的主要方法都學完囉！  
其實並沒有到很難。大家也快來試試看吧！

鐵人賽也即將到尾聲了，快要完成一件事情了，感覺很開心！

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](../../../assets/images/donate.png)