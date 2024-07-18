"use client";

import Banner from "./_components/banner";
import Benefits from "./_components/benefits";
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
      <div className="mt-10">
        <CategoriesCircle />
      </div>
      {/* Benefits */}
      <div className="mt-10">
        <Benefits />
      </div>
      {/* New products */}
      {/* NewsLetter */}
      {/* Footer */}
    </div>
  );
}
