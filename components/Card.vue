<template>
    <div
        class="
            flex flex-col
            border
            rounded-lg
            p-6
            mb-10
            transition-all
            md:max-w-[840px]
            md:flex-row
            md:p-10
            md:w-full
            hover:shadow-md
            hover:cursor-pointer
        "
    >
        <img
            :src="imgUrl"
            alt="cover"
            class="mb-6 md:mb-0 md:mr-20 md:w-2/5 rounded-lg object-cover"
        />
        <div class="flex flex-col">
            <div class="mb-6 flex justify-between">
                <p class="imgDescription">{{ projectTagTime.time }}</p>
                <div class="flex">
                    <p
                        class="
                            ml-2
                            sm:ml-4
                            border border-secondary03
                            rounded-lg
                            px-3
                            py-1
                            text-xs text-secondary03
                        "
                    >
                        {{ projectTagTime.tags[0] }}
                    </p>
                    <p
                        class="
                            ml-2
                            sm:ml-4
                            border border-secondary03
                            rounded-lg
                            px-3
                            py-1
                            text-xs text-secondary03
                        "
                    >
                        {{ projectTagTime.tags[1] }}
                    </p>
                </div>
            </div>
            <h1 class="mb-6 text-xl">{{ title }}</h1>
            <p class="mb-6 imgDescription">{{ description }}</p>
            <button class="self-center text-primary">看看詳細內容</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        imgUrl: {
            default: 'imgUrl',
            type: String,
        },
        title: {
            default: 'title',
            type: String,
        },
        description: {
            default: 'description',
            type: String,
        },
        // eslint-disable-next-line vue/require-default-prop
        projectTagTime: {
            type: Object,
        },
    },
}
</script>

<style  scoped>
</style>