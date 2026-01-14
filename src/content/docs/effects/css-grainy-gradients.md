---
title: "#48 CSS 噪點漸層 (Grainy Gradients) 的製作方法"
datePublished: Wed Aug 13 2025 09:54:34 GMT+0000 (Coordinated Universal Time)
cuid: cme9snay9003i02l55rv1fszv
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1766471876671/b93edd5b-8d58-4720-b707-449291a7915b.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1766471881730/98ad5e62-8aa0-4ecc-aff5-963034e561ca.png
tags: css3, css, gradient, grain, gradients-in-css

sidebar:
  order: 4
---

所謂的噪點漸層 (Grainy Gradients)，在顏色漸變時不是使用平滑過渡色彩，而是使用顆粒由多至少漸變，這樣的方式能夠製造出磨砂的質感，例如 Arc 瀏覽器的背景特效：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1727538225332/044e1b1e-9638-41b7-be75-6282f51a5503.png)

---

我看到一篇文章製作了很酷炫的噪點漸層，  
所以本篇文想要來研究一下，如何製作這樣的漸層：

> [Grainy Gradients | CSS-Tricks - CSS-Tricks](https://css-tricks.com/grainy-gradients/)

他說道：

> 訣竅是使用 SVG 濾鏡創建雜色，然後將該雜色應用為背景。將其置於漸變下方，提高亮度和對比度，僅此而已 - 漸變會逐漸消失。

其中運用前幾篇我們提過的 `filter`、`mix-belnd-mode` 的進階運用。

最近重感冒，等我好一些後，會回來這篇文自己寫 DEMO 範例練習看。😵

後來作者還製作了小工具，大家可以先去玩玩看：

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1727538233881/9f3c5f52-2c0b-41e6-9262-5d505144425d.png)

> [Grainy Gradients playground](https://grainy-gradients.vercel.app/)

這真的很酷炫！有了這樣的技術就能做出很多很猛的效果吧！

---

[前端 - \[译\]你需要知道的CSS属性isolation - 南城FE - SegmentFault 思否](https://segmentfault.com/a/1190000044450654)

[理解CSS3 isolation: isolate的表现和作用 « 张鑫旭-鑫空间-鑫生活 (zhangxinxu.com)](https://www.zhangxinxu.com/wordpress/2016/01/understand-css3-isolation-isolate/#:~:text=isolatio)

[isolation在CSS中的应用在 CSS 中，你可以使用该isolation属性来创建新的堆叠上下文。看起来是这样的 - 掘金 (juejin.cn)](https://juejin.cn/post/7082374880045301790)