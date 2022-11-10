<!--<template>
    <div>
        <button @click="count++">Menu</button>
        <div>Count is: {{count}}</div>
    </div>
</template>-->

<template>
    <div>
        <div>this is onclick dropdown</div>
        <button class="p-2 bg-green-200" @click="dropdown=!dropdown">menu</button>
        <div class="rounded-lg bg-purple-200" v-if="dropdown">
        </div>
        <div>This is onchange.</div>
        <input class="p-2 border-2" type="text" @change="count++">
        <div>
            count is {{count}}
        </div>
        <div>This is v-model</div>
        <input v-model="name">
        <div>{{name}}</div>
    </div>

</template>

<script>
export default {
    data()
    {
        return{
            count:0,
            dropdown: false,
            name: "whale"    

        }
    }
}
</script>
<style>
</style>