<template>
  <table class="table card-table table-vcenter text-nowrap">
    <thead>
      <tr>
        <th v-for="(name,idx) in columns" :key="idx">{{name}}</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data,idx2) in source" :key="idx2">
        <td v-for="(col, idx3) in data" :key="idx3">
          <span>{{ col }}</span>
        </td>
        <td>
          <a class="icon" href="javascript:void(0)" data-toggle="tooltip" title="Edit">
            <i class="fe fe-edit"></i>
          </a>
          &nbsp;
          <a class="icon" href="javascript:void(0)" data-toggle="tooltip" title="Delete">
            <i class="fe fe-x-square"></i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      source: {
        type: Array,
        default: () => []
      },
      columns: {
        type: Array,
        default: () => []
      },
    }
  }

</script>
