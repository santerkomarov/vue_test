<template>
    <div class="alert alert-primary" role="alert">
        <h3>
            Дочерний компонент B
        </h3>
        <p>
            Вариант №2. Для сохранения данных формы использую хранилище Vuex.
        </p>
        <div class="mb-3">
            <input type="text" :value="dataB" @input="updateDataB">
        </div>
        <div>
            <p>Значение вычисляемое, хранится в Store поэтому не обнуляется после повторного рендеринга.</p> 
            <pre>
computed: {
    ...mapState({ 
        dataB: state => state.data_b,
    }),
},
            </pre>
        </div>
    </div>
</template>

<script>

import {mapActions,mapState} from 'vuex';

export default {
    name: "ChildComponentB",
    props: {},
    emits: [],
    data() {return {};},
    computed: {
        // ...mapGetters(['DATA_B',]),
        ...mapState({ 
            dataB: state => state.data_b,
        }),
    },
    watch: {},
    created() {},
    mounted() {},
    updated() {},
    methods: {
        /**
         * Обновляет значение data_b в store
         */
        updateDataB(arg) {
            this.SET_DATA_B(arg.target.value);
        },
        ...mapActions(['SET_DATA_B']),
    },
}
</script>
<style>
</style>