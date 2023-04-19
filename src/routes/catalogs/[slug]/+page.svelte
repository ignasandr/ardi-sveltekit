<script lang="ts">
  import type { Catalog } from "$lib/types";
  import { Autoplay, Navigation } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { onMount } from "svelte";
  import "swiper/css";
  import "swiper/css/navigation";
  export let data: { data: { Catalogs: { docs: Catalog[] } } };
  let isLoading = true;
  let innerWidth: number;

  onMount(async () => {
    isLoading = false;
  });

  // console.log(data.data.Catalogs.docs);
</script>

<svelte:window bind:innerWidth />

{#key data.data.Catalogs.docs}
  <Swiper
    modules={[Autoplay, Navigation]}
    slidesPerView={1}
    centeredSlides={true}
    loop={true}
    spaceBetween={5}
    autoplay={true}
    navigation={true}
    breakpoints={{
      480: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 1.4,
      },
      1024: {
        slidesPerView: 1.6,
      },
      1200: {
        slidesPerView: 1.8,
      },
      1400: {
        slidesPerView: 2,
      },
    }}
  >
    {#each data.data.Catalogs.docs[0].items as item}
      <SwiperSlide>
        <div class="image">
          <img src={item.image.url} alt={item.image.alt} />
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>
{/key}

<style>

  :root {
    --swiper-theme-color: #000;
  }
  .image {
    width: 100%;
    height: 100%;
  }

  .image img {
    width: 100%;
  }
</style>
