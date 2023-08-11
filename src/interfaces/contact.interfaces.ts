export interface iContact{
  id: string;
  firstName: string;
  lastName?: string | null;
  email: string;
  email2?: string | null;
  phone1: string;
  phone2?: string | null;
  avatarURL?: string | null;
}

export interface iCreateContact{
  firstName: string;
  lastName?: string | null;
  email: string;
  email2?: string | null;
  phone1: string;
  phone2?: string | null;
  avatarURL?: string | null;
}

export interface iUpdateContact{
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  email2?: string | null;
  phone1?: string | null;
  phone2?: string | null;
  avatarURL?: string | null;
}