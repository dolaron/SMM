<template>
    <div v-if="display" class="toast">
        <slot> {{ slot }} </slot>
    </div>        
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Toast',
    computed: 
        mapGetters({
            slot: 'getToastTxt',
            display: 'getShowToast'
        })
}
</script>

<style>
.toast {
    margin:auto;
    padding: 0;
    text-align: center;
    position: fixed;
    font: .9rem 'Arial';
    left: calc(50% - 6rem);
    bottom: 3rem; 
    text-align: center;
    display: flex;
    width: 10rem;
    flex-wrap: wrap;
    color: white;
    background: rgba(0, 0, 0, 0.507);
    padding: 0.5rem 0.6rem;
    border-radius: 4px;
    animation: slide-in-up 0.3s;
    word-break: break-word;
    box-shadow: 0 0 8px #333;
    z-index: 1450;
}
</style>
