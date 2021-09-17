<template>
    <div id="app">
        <Index />
        <div class="noise"></div>
    </div>
</template>

<script>
import Index from "./components/Index.vue";

export default {
    name: "app",

    components: {
        Index,
    },
};
</script>

<style>
html,
body {
    min-height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
}

body {
    flex: 1 1 auto;
    align-items: center;
    justify-content: stretch;
    background: #89237e url(assets/bg.svg) 50% 50% no-repeat;
    background-size: cover;
}

#app {
    flex: 1 1 auto;

    display: flex;
    align-items: stretch;
    justify-content: center;
}

.noise {
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;

    background: url(assets/noise.png) 0 0 repeat;
}
</style>
