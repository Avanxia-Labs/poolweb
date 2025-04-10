interface ImageGridProps {
    image1Url: string;
    image2Url: string;
  }
  
  export function ImageGrid({ image1Url, image2Url }: ImageGridProps) {
    return (
      <section className="w-full rounded-none max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <img
              src={image1Url}
              alt="Pool service illustration"
              className="object-cover overflow-hidden w-full aspect-square"
            />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              src={image2Url}
              alt="Pool service illustration"
              className="object-cover overflow-hidden w-full aspect-square"
            />
          </div>
        </div>
      </section>
    );
  }
  