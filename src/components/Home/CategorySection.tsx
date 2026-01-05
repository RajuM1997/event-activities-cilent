// components/home/categories.tsx
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/homePageData";

export default function CategoriesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Browse by Category</h2>
          <p className="mt-2 text-muted-foreground">
            Find events that match your interests
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                href={`/events?category=${category.slug}`}
              >
                <Card className="group cursor-pointer transition hover:shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center py-8">
                    <div className="mb-4 rounded-full bg-primary/10 p-4 transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-sm font-medium text-center">
                      {category.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
