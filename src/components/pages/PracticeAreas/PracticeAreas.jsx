import React from 'react';
import './PracticeAreas.css'; // Assuming you have a separate CSS file for styling

const PracticeAreas = () => {
  return (
    <div className="practice-areas-container">
      <div className="practice-areas-header">
        <h1>Our Practice Areas</h1>
        <p>At Manisha & Co Advocates, we specialize in a wide range of legal areas to serve your needs.</p>
      </div>

      <div className="practice-areas-content">
        {/* Practice Area 1 */}
        <div className="practice-area">
          <h2>Property Laws</h2>
          <p>
          Rules and regulations governing the rights, ownership, and transactions related to real estate properties, ensuring legal clarity and protection for property owners and buyers.
          </p>
        </div>

        {/* Practice Area 2 */}
        <div className="practice-area">
          <h2>Contract Negotiation & Drafting</h2>
          <p>
          Skilled negotiation and creation of legally sound contracts that define terms, conditions, and obligations for parties involved, aiming to prevent misunderstandings and conflicts.
          </p>
        </div>

        {/* Practice Area 3 */}
        <div className="practice-area">
          <h2>Large Scale Legal Due-Diligence for Real Estate Projects & Individuals</h2>
          <p>
          Thorough examination and assessment of legal aspects for real estate ventures and individuals, identifying potential risks, compliance issues, and ensuring a secure foundation for transactions.
          </p>
        </div>

        {/* Practice Area 4 */}
        <div className="practice-area">
          <h2>Real Estate - Infrastructure Development & Litigation, RERA Compliant Transaction modelling</h2>
          <p>
          Comprehensive solutions for real estate projects, encompassing legal support for infrastructure development, addressing litigation needs, and ensuring adherence to Real Estate Regulatory Authority (RERA) guidelines for transparent and compliant transactions.
          </p>
        </div>

        {/* Practice Area 5 */}
        <div className="practice-area">
          <h2>Civil & Commercial Litigation</h2>
          <p>
          Representing clients in legal disputes arising from civil and commercial matters, White-Collar Crimes, advocating for their interests in court to seek resolutions, compensation, or settlements.
          </p>
        </div>

        {/* Practice Area 6 */}
        <div className="practice-area">
          <h2>Drafting & Vetting of Contracts</h2>
          <p>
          Crafting and reviewing contracts with precision to ensure accuracy, fairness, and legal compliance, safeguarding the interests of all parties entering into contractual agreements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
