<script setup>
import GenericTitledList from "./GenericTitledList.vue";
const props = defineProps(["PosesList", "tableTitle"]);
</script>

<template>
  <div class="d-flex flex-column">
    <GenericTitledList
      class="flex-fill"
      :listTitle="props.tableTitle"
      @refreshList="$emit('refreshTable')"
    >
      <table class="table w-100 font-monospace">
        <thead>
          <tr>
            <th scope="col">File</th>
            <th scope="col">Tx</th>
            <th scope="col">Ty</th>
            <th scope="col">Tz</th>
            <th scope="col">Rx</th>
            <th scope="col">Ry</th>
            <th scope="col">Rz</th>
            <th scope="col">Rw</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="img in props.PosesList">
            <th scope="row">{{ img.name }}</th>
            <td>{{ img.tvec?.[0].toFixed(3) ?? "-" }}</td>
            <td>{{ img.tvec?.[1].toFixed(3) ?? "-" }}</td>
            <td>{{ img.tvec?.[2].toFixed(3) ?? "-" }}</td>
            <td>{{ img.rvec?.[0].toFixed(4) ?? "-" }}</td>
            <td>{{ img.rvec?.[1].toFixed(4) ?? "-" }}</td>
            <td>{{ img.rvec?.[2].toFixed(4) ?? "-" }}</td>
            <td>{{ img.rvec?.[3].toFixed(4) ?? "-" }}</td>
          </tr>
        </tbody>
      </table>
    </GenericTitledList>
  </div>
</template>
