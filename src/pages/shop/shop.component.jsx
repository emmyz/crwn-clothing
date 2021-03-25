import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-prev/collection-prev.component";

class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...CollectionProps }) => (
          <CollectionPreview key={id} {...CollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
