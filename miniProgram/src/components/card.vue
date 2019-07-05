<template>
  <div>
    <p class="card">
      {{name}}
    </p>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "wwwww"
            }
        },
        methods: {
            test() {
                console.log("test");
            }
        }
    }
</script>

<style>
    .card {
        padding: 10px;
    }
</style>