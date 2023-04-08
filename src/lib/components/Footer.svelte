<section>
  <a href="/">home</a>
  <a href="/news">news</a>
  <a href="/contacts">contacts</a>
</section>

<style>
  section {
    width: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    /* gap: 2rem; */
  }

  section a {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 600;
    display: inline-block;
    /* width: 4rem; */
    /* padding: 0.5rem 1rem; */
    /* margin: 0 2rem; */
    text-transform: uppercase;
    opacity: 1;
    white-space: nowrap;
  }

  section a {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  section a:first-child {
    margin-right: auto;
    /* flex-grow: 1; */
  }

  section a:last-child {
    margin-left: auto;
    /* flex-grow: 1; */
    /* background-color: red; */
  }

  section a:hover {
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    section {
      width: 100%;
    }
  }
</style>
