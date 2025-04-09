interface ServiceDescriptionProps {
    title: string;
    description: string;
  }
  
  export function ServiceDescription({
    title,
    description,
  }: ServiceDescriptionProps) {
    return (
      <section className="mt-14 w-full min-h-[508px] max-md:mt-10 max-md:max-w-full">
        <h1 className="text-3xl font-bold text-indigo-600">{title}</h1>
        <p className="mt-5 text-sm leading-8 text-indigo-950 max-md:max-w-full">
          {description}
        </p>
      </section>
    );
  }
  