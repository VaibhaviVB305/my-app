import React, { useState } from "react";
import phoneImg from "../assets/images/smartphone.png";
import phoneImg2 from "../assets/images/smartphone2.png";
import tabletImg from "../assets/images/tablet.png";
import tabletImg2 from "../assets/images/tablet2.png";
import laptopImg from "../assets/images/laptop.png";
import laptopImg2 from "../assets/images/laptop2.png";

const products = [
  {
    id: 1,
    name: "Phone X",
    brand: "Brand A",
    price: "$799",
    image: phoneImg,
    features: ["Battery: 24h", "Screen: 6.1in", "Camera: 12MP"],
  },
  {
    id: 2,
    name: "Laptop Pro",
    brand: "Brand B",
    price: "$1299",
    image: laptopImg,
    features: ["Battery: 10h", "Screen: 15in", "Weight: 1.5kg"],
  },
  {
    id: 3,
    name: "Tablet S",
    brand: "Brand C",
    image: tabletImg,
    price: "$499",
    features: ["Battery: 18h", "Screen: 10in", "Stylus: Yes"],
  },
  {
    id: 4,
    name: "Phone Y",
    brand: "Brand A",
    image: phoneImg2,
    price: "$699",
    features: ["Battery: 22h", "Screen: 6.5in", "Camera: 10MP"],
  },
  {
    id: 5,
    name: "Laptop Air",
    brand: "Brand B",
    image: laptopImg2,
    price: "$999",
    features: ["Battery: 12h", "Screen: 13in", "Weight: 1.2kg"],
  },
  {
    id: 6,
    name: "Tablet Mini",
    brand: "Brand C",
    image: tabletImg2,
    price: "$399",
    features: ["Battery: 20h", "Screen: 8in", "Stylus: No"],
  },
];

export default function ProductComparisonApp() {
  const [compareList, setCompareList] = useState([]);

  const toggleCompare = (product) => {
    if (compareList.find((p) => p.id === product.id)) {
      setCompareList(compareList.filter((p) => p.id !== product.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, product]);
    }
  };

  const clearCompare = () => setCompareList([]);
  const removeFromCompare = (id) =>
    setCompareList(compareList.filter((p) => p.id !== id));

  // Collect all unique feature names (Battery, Screen, etc.)
  const allFeatures = Array.from(
    new Set(compareList.flatMap((p) => p.features.map((f) => f.split(":")[0])))
  );

  return (
    <section className="py-3">
    <div className="container-fluid">
      <h1 className="mb-4">Product Comparison</h1>

      {/* Comparison View */}
      {compareList.length >= 2 && (
        <div className="mt-4 border-top pt-4">
          <h3 className="mb-4">Comparison</h3>
          <div className="row">
            {compareList.map((product) => (
              <div key={product.id} className="col-sm-4 mb-4">
                <div className="card border-primary h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="text-primary">{product.name}</h5>
                      <button
                        onClick={() => removeFromCompare(product.id)}
                        className="btn-close text-danger"
                        aria-label="Close"
                      ></button>
                    </div>
                    <p className="text-muted mb-1">{product.brand}</p>
                    <p className="fw-bold text-primary">{product.price}</p>
                    <ul className="list-unstyled">
                      {allFeatures.map((feature) => {
                        const match = product.features.find((f) =>
                          f.startsWith(feature)
                        );
                        return (
                          <li key={feature}>
                            <strong>{feature}:</strong>{" "}
                            <span className="text-primary">{match ? match.split(": ")[1] : "-"}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-start mb-4">
            <button onClick={clearCompare} className="btn btn-danger">
              Clear Comparison
            </button>
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-4 mb-4">
            <div className="card h-100 text-center text-md-start">
                <div className="row m-0">
                    <div className="col-md-4 col-sm-12">
                        <div className="device-img">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="card-img-top mx-auto mt-3"
                            />
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="card-body text-left px-0">
                            <h5 className="card-title mb-2">{product.name}</h5>
                            <p className="card-text text-muted mb-1">{product.brand}</p>
                            <p className="fw-bold mb-1">{product.price}</p>
                            <ul className="list-unstyled mb-1">
                                {product.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                            <button
                            onClick={() => toggleCompare(product)}
                            className={`btn mt-2 ${
                                compareList.find((p) => p.id === product.id)
                                ? "btn-secondary"
                                : "btn-primary"
                            }`}
                            >
                            {compareList.find((p) => p.id === product.id)
                                ? "Remove from Compare"
                                : "Add to Compare"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
    </section>
  );
}
