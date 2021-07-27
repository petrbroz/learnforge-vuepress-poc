<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="footer">My custom footer</div>
    </template>
  </ParentLayout>
</template>

<style scoped>
.footer {
  padding: 2em;
  max-width: 740px;
  margin: 0 auto;
}
</style>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";

export default {
  name: "Layout",
  components: {
    ParentLayout
  }
};
</script>
