<template>
    <main class="mt-[56px]">
        <section class="flex flex-col justify-center items-center lg:flex-row">
            <img
                src="~/assets/images/winnie-tsao.png"
                alt="winnie"
                class="
                    w-[400px]
                    h-[240px]
                    mt-20
                    lg:mt-0
                    lg:mr-20
                    object-cover
                    rounded-xl
                "
            />
            <div class="pt-20">
                <h2 class="mb-10">嗨～你好，我是 Winnie</h2>
                <p>
                    我喜歡簡單明確且具備美觀的使用者介面，想打造直覺且友善的使用者環境，讓更多人享受到
                    UI/UX 為生活帶來的改變。
                    <br /><br />過去在旅遊服務業任職超過五年經驗，累積了溝通協調、危機處理等軟實力；另外，也透過線上課程、加入
                    UI/UX 社群討論、參與相關講座，提升自己 UI/UX 的專業硬實力。
                    <br /><br />在快速成長與發展的 UI/UX
                    環境中，我不害怕改變，並期許自己未來能在 UI/UX
                    領域深耕、茁壯。
                </p>
            </div>
        </section>

        <h2 class="text-center mb-20 mt-20">工作技能</h2>
        <section
            class="grid grid-cols-2 mb-20 sm:flex sm:flex-row sm:justify-evenly"
        >
            <div class="iconDiv">
                <img
                    src="~/assets/images/ui-design.png"
                    alt="ui-design"
                    class="imgIcon"
                />
                <p>UI 介面設計</p>
            </div>
            <div class="iconDiv">
                <img
                    src="~/assets/images/prototype.png"
                    alt="prototype"
                    class="imgIcon"
                />
                <p>Prototype 製作</p>
            </div>
            <div class="iconDiv">
                <img
                    src="~/assets/images/logo-icon.png"
                    alt="logo-icon"
                    class="imgIcon"
                />
                <p>Logo / Icon 繪製</p>
            </div>
            <div class="iconDiv">
                <img
                    src="~/assets/images/drawing.png"
                    alt="drawing"
                    class="imgIcon"
                />
                <p>插畫繪製</p>
            </div>
        </section>

        <h2 class="text-center mb-20">使用軟體</h2>
        <section
            class="grid grid-cols-2 mb-20 sm:flex sm:flex-row sm:justify-evenly"
        >
            <div class="iconDiv">
                <img
                    src="~/assets/images/figma.png"
                    alt="figma"
                    class="imgIcon"
                />
                <p>Figma</p>
            </div>
            <div class="iconDiv">
                <img
                    src="~/assets/images/illustrator.png"
                    alt="illustrator"
                    class="imgIcon"
                />
                <p>Adobe Illustrator</p>
            </div>
            <div class="iconDiv">
                <img
                    src="~/assets/images/photoshop.png"
                    alt="photoshop"
                    class="imgIcon"
                />
                <p>Adobe Photoshop</p>
            </div>
            <div class="iconDiv">
                <img
                    src="~/assets/images/procreate.png"
                    alt="procreate"
                    class="imgIcon"
                />
                <p>Procreate</p>
            </div>
        </section>

        <h2 class="text-center mb-20">工作經驗</h2>
        <section class="flex flex-col mb-20 sm:justify-center">
            <div class="grid grid-cols-3 grid-rows-2 lg:grid-rows-1 mb-20">
                <img
                    src="~/static/wei-tsao-icon.svg"
                    alt="lion"
                    class="
                        w-[70px]
                        h-[70px]
                        row-span-2
                        justify-self-center
                        self-center
                    "
                />
                <div
                    class="
                        flex flex-col
                        justify-center
                        col-span-2
                        lg:col-span-1
                    "
                >
                    <h1 class="text-xl mb-3">接案設計師</h1>
                    <span class="font-sans text-secondary04 mb-1"
                        >自由接案&nbsp;&nbsp;2020.Dec ~ 2021.Now</span
                    >
                </div>
                <ul class="pl-4 col-span-2 lg:col-span-1">
                    <li>名片設計</li>
                    <li>Logo 設計</li>
                    <li>手冊設計</li>
                </ul>
            </div>

            <div class="grid grid-cols-3 grid-rows-2 lg:grid-rows-1 mb-20">
                <img
                    src="~/assets/images/lion.png"
                    alt="lion"
                    class="
                        w-[70px]
                        h-[70px]
                        row-span-2
                        justify-self-center
                        self-center
                    "
                />
                <div
                    class="
                        flex flex-col
                        justify-center
                        col-span-2
                        lg:col-span-1
                    "
                >
                    <h1 class="text-xl mb-3">國際訂房 OP 專員</h1>
                    <span class="font-sans text-secondary04 mb-1"
                        >雄獅旅行社&nbsp;&nbsp;2016.Sep ~ 2020.Dec</span
                    >
                </div>
                <ul class="pl-4 col-span-2 lg:col-span-1">
                    <li>處理國際訂房相關事務，具備危機處理能力。</li>
                    <li>與業務、供應商多方合作，具備溝通協調能力。</li>
                    <li>曾經參與優化國際訂房相關 SOP 流程制訂。</li>
                </ul>
            </div>

            <div class="grid grid-cols-3 grid-rows-2 lg:grid-rows-1 mb-20">
                <img
                    src="~/assets/images/lion.png"
                    alt="lion"
                    class="
                        w-[70px]
                        h-[70px]
                        row-span-2
                        justify-self-center
                        self-center
                    "
                />
                <div
                    class="
                        flex flex-col
                        justify-center
                        col-span-2
                        lg:col-span-1
                    "
                >
                    <h1 class="text-xl mb-3">門市業務專員</h1>
                    <span class="font-sans text-secondary04 mb-1"
                        >雄獅旅行社&nbsp;&nbsp;2014.Mar ~ 2016.Sep</span
                    >
                </div>
                <ul class="pl-4 col-span-2 lg:col-span-1">
                    <li>具備產品銷售技能。</li>
                    <li>協助旅客辦理各項國內外旅遊事宜。</li>
                    <li>曾為門市業績最佳業務。</li>
                </ul>
            </div>
        </section>

        <h2 class="text-center mb-20">學歷</h2>
        <section class="flex flex-col sm:justify-center">
            <div class="grid grid-cols-3 grid-rows-2 lg:grid-rows-1 mb-20">
                <img
                    src="~/assets/images/ncue.png"
                    alt="lion"
                    class="
                        w-[70px]
                        h-[70px]
                        row-span-2
                        justify-self-center
                        self-center
                    "
                />
                <div
                    class="
                        flex flex-col
                        justify-center
                        col-span-2
                        lg:col-span-1
                    "
                >
                    <h1 class="text-xl mb-3">國立彰化師範大學</h1>
                    <span class="font-sans text-secondary04 mb-1"
                        >國文學系&nbsp;&nbsp;2009.Sep ~ 2013.Jun</span
                    >
                </div>
                <ul class="pl-4 col-span-2 self-center lg:col-span-1">
                    <li>
                        主修中國文學，同時修習教育學程，一併取得合格教師資格
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>
export default {}
</script>

<style  scoped>
p {
    @apply mb-20;
}
.iconDiv p {
    @apply mb-20 text-center text-xs sm:text-sm;
}
.iconDiv {
    @apply flex-1 flex flex-col items-center;
}
.imgIcon {
    @apply mb-6 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px];
}
li {
    @apply list-disc text-sm leading-6 text-secondary03;
}
span {
    @apply text-sm;
}
</style>