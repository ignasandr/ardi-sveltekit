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

  @media (max-width: 900px) {
    .image {
      width: 100%;
      height: 100%;
    }
  }
</style>
