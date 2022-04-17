import { writable } from "svelte/store";

const createCart = () => {
  const cart = writable([
    {
      id: "p3",
      title: "A Book",
      price: 9.99,
      description: "A great book!",
    },
    {
      id: "p4",
      title: "A Carpet",
      price: 99.99,
      description: "Red and green.",
    },
  ]);

  return {
    subscribe: cart.subscribe,
    addItem: (item) => {
      cart.update((items) => {
        return [
          ...items,
          {
            id: item.id,
            title: item.title,
            price: item.price,
          },
        ];
      });
    },
    removeItem: (id) => {
      cart.update((items) => {
        return items.filter((itm) => itm.id != id);
      });
    },
  };
};

export default createCart();
