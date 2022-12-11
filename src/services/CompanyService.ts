import http from "../http-common";
import ICompanyData from "../types/Company";

const getAll = () => {
  return http.get<Array<ICompanyData>>("/companies");
};

const get = (id: any) => {
  return http.get<ICompanyData>(`/companies/${id}`);
};

const create = (data: ICompanyData) => {
  return http.post<ICompanyData>("/companies", data);
};

const update = (id: any, data: ICompanyData) => {
  return http.put<any>(`/companies/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/companies/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/companies`);
};


const CompanyService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default CompanyService;