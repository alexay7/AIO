import http from "../../../http-common";
import { ICar } from "../../../typings/car";

class CarsService {
    getAll() {
        return http.get<Array<ICar>>("/car");
    }

    get(id: string) {
        return http.get<ICar>(`/tutorials/${id}`);
    }

    create(data: ICar) {
        return http.post<ICar>("/tutorials", data);
    }

    update(data: ICar, id: any) {
        return http.put<any>(`/tutorials/${id}`, data);
    }

    delete(id: any) {
        return http.delete<any>(`/tutorials/${id}`);
    }

    deleteAll() {
        return http.delete<any>(`/tutorials`);
    }

    findByTitle(title: string) {
        return http.get<Array<ICar>>(`/tutorials?title=${title}`);
    }
}

export default new CarsService();