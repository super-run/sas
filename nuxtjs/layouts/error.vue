<template>
  <div class="page">
      <div class="page-content">
        <div class="container text-center">
          <div v-if="error.statusCode === 404" class="display-1 text-muted mb-5"><i class="si si-exclamation"></i> 404</div>
          <div v-else class="display-1 text-muted mb-5"><i class="si si-exclamation"></i> {{error.statusCode}}</div>

          <h1 v-if="error.statusCode === 404" class="h2 mb-3">Oops.. You just found an error page..</h1>
          <p class="h4 text-muted font-weight-normal mb-7">We are sorry but our service is currently not available&hellip;</p>
          <a class="btn btn-primary" href="javascript:history.back()">
            <i class="fe fe-arrow-left mr-2"></i>Go back
          </a>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'empty'
  }

</script>
