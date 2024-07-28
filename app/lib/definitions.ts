// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
};

export type Customer = {
  _id: string;
  userId: string;
  name: string;
  cif: string;
  logo: string;
  address: Address;
};

export type Project = {
  _id: string;
  userId: string;
  clientId: string;
  name: string;
  projectCode: string;
  code: string;
  address: Address;
  begin: string;
  end: string;
  active: boolean;
  notes: string;
  email: string;
}

export type DeliveryNote = {
  _id: string;
  userId: string;
  clientId: string;
  projectId: object;
  internalProjectCode: string;
  format: 'material' | 'hours';
  material: string;
  quantity: number;
  unit: string;
  hours: number;
  description: string;
  observations: string;
  workdate: string;
  sign: string;
  photo: string;
  name: string;
  nif: string;
};

export type Acknowledged = {
  acknowledged: boolean;
}
