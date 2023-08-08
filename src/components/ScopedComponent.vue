<template>
    <div class="mb-5 border p-4">
        <!-- <h4 class="">
            3. Для чего нужен атрибут scoped в теге &#60;style&#62; Vue SFC и как он работает?
        </h4> -->
        <h6>
            К этому тексту применены глобальные стили, подключенные в <strong>main.js</strong>, которые видны во всех компонентах приложения.
        </h6>
        <h6 class="h6">
            К этому тексту применены локальные стили, которые могут применены только в этом компоненте.<br>
            В своём роде <strong>&#60;style scoped&#62;</strong> это инкапсуляция для стилей в DOM.
        </h6>
        <h4>

        </h4>
        <div class="">
            
        </div>
    </div>
</template>

<script>

export default {
    name: "ScopedComponent",
    data() {return {};},
}
</script>

<style scoped>
.h6 {
    color:blueviolet
}
</style>