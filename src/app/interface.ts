export interface JobsData {
  id: number;
  companySite: string;
  company: string;
  logo: string;
  link: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  desc: string;
  requirements: {
    reqTitle: string;
    reqItem: string[];
  };
  responsibility: {
    resTitle: string;
    resItem: string[];
  };
}
