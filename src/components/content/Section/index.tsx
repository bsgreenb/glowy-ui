import React, { ReactNode } from "react";
import H from "../Heading";

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section = ({ title, children }: SectionProps) => (
  <section>
    <H level={2} size="h2" weight="body" color="secondary" bottomMargin>
      {title}
    </H>
    {children}
  </section>
);

export default Section;
