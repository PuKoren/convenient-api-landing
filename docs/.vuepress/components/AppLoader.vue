<template>
    <svg class="app-loader" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" />
    </svg>
</template>

<style scoped lang="stylus">
@import '../theme/styles/config.styl'

.app-loader
    height 42px
    width 42px
    animation loader-rotate 2s linear infinite

    circle
        animation loader-dash 1.5s ease-in-out infinite
        stroke-dasharray 90,150
        stroke-dashoffset 0
        stroke-width 2
        stroke $accentColor
        stroke-linecap round

@keyframes loader-rotate
    100%
        transform rotate(360deg)

@keyframes loader-dash
    0%
        stroke-dasharray 1,200
        stroke-dashoffset 0
    50%
        stroke-dasharray 90,150
        stroke-dashoffset -40px
    100%
        stroke-dasharray 90,150
        stroke-dashoffset -120px
</style>
