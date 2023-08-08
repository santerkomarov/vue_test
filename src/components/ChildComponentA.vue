<template>
    <div class="alert alert-secondary min-height-a" role="alert">
        <h3>
            Дочерний компонент
        </h3>
        <p>
            Вариант №1. Для сохранения данных формы использую LocalStorage.
        </p>
        <div class="d-flex align-items-center">
            <input
                class="me-3"
                type="text" 
                v-model="dataA" 
                @input="updateDataA" 
            />
            <button 
                class="btn btn-danger btn-sm" 
                @click="clearStorage"
            >
                очистить localStorage
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChildComponentA",
    data() {
        return {
            dataA: "",
        };
    },
    mounted()  {

        // Получаю данные
        if (localStorage.data) {
            this.dataA = localStorage.getItem("data")
        }
    },

    methods: {
        /**
         * Записываю значение в LocalStorage 
         */ 
        updateDataA(arg) {
            localStorage.setItem("data", arg.target.value)
        },

        /**
         * очистка LocalStorage
         */ 
        clearStorage() {
            localStorage.setItem("data", "")
            this.dataA = localStorage.getItem("data")
            //localStorage.clear()
        },

    }
}
</script>

<style>
</style>