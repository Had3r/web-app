type Image = {
  src: string;
  alt?: string;
};

export interface ImageWithGradientProps {
  className?: string;
  text: string;
  img: Image;
}
