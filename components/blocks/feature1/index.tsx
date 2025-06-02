import Icon from "@/components/icon";
import { Section as SectionType } from "@/types/blocks/section";

export default function Feature1({ section }: { section: SectionType }) {
  if (section.disabled) {
    return null;
  }

  return (
    <section id={section.name} className="py-24 bg-gray-50">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {section.image && (
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={section.image?.src}
                alt="placeholder hero"
                className="w-full transform object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}
          <div className="flex flex-col lg:text-left">
            {section.title && (
              <h2 className="mb-8 text-pretty text-4xl font-bold leading-tight lg:text-5xl">
                {section.title}
              </h2>
            )}
            {section.description && (
              <p className="mb-12 max-w-xl text-lg text-muted-foreground lg:max-w-none">
                {section.description}
              </p>
            )}
            <ul className="flex flex-col justify-center gap-y-10">
              {section.items?.map((item, i) => (
                <li key={i} className="flex items-start">
                  {item.icon && (
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon
                        name={item.icon}
                        className="size-6"
                      />
                    </div>
                  )}
                  <div>
                    <div className="mb-2 text-lg font-semibold text-foreground">
                      {item.title}
                    </div>
                    <div className="text-base text-muted-foreground">
                      {item.description}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
