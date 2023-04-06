<script lang="ts">
  import type { News } from "$lib/types";
  import RichText from "$lib/components/common/RichText.svelte";
  export let data: { data: { allNews: { docs: News[] } } };

  const { docs } = data.data.allNews;
</script>

<section>
  <div class="container">
    {#each docs as doc}
      <div class="news-item">
        <div class="image">
          <img src={doc.image.url} alt={doc.image.alt} />
        </div>
        <div class="body">
          <h2>{doc.heading}</h2>
          <RichText content={doc.body} />
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container {
    width: 960px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .news-item {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    gap: 2rem;
  }

  .image {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 1rem;
    /* width: 30rem; */
    /* height: 4rem; */
  }

  .image img {
    width: 15rem;
  }

  .body h2 {
    margin-top: 1rem;
  }

  @media (max-width: 980px) {
    .container {
      width: 768px;
    }

    .news-item {
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
      margin-bottom: 1rem;
      /* width: 768px; */
    }
    .image {
      margin: 1rem 0;
    }

    .body h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 796px) {
    .container {
      width: 100%;
    }

    .body h2 {
      margin: 0;
    }
  }
</style>
