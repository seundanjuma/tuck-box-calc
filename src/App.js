import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function TuckBoxCalculator() {
  const [width, setWidth] = useState('8');
  const [length, setLength] = useState('8');
  const [height, setHeight] = useState('4');
  
  const ALLOWANCE = 0.0787;
  
  const w = parseFloat(width) || 0;
  const l = parseFloat(length) || 0;
  const h = parseFloat(height) || 0;
  
  const dimensions = {
    bottom: {
      width: l,
      height: w
    },
    leftSide: {
      panel: { width: l, height: h },
      glueFlap: { width: ALLOWANCE, height: l },
      interiorTuckFlap: { width: h - ALLOWANCE, height: w - ALLOWANCE }
    },
    rightSide: {
      panel: { width: l, height: h },
      glueFlap: { width: ALLOWANCE, height: l },
      interiorTuckFlap: { width: h - ALLOWANCE, height: w - ALLOWANCE }
    },
    front: {
      panel: { width: l - ALLOWANCE, height: h },
      dustFlap: { width: 0.6 * h, height: h - ALLOWANCE }
    },
    back: {
      panel: { width: l - ALLOWANCE, height: h },
      dustFlap: { width: 0.6 * h, height: h - ALLOWANCE }
    },
    top: {
      panel: { width: w, height: l - ALLOWANCE },
      sideFlaps: { width: w - (2 * ALLOWANCE), height: 0.9 * h }
    },
    frontFlap: {
      mainFlap: { width: l - ALLOWANCE, height: h },
      dustFlaps: { width: 0.6 * h, height: h - ALLOWANCE }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-800">Tuck End Box Calculator</h1>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Width (inches)
              </label>
              <input
                type="number"
                step="0.01"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Length (inches)
              </label>
              <input
                type="number"
                step="0.01"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (inches)
              </label>
              <input
                type="number"
                step="0.01"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Section title="Bottom Panel">
              <Dimension label="Bottom" value={`${dimensions.bottom.width.toFixed(4)}" × ${dimensions.bottom.height.toFixed(4)}"`} />
            </Section>

            <Section title="Left Side">
              <Dimension label="Side Panel" value={`${dimensions.leftSide.panel.width.toFixed(4)}" × ${dimensions.leftSide.panel.height.toFixed(4)}"`} />
              <Dimension label="Glue Flap" value={`${dimensions.leftSide.glueFlap.width.toFixed(4)}" × ${dimensions.leftSide.glueFlap.height.toFixed(4)}"`} />
              <Dimension label="Interior Tuck Flap" value={`${dimensions.leftSide.interiorTuckFlap.width.toFixed(4)}" × ${dimensions.leftSide.interiorTuckFlap.height.toFixed(4)}"`} />
            </Section>

            <Section title="Right Side">
              <Dimension label="Side Panel" value={`${dimensions.rightSide.panel.width.toFixed(4)}" × ${dimensions.rightSide.panel.height.toFixed(4)}"`} />
              <Dimension label="Glue Flap" value={`${dimensions.rightSide.glueFlap.width.toFixed(4)}" × ${dimensions.rightSide.glueFlap.height.toFixed(4)}"`} />
              <Dimension label="Interior Tuck Flap" value={`${dimensions.rightSide.interiorTuckFlap.width.toFixed(4)}" × ${dimensions.rightSide.interiorTuckFlap.height.toFixed(4)}"`} />
            </Section>

            <Section title="Front">
              <Dimension label="Front Panel" value={`${dimensions.front.panel.width.toFixed(4)}" × ${dimensions.front.panel.height.toFixed(4)}"`} />
              <Dimension label="Dust Flap" value={`${dimensions.front.dustFlap.width.toFixed(4)}" × ${dimensions.front.dustFlap.height.toFixed(4)}"`} />
            </Section>

            <Section title="Back">
              <Dimension label="Back Panel" value={`${dimensions.back.panel.width.toFixed(4)}" × ${dimensions.back.panel.height.toFixed(4)}"`} />
              <Dimension label="Dust Flap" value={`${dimensions.back.dustFlap.width.toFixed(4)}" × ${dimensions.back.dustFlap.height.toFixed(4)}"`} />
            </Section>

            <Section title="Top">
              <Dimension label="Top Panel" value={`${dimensions.top.panel.width.toFixed(4)}" × ${dimensions.top.panel.height.toFixed(4)}"`} />
              <Dimension label="Side Flaps (×2)" value={`${dimensions.top.sideFlaps.width.toFixed(4)}" × ${dimensions.top.sideFlaps.height.toFixed(4)}"`} />
            </Section>

            <Section title="Front Flap">
              <Dimension label="Main Flap" value={`${dimensions.frontFlap.mainFlap.width.toFixed(4)}" × ${dimensions.frontFlap.mainFlap.height.toFixed(4)}"`} />
              <Dimension label="Dust Flaps (×2)" value={`${dimensions.frontFlap.dustFlaps.width.toFixed(4)}" × ${dimensions.frontFlap.dustFlaps.height.toFixed(4)}"`} />
            </Section>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Tuck-in holes are constant at 1" × 0.0787"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="border-l-4 border-orange-500 pl-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

function Dimension({ label, value }) {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded">
      <span className="text-gray-700 font-medium">{label}:</span>
      <span 
        className="text-gray-900 font-mono cursor-pointer hover:bg-orange-100 px-2 py-1 rounded transition-colors relative"
        onClick={() => copyToClipboard(value)}
        title="Click to copy"
      >
        {value}
        {copied && (
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </span>
    </div>
  );
}