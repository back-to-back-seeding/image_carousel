import React from 'react';

const Header = () => (
  <div className="heading">
    <div>
      <section>
        <h2>More Places to Stay</h2>
      </section>
    </div>
    <div className="navigation">
      <div className="page"> 1 / 4</div>
      <div>
        <button type="button" className="button">
          <span>
            <svg viewBox="0 0 18 18" role="presentation" style={{ height: 10, width: 10 }}>
              <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
            </svg>
          </span>
        </button>
        <button type="button" className="button">
          <span>
            <svg viewBox="0 0 18 18" style={{ height: 10, width: 10 }}>
              <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
);

export default Header;
