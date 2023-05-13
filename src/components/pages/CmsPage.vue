<script setup lang="ts">

import TheHeader from "../TheHeader.vue";
import CmsContent from "../cms/CmsContent.vue";
import ModalEdit from "../modals/ModalEdit.vue";
import {modalAddOpen, modalEditOpen, modalImageOpen} from "../../store.ts";
import OpacityTransition from "../UI/OpacityTransition.vue";
import ModalAdd from "../modals/ModalAdd.vue";
import ModalImage from "../modals/ModalImage.vue";
</script>

<template>
  <TheHeader/>
    <CmsContent/>
    <teleport to="body">
        <OpacityTransition>
            <ModalEdit v-if="modalEditOpen"/>
        </OpacityTransition>
    </teleport>
    <teleport to="body">
        <OpacityTransition>
            <ModalAdd v-if="modalAddOpen"/>
        </OpacityTransition>
    </teleport>
    <teleport to="body">
        <OpacityTransition>
            <ModalImage v-if="modalImageOpen"/>
        </OpacityTransition>
    </teleport>
</template>

<style scoped lang="scss">

</style>