"use client";

import Banner from "./_components/banner";
import CategoriesCircle from "./_components/categories-circle";
import Header from "./_components/header";

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Banner */}
      <div className="mt-3">
        <Banner />
      </div>
      {/* Categories */}
      <div>
        <CategoriesCircle />
      </div>
      {/* Benefits */}
      {/* New products */}
      {/* NewsLetter */}
      {/* Footer */}
    </div>
  );
}
