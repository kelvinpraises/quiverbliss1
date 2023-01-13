type community = {
  avatar: string;
  name: string;
  location: string;
  id: string;
};

type projects = {
  previewImage: string;
  name: string;
  labels: string[];
  id: string;
};

interface ICardsProp {
  type: "projectCard" | "communityCard" | "ghostCard";
  community?: community;
  projects?: projects;
}
