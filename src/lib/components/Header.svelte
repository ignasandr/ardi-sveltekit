<script lang="ts">
  import Line from "$lib/components/common/Line.svelte";
  import logo from "$lib/assets/logo.svg";
  export let menuItems: { catalog: { title: string; slug: string } }[];
</script>

<div class="header-container">
  <div class="logo">
    <a href="/">
      <img src={logo} alt="logo" />
    </a>
  </div>
  <div class="line">
    <Line />
  </div>
  <nav>
    {#each menuItems as item}
      <a href="/catalogs/{item.catalog.slug}">{item.catalog.title}</a>
    {/each}
  </nav>
</div>

<style>
  .header-container {
    margin-top: 1rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .logo {
    width: 8.5rem;
    /* height: 10rem; */
  }

  .logo img {
    width: 100%;
    height: 100%;
  }
  nav {
    width: 42rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
  }

  nav a {
    font-family: var(--font-body);
    font-size: 1.3rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    flex: 1;
    padding: 0.5rem 1rem;
    /* margin: 0 2rem; */
    text-transform: uppercase;
    opacity: 1;
    white-space: nowrap;
  }

  nav a:first-child {
    margin-right: auto;
    /* flex-grow: 1; */
  }

  nav a:last-child {
    margin-left: auto;
    /* flex-grow: 1; */
    /* background-color: red; */
  }

  nav a:hover {
    opacity: 0.7;
  }

  @media (max-width: 580px) {
    nav {
      width: 32rem;
    }
  }

  @media (max-width: 480px) {
    nav {
      width: 100%;
    }

    nav a {
      font-size: 1rem;
      padding: 0.25rem 0.25rem;
    }
  }
</style>
