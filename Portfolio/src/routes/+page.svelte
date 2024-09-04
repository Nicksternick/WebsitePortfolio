<script>
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import Dashboard from "./Dashboard.svelte";
    import Sidebar from "./Sidebar.svelte";
</script>

<Header />

<div class="columns is-0 mb-0 is-desktop">
    <div class="column is-three-quarters-desktop">
        <Dashboard />
    </div>
    
    <div class="column">
        <Sidebar />
    </div>
</div>

<Footer />