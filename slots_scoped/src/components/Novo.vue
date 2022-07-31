<template>
<ul>
<li v-for="obj in objs" :key="obj">
    <slot :item="obj" outraProp="exemplo"></slot>
</li>
</ul>
</template>

<script>

export default {
    data(){
        return{
            objs:['testando 123', 'asdad']
        };
    },
};

</script>