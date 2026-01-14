---
title: "原生的 CSS 巢狀 (CSS Nesting) 終於支援啦！"
datePublished: Mon Sep 25 2023 16:10:27 GMT+0000 (Coordinated Universal Time)
cuid: clmz34lnv000c08labtwwe7pi
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1764818513094/5803e793-1dbf-40d2-8706-35589c13a8a8.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1764818507004/c505ba67-e973-4da5-b397-1e623675103a.png
tags: css3, css, css-nesting

sidebar:
  order: 11
---

以往 CSS 要使用巢狀管理要透過 Sass (SCSS) 或 Less 等預處理器才能實現，現在原生的 CSS 巢狀也可以使用了。前陣子在 Firefox 117 終於支援後，全部最新的瀏覽器都已支援了，可以逐漸開始使用它囉！不過如果 TA 有使用較舊的瀏覽器的話，要斟酌使用。

> #### ↓ 今日學習重點 ↓
> 
> * 了解如何使用原生 CSS 巢狀 (CSS Nesting)
>     
> * 了解原生 CSS 巢狀的限制 (與 SCSS 比較)
>     

---

## 基本寫法

就像 Sass (SCSS) 一樣，使用縮排代表下一層。

```css
.content{
    p { ... }           /* .content p */
    .child { ... }      /* .content .child */
    > .child { ... }    /* .content > .child */
    + .content { ... }  /* .content + .content */
    ~ .content { ... }  /* .content ~ .content */
    @media(max-width: 768px) { ... }
}
```

> 延伸閱讀：[包裝 CSS：2023！  |  Blog  |  Chrome for Developers](https://developer.chrome.com/blog/css-wrapped-2023?hl=zh-tw#nesting)

## `&` 代表上一層爸爸

當 `&` 出現在巢狀內部，它代表上一層的爸爸。使用偽類、偽元素時需要在前方添加 `&`。

```css
.content{
    /* 偽類、偽元素 */
    &.active { ... }
    &:hover { ... }
    &:has(.btn-delete:hover) { ... }
    &:before { ... }
    
    /* .content 和 .content 內的 p 使用一樣樣式 */
    &, & p {
        ...
        span ｛ ... ｝
    }
}

/* 等同於：
.content.active { ... }
.content:hover { ... }
.content:has(.btn-delete:hover) { ... }
.content:before { ... }
.content, .content p { ... }
.content, .content p span { ... }
*/
```

## 有了 `&` 可以突破巢狀限制

這個 `&` 居然可以突破巢狀限制，可以將父層寫進來裡面，設定當自己在某個父層內時會有什麼樣式。雖然稍微有點反直覺（因為通常巢狀結構只能往子層內部寫），但這樣寫的話，等於說有關這個標籤的所有資訊，就可以全部寫在一起管理。

### 設定在不同容器內的情況

```css
p {
    background-color: white;

    /* 只有當 p 在 .content 內的時候，p 的背景色才會是黃色 */
    .content & { 
        background-color: yellow;
    }

    /* 只有當 p 在 article 內且 id 是 #post-00 的時候，p 的背景色才會是藍色 */
    article#post-00 & { 
        background-color: blue;
    }
}

/*以往要達到這個效果，必須要這樣寫：
p {
    background-color: white;
}
.content p {
    background-color: yellow;
}
article#post-00 p { 
    background-color: blue;
}
但這樣，關於 p 的設定就會散落在多個地方。 */
```

### 簡寫重複自己名字的部分

有了這個功能，我們可以進一步簡寫重複自己名字的部分。  
以這個例子來說是修復因自己重疊而造成的問題：

```css
.semi-dark {
    /* 背景色為黑色的 0.2 透明度 */
    background-color: rgba(0,0,0, .2);

    /* 如果 .semi-dark 在 .semi-dark 中，背景色為透明 */
    & & {
        background-color: transparent;
    }
}

/* 以往要達到這個效果，要這樣寫：
.semi-dark {
    background-color: rgba(0,0,0, .2);
    .semi-dark {
        background-color: transparent;
    }
}
不過這只是簡寫，所以看個人喜好囉！ */
```

---

## Sass (SCSS) 才能做得到的事

```scss
.card {
    ...
    &-body { 
        ...
        &-title { ... }
    }
}

// SCSS 可以透過這個方式設定 .card、.card-body 和 .card-body-title Class
// 但原生 CSS 巢狀做不到以上
```

除此之外，Sass (SCSS) 還有其他功能，如：mixin、if、each、map 等等功能，暫時還是不會被原生 CSS 取代。

> 延伸閱讀：[CSS 即將支援巢狀，SASS/LESS 等前處理器已無用武之地？ | IT人 (](https://iter01.com/611135.html)[iter01.com](http://iter01.com)[)](https://iter01.com/611135.html)

---

> 參考資料：  
> [X 上的 Wes Bos：CSS Nesting just landed in Firefox 117 which puts it at 100% browser support! You can start using it today — here are 11 examples on how it works](https://twitter.com/wesbos/status/1696201171587809761)

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](https://cdn.hashnode.com/res/hashnode/image/upload/v1682564435616/c15640fc-6cee-4c33-a898-9cd6820f165a.png)