import React from "react";

function Awards() {
  return (
    <>
      <section className="our-awards">
        <div className="awards">
          <ul>
            <li className="text-big">
              Our most important <span>prizes & awards</span>
            </li>
            <li>
              <i className="fas fa-award"></i>
              <span>First className car</span>
            </li>
            <li>
              <i className="fas fa-trophy"></i>
              <span>Number one dealer</span>
            </li>
            <li>
              <i className="fas fa-star"></i>
              <span>Rated with 5 stars</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Awards;
