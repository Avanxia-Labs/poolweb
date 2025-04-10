interface ImagePairProps {
    image1Url: string;
    image2Url: string;
  }
  
  export function ImagePair({ image1Url, image2Url }: ImagePairProps) {
    return (
      <section className="flex flex-wrap gap-10 justify-between items-center mt-14 w-full max-md:mt-10">
        <div className="self-stretch my-auto rounded-xl min-w-60 w-[306px]">
          <img
            src={image1Url}
            alt="Pool service showcase"
            className="object-cover overflow-hidden w-full aspect-square"
          />
        </div>
        <div className="self-stretch my-auto rounded-xl min-w-60 w-[306px]">
          <img
            src={image2Url}
            alt="Pool service showcase"
            className="object-cover overflow-hidden w-full aspect-square"
          />
        </div>
      </section>
    );
  }
  