---
title: "#09 原生的 Css 變數，基本與進階應用"
datePublished: Sun Sep 24 2023 16:59:58 GMT+0000 (Coordinated Universal Time)
cuid: clmxpgfzx000209mq1mbr81e8
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1764817640719/79049953-3c6d-4a3c-936b-91401d83b118.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1764817652004/f40b455e-6013-42d2-a250-dd9ca5af29d4.png
tags: css3, css, css-variables

sidebar:
  order: 10
---

CSS 變數（CSS Variables）可以讓人在整個網站的樣式中輕鬆重複使用相同的值，更輕鬆地調整網站的外觀，同時保持一致性。以往 CSS 要使用變數必須透過 Sass (SCSS) 或 Less 等預處理器才能實現，但現在有了原生的 CSS 變數，已開始廣泛運用在網頁上了。

今天，就讓我們來了解如何使用 CSS 變數吧！

> #### ↓ 今日學習重點 ↓
> 
> * 了解如何設定 CSS 變數，並且使用它們
>     

---

## **基礎知識**

### **定義變數**

在CSS中，可以使用`--`前綴來定義變數。而上一篇有提過 `:root` 選擇器，指的是 HTML 的全域，如果我們希望這個變數 HTML 全部範圍都能使用，就要將變數設定在這裡。例如：

```css
:root{
    --color-default: #666;
}
```

在這個例子中，我們定義了一個名為 `--color-default` 的變數，並賦值為`#666`（灰色）。

### **使用變數 var(--...)**

一旦在 `:root` 定義了變數，就可以在整個 CSS 中使用它們。使用變數時是將定義好的變數用 `var()` 包起來，例如：

```css
:root{
    --color-default: #666;
}
body{
    color: var(--color-default);
}
```

這樣，`body` 元素的文字顏色將會是灰色，因為我們使用了我們之前定義的變數。

### 變數的作用範圍：全域變數 vs. 區域變數

如果變數不是定義在 `:root` 全域中，而是定義在某個選擇器內，就是區域變數。區域變數只有那個選擇器內（包涵子層）可以使用，以下是區域變數的例子：

```css
header {
    --color-header: #888;
    /* 讀取得到顏色 */
    color: var(--color-header);
}
header p {
    /* 讀取得到顏色 */
    color: var(--color-header);
}
footer {
    /* 讀取不到顏色 */
    color: var(--color-header);
}
```

### 變數套用變數

與其他程式一樣，變數可以再套用變數。以以下例子來說，我們先定義了 1 - 9 級的灰色變數，然後再將文字預設顏色變數指定為其中的第 7 級變數：

```css
:root{
    --gray-100: #f9f9fd;
    --gray-200: #e8edf4;
    --gray-300: #DBE2E7;
    --gray-400: #CED7E0;
    --gray-500: #A9B3BD;
    --gray-600: #677889;
    --gray-700: #495562;
    --gray-800: #2D4155;
    --gray-900: #1A2632;

    /* 變數套用變數 */
    --color-default: var(--gray-700);
}
```

---

## **進階用法**

### **於子層內可直接覆蓋變數**

變數能夠在子層內再去覆蓋它的數值，不用再設定一次屬性數值。這很方便，使用情境如：先在父層設定預設顏色，但是在要某個子層內的顏色不一樣，這時候直接改變數就好了。

不過覆蓋只能覆蓋套用的變數，變數套用的變數就沒有辦法覆蓋，有點繞口，讓我們看看例子就能明白了：

```css
:root{
    --gray-600: #666;
    --color-default: var(--gray-600);
}
body{
    color: var(--color-default);
}
body article{
    /* 可以直接改變變數的數值，不需要再寫一次 color:... */
    --color-default: #333;
    
    /* 這一行無效，沒有辦法覆蓋變數套用的變數 */
    --gray-600: #555;
}
```

### **變數的預設值**

可以設定變數的預設值，以防止沒有變數的情況。  
目前我想到的使用情境，可能是在載入套件寫的變數，萬一套件更新刪除了某些變數，可以有替代方案。（例如，黑暗模式時，避免沒有變數時，吃到瀏覽器預設的黑字，變成黑字在黑底上之類的）

```css
:root {
    /* --bg-default: #cae3ff; */
}
.header {
    /* 如果變數沒有被定義，將使用白色作為預設值 */
    background-color: var(--bg-default, white); 
}
```

### **變數的應用與計算**

有了 CSS 變數，在數值上面就多了很多可能性。繼續以顏色為例：

```css
:root{
    --color-primary-rgb: 46, 65, 140;
}
p{
    color: rgb(var(--color-primary-rgb));
}
p.text-sub{
    /* 設定次要文字顏色較淡，透明度 50% */
    color: rgba(var(--color-primary-rgb), .5)
}
```

更進一步用 CSS 數學函式 `calc`，拿顏色來運算：

```css
:root{
    --color-r: 46;
    --color-g: 65;
    --color-b: 140;
    --color-primary-rgb: var(--color-r), var(--color-g), var(--color-b);
}

p.text-sub{
    color: rgba(var(--color-primary-rgb), .8);
}

p.text-change-rgb{
    /* 變數可以在 rgba 內做計算 */
    color: rgba(
		calc(var(--color-r) * 3),
		calc(var(--color-g) / 2),
		calc(var(--color-g) + 100), .8);
}
```

### **搭配**`@property` 使用（CSS Houdini）

CSS 變數搭配 CSS 新推出的屬性 `@property` ，可以做更進階、過去做不到的動畫，例如：漸層色漸變、同心圓漸變等等，之後我們會再詳細解說。

> 如果你想提早了解，可以參考以下好文：  
> [CSS @property，讓不可能變可能 | IT人 (](https://iter01.com/594993.html)[iter01.com](http://iter01.com)[)](https://iter01.com/594993.html)

---

變數除了應用在顏色外，當然也可以應用在寬度、margin、padding、transform 等等各種地方。接下來，怎麼運用就交給各位探索囉！

如果你是初學者以上許多 CSS 與名詞還不知道，沒有關係，你只需要了解變數如何運用就好，關於還沒有解說過的部分，我們後續會再一步步講解。

> 延伸閱讀：[深入理解 CSS 變數 ( CSS Variables )](https://www.oxxostudio.tw/articles/202011/css-variables.html)

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](https://cdn.hashnode.com/res/hashnode/image/upload/v1682564435616/c15640fc-6cee-4c33-a898-9cd6820f165a.png align="center")