<template>
    <section
        class="
            bg-secondary01
            flex flex-col
            justify-center
            items-center
            border-b-[6px] border-primary
            sm:flex-row
            sm:justify-evenly
            sm:items-center
            sm:h-60
        "
    >
        <div class="mb-20 mt-10">
            <img
                src="~/static/behance.svg"
                width="35"
                height="35"
                alt="behance-icon"
            />
            <img
                src="~/static/ig.svg"
                width="35"
                height="35"
                alt="behance-icon"
            />
            <img
                src="~/static/CakeResume.svg"
                width="35"
                height="35"
                alt="behance-icon"
            />
            <img
                src="~/static/gmail.svg"
                width="35"
                height="35"
                alt="behance-icon"
            />
        </div>
        <div>
            <a href="/">
                <img
                    src="~/static/wei-tsao-icon.svg"
                    width="40"
                    height="40"
                    alt="wei-tsao-icon"
                    class="inline-block mr-4"
                />
            </a>
            <a
                href="/"
                class="
                    inline-block
                    text-center
                    font-notoSans font-normal
                    text-sm
                "
                >WEI．TSAO</a
            >
            <p class="text-secondary03 font-notoSans text-xs mb-10 leading-5">
                <br />© 2021 Designed by Winnie Tsao <br />
                Built by Keck Hung
            </p>
        </div>
    </section>
</template>

<script>
import { socialMedia } from '~/config'
export default {
    data() {
        return {
            socialMedia: null,
        }
    },
    created() {
        this.socialMedia = socialMedia
    },
}
</script>

<style  scoped>
img {
    @apply inline-block mx-3;
}
</style>