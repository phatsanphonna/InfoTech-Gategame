export interface Field {
  "Position Name": string;
  Status: string;
  "Name (from Undermanagement Di)"?: string[] | null;
  "Name (from Undermanagement MC)"?: string[] | null;
  "Name (from Undermanagement Producer)"?: string[] | null;
  Description: string;
}

export interface Record {
  id: string;
  createdTime: string;
  fields: Field;
}

export interface Job {
  records: Record[];
}
