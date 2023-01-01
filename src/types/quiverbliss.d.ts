interface FeaturedVideo {
  title: string;
  poster: string;
  playbackId: string;
}

interface ProjectVideo {
  title: string;
  poster: string;
  playbackId: string;
}

interface ArtBoard {
  id: string;
  type: string;
  name: string;
  description: string;
  url: string;
}

interface Option {
  title: string;
  value: number;
}

interface Question {
  orbisRoom: string;
  question: string;
  description: string;
  options: Option[];
}

interface Election {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

interface Project {
  id: string;
  name: string;
  description: string;
  projectVideo: ProjectVideo;
  labels: labels[];
  artBoards: ArtBoard[];
  election?: Election;
  createdAt: number;
}

interface Quiverbliss {
  featuredVideo: FeaturedVideo;
  projects: Project[];
  createdAt: number;
}
