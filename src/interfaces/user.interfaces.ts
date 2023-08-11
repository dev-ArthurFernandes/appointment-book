export interface iLogin{
  email: string;
  password: string;
}

export interface iUser{
  id: string;
  firstName: string;
  lastName?: string | null;
  email: string;
  recoveryEmail: string;
  phone1: string;
  phone2?: string | null;
  avatarURL?: string | null;
}

export interface iCreateUser{
  firstName: string;
  lastName?: string | null;
  email: string;
  recoveryEmail: string;
  phone1: string;
  phone2?: string | null;
  avatarURL?: string | null; 
}

export interface iUpdateUser{
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  recoveryEmail?: string | null;
  phone1?: string | null;
  phone2?: string | null;
  avatarURL?: string | null;
}