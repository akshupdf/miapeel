import React, { useRef } from 'react';
import { Printer } from 'lucide-react';

const ClinicalAnalysis = () => {
  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Print Button */}
        <div className="p-4 border-b border-gray-200 flex justify-end">
          <button 
            onClick={handlePrint}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Printer className="w-4 h-4 mr-2" />
            Save as PDF
          </button>
        </div>

        {/* Main Content */}
        <div ref={componentRef} className="p-8 font-sans text-gray-900">
          {/* Header */}
          <h1 className="text-4xl font-light tracking-wider uppercase mb-12 text-center">
            Clinical Analysis: Ankle Hyperpigmentation
          </h1>
          
          <h2 className="text-xl font-light tracking-wider uppercase mb-8 text-gray-600 text-center">
            Scientific Assessment & Treatment Protocol
          </h2>
          
          <hr className="border-t border-gray-200 my-8" />
          
          {/* Document Info */}
          <div className="space-y-1">
            <div>DOCUMENT CODE: AH-2024-001</div>
            <div>CLASSIFICATION: Clinical Research</div>
            <div>VERSION: 1.0</div>
          </div>
          
          <hr className="border-t border-gray-200 my-8" />
          
          {/* Pathophysiological Mechanisms */}
          <section>
            <h3 className="text-lg font-medium tracking-wide uppercase mt-12 mb-6 border-b border-gray-200 pb-2">
              1.0 Pathophysiological Mechanisms
            </h3>
            <div>
              <strong>PRIMARY MECHANISMS</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Melanocyte activation</li>
                <li>Inflammatory response</li>
                <li>Vascular congestion</li>
                <li>Epidermal thickening</li>
              </ul>
            </div>
          </section>
          
          {/* Causative Factors */}
          <section>
            <h3 className="text-lg font-medium tracking-wide uppercase mt-12 mb-6 border-b border-gray-200 pb-2">
              2.0 Causative Factors
            </h3>
            <div className="space-y-6">
              <div>
                <strong>GENETIC FACTORS</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Hereditary predisposition</li>
                  <li>Melanocyte sensitivity</li>
                  <li>Genetic polymorphisms</li>
                </ul>
              </div>
              <div>
                <strong>VASCULAR PATHOLOGY</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Chronic venous insufficiency</li>
                  <li>Microcirculatory dysfunction</li>
                  <li>Lymphatic congestion</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Clinical Intervention */}
          <section>
            <h3 className="text-lg font-medium tracking-wide uppercase mt-12 mb-6 border-b border-gray-200 pb-2">
              3.0 Clinical Intervention
            </h3>
            <div className="bg-gray-100 p-6 font-mono text-sm tracking-wide rounded-md">
              PRIMARY TREATMENT: MIA PEEL<br/><br/>
              COMPOSITION:<br/>
              - TCA<br/>
              - Glutathione<br/>
              - Kojic acid<br/><br/>
              MECHANISM OF ACTION:<br/>
              1. Keratolytic activity<br/>
              2. Melanin inhibition<br/>
              3. Anti-inflammatory effects<br/>
              4. Cell turnover acceleration
            </div>
          </section>
          
          {/* Treatment Protocol */}
          <section>
            <h3 className="text-lg font-medium tracking-wide uppercase mt-12 mb-6 border-b border-gray-200 pb-2">
              4.0 Treatment Protocol
            </h3>
            <div className="bg-gray-100 p-6 font-mono text-sm tracking-wide rounded-md">
              FREQUENCY: Bi-weekly<br/>
              DURATION: 6-8 sessions<br/>
              INTERVAL: 14 days<br/><br/>
              AM SEQUENCE:<br/>
              1. Gentle enzymatic cleanse<br/>
              2. Antioxidant application<br/>
              3. UV protection (SPF 30+)<br/><br/>
              PM SEQUENCE:<br/>
              1. Deep cleansing protocol<br/>
              2. Active ingredient application<br/>
              3. Barrier repair
            </div>
          </section>
          
          {/* Monitoring Parameters */}
          <section>
            <h3 className="text-lg font-medium tracking-wide uppercase mt-12 mb-6 border-b border-gray-200 pb-2">
              5.0 Monitoring Parameters
            </h3>
            <div>
              <strong>CLINICAL ASSESSMENT</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Photographic documentation</li>
                <li>Melanin index measurement</li>
                <li>Texture analysis</li>
                <li>Vascular assessment</li>
              </ul>
            </div>
          </section>
          
          <hr className="border-t border-gray-200 my-8" />
          
          {/* Footer */}
          <div className="text-sm text-gray-600 mt-12 italic">
            *Protocol developed through clinical research and observation. Individual results may vary based on patient-specific factors.*
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style type="text/css" media="print">{`
        @page {
          size: A4;
          margin: 20mm;
        }
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        button {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default ClinicalAnalysis;