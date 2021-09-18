<template>
    <section class="bg-secondary01 flex flex-col justify-center items-center">
        <div></div>
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
        </div>
        <div>© 2021 Designed by Winnie Tsao</div>
        <div>Built by Keck Hung</div>
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
</style>