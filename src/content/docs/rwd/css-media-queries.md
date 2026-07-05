---
title: "RWD & CSS Media Queries &
iOS Safari 上的經驗談"
datePublished: Mon Oct 09 2023 17:51:20 GMT+0000 (Coordinated Universal Time)
cuid: clnj6wa5l00040al3fezj2ejj
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1766032181935/ba3b9649-ff14-43e8-a97c-39ce3f257f5b.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1766032194831/d8af83fa-9159-4e36-bfdf-8ba248feac8d.png
tags: css3, css, cssmediaqueries

sidebar:
  order: 1
---
![RWD & CSS Media Queries &](https://cdn.hashnode.com/res/hashnode/image/upload/v1766032181935/ba3b9649-ff14-43e8-a97c-39ce3f257f5b.png)

當我們在設計網站時，我們希望網站能夠適應不同的裝置和螢幕尺寸，以提供更好的使用體驗，這就是響應式網頁設計（RWD，Responsive Web Design）。

要製作 RWD 網頁，我們可能會需要用到 CSS 的 Media Queries，透過網頁瀏覽裝置的特性（如裝置種類、寬度、高度、螢幕方向等）來調整畫面。

另外，本篇也會提到在手機 iOS Safari 上的開發經驗，以及如何使用 Mac Safari debug iOS Safari。

> #### **↓ 今日學習重點 ↓**
> 
> * 了解 RWD 的概念與常見螢幕尺寸斷點
>     
> * 了解 Media Queries 的使用方法
>     
> * 了解開發 iOS Safari 的注意事項
>     

---

## 一、響應式網頁設計（RWD，Responsive Web Design）

### **1\. RWD 的原則**

* 除了特殊設計，不該有橫向捲軸出現。
    
* 能用 Flex 或 Grid 自動彈性調整版面，就不用 Media Queries 寫很多行覆蓋用的 CSS，讓 CSS 更簡潔。
    

### 2\. 常見的螢幕斷點（Breakpoints）

讓我們複習一下第 #01 篇所提到 RWD 相關概念：

> 實務上，RWD 會以螢幕寬度作為調整的依據，行銷網頁從最小的手機寬度約 320px，到桌機的 1920px，整整相差 6 倍的寬度內，都要能合理地呈現畫面。
> 
> 各個螢幕裝置常見的大小大約會這樣抓：
> 
> * 手機：小於 767px；
>     
> * 平板：介於 768px - 991px；
>     
> * 桌機：992px - 1920px （甚至以上，但是情況非常少）。
>     
> 
> 在設計上，最理想的情況下一個頁面會設計手機、平板直式、平板橫式、桌機 4 個版本給前端工程師。最常見的情況會設計 3 個版本。如果因時程或成本等因素沒有辦法，最少要設計 2 個版本，可以：
> 
> * 設計手機與平板版本，桌機沿用平板版本再微調；或是
>     
> * 設計手機與桌機版本，中間的平板版本依靠討論溝通。
>     

平板與手機的分界 768px 是依據 iPad 的尺寸（1024px x 768px），其他的斷點是參考 bootstrap 而來的，大家可以依據需求微調斷點，斷點的數值不是絕對。

> 延伸閱讀：  
> [#01 網頁的基本名詞：UI/UX？切版&切圖？前端&後端？靜態&動態？RWD or Mobile First？](https://im1010ioio.hashnode.dev/glossary-of-web-development)  
> [Breakpoints · Bootstrap v5.3](https://getbootstrap.com/docs/5.3/layout/breakpoints/)

### 3\. 使用開發者工具模擬各種裝置與尺寸

各大瀏覽器都有提供開發者工具，以 Chrome 為例，按開發者工具左上角的螢幕 icon 就能模擬各種裝置的瀏覽情況，也可以選擇 Responsive 自由調整視窗寬高。

不過模擬終究只是模擬，實際運作會如何還是需要在該裝置測試一遍才會知道喔！

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696869317766/f8bf9889-6cb2-4ca1-ab53-d6de837f96bf.png)

---

## 二、基本的 Media Queries

要使用 Media Queries，我們需要在 CSS 中添加 `@media` 規則。  
以下是一個基本的 Media Query 範例：

```css
@media screen and (max-width: 767px) {
    /* 在螢幕寬度小於 767px 時使用以下 CSS 規則 */
    body {
        font-size: 16px;
    }
}
```

在上面的例子中，我們在螢幕寬度小於或等於 767px 時（通常是手機尺寸），將 `<body>` 的字體大小設為 16px。

---

## 三、常用的 Media Query 屬性

以下是一些常用的 Media Query 屬性：

### 1\. 寫法

可以同時使用多個規則：

* 使用 `and` 連接起來
    
* 使用逗號 `,` 連接起來（代表 or，任一符合即套用）
    
* 使用 `not` 排除一些規則
    

```css
 /* 當裝置是螢幕，而且寬度小於 767px (包含) 時 */
@media screen and (max-width: 767px) { ... }

 /* 當寬度小於 767px (包含) 或者裝置為直向時 */
@media (max-width: 767px), (orientation: portrait) { ... }

 /* 當裝置不是螢幕，而且是列印時 */
 @media not screen and print { ... }
```

### 2\. 裝置類型 Media types

可以使用 `screen`、`print`、`speech` 等特性來設定裝置的類型：

```css
/* 當裝置是螢幕 */
@media screen { ... }

/* 當裝置是列印 */
@media print { ... }

/* 當裝置是朗讀裝置 */
@media speech { ... }
```

### 3\. 螢幕寬度和高度

#### (1) 基本用法

可以使用 `max-width` 和 `min-width` 以及 `max-height` 和 `min-height` 特性來設定螢幕的寬度和高度。例如：

```css
/* 手機：螢幕寬度小於 767px (包含) 時 */
@media screen and (max-width: 767px) { ... }

/* 平板：螢幕寬度介於 768px 和 991px (包含) 之間時 */
@media screen and (min-width: 768px) and (max-width: 991px) { ... }

/* 桌機：螢幕寬度大於 992px (包含) 時 */
@media screen and (min-width: 992px) { ... }
```

#### (2) Range Context：可以使用普通的數學符號

Media Query 有最新的改良寫法，可以使用普通的數學符號：`>`、`<`、`>=` 或 `<=`。使用在具有「範圍」類型（如寬度或高度）的 Media Query 上，讓開發時更直覺。例如：

```css
/* 手機：螢幕寬度小於 768px 時 */
@media screen and (width < 768px) { ... }

/* 平板：螢幕寬度介於 768px 和 992px 之間時 */
@media screen and (768px <= width <= 992px) { ... }

/* 桌機：螢幕寬度大於 992px 時 */
@media screen and (width > 992px) { ... }
```

不過如果 TA 有使用較舊的瀏覽器的話，要斟酌使用。

> 延伸閱讀：  
> [Media Queries Level 4: Media Query Range Contexts (Media Query Ranges) –](https://www.bram.us/2021/10/26/media-queries-level-4-media-query-range-contexts/#:~:text=In%20CSS%20Media%20Queries%20Level%204%20these%20type,%E2%80%9Cthe%20width%20sits%20in%20between%20the%20two%20values%E2%80%9D)[Bram.us](http://Bram.us)  
> ["Media Query Range Context" | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/?search=Media%20Query%20Range%20Context)

#### (3) 可搭配原生 CSS 巢狀使用

Media Query 可以搭配原生的 CSS 巢狀結構使用，例如：

```css
.item {
    width: 33.33%;
    /* 手機：螢幕寬度小於 768px 時 */
	@media screen and (width < 768px) { 
		width: 100%;
	}
}
```

> 延伸閱讀：[#10 原生的 CSS 巢狀 (CSS Nesting) 終於支援啦！](https://im1010ioio.hashnode.dev/pure-css-nesting)

#### (4) 暫不支援搭配原生 CSS 變數使用

可惜的是這些斷點設定，暫時還不支援搭配原生 CSS 變數使用，要再等等。目前必須先使用 Sass (SCSS) 等預處理器才能使用變數處理斷點的數值。

> 延伸閱讀：[Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/#custom-mq)

### 4\. 螢幕方向 orientation

使用 `orientation` 屬性可以設定螢幕是橫向還是直向：

```css
/* 當螢幕是橫向時 */
@media screen and (orientation: landscape) { ... }

/* 當螢幕是直向時 */
@media screen and (orientation: portrait) { ... }
```

### 5\. hover

透過判斷有沒有支援 `hover` （滑鼠移到上方的樣式）的行為，我們能夠間接判斷是否為觸控螢幕。例如：當 hover 時，按鈕顏色會變暗，但是在觸控螢幕上會變成類似 focus 的效果，有可能不是我們需要的，這時候就可以透過這個屬性來設定樣式。

```css
/* 當螢幕支援 hover 行為時 (例如：非觸控螢幕) */
@media screen and (hover: hover) { ... }

/* 當螢幕不支援 hover 行為時 (例如：觸控螢幕) */
@media screen and (hover: none) { ... }
```

### 6\. 點擊 pointer

Media Query 可以透過 pointer 來判斷裝置支援點擊的精準度，共有三種精準度可以設定：

* `(pointer: none)`：不能點擊時
    
* `(pointer: fine)`：點擊精準時（例如：滑鼠操作）
    
* `(pointer: coarse)`：點擊不精準時（例如：觸控螢幕）
    

透過判斷裝置支援點擊的精準度，我們也能夠間接判斷是否為觸控螢幕。

可以透過這個屬性優化使用者體驗，例如：在使用滑鼠的裝置上（如桌機）按鈕可以小一點，而在觸控螢幕上按鈕可以大一點，讓使用者比較好點到按鈕。

```css
/* 當螢幕不能點擊時 */
@media screen and (pointer: none) { ... }

/* 當螢幕備可以點擊，而且點擊精準時（例如：滑鼠操作） */
@media screen and (pointer: fine) { ... }

/* 當螢幕可以點擊，但是點擊不精準時（例如：觸控螢幕） */
@media screen and (pointer: coarse) { ... }
```

---

## 四、iOS Safari 的經驗談

iOS Safari 號稱 Apple 中的 IE，我這邊整理一下在開發上的經驗。

> 由於 Safari 並不是基於 Google 的 Blink 開發，所以與上述三者落差稍微大一點。可是，因為 iPhone、iPad 普及的關係，所以市佔率不低，在這裡也是不能壞掉。
> 
> 也因此，遇到 Safari 的陷阱時就會讓人很傷腦筋，於是被眾人戲稱為 Mac / iPad / iPhone 上的 IE。Mac 和 iPhone 上的呈現有時候也會不一樣，兩者都要測試。
> 
> 此外，由於 iOS 移動裝置（iPad / iPhone）是個很封閉的系統，在 iPad / iPhone 上的其他瀏覽器，如 Chrome、Edge、Firefox 等，其實內部核心都是 Safari，和電腦不同。因此，並不是 Mac 上的 Chrome、Edge、Firefox 沒事就沒問題，要實測一遍才知道會不會有問題喔！

### 1\. `<input><textarea>` 字體大小建議大於 16px

在 iOS Safari 上的 `<input><textarea>` 字體大小建議設定大於 16px，不然的話 Safari 會在 focus 的瞬間將你的網頁連同輸入框一起放大，導致使用者要再來回縮放畫面，造成體驗不佳。有人提議可以在 HTML meta data 上加上 `user-scalable=no` ，但是我實測沒有什麼用 QQ。

如果想測試，可以用 iPhone 打開以下 DEMO 試試看：

> [DEMO 連結：input font-size test for ios safari](https://codepen.io/im1010ioio/pen/qBLLgEZ)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696847167288/fea322d4-78cf-4faf-acd4-42c0c3993306.gif)

這個小細節很容易沒有注意到，就連 Google 表單也沒有注意到 QQ：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696847649273/efa5ca9c-8c22-41a1-914d-a6c82032ccea.gif)

### 2\. 滾動範圍盡量滾動 body，而不是 `overflow: scroll/auto;`

我們有時候會使用 `overflow: scroll/auto;` 來製作 body 內部客製的可滾動區域，然後整個網頁的 `<body>` 設為 `overflow: hidden;`。但是，這種做法在 iPhone Safari 上時常會怪怪的，導致整個網頁無法滑動。

深究其原因，似乎是 Safari 在解析網頁時的渲染前後順序問題：「子元素的高度如果沒有在 ScrollView 建立之前確定，就不會觸發內部滑動，而會觸發外部滑動。」詳細可參考：

> [javascript - iOS Safari浏览器上overflow: scroll元素无法滑动bug解决方法整理 - Kinice的存档点](https://segmentfault.com/a/1190000012761272)  
> [javascript - iOS safari浏览器上overflow: scroll元素无法滚动bug深究 - Kinice的存档点](https://segmentfault.com/a/1190000016408566)

我的解法是在 CSS 規劃時，就盡量滾動 `<body>`，沒有任何 `overflow: hidden;` 設定在 `<body>` 上，給大家參考。

### 3\. 100vh 包含瀏覽器的導覽列，建議使用 dvh 單位

之前在介紹網頁單位時有提過「在手機上 `100vh` 常常會被瀏覽器導覽 UI 遮住」，這個瀏覽器就是 Safari！所幸，現在 CSS 有推出新單位 `dvh` ，可以解決這個問題。

不過 Safari 的版本是跟著 iOS 的，較舊的 iOS 若沒有更新，就無法使用 `dvh` 這個新單位。QQ

> 延伸閱讀：  
> [#15 網頁使用的單位大解析：px、rem、em、%、vw、vh (dvh, lvh, svh)、vmin、vmax](https://im1010ioio.hashnode.dev/css-units)  
> ["dvh" | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/?search=dvh)  
> [實務踩坑恨 - Safari 就是跟別人不一樣之 100% 與 100vh - iT 邦幫忙](https://ithelp.ithome.com.tw/articles/10249090)

### 4\. 使用 Mac Safari debug iOS Safari

要使用 Mac Safari debug iOS Safari，首先 iPhone 的 Safari 必須要開啟「網頁檢閱器」的權限，開啟的位置是：「設定 APP &gt; Safari &gt; 進階」。

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696872045703/cd74df6b-9f26-4458-9497-c6f629741362.png)

接著使用一條線連結 Mac 與 iPhone，這時候 iPhone 可能會跳出通知詢問是否要信任這台電腦，請選信任；Mac 也可能會詢問要允許配件連接嗎，請選允許。

如此一來，在 Mac Safari 的開發選單中，就可以看到你的 iPhone 的名稱與目前 iPhone Safari 正在開啟的頁面，選取它就能夠使用 Safari 的開發者工具 debug 囉！

> 若你在選單列中沒有看到「開發」選單，請選擇 Safari &gt;「設定」，按一下「進階」，然後選取「在選單列中顯示『開發』選單」。（來源：[Apple Safari 使用手冊](https://support.apple.com/zh-tw/guide/safari/sfri20948/16.1/mac/13.6.2)）

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696871759251/c2c1f9f2-97da-47f2-b6de-1a3b1dd14d14.png)

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](../../../assets/images/donate.png)