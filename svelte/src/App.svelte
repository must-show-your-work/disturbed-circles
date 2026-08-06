<script lang="ts">
  let count = $state(0);
</script>

<section class="svelte-island">
  <button onclick={() => count += 1}>
    clicked {count} time{count === 1 ? '' : 's'}
  </button>
</section>

<style>
  .svelte-island {
    border: 1px dashed #ccc;
    padding: 1rem;
    margin: 2rem 0;
  }

  button {
    font: inherit;
    padding: 0.5rem 1rem;
    border: 1px solid #888;
    background: #fff;
    cursor: pointer;
  }
</style>
