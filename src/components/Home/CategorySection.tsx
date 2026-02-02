import CategorySlider from "./CategorySlider";

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
        <CategorySlider />
      </div>
    </section>
  );
}
