type communityCard = {
  avatar: string;
  name: string;
  location: string;
  id: string;
};

type projectCard = {
  previewImage: string;
  title: string;
  labels: string[];
  id: string;
  parentId: string;
};

interface ICardsProp {
  type: "projectCards" | "communityCards" | "ghost";
  communityCard?: communityCard;
  projectCard?: projectCard;
}
