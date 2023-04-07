<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Line from "$lib/components/common/Line.svelte";
  import logo from "$lib/assets/logo.svg";
  import "./styles.css";

  export let data: {
    menu: {
      data: {
        Menu: { menuItems: { catalog: { slug: string; title: string } }[] };
      };
    };
  };

  console.log(data);

  const { menuItems } = data.menu.data.Menu;
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
  <Header {menuItems} />
</div>
<main>
  <slot />
</main>

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
  main {
    padding: 0 1rem;
  }
</style>
