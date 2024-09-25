<template>
    <div v-for="(tag, index) in tags">
        {{ index + " : " + tag }}
        <a @click.prevent="removeTag(index)" href="#">&times;</a>
    </div>
    <input type="text" 
        v-model.trim="newTag"
        @keydown.enter="addNewTag"
        @keydown.tab="addNewTag"
     /><br>
    <button v-on:click="tags.push(newTag)">Ok</button>
</template>

<script>
    export default {
        computed: {
            isTagExists() {
                
            }
        },
        methods: {
            addNewTag() {
                if (this.newTag) {
                    this.tags.push(this.newTag);
                    this.newTag = ""
                }
            },
            removeTag(index) {
                this.tags.splice(index, 1);
            }
        },
        data: () => ({
            tags:  ["vue", "react", "angular"],
            newTag: "pretty",
        }),
    }
</script>