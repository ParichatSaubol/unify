interface ILearnDetail {
  id?: string;
  title?: string;
  code?: string;
  star?: number;
  amount?: number;
  isGenuine?: boolean;
  isReady?: boolean;
  delivered?: string;
  brandName?: string;
  brandDescription?: string;
  detail?: string;
  description?: JSX.Element;
  learnDuration?: string;
  learnerCount?: string;
  isPurchased?: boolean;
  isFinishCourse?: boolean;
  courseItems?: any;
}

export type { ILearnDetail };
