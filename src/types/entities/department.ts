import { DEPARTMENTS as DEPARTMENTS_CONST } from "../../config/settings";

export type DepartmentName = (typeof DEPARTMENTS_CONST)[number];

export const DEPARTMENTS = [...DEPARTMENTS_CONST] as DepartmentName[];

export interface Department {
  id: number;
  name: DepartmentName;
  description: string;
  created_at: string;
  updated_at: string;
}
