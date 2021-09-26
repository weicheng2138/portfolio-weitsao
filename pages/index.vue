<template>
    <main class="mt-[56px] sm:mt-[70px] pt-10 sm:pt-20">
        <section
            class="
                flex flex-col
                items-center
                justify-center
                mb-6
                sm:mb-56
                md:flex-row-reverse
            "
        >
            <img
                src="~/assets/gif/site-cover.gif"
                alt="winnie tsao"
                class="w-60 h-60 md:ml-6 lg:h-80 lg:w-80"
            />
            <div>
                <h1 v-if="moment === 'morning'" class="text-center pt-6">
                    Hi！早安
                </h1>
                <h1 v-else-if="moment === 'afternoon'" class="text-center pt-6">
                    Hi！午安
                </h1>
                <h1 v-else class="text-center pt-6">Hi！晚安</h1>

                <h1 class="text-center pb-10">我是 Winnie</h1>
                <p class="text-lg sm:max-w-[490px]">
                    我觀察細膩、擅於傾聽。我想做出好看好用、讓使用者感到溫暖的產品。正在朝向成為
                    UI/UX 設計師持續精進中。
                </p>
            </div>
        </section>
        <Hr class="mb-10 md:mb-20" />

        <section
            id="projects"
            class="flex flex-col items-center justify-center mb-20"
        >
            <h2 class="mb-10">一起來看看我的 UI/UX 設計吧</h2>
            <NuxtLink to="/projects/railway-redesign">
                <Card
                    :img-url="require('~/assets/images/railway-cover.png')"
                    :title="'台鐵 e 訂通 APP Redesign'"
                    :description="'藉由重新整理功能架構與介面設計，提供更容易操作的訂票體驗。'"
                    :project-tag-time="{
                        time: '2021 - JUL',
                        tags: ['使用者介面', 'App'],
                    }"
                />
            </NuxtLink>
            <NuxtLink to="/projects/metro-rwd">
                <Card
                    :img-url="require('~/assets/images/metro-cover.png')"
                    :title="'台北捷運官網 響應式網頁 RWD 設計提案'"
                    :description="'讓官方網站更符合所有裝置吧！'"
                    :project-tag-time="{
                        time: '2021 - JUL',
                        tags: ['網頁版', 'RWD'],
                    }"
                />
            </NuxtLink>
        </section>
        <Hr :direction="'left'" />
    </main>
</template>

<script>
const DAYTIME = {
    MORNING: 'morning',
    AFTERNOON: 'afternoon',
    EVENING: 'evening',
}
export default {
    data() {
        return {
            moment: DAYTIME.MORNING,
        }
    },
    mounted() {
        const currentHour = new Date().getHours()

        if (currentHour >= 5 && currentHour < 11) this.moment = DAYTIME.MORNING
        if (currentHour >= 11 && currentHour < 17)
            this.moment = DAYTIME.AFTERNOON
        if (
            (currentHour >= 17 && currentHour <= 23) ||
            (currentHour >= 0 && currentHour < 5)
        )
            this.moment = DAYTIME.EVENING
    },
}
</script>

<style scoped>
</style>
