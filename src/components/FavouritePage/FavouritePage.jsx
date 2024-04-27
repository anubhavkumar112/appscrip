/* eslint-disable react/prop-types */


const FavoritesPage = ({ favorites, products }) => {
  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <div>
      <h1>Favorite Products</h1>
      <div className="favorite-list">
        {favoriteProducts.map(product => (
          <div key={product.id} className="favorite-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
