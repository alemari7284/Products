<script>
  import cartItems from "./cart-store"
  import Button from "../UI/Button.svelte";
  import { products } from "../Products/products-store";

  export let title;
  export let price;
  export let id;
  let description = "Not available";

  let showDescription = false;

  function displayDescription() {
    showDescription = !showDescription;
    const unsubscribe = products.subscribe(prods => {
      description = prods.find(prod => prod.id === id).description; //this way you just get the one you need
    })

    unsubscribe();
  }

  function removeFromCart() {
    cartItems.update(items => {
      return items.filter((item) => {
        return item.id != id
      })
    })
  }
</script>

<style>
  li {
    margin: 1rem 0;
    border-radius: 5px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }

  h1,
  h2 {
    font-size: 1rem;
    margin: 0;
  }

  h2 {
    color: #494949;
    margin-bottom: 1rem;
  }
</style>

<li>
  <h1>{title}</h1>
  <h2>{price}</h2>
  <Button mode="outline" on:click={displayDescription}>
    {showDescription ? 'Hide Description' : 'Show Description'}
  </Button>
  <Button on:click={removeFromCart}>Remove from Cart</Button>
  {#if showDescription}
    <p>{description}</p>
  {/if}
</li>
