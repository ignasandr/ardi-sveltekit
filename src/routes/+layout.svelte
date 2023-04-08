<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import "./styles.css";
  import Footer from "$lib/components/Footer.svelte";

  export let data: {
    menu: {
      data: {
        Menu: { menuItems: { catalog: { slug: string; title: string } }[] };
      };
    };
  };

  const { menuItems } = data.menu.data.Menu;
</script>

<header>
  <Header {menuItems} />
  <main>
    <slot />
  </main>
  <div class="footer-container">
    <Footer />
  </div>
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }
  main {
    padding: 0 1rem;
  }

  .footer-container {
    padding: 0.5rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 1200px) {
    header {
      margin-top: 2rem;
    }
  }
  @media (max-width: 768px) {
    header {
      margin-top: 3rem;
    }
  }

  @media (max-width: 640px) {
    header {
      margin-top: 4rem;
    }
  }

  @media (max-width: 480px) {
    header {
      margin-top: 5rem;
    }
    main {
      padding: 0 0.5rem;
    }
  }
</style>
