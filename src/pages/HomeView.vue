<template>
  <div class="grid gap-y-4">
    <input
      type="number"
      name="salary"
      id="salary"
      v-model="salary"
      class="border px-1 py-0.5 block"
    />

    <button @click="addDivider">Add Divide</button>

    <ul>
      <li>
        <div class="space-y-1">
          <input
            type="name"
            name="divideName1"
            id="divideName1"
            class="input"
          />
          <input type="number" name="divide1" id="divide1" class="input" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Divider } from "../models/divider.ts";

const salary = ref(0);
const dividers = reactive<Divider[]>([]);

const addDivider = () => {
  dividers.push(new Divider());
  console.log(dividers);
};
</script>
