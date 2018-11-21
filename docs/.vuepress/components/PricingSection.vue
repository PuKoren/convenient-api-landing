<template>
    <section class="pricing-section">
        <ul>
            <li>
                <div class="name">Free</div>
                <ul class="enabled-features">
                    <li>x</li>
                    <li>y</li>
                    <li>z</li>
                </ul>
            </li>
            <li>
                <div class="name">Pro</div>
                <ul class="enabled-features">
                    <li>x</li>
                    <li>y</li>
                    <li>z</li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="stylus">
@import '../theme/styles/config.styl'

ul
    list-style none

.pricing-section
    > ul
        display flex
        justify-content center

        > li
            width 100%

    .name
        font-size 2rem
        font-weight 600

    .enabled-features
        padding 0.5rem

</style>
