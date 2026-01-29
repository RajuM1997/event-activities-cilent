declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

// types/swiper.d.ts
declare module "swiper/css";
declare module "swiper/css/pagination";
declare module "swiper/css/navigation";
