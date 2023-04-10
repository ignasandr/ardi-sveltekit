<script lang="ts">
  import backgroundImg from "$lib/assets/background.jpg";
  import emailIcon from "$lib/assets/email.svg";
  import tel1Icon from "$lib/assets/tel1.svg";
  import tel2Icon from "$lib/assets/tel2.svg";
  import type { Contact } from "$lib/types";
  import ContactRichText from "$lib/components/common/ContactRichText.svelte";
  export let data: { data: { Contact: Contact } };

  const { requisites, email, mphone, phone, background } = data.data.Contact;
</script>

<section>
  <div class="container" style="background-image: url({backgroundImg})">
    <!-- <div class="image">
      <img class="container-bg" src={background.url} alt={background.alt} />
    </div> -->
    <div class="contacts-container">
      <div class="contacts">
        <div class="contact-requisites">
          <ContactRichText content={requisites} />
        </div>
        <div class="contact-items">
          <div class="contact-item">
            <div class="icon">
              <img src={tel2Icon} alt="phone" />
            </div>
            <a href="tel:{phone}">{phone}</a>
          </div>
          <div class="contact-item">
            <div class="icon">
              <img src={tel1Icon} alt="phone" />
            </div>
            <a href="tel:{mphone}">{mphone}</a>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon">
            <img src={emailIcon} alt="phone" />
          </div>
          <a href="mailto:{email}">{email}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .container {
    position: relative;
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
  }

  .contacts-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 2rem 4rem;
  }

  .contact-requisites {
    margin: 0 0 3rem 0;
  }

  .contact-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
  }

  .icon {
    width: 2rem;
    height: 2rem;
    margin-right: 0.75rem;
  }

  @media (max-width: 540px) {
    .contacts {
      padding: 2rem 2rem;
    }
  }

  @media (max-width: 360px) {
    .contacts {
      padding: 1rem 1.5rem;
    }
  }
</style>
