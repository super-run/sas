<template>
  <div class="container">
    <div class="row row-cards row-deck">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Invoices</h3>
          <div class="card-options">
            <a href="#" class="btn btn-primary btn-sm">New</a>
            <a href="#" class="btn btn-secondary btn-sm ml-2">Filter</a>
          </div>
        </div>
        <div class="table-responsive card-body">
          <app-table :source="data" :columns="columns" />
        </div>

        <div class="card-footer text-right">
          <app-pagination :total="data.length" :page-size="5" :callback="pageChanged" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppPagination from '../../components/table/c-pagination'
  import AppTable from '../../components/table/c-table'

  export default {
    components: {
      AppPagination,
      AppTable
    },
    asyncData(context) {
      return {
        data: [{
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        }, 
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },
        {
          No: 'a',
          Invoice: 'a',
          Client: 'a',
          VatNo: 'a',
          Created: '2017-12-12',
          Status: 'Paid',
          Price: '$100.00'
        },],
        columns: ["No", "Invoice", "Client", "Vat No.", "Created", "Status", "Price"]
      }
    },
    methods: {
      pageChanged(page) {
        console.log(page)
        // Exec your response to server passing 'page' params as clicked button paging
      }
    }
  }

</script>
