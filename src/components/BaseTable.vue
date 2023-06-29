<template>
    <v-data-table :headers="headers" :items="items">
      <template v-slot:item="{ item }">
        <slot :item="item"></slot>
      </template>
    </v-data-table>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'BaseTable',
    props: {
      headers: {
        type: Array,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
    },
    setup(props, { slots }) {
      const tableProps = ref(props);
  
      return {
        tableProps,
      };
    },
  };
  </script>
  
  <style>
  /* Add your custom table styles here */
  </style>
  