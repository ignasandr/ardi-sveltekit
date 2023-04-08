<script lang="ts">
  import type { Catalog } from "$lib/types";
  import { onMount } from "svelte";
  export let data: { data: { Catalogs: { docs: Catalog[] } } };
  let isLoading = true;
  let innerWidth: number;

  onMount(async () => {
    isLoading = false;
  });
</script>

<section>
  <div class="image">
    <img
      src={data.data.Catalogs.docs[0].items[0].image.url}
      alt={data.data.Catalogs.docs[0].items[0].image.url}
    />
  </div>
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
  }

  .image img {
    width: 100%;
    height: 100%;
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
