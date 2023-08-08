<template>
    <div class="mb-5 border p-4 bg-light">
        <h5 class="text-primary">
            Дочерний компонент
        </h5>
        <div>
            <button @click="$emit('increment', 1)" class="btn btn-secondary">Передать данные в Родителя (@emit)</button>
        </div>
        <div class="mb-3">
            Данные от Родительского компонента: <strong>{{ toChild }}</strong> 
        </div>
        <div>
            <pre>
props: {
    toChild: { 
        type: [String, Number],
        default: 0,
    },
}
@click="$emit('increment', 1)
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name: "InterActionComponent",
    props: {
        toChild: { 
            type: [String, Number],
            default: 0,
        },
    },
    data() {return {};},
}
</script>

<style>
</style>