type communityCard = {
  avatar: string;
  name: string;
  location: string;
  id: string;
};

type projectCard = {
  previewImage: string;
  name: string;
  labels: string[];
  id: string;
};

interface ICardsProp {
  type: "projectCards" | "communityCards" | "ghost";
  communityCard?: communityCard;
  projectCard?: projectCard;
}
