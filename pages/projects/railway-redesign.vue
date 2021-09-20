<template>
    <div>
        <img
            src="~/assets/img/railway-main.png"
            alt="metro-main"
            class="object-cover translate-y-14 w-full lg:max-h-[400px]"
        />
        <main>
            <div class="flex justify-between md:mx-10 lg:mx-28">
                <p>2021 - JUL</p>
                <div class="flex flex-row">
                    <p
                        class="
                            ml-2
                            sm:ml-4
                            border border-secondary03
                            rounded-lg
                            px-3
                            py-1
                            text-sm
                        "
                    >
                        使用者介面
                    </p>
                    <p
                        class="
                            ml-2
                            sm:ml-4
                            border border-secondary03
                            rounded-lg
                            px-3
                            py-1
                            text-sm
                        "
                    >
                        App
                    </p>
                </div>
            </div>
            <h1 class="text-center mt-6 mb-16">台鐵 e 訂通 - App Redesign</h1>
            <Hr class="mb-20" />

            <section>
                <h1 class="text-center mb-20">專案簡述</h1>
                <h3 class="mb-4">Q1｜為什麼提案？</h3>
                <p class="mb-20">
                    台鐵做為台灣重要的大眾交通工具之一，提供的服務項目非常多。現有APP的介面設計採用側邊選單的方式，雖然能一次展開所有功能，卻沒有明顯的階層分級，因此顯得冗長，無法馬上找到要使用的功能。有些功能的路徑重複，也讓使用者感覺功能分散凌亂，使用上需要花更多的時間。
                </p>
                <h3 class="mb-4">Q2｜發現什麼問題？</h3>
                <p class="mb-20">
                    希望透過重新整理功能架構，並重新安排介面設計，讓APP使用起來更加直覺，提供使用者更流暢的體驗。
                </p>
                <h3 class="mb-4">Q3｜解決目標</h3>
                <p class="mb-20">
                    蒐集使用者回饋並分析，觀察相同類型的 APP
                    ，重新規劃架構與流程，設計畫面與製作 Prototype 。
                </p>
            </section>
            <Hr :direction="'left'" class="mb-20" />

            <section class="flex flex-col">
                <h1 class="text-center mb-20">使用者研究</h1>
                <h3 class="mb-4">為什麼獲得低分的評價？</h3>
                <p class="mb-20">
                    為了能簡單的獲得使用者的感受，因此蒐集了 Android - Play 商店
                    與 iOS - App Store 的使用者意見回饋，這次整理的時間範圍從
                    2021.01.01 ~ 2021 .06.11 近半年所有 1~5 星的評論，總共 350
                    筆。讓我們來看看使用者怎麼說：
                </p>
                <div
                    class="
                        flex flex-col
                        items-center
                        mb-20
                        md:flex-row
                        md:justify-evenly
                    "
                >
                    <div>
                        <img
                            src="~/assets/img/railway-android.png"
                            alt="railway-android"
                            class="w-[208px] h-[48px]"
                        />
                        <p class="p-4 text-center">(來自Android - Play商店)</p>
                    </div>
                    <div>
                        <img
                            src="~/assets/img/railway-ios.png"
                            alt="railway-ios"
                            class="w-[352px] h-[48px]"
                        />
                        <p class="p-4 text-center">(來自iOS - App Store)</p>
                    </div>
                </div>
                <img
                    src="~/assets/img/railway-comments.png"
                    alt="railway-comments"
                    class="md:max-w-[760px] self-center mb-20"
                />
                <h3 class="mb-4">定義問題 & 解決</h3>
                <p class="mb-20">
                    整理近半年的使用者評論後，針對前三大問題來修改：
                </p>
                <div
                    class="
                        flex flex-col
                        items-center
                        md:flex-row
                        justify-evenly
                    "
                >
                    <div
                        class="
                            flex flex-col
                            justify-between
                            w-[189px]
                            h-[208px]
                            bg-primary
                            border-4 border-primary
                            rounded-lg
                            mb-10
                        "
                    >
                        <p class="text-secondary04 text-center py-3">
                            整合功能
                        </p>
                        <div
                            class="
                                flex flex-col
                                items-center
                                w-[181px]
                                h-[160px]
                                bg-secondary01
                                rounded-lg
                            "
                        >
                            <p class="py-3">找不到要使用的功能</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 stroke-current text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                            <p class="py-3">
                                重新整合現有功能，<br />降低使用的煩躁感。
                            </p>
                        </div>
                    </div>
                    <div
                        class="
                            flex flex-col
                            justify-between
                            w-[189px]
                            h-[208px]
                            bg-primary
                            border-4 border-primary
                            rounded-lg
                            mb-10
                        "
                    >
                        <p class="text-secondary04 text-center py-3">
                            優化介面
                        </p>
                        <div
                            class="
                                flex flex-col
                                items-center
                                w-[181px]
                                h-[160px]
                                bg-secondary01
                                rounded-lg
                            "
                        >
                            <p class="py-3">資訊顯示不清楚</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 stroke-current text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                            <p class="py-3">
                                重新設計頁面，不再<br />忽略重要訊息。
                            </p>
                        </div>
                    </div>
                    <div
                        class="
                            flex flex-col
                            justify-between
                            w-[189px]
                            h-[208px]
                            bg-primary
                            border-4 border-primary
                            rounded-lg
                            mb-10
                        "
                    >
                        <p class="text-secondary04 text-center py-3">
                            調整流程
                        </p>
                        <div
                            class="
                                flex flex-col
                                items-center
                                w-[181px]
                                h-[160px]
                                bg-secondary01
                                rounded-lg
                            "
                        >
                            <p class="py-3">流程複雜繁瑣</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 stroke-current text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                            <p class="py-3">
                                些微調整訂票流程，<br />讓訂票過程更暢通。
                            </p>
                        </div>
                    </div>
                </div>

                <h3 class="mb-4">補充</h3>
                <p class="mb-20">
                    從 Play 商店 與 App Store
                    蒐集使用者回饋時，發現有些使用者為了讓自己的評論被注意，儘管內容是負評，仍會給
                    5 星評論。
                    <br /><br />Android 用戶評論中：扣除系統問題 +
                    情緒性評論共占比 57.9 %，介面設計與功能操作占比 42.1 %。 iOS
                    用戶評論中：扣除系統問題 + 情緒性評論共佔比 55.3
                    ％，介面設計及功能操作佔比 44.7 %。
                    <br /><br />將兩方用戶針對介面與功能的評論合併之後，可以發現評論最多的前三名分別是：取票相關
                    16.1 ％，付款相關 15.3 ％，希望新增功能 13.9 %。
                    <br /><br />*註：系統問題為「閃退」、「連線異常」等等。情緒性評論為「爛透了」、「很棒」等等
                </p>
            </section>
            <Hr class="mb-20" />

            <section class="mb-20">
                <h1 class="text-center mb-20">調整架構</h1>
                <img
                    src="~/assets/img/railway-hierarchy-1.png"
                    alt="railway-hierarchy-1"
                />
                <img
                    src="~/assets/img/railway-hierarchy-2.png"
                    alt="railway-hierarchy-2"
                />
            </section>
            <Hr :direction="'left'" class="mb-20" />

            <section>
                <h1 class="text-center mb-4">設計畫面</h1>
                <h3 class="mb-4">01｜重新安排首頁</h3>
                <p class="mb-20">
                    在整理架構時，最直接遇到的便是首頁的排版。原則上將常用的快速按鈕放在首頁沒有問題，但是這個畫面經常只有在一打開
                    App
                    的時候會顯現，之後要切換其他功能，只能點選側邊選單欄，因此快速按鈕經常無法達成快速的效果。
                    <br /><br />而側邊選單欄，又因為 App
                    的功能非常多，在畫面上很長一串，又沒有明顯的分層，因此往往需要花費更多時間在尋找功能上。
                    <br /><br />為了節省時間、減少搜尋時的不耐煩，將側邊選單欄整合為底部導覽列，除了可以更快速的切換功能之外，頂部空出來的地方，也可以放置像是「最新消息」的功能。
                </p>
                <h3 class="mb-4">02｜調整訂票流程與畫面</h3>
                <p class="mb-20">
                    車種與票種，那個條件應該更為優先？
                    <br /><br />原本的 App
                    優先選擇車種，預訂完成後才選擇票種，但是這樣在流程上會出現許多阻礙。首先，查詢出來的資料價格不是最正確。如果今天只有一位成人，價格當然正確，但是如果旅客包含孩童、敬老、愛心等等不同票種的情況，在車種優先的狀況下，搜尋出來的價格就不是正確的金額。
                    <br /><br />其次，先指定車種，查詢結果只會出現單一車種，但是如果想看其他車種的時間與比較的話，需要重新設定篩選條件，增加搜尋上的阻礙。
                    <br /><br />為了改善金額顯示與提升搜尋彈性，因此將票種設定為優先選擇，一來可以改善金額顯示為正確，二來可以在搜尋結果頁面，新增切換車種的標籤，讓選擇車次可以更有彈性。
                </p>
                <h3 class="mb-4">03｜票證資訊的整理</h3>
                <p class="mb-20">
                    在預訂完成後，沒有稍後付款的選項。如果想要稍後付款，要點其他功能才能離開此畫面，這會讓使用者感到不確定，
                    產生「如果按其他按鈕不知道會發生什麼事」的想法。另外，金額資訊也在不同區塊重複出現，會讓使用者不確定要以哪個區塊的金額為準。
                    <br /><br />由於上一部分已經針對訂票流程修改，因此在票證資訊的畫面，就不需要再選擇票種，畫面上也將金額資訊整理到同一區塊，最後再將行程資訊固定在右上角，避免散亂的感覺。
                </p>
                <h3 class="mb-4">04｜整理票面資訊</h3>
                <p class="mb-20">
                    車票預訂完成後，會有未付款、已付款（待取票）、已取票、分票，等等狀態，原先不同狀態的車票介面都不一樣，無法延續這些車票給使用者的一致性，因此將車票整理到同一個類別裡面，並且將車票的樣式統一規格。票面資訊重新整理，原本的顏色過多，字級也太過相近，無法判斷資訊的層級。
                    <br /><br />最後，將載入車票的功能固定在右上角，不論是領取分票、或是載入舊手機的車票都更加方便，不會隱藏在找不到的地方。
                </p>
            </section>
            <Hr class="mb-20" />

            <section class="mb-20">
                <h1 class="text-center mb-20">核心樣式</h1>
                <p class="mb-20">
                    主要色與次要色沿用原本 App
                    的顏色，也能夠符合台鐵的企業色，但是為了讓畫面有層次感，以及達到提示、分層的效果，因此額外增加了相同色系的色彩作為輔助使用。
                </p>
                <img
                    src="~/assets/img/railway-core-template.png"
                    alt="railway-core-template"
                />
            </section>
            <Hr :direction="'left'" class="mb-20" />

            <section>
                <h1 class="text-center mb-20">後記</h1>
                <p class="mb-20">
                    最一開始有這個專案的發想，是因為我要到外縣市出遊，朋友使用台鐵
                    App
                    訂了車票之後，要分票給我。後來自己也陸續使用幾次訂票，發現在使用時內心都會冒出許多疑惑，因此當我有了
                    Redesign 的計畫時，第一個想到的便是台鐵 e 訂通這個 App 。
                    <br /><br />在整理與統計的過程中，發現大部分使用者會將簡化為帶有情緒的形容詞，例如：「很棒」、「很方便」、「爛透了」、「不好用」等等簡短用語，無法更深入了解使用者實際上具體遇到什麼困難，或是哪一個環節令使用者覺得不好用。
                    <br /><br />其中「取票」部分，最一開始看到很多使用者只會簡單寫：「找不到車票」、「換手機後車票都不見了，但是網頁版還可以看到訂票紀錄」。
                    <br /><br />後來加上實際操作與功能拆解後發現，App
                    中提供一個功能可以重新載入車票，但是這個功能的命名為「訂票紀錄查詢」，與另外一個功能「歷史訂票紀錄」相似，容易被混淆。而且不論是重新載入車票，或是載入他人分票，都很難找到這個功能。
                    <br /><br />也因此僅透過用戶評論，確實很難理解使用者遇到的，究竟是真的系統問題導致車票消失？或是只是使用者找不到功能？更或是使用者有找到功能、但是覺得路徑太複雜繁瑣？
                    <br /><br />雖然從 App
                    評價可以很快速獲得大量的使用者回饋，但真實的使用者訪談可以挖掘出更多更加具體的問題內容。
                </p>
            </section>
            <Hr class="mb-20" />

            <section class="flex flex-col justify-center items-center">
                <h1 class="text-center mb-20">看看其他專案</h1>
                <NuxtLink to="/projects/metro-rwd">
                    <div
                        class="
                            flex flex-col
                            justify-center
                            items-center
                            border
                            rounded-lg
                            p-6
                            mb-10
                            transition-all
                            sm:h-[168px]
                            sm:flex-row
                            sm:max-w-[504px]
                            md:max-w-[600px]
                            hover:shadow-md
                            hover:cursor-pointer
                        "
                    >
                        <img
                            src="~/assets/img/metro-cover.png"
                            alt="cover"
                            class="
                                rounded-lg
                                object-cover
                                mb-4
                                sm:w-32
                                sm:h-32
                                sm:mb-0
                            "
                        />
                        <div class="flex flex-col sm:ml-10">
                            <h1 class="mb-6 text-xl">
                                台北捷運官網 - <br />響應式網頁 (RWD) 設計提案
                            </h1>
                            <div class="flex">
                                <p
                                    class="
                                        mr-2
                                        border border-secondary03
                                        rounded-lg
                                        px-3
                                        py-1
                                        text-sm
                                    "
                                >
                                    RWD 響應式設計
                                </p>
                                <p
                                    class="
                                        mr-2
                                        border border-secondary03
                                        rounded-lg
                                        px-3
                                        py-1
                                        text-sm
                                    "
                                >
                                    網頁版
                                </p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </section>
        </main>
    </div>
</template>

<script>
export default {}
</script>