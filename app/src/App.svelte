<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import {Router, Route} from 'svelte-routing'
</script>

<main>
  <h1>A'int this some crap</h1>
  <Router>
    <Route path="counter"><Counter/></Route>
  </Router>
</main>

<style>

</style>