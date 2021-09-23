<template>
    <div
        class="
            p-6
            h-screen
            flex flex-col
            justify-center
            items-center
            md:flex md:flex-row
        "
    >
        <img src="~/static/404.png" alt="404" class="w-[300px]" />
        <div class="mt-20 sm:mt-20 md:ml-20 md:mt-0">
            <p class="text-xl">
                噢～抱歉！ <br />這個頁面似乎出了些意外，
                <br />目前無法提供完整的資訊。
            </p>
            <p class="text-xl">
                讓我們從這裡
                <NuxtLink
                    to="/"
                    class="
                        w-[120px]
                        inline-block
                        bg-primary
                        text-white
                        align-middle
                        text-center
                        rounded-lg
                        m-4
                        text-xl
                        px-4
                        py-1
                        font-notoSans
                    "
                    >回到首頁</NuxtLink
                >
                吧！
            </p>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'error_layout',
    props: ['error'],
}
</script>