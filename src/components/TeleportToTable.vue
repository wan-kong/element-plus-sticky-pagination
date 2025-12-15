<script setup lang="ts" name="TeleportTable">
import type { TableInstance } from 'element-plus';
import { ref, nextTick } from 'vue'
const props = withDefaults(defineProps<{
    table: TableInstance
    disabled?: boolean
}>(), {
    disabled: false,
})
const isReady = ref(false)

nextTick().then(() => {
    if (props.table.scrollBarRef.wrapRef) {
        isReady.value = true
    }
})
</script>

<template>
    <Teleport v-if="isReady && !props.disabled" :to="props.table.scrollBarRef.wrapRef">
        <div class="teleport-to-body-footer">
            <slot />
        </div>
    </teleport>
    <div v-else class="teleport-to-body-footer">
        <slot />
    </div>
</template>

<style scoped>
.teleport-to-body-footer {
    position: sticky;
    bottom: 0;
    background-color: #fff;
    z-index: 10;
    width: 100%;
    padding-top: 8px;
    left: 0;
}
</style>
