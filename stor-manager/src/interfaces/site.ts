import { Employee } from "./employee";

export type Site = {
    name: string;
    address: string;
    phone: number;
    floorCount: number;
    manager: Employee;
}