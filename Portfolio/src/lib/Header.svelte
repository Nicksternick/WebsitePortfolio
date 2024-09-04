<script lang="ts">
    import { onMount } from "svelte";

    let navBurger: HTMLAnchorElement;
    const NavBurgerDefaultClasses = "navbar has-background-info"
    let burgerOn = false;

    let navMenu: HTMLDivElement;
    const NavMenuDefaultClasses = "navbar-menu"

    onMount(() => {
        navBurger.onclick = () => {
            if (burgerOn) {
                
            } else {

            }
        };
    });
</script>

<nav class={NavBurgerDefaultClasses} aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <span class="icon-text">
                <span class="icon">
                    <i class="fas fa-home"></i>
                </span>
                <span>Home</span>
            </span>
        </a>

        <a
            role="button"
            href=" "
            class="navbar-burger"
            bind:this={navBurger}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div class={NavMenuDefaultClasses} id="menu" bind:this={navMenu}>
        <div class="navbar-start">
            <a href="/projects" class="navbar-item">Projects</a>
            <a href="/art" class="navbar-item">Art</a>
            <a href="/blog" class="navbar-item">Blog</a>
            <a href="/resume" class="navbar-item">Resume</a>
            <a href="/about" class="navbar-item">About</a>
            <a href="/contact" class="navbar-item">Contact</a>
        </div>
        <div class="navbar-end"></div>
    </div>
</nav>

<style lang="postcss">
    nav {
        font-size: 1.5em;
    }

    a {
        color: black;
    }
</style>
