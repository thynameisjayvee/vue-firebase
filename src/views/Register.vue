<template>
  <div class="v-register bg-dark">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Confirm Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Terms and Agreement</label>
      </div>
      <button type="submit" class="btn v-btn-white">Submit</button>
    </form>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
  .v-register {
    color: white;
    padding: 30px;
    border-radius: 10px 0 10px 10px;
  }
</style>
