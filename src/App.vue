<template>
  <div class="container mx-auto">
    <TaskComponent />

    <h4 class="mb-3">
      1. Какие хранилища данных на фронте вы знаете и какие используете?
    </h4>
    <TypesStoreComponent />

      <div class="mb-5">

        <h4 class="mb-3">
          2. Напишите способы взаимодействия 2-х компонентов (дочернего и родительского).
        </h4> 
        <p>
          Взаимодействия между компонентами родитель &#8596; дочерний происходит через props и эмиты.
        </p>
        <div class="border p-3">
          <h5 class="mb-3 text-primary">Родительский компонент</h5>
          <div class="mb-3">
            <button class="btn btn-secondary" @click="incrementToChild">Передать данные в дочерний компонент</button>
            <p>Данные из дочернего элемента: <strong>{{ fromChild }}</strong></p>
            <pre>
@increment="increment"
:toChild="toChild"
            </pre>
          </div>
        </div>
        
        <InterActionComponent 
          @increment="increment"
          :toChild="toChild"
        />

        <h4 class="mb-3">
            3. Для чего нужен атрибут scoped в теге &#60;style&#62; Vue SFC и как он работает?
        </h4>
        <ScopedComponent />

        <h4 class="mb-3">
          4. Как обычно посылаются фото для сохранения на сервер?
        </h4>
        <PhotoComponent />

        <h4 class="mb-3">
          5. Какие методы синхронизации запросов вы знаете?
        </h4>
        <SyncComponent />

        <h4 class="mb-3">
          6. Задача на сохранение данных формы при отрисовке дочернего компонента по директиве v-if
        </h4>
        <div class="p-3 border min-height">
          <button @click="handleBtnA" class="btn btn-secondary btn-sm mb-2" >показать/скрыть компонент A</button>
          <div class="min-height-a mb-4">
            <div v-if="showComponentA">
              <ChildComponentA />
            </div>
          </div>
        
          <div class="mb-4">
            <button @click="handleBtnB" class="btn btn-primary btn-sm mb-2">показать/скрыть компонент B</button>
            <div v-if="showComponentB">
              <ChildComponentB />
            </div>
          </div>
        </div>
      </div>

      <div class="my-5">
        <h3>
          Спасибо за просмотр 😊
        </h3>
      </div>
  </div>
  
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

import TypesStoreComponent from './components/TypesStoreComponent.vue'
import InterActionComponent from './components/InteractionComponent.vue'
import ScopedComponent from './components/ScopedComponent.vue'
import PhotoComponent from './components/PhotoComponent.vue'
import SyncComponent from './components/SyncComponent.vue'
import TaskComponent from './components/TaskComponent.vue'
import ChildComponentA from './components/ChildComponentA.vue'
import ChildComponentB from './components/ChildComponentB.vue'

export default {
  name: 'App',
  components: {
    TaskComponent,
    TypesStoreComponent,
    InterActionComponent,
    ScopedComponent,
    PhotoComponent,
    SyncComponent,
    ChildComponentA,
    ChildComponentB,
  },
  props: {},
  emits: [
    'increment',
  ],
  data() {
      return {
        showComponentA: true,
        showComponentB: true,
        fromChild: 0,
        toChild: 0,
      };
  },
  computed: {
    ...mapGetters(['DATA_A',]),
  },
  watch: {},
  created() {},
  mounted() {}, 
  updated() {},
  methods: {
    handleBtnA() {
      this.SET_DATA_A("SET_DATA_A");
      this.showComponentA = !this.showComponentA;
    },
    handleBtnB() {
      this.showComponentB = !this.showComponentB;
    },

    // Запускается из дочернего элемента
    increment () {
      this.fromChild += 1;
    },
    incrementToChild() {
      this.toChild += 1;
    },
    ...mapActions(['SET_DATA_A']), 
    ...mapActions(['SET_DATA_B']),
  },

}
</script>

<style>
</style>
