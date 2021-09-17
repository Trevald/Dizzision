<template>
    <div class="list">
        <div class="list-wrapper">
            <p class="list-legend">Wheel of</p>
            <div class="list-content">
                <input class="list-title"  type="text" value="Fruits">
                <ListArea :items="items" @change="itemsChange"></ListArea>
            </div>
        </div>
    </div>
</template>

<script>

import ListArea from "./ListArea";

export default {

    name: "List",

    props: {
        items: Array,
    },

    components: {
        ListArea
    },

    methods: {

        itemsChange(items) {
            this.$emit("change", items);
        },
        
        shouldAddNew(index) {
            if (index === this.items.length-1 && this.items[index] !== "") {
                this.items.push("");
            }
        },

        shouldDelete(index) {
            if (this.items[index] === "" && this.items.length > 3) {
                this.items.splice(index, 1);
            }
        }
    }
}

</script>
