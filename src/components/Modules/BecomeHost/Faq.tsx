import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/homePageData";
import React from "react";

const Faq = () => {
  return (
    <section className="container mx-auto px-4 pb-24">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <Card key={faq.question}>
            <CardContent>
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Faq;
