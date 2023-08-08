<template>
    <div class="mb-5 border p-4">
        Для синхронизации запросов по АПИ можно использовать последовательный способ отправки/получения данных, используя библеотеку 
        <strong>axios</strong>. После получения данных выполняем последовательность обработки данных. Таким образом получится некая очередь или 
        логика работы с данными.
        <div class="my-3">
            <pre class="text-secondary">
axios
    .get('https://api.some-resource')
    .then( (res) => { function A(res){} })
    .then((res) => { function C(res){} })
    ....
    .then((res) => { function D(res){} })
            </pre>
        </div>
    </div>
</template>

<script>

export default {
    name: "SyncComponent",
    data() {return {};},
}
</script>

<style scoped>

</style>