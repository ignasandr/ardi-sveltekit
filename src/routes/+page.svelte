<script lang="ts">
  import front from "$lib/assets/front.jpg";
  import { hover } from "$lib/stores";
  import type { Catalog } from "$lib/types";
  import { onMount } from "svelte";
  export let data: { data: { Menu: { menuItems: { catalog: Catalog }[] } } };

  // let isLoading = true;
  let hoverActive: number = 0;

  const { menuItems } = data.data.Menu;

  hover.subscribe((value) => {
    hoverActive = value;
  });

  onMount(async () => {
    hoverActive = 0;
    // isLoading = false;
  });
</script>

<section>
  <div class={`image ${hoverActive === 0 ? "visible" : "invisible"}`}>
    <img src={front} alt="front" />
  </div>
  {#each menuItems as item, i}
    <div class={`image ${i + 1 === hoverActive ? "visible" : "invisible"}`}>
      <img
        src={item.catalog.items[0].image.url}
        alt={item.catalog.items[0].image.alt}
      />
    </div>
  {/each}
</section>

<style>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image {
    width: 100%;
    margin: 0 calc(25% - 20px);
    transition: visibility 0s, opacity 0.5s ease-in-out;
  }

  .image img {
    width: 100%;
    height: 100%;
  }

  .visible {
    display: block;
    opacity: 1;
  }

  .invisible {
    display: none;
    opacity: 0;
  }

  @media (max-width: 1400px) {
    .image {
      width: 100%;
      margin: 0 calc(22%);
    }
  }
  @media (max-width: 1200px) {
    .image {
      width: 100%;
      margin: 0 calc(19%);
    }
  }
  @media (max-width: 1024px) {
    .image {
      width: 100%;
      margin: 0 calc(14%);
    }
  }

  @media (max-width: 768px) {
    .image {
      width: 100%;
      margin: 0 calc(8%);
    }
  }

  @media (max-width: 640px) {
    .image {
      width: 100%;
      margin: 0;
    }
  }
</style>
