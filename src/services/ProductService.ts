import http from "../http-common";
import IProductData from "../types/Product";

const getAll = () => {
  return http.get<Array<IProductData>>("/products");
};

const get = (id: any) => {
  return http.get<IProductData>(`/products/${id}`);
};

const create = (data: IProductData) => {
  return http.post<IProductData>("/products", data);
};

const update = (id: any, data: IProductData) => {
  return http.put<any>(`/products/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/products/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/products`);
};


const ProductService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default ProductService;