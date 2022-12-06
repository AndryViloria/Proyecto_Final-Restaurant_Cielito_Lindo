const formatearPrecio = (precio) =>
  precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export { formatearPrecio };