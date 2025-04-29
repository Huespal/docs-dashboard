export type Contributor = {
  id: string;
  name: string;
}

export type Document = {
  id: string;
  title: string;
  version: string;
  attachments: string[];
  contributors: Contributor[];
  createdAt: string;
  updatedAt: string;
}

export type APIContributor = {
  ID: string;
  Name: string;
}

export type APIDocument = {
  ID: string;
  Title: string;
  Version: string;
  Attachments: string[];
  Contributors: APIContributor[];
  CreatedAt: string;
  UpdatedAt: string;
}