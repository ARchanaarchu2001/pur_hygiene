import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { slug } = useParams();
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-3xl font-cormorant text-[#1e75bc] mb-8 capitalize">
        {slug.replace("-", " ")}
      </h2>
      <p className="text-gray-600">
        {/* Later: map actual products parsed from the PDF into cards here */}
        Products in this category coming soon…
      </p>
    </div>
  );
}
