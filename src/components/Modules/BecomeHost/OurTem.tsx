import { Card, CardContent } from "@/components/ui/card";
import { team } from "@/data/homePageData";
import Image from "next/image";
import React from "react";

const OurTem = () => {
  return (
    <section className="bg-muted/20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} className="text-center">
              <CardContent>
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTem;
