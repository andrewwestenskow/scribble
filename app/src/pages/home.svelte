<script lang="ts">
    import {Link} from "svelte-routing";
</script>

<div class="home">
    <h1>WELCOME TO THE THING</h1>
    <Link to="auth" ><button>Let's get authenticated</button></Link>
</div>

<style>
    h1 {
        text-align: center;
    }
</style>