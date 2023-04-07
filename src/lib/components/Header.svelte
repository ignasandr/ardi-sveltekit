<script lang="ts">
  export let menuItems: { catalog: { title: string; slug: string } }[];
</script>

<section>
  {#each menuItems as item}
    <a href="/{item.catalog.slug}">{item.catalog.title}</a>
  {/each}
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
  }

  section a {
    font-family: var(--font-body);
    font-size: 1.3rem;
    font-weight: 600;
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0 2rem;
    text-transform: uppercase;
    opacity: 1;
  }

  section a:hover {
    opacity: 0.7;
  }

  @media (max-width: 560px) {
    section {
      flex-direction: column;
    }
  }
</style>
