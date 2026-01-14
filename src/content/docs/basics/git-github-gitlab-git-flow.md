---
title: "人在江湖，版控要有：了解 GIT / GitHub / GitLab / Git Flow"
datePublished: Mon Sep 18 2023 16:00:00 GMT+0000 (Coordinated Universal Time)
cuid: clms02utw000009md632san7a
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1764754359100/1880f471-5ad1-4713-9e1d-c4790677519b.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1764754371575/e15693a0-0139-4772-a4e4-b595b07d0969.png
tags: github, git, gitflow

sidebar:
  order: 3
---

我把我所知的 Git 知識都放在這了，自己去拿吧！（航海王口吻）  
不過也許有誤，或者是更延伸的知識，歡迎大家留言給我。XD

> #### ↓ 今日學習重點 ↓
> 
> * 理解版本控制的重要性
>     
> * 了解 Git 版控的概念
>     
> * 了解 Git Flow，開發上的使用情況
>     

## 為什麼寫程式要使用版本控制呢？

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683951556849/cabd50a3-08af-4ada-8c8a-9c12b1c88c02.png)

你有遇過像上面這樣的情況嗎？檔案修修改改，再加上其他人的版本，最後已經不曉得在改哪一個檔案了。如果這時候，突然需要找到過程中寫過的東西，會完全不知道該從何處找起，他人接手也會不知道該從何改起。

寫程式的時候就容易遇到的情況：文件檔案很多，而且通常都要與他人協作，所以為了避免混亂，版本控制（簡稱版控）就顯得十分重要了。

### 版本控制是什麼？

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683952804218/f20b0dd7-d5c4-4e15-91d5-073b7910be31.png)

以 GIT Sourcetree APP 的介面為例，使用版本控制大概會像以上這樣，每一筆更動都是一個節點紀錄，上面會紀錄當時新增或刪除了什麼部分。

---

### 版本控制的好處

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1696993812768/320eeab1-d211-4438-ad52-2d31d7d95c63.jpeg)

#### 有版本控制就能夠有以下的好處：

1. 追蹤程式碼的變更，隨時可以查看、比較不同版本之間的差異。
    
2. 防止資料遺失、回溯和版本管理：不小心刪除了重要檔案或程式碼，也可以從版本控制系統中輕鬆地還原回來。有 Bug 的話也可以隨時回到先前的版本。
    
3. 協作開發：能夠合併（`merge`）不同的人寫的程式碼，解決可能出現的衝突。
    
4. 分支管理：可以在不影響主要程式碼的情況下創建新的分支，不影響正在運作的主功能，進行測試、實驗新開發的功能。
    

簡單來說，有了版控就像獲得了時光機和平行宇宙！  
可以讓寫程式更輕鬆，同時保持產出的穩定。

#### 反之，沒有版本控制的結果...

曾經我有一個很小的案子，因爲覺得很小所以不需要使用版控，結果忽略了仍然有要反覆來回調整的情況，導致諸多細節遺漏，工作與程式碼管理得一團糟。😢 建議大家無論大小都用版控管理程式碼會比較好喔！

所以，這 30 天內我們做的練習，就來練習使用版本控制吧！  
而這次練習，我們將使用最受歡迎的 GIT 版控。

---

### Git vs. GitHub/GitLab

![Git vs. GitHub/GitLab](https://cdn.hashnode.com/res/hashnode/image/upload/v1693274923695/83491d63-8cff-41e6-b3b3-9fa36d51589e.png)

#### GIT

Git 是一種**分散式版本控制系統**。它允許多個開發者協同工作，同時追蹤他們對代碼進行的更改。每次修改都會被記錄下來，從而形成版本歷史，開發者可以隨時查看以前的版本、比較更改和回滾到先前的狀態。它是一套免費、開源、且有許多人使用的版本控制軟體，普遍適合各種開發流程，受到多數人喜愛。

Git 是分散式版控，與之相對的就是集中式版控，如：CVS、SVN 等，更詳細的介紹，可以參考下面文章：

> 連結：[版本控制(Version Control)](https://hackmd.io/@hjMUHxbVR9OPHKFmV6EFXg/SJd7VizB_)

#### GitHub/GitLab

[GitHub](https://github.com/) 和 [GitLab](https://about.gitlab.com/) 則是**基於 Git 的網絡平台**，它們提供 UI 界面讓大家方便操作原有的 Git 功能。同時，它們也算是個社群平台，你可以對別人的專案回報 Bug 或提供建議，也可以複製（`Fork`）別人的專案等等。另外，它們還提供專案管理、CI/CD 等功能。而其中 GitHub 算是目前市場上最主流的平台，幾乎每個工程師都會有一個 GitHub 帳號。

![Git vs. GitHub](https://cdn.hashnode.com/res/hashnode/image/upload/v1693362963469/8cd3440b-9ffe-4420-ae63-3dadf47e1031.png)

GIT 與這些平台的關係大致上會像上圖。

存在雲端 GitHub/GitLab 的檔案稱作**遠端數據庫（remote repository）**，而在我們電腦中的就叫作**本地數據庫（local repository）**。我們會從雲端上提取（`pull`）檔案的更新資訊下來，也會從自己的電腦推送（`push`）檔案的更新資訊上去。如果雲上的版本和我修改的版本，同時修改了同一行 code 時，就會出現衝突，這時候就需要請我們去人工合併（`merge`），修改差異處。

> 延伸閱讀：[**git fetch & git pull**](https://ithelp.ithome.com.tw/articles/10242089)

---

### 版本控制分支的實際應用

Git 的分支就好比多重宇宙，我們可以建立很多個平行宇宙寫程式碼，讓最重要的正式版本宇宙保持穩定與乾淨。我們用個實際例子來了解 Git 的分支運作吧！

假設，今天某個網站要舉辦一個行銷活動「第一屆手搖杯大賽」，我們的版控會有：

* 一個原本網站正式版本的分支（通常會叫做 `main` 或 `master`），
    
* 一個供開發人員開發中測試的分支（通常叫做 `dev`），
    
* 一個新活動的分支開始開發（假設叫做 `drink-main`）。
    

我們會在 `drink-main` 分支上寫這次活動的程式碼，等到完成後自己測試沒問題後，就會先合併到 `dev` 分支上，然後交由測試人員測試，等到確認全部沒問題後，最後穩定的版本才會合併回 `main` 上面。

如果這個比賽有複賽，但是比賽結果還沒有出來，還不能更新正式版本，這時候就可以再開一個新分支（假設叫做 `drink-final` ），就可以在比賽進行的同時開發新東西。使用版控的分支獨立開發不同功能，就不用擔心開發中的版本和正式版本混在一起，也可以掌控版本更新的時間。

如果，正式版本發現重大 Bug，這時候我們要緊急維修，就會直接從 `main` 上新增臨時維修的分支（假設叫做 `hotfix` ），修好後就趕緊合併回 `main` 上，之後再陸陸續續合併至其他各個分支上。

![版本控制分支的實際應用](https://cdn.hashnode.com/res/hashnode/image/upload/v1693324145484/faadb016-8378-4ea9-96b6-3eb6c974f04e.png)

#### Git Flow

上面的例子，大致上就是 Git Flow 的觀念，不過為了方便說明與畫圖，被我精簡了。其實，在`main` 和 `dev` 之間還要再建立一個分支 `release` ，用於存放即將上線的版本，再做一次最後的測試。

在 Git Flow 中，建議我們建立這幾種分支：

* `master` ，長期分支，用於保存正式的穩定版本，隨時可上線；
    
* `develop`，長期分支，用於穩定的開發版本，建立新功能的分支由這裡分出去；
    
* `feature`，短期分支，用於開發新功能，完成後合併回 `develop`；
    
* `release`，短期分支，當 `develop` 到一個段落，準備上線前的測試版本；
    
* `hotfix`，短期分支，當 `master` 發生緊急問題，由 `master` 分出來儘速維修，修好後合併回 `master` 、 `develop` 或其他分支上。
    

當然，實際上每個團隊開發方式可能略有不同，可以依據情況再調整開發流程。

> 延伸閱讀：
> 
> [Git Flow 是什麼？為什麼需要這種東西？](https://gitbook.tw/chapters/gitflow/why-need-git-flow)  
> [常見的三種工作流程 - Git flow、GitHub Flow 與 Gitlab Flow](https://ithelp.ithome.com.tw/articles/10281080)

#### 請謹慎面對正式版本

希望大家不要要求工程師，還沒有經過測試就直接上正式版本，因為這樣按下的不曉得是更新按鈕，還是毀滅按鈕喔。😢

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683771539384/4417de68-a8b7-4702-81f9-134809c566c1.jpeg)

---

#### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

感謝看到最後的你，若你覺得獲益良多，請不要吝嗇給我按個喜歡。❤️

如果你喜歡我的創作，還想看看其他有趣的分享與日常，  
可以追蹤我的 IG [@im1010ioio](https://www.instagram.com/im1010ioio/)，或者是[🧋送杯珍奶鼓勵我](https://im1010ioio.bobaboba.me/)，謝謝你🥰。

![Eva Chen 送杯珍奶鼓勵我](https://cdn.hashnode.com/res/hashnode/image/upload/v1682564435616/c15640fc-6cee-4c33-a898-9cd6820f165a.png)