---
title: "CSS Grid 排版入門：建立格子、劃分區域、fr 單位與 minmax() 實用語法"
datePublished: Thu Oct 05 2023 13:54:29 GMT+0000 (Coordinated Universal Time)
cuid: clnd8o9q1000409mn1r0rf6kq
ogImage: https://css.im1010ioio.dev/og-images/css-grid.png
tags: css3, css, css-grid

sidebar:
  order: 7
---
![CSS Grid、Subgrid：網頁排版的神奇格子，來排個照片牆與雞腿便當吧！](/og-images/css-grid.png)

昨天我們介紹的 `flex` 是單向的排版，而今天我們要探討 `grid` ，它是雙向的排版，可以創造很多行與列。`grid` 也是十分好用的 CSS，大家一起學起來吧！

![](../../../assets/images/layout/cd9e8c25_ebca_4bfb_b011_e0c6f103054e_1783261356383.png)

> #### ↓ 今日學習重點 ↓
> 
> * 學習 Grid 容器的各種設定
>     
> * 了解如何劃分 Grid 區域
>     
> * 了解 Subgrid
>     
> * 學習 Grid 細節設定：Gap、Order
>     

---

## 一、Grid 容器

和 flex 一樣，首先要準備一個 `grid` 容器。

### 1\. 建立一個基本的 Grid

我們將這個容器設為 `display: grid;`，接著我們要使用：

* `grid-template-rows` （切出**橫的 rows**）和
    
* `grid-template-columns` （切出**直的 columns**）來畫格子。
    

我們以一個範例來說明：

> [DEMO 連結：Grid Container](https://codepen.io/im1010ioio/pen/MWZqRmN)

![](../../../assets/images/layout/40a1dd2c_c348_4403_a826_c530b1bc6fea_1783261356395.png)

### 2\. 排列

* `justify-items` 設定儲存格內容的水平位置（左中右），
    
* `align-items` 設定儲存格內容的垂直位置（上中下），
    
* 而 `place-items` 是 `align-items` 和 `justify-items` 的合併簡寫形式。
    

![](../../../assets/images/layout/5deeb2a5_66a1_4cb7_a6a3_1a7eea66da99_1783261356408.png)

```css
.container {
    justify-items: start | end | center | stretch;
    align-items:   start | end | center | stretch;

    /* 簡寫：
    place-items: align-items的值 justify-items的值;
     */
}
```

### 3\. Grid 專用的關鍵字與語法

#### (1) 自動延展：`auto`

在 grid 中，當單位設為 `auto`，會隨著父層自動填滿剩餘空間。

#### (2) 幾等分：`fr`

在 grid 中，除了可以使用一般的 CSS 單位外，還可以使用一個 grid 專用的單位： `fr`（fraction），意思是「平均幾等分」。

#### (3) 重複：`repeat()`

重複的部分可以使用 `repeat(個數, 單位)` 簡寫。  
例如：`repeat(2, 1fr)` 是「重複 2 個平均二等分」。

#### (4) 自動填滿：`auto-fill`

> [DEMO 連結：Grid auto-fill](https://codepen.io/im1010ioio/pen/QWzZQRG)

`auto-fill` 會自動計算並於剩餘空間內填滿格子，無需手動指定每個格子的數量。  
例如：`repeat(auto-fill, 100px)` 是「重複，並自動填滿多個 100px 格子」。

#### (5) 最大最小值：`minmax(最小值, 最大值)` （好用！重要！）

> [DEMO 連結：Grid auto-fill + minmax()](https://codepen.io/im1010ioio/pen/jOXezNB)，  
> 另外可參考網路上 R+ 大大的 DEMO：[**Pokédex in CSS grid**](https://codepen.io/Rplus/pen/MbddMe)

指定格子的大小範圍，可以設定最大最小值。  
例如：`repeat(auto-fill, minmax(100px, 1fr))` 是「**重複，並自動填滿多個格子，每個格子最小是 100px，最大是平均一等分**」。這個超級好用！很適合做照片牆或圖鑑。

### 4\. 排序方式：`grid-auto-flow`

![](../../../assets/images/layout/644fc5ee_ab21_4073_bb1f_ba5b2e85e51a_1783261356419.png)

#### (1) `row` / `column`

`grid-auto-flow` 決定排列的方式，預設值是 `row`，就是「先橫的，再直的」，也可以將它設為 `column`，變成「先直的，再橫的」。

#### (2) `dense`

除了設定成 `row` 和 `column`，還可以設成 `row dense` 和 `column dense`，意思是如果有多的空間就填滿，這個情況比較常發生在有大有小的格子上。

> 延伸閱讀：  
> [CSS Grid 网格布局教程 - 阮一峰的网络日志](https://ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)  
> [CSS grid-auto-flow深入理解 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2020/01/css-grid-auto-flow/)

---

## 二、劃分 Grid 區域

有了基本的格子後，我們可以開始劃分區域，1 個格子可以佔據 2 格或是多格的寬度，劃分的方法有兩種：

1. 依據「格線」
    
2. 依據「區域命名」
    

只不過，Grid 劃分區域時，只能指定矩形區域，沒辦法指定 L 形或 T 形區域。

### 1\. 依據「格線」：`grid-area` (`grid-row`/`grid-column`)

依據格線劃分區域時，我們可以指定 `grid-row` 與 `grid-column`，是從哪條線到哪條線。這兩者可以使用 `grid-area` 簡寫。

寫法是使用線的序號指定：

* 序號由 1 開始，用斜線隔開。
    
* 若數值為負的，則是指倒數過來第幾條線。
    
* 也可使定跨越的格子：`span 跨越的格數`，這邊的 span 並不是指 HTML 中的 `<span>`。
    

使用這種方法，指定的區域是可以重疊的，可以另外設定 `z-index`，調整他的前後。

```css
.cell-corn{
    /* 若只寫一個數值，代表由這條線開始到下一條線 (1格) */\
	grid-row: 1;
	grid-column: 3 / -1; /* 由第 3 條到倒數第 1 條線 */

 /* 等同於：
    grid-area: 1 / 3 / 2 / -1 ; 
    grid-area: row-start / column-start / row-end / column-end */
}

.cell-meat{
	grid-row: 2;
	grid-column: 2 / span 2; /* 由第 2 條線開始，跨 2 格 */
	
	/* 使用 z-index 將這格調到前面 */
	z-index: 2;
}
```

另外，也可以將格線命名，命名方式在畫線時使用中括號 `[]` 定義：

```css
.grid-container{
	/* 線是可以命名的 */
	grid-template-columns: [first-col-line]10rem 10rem 10rem auto;
}

.cell-veg{
	/* 使用線的名稱 */
	grid-column: first-col-line / 3 ;
}
```

以下是實際範例，讓我們來排版一個雞腿便當：

> [DEMO 連結：Grid Area (Grid Row / Grid Column)](https://codepen.io/im1010ioio/pen/rNoqpYN)

![](../../../assets/images/layout/e5f8b1d1_7754_4e4c_88f0_7af388755e7c_1783261356430.png)

### 2\. 依據「區域命名」：`grid-template-areas`

另外一種方式，是先將區塊用 `grid-area` 命名後，再使用 `grid-template-areas` 用冒號一行一行照順序排列，如果是空白格則使用 `.` 代表。

使用這種方式，沒辦法建立重疊的區域。

這種方式的優點是在格線簡單時，一目了然，可是當格線複雜時，反而會很難閱讀。

```css
.cell-veg{  grid-area: veg; }
.cell-corn{ grid-area: corn; }
.cell-rice{ grid-area: rice; }
.cell-meat{ grid-area: meat; }

.grid-container {
	grid-template-areas:
		"veg veg corn corn"
		"veg veg meat  .  "
		" .   .  rice rice";
}
```

以下是實際範例，讓我們來排版一個雞腿便當：

> [DEMO 連結：Grid Area (Grid Template Areas)](https://codepen.io/im1010ioio/pen/QWzZQry)

![](../../../assets/images/layout/e43b1a39_64fd_408d_9624_9a7a986cb88d_1783261356440.png)

### 3\. 隱形格線

Grid 有個特性，如果指定位置，在現有格子的外面。 例如：Grid 只有 3 行，但是某一個 item 指定在第 5 行。 這時，瀏覽器會自動產生多餘的格子。

#### (1) `grid-auto-columns` / `grid-auto-rows`

`grid-auto-columns` 和 `grid-auto-rows` 就是用來設定，這些多餘格子的寬和高。如果不指定，格子的高度是依據內容物的大小。

```css
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px; /* 有三排 row */
    
    /* 第三排以後多餘的 row 的格子高度為 50px */
    grid-auto-rows: 50px; 
}
```

---

---

## 接下來：Subgrid、排序與 Grid 實戰

學會了 Grid 的基礎排版後，接下來有更多有趣的進階內容！  
Subgrid 能讓子元素對齊父層格線，gap 與 order 讓排版更細緻，還有照片牆、Bento Grid 的實戰應用！

👉 **繼續閱讀下一篇：[CSS Subgrid、gap、order 與 Grid 實戰：照片牆、Bento Grid 一次做到會](/layout/css-grid-advanced)**

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](../../../assets/images/donate.png)