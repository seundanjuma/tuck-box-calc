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
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <div style={styles.header}>
            <Calculator style={styles.icon} />
            <h1 style={styles.title}>Tuck End Box Calculator</h1>
          </div>
          
          <div style={styles.inputGrid}>
            <div style={styles.inputWrapper}>
              <label style={styles.label}>Width (inches)</label>
              <input
                type="number"
                step="0.01"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.inputWrapper}>
              <label style={styles.label}>Length (inches)</label>
              <input
                type="number"
                step="0.01"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.inputWrapper}>
              <label style={styles.label}>Height (inches)</label>
              <input
                type="number"
                step="0.01"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.imageContainer}>
            <h2 style={styles.imageTitle}>Box Layout Reference</h2>
            <img 
              src="/images/box-layout.png" 
              alt="Tuck end box layout diagram showing all panels" 
              style={styles.image}
            />
          </div>

          <div style={styles.resultsContainer}>
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

            <div style={styles.note}>
              <p style={styles.noteText}>
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
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.sectionContent}>
        {children}
      </div>
    </div>
  );
}

function Dimension({ label, value }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Split the value by × to get individual numbers
  const numbers = value.split(' × ');

  return (
    <div style={styles.dimension}>
      <span style={styles.dimensionLabel}>{label}:</span>
      <span style={styles.dimensionValueContainer}>
        {numbers.map((num, index) => (
          <span key={index}>
            <span
              style={{...styles.dimensionValue, ...(copiedIndex === index ? styles.dimensionValueCopied : {})}}
              onClick={() => copyToClipboard(num.replace('"', ''), index)}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fed7aa'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              title="Click to copy"
            >
              {num}
              {copiedIndex === index && (
                <span style={styles.copiedTooltip}>
                  Copied!
                </span>
              )}
            </span>
            {index < numbers.length - 1 && <span style={styles.dimensionSeparator}> × </span>}
          </span>
        ))}
      </span>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #fffbeb, #fed7aa)',
    padding: '1rem',
  },
  wrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    padding: '1.5rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  icon: {
    width: '2rem',
    height: '2rem',
    color: '#ea580c',
  },
  title: {
    fontSize: 'clamp(1.5rem, 4vw, 1.875rem)',
    fontWeight: '700',
    color: '#1f2937',
    margin: 0,
  },
  inputGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
  },
  imageContainer: {
    padding: '1rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.5rem',
    marginBottom: '2rem',
  },
  imageTitle: {
    fontSize: 'clamp(1rem, 3vw, 1.25rem)',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
    borderRadius: '0.25rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    display: 'block',
  },
  resultsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  section: {
    borderLeft: '4px solid #f97316',
    paddingLeft: '1rem',
  },
  sectionTitle: {
    fontSize: 'clamp(1rem, 3vw, 1.25rem)',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.75rem',
  },
  sectionContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  dimension: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0.75rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.25rem',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  dimensionLabel: {
    color: '#374151',
    fontWeight: '500',
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
  },
  dimensionValueContainer: {
    fontFamily: 'monospace',
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0',
  },
  dimensionValue: {
    color: '#111827',
    cursor: 'pointer',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    transition: 'background-color 0.2s',
    position: 'relative',
    display: 'inline-block',
  },
  dimensionSeparator: {
    color: '#111827',
    padding: '0 0.25rem',
  },
  dimensionValueCopied: {
    backgroundColor: '#fed7aa',
  },
  copiedTooltip: {
    position: 'absolute',
    top: '-2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#1f2937',
    color: 'white',
    fontSize: '0.75rem',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    whiteSpace: 'nowrap',
  },
  note: {
    marginTop: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.5rem',
  },
  noteText: {
    fontSize: '0.875rem',
    color: '#4b5563',
    margin: 0,
  },
};

// Add media query styles
const mediaQueryStyles = `
  @media (min-width: 768px) {
    .card {
      padding: 2rem;
    }
  }
  
  input[type="number"]:focus {
    border-color: #f97316;
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
  }
`;

// Inject media query styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}