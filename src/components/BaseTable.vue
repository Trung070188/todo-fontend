<template>
  <v-data-table :headers="tableHeaders" :items="tableData"></v-data-table>
</template>

<script lang="ts">
import { ref } from "vue";
import { VDataTable } from "vuetify/labs/VDataTable";
// Props
export default {
  setup() {
    const tableHeaders = ref([
      { text: "Name", value: "name" },
      { text: "Age", value: "age" },
      { text: "Email", value: "email" },
    ]);

    const tableData = ref([
      { name: "John Doe", age: 30, email: "john@example.com" },
      { name: "Jane Smith", age: 25, email: "jane@example.com" },
      { name: "Bob Johnson", age: 40, email: "bob@example.com" },
    ]);

    return {
      tableHeaders,
      tableData,
    };
  },
};
</script>
