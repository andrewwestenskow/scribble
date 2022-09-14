<script lang="ts">
    import {Router, Route} from 'svelte-routing'
    import Authentication from '../pages/authentication.svelte'
    import Home from '../pages/home.svelte'
</script>

<div>
    <Router>
        <Route path="/"><Home/></Route>
        <Route path="auth"><Authentication/></Route>
    </Router>
</div>