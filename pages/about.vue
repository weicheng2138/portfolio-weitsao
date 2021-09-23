<template>
    <main>
        <section class="flex flex-col justify-center items-center">
            <img src="" alt="winnie" class="w-64 h-60 mb-20" />
            <h2>嗨～你好，我是 Winnie</h2>
            <p>
                我畢業於國立彰化師範大學國文學系，並於畢業後投入旅遊服務業。由於自己對於設計與美感的熱情，日常中會主動吸收、學習相關知識。在接觸到了
                UI/UX
                之後深受吸引，便開始積極規劃進度、報名課程、參加社團討論、製作專案。期許自己未來能在
                UI/UX 領域深耕、茁壯。
            </p>
            <h2>不害怕跳出舒適圈</h2>
            <p>
                從教育界到旅遊業的我，不斷學習新事物，不害怕改變，在高速成長與發展的
                UI/UX 環境中，能夠持續保持前進的動力。
            </p>
            <h2>過往經驗是未來養分</h2>
            <p>
                過去在旅遊服務業多年的我，從業務到產品 OP
                ，提供無數旅客美好的旅遊體驗。在未來，我將在 UI/UX
                領域中，提供更多人良好的產品使用體驗。
            </p>
        </section>

        <h2 class="text-center">工作技能</h2>
        <section class="flex flex-row justify-evenly">
            <div class="iconDiv">
                <img src="~/assets/images/ui-design.png" alt="ui-design" />
                <p>UI 介面設計</p>
            </div>
            <div class="iconDiv">
                <img src="~/assets/images/prototype.png" alt="prototype" />
                <p>Prototype 製作</p>
            </div>
            <div class="iconDiv">
                <img src="~/assets/images/logo-icon.png" alt="logo-icon" />
                <p>Logo / Icon 繪製</p>
            </div>
            <div class="iconDiv">
                <img src="~/assets/images/drawing.png" alt="drawing" />
                <p>插畫繪製</p>
            </div>
        </section>

        <h2 class="text-center">使用軟體</h2>
        <section class="flex flex-row justify-evenly">
            <div class="iconDiv">
                <img src="~/assets/images/figma.png" alt="figma" />
                <p>Figma</p>
            </div>
            <div class="iconDiv">
                <img src="~/assets/images/illustrator.png" alt="illustrator" />
                <p>Adobe Illustrator</p>
            </div>
            <div class="iconDiv">
                <img src="~/assets/images/photoshop.png" alt="photoshop" />
                <p>Adobe Photoshop</p>
            </div>
            <div class="iconDiv">
                <img src="~/assets/images/procreate.png" alt="procreate" />
                <p>Procreate</p>
            </div>
        </section>

        <h2 class="text-center">工作經驗</h2>
        <section class="flex flex-col justify-center items-center">
            <div class="flex flex-row mb-20">
                <img src="~/assets/images/lion.png" alt="lion" class="mr-12" />
                <div class="flex flex-col justify-center">
                    <h1 class="text-xl mb-3">國際訂房 OP 專員</h1>
                    <span class="font-sans text-secondary04 mb-1"
                        >雄獅旅行社&nbsp;&nbsp;2016.Sep ~ 2020.Dec</span
                    >
                    <ul class="pl-4">
                        <li>處理國際訂房相關事務，具備危機處理能力。</li>
                        <li>與業務、供應商多方合作，具備溝通協調能力。</li>
                        <li>曾經參與優化國際訂房相關 SOP 流程制訂。</li>
                    </ul>
                </div>
            </div>

            <div class="flex flex-row mb-20">
                <img src="~/assets/images/lion.png" alt="lion" class="mr-12" />
                <div class="flex flex-col justify-center sm:w-[352px]">
                    <h1 class="text-xl mb-3">門市業務專員</h1>
                    <span class="font-sans text-secondary04 mb-1"
                        >雄獅旅行社&nbsp;&nbsp;2014.Mar ~ 2016.Sep</span
                    >
                    <ul class="pl-4">
                        <li>具備產品銷售技能。</li>
                        <li>協助旅客辦理各項國內外旅遊事宜。</li>
                        <li>曾為門市業績最佳業務。</li>
                    </ul>
                </div>
            </div>
        </section>

        <h2 class="text-center">學歷</h2>
        <section class="flex flex-col justify-center items-center">
            <div class="flex flex-row mb-20">
                <img src="~/assets/images/ncue.png" alt="lion" class="mr-12" />
                <div class="flex flex-col justify-center sm:w-[352px]">
                    <h1 class="text-xl mb-3">國立彰化師範大學</h1>
                    <span class="font-sans text-secondary04 mb-1"
                        >國文學系&nbsp;&nbsp;2009.Sep ~ 2013.Jun</span
                    >
                    <ul class="pl-4">
                        <li>
                            主修中國文學，同時修習教育學程，一併取得合格教師資格
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {}
</script>

<style  scoped>
h2 {
    @apply mb-10;
}
p {
    @apply mb-20;
}
.iconDiv p {
    @apply mb-20 text-center text-xs sm:text-sm;
}
.iconDiv {
    @apply flex flex-col justify-center items-center;
}
img {
    @apply mb-6 w-[50px]  h-[50px] sm:w-[70px]  sm:h-[70px];
}
li {
    @apply list-disc;
}
</style>