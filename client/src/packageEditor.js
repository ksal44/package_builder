
import React, { useState, useEffect } from 'react';
import { buildStateSpecificPackage } from './functions';

const PackageEditor = ({ onClose, state, age, relationshipStatus, packageDetails }) => {
    const [policies, setPolicies] = useState(
      packageDetails.policies.map(policy => ({
        ...policy,
        // Default all except specified policies to not included
        included: policy.policy === 'Cancer Package' || policy.policy === 'Heart & Stroke Package'
      }))
    );
    const [totalPrice, setTotalPrice] = useState(0);
    
  
    useEffect(() => {
      // Only sum the price of policies marked as included
      const calculatedTotalPrice = policies.reduce(
        (acc, policy) => acc + (policy.included ? policy.price : 0), 0);
      setTotalPrice(parseFloat(calculatedTotalPrice.toFixed(2)));
    }, [policies]);
  
    const togglePolicyInclusion = (index) => {
      setPolicies(currentPolicies =>
        currentPolicies.map((policy, idx) => idx === index ? { ...policy, included: !policy.included } : policy)
      );
    };

    const addStateSpecificPolicies = () => {
        const { policies: newPolicies, totalCost } = buildStateSpecificPackage(state, age, relationshipStatus);
        setPolicies([...policies, ...newPolicies]); // Combine with existing policies
        setTotalPrice(parseFloat((totalPrice + totalCost).toFixed(2))); // Update total price
      };

  const handleIncrement = (policyIndex) => {
    setPolicies(currentPolicies => currentPolicies.map((policy, idx) => {
      if (idx === policyIndex) {
        const updatedCoverageLevel = Math.min(policy.coverageLevel + 5000, 75000);
        const updatedPrice = parseFloat((policy.price + policy.basePrice).toFixed(2));
        return { ...policy, coverageLevel: updatedCoverageLevel, price: updatedPrice };
      }
      return policy;
    }));
  };

  const handleDecrement = (policyIndex) => {
    setPolicies(currentPolicies => currentPolicies.map((policy, idx) => {
      if (idx === policyIndex) {
        const updatedCoverageLevel = Math.max(policy.coverageLevel - 5000, 0);
        const updatedPrice = parseFloat((policy.price - policy.basePrice).toFixed(2));
        return { ...policy, coverageLevel: updatedCoverageLevel, price: updatedPrice };
      }
      return policy;
    }));
  };

  const shouldShowButtons = (policyDescriptiveName) => {
    return policyDescriptiveName === 'Cancer Package' || policyDescriptiveName === 'Heart & Stroke Package';
  };

  return (
    <div style={{ position: 'fixed', top: '10%', left: '25%', backgroundColor: 'white', padding: '20px', zIndex: 100 }}>
      <h2>Edit Package: {packageDetails.name}</h2>
      <div>Total Price: ${totalPrice}</div>
      {policies.map((policy, idx) => (
        <div key={idx} style={{ marginBottom: '10px' }}>
          <div>
            {policy.policy}: Base Price - ${policy.basePrice}, Price - ${policy.price}
            {policy.coverageLevel ? `, Coverage Level - ${policy.coverageLevel}` : ''}
            {!(policy.policy === 'Cancer Package' || policy.policy === 'Heart & Stroke Package') && (
              <input
                type="checkbox"
                checked={policy.included}
                onChange={() => togglePolicyInclusion(idx)}
                style={{ marginLeft: '10px' }}
              />
            )}
          </div>
          {shouldShowButtons(policy.policy) && (
            <>
              <button onClick={() => handleIncrement(idx)}>Inc</button>
              <button onClick={() => handleDecrement(idx)}>Dec</button>
            </>
          )}
        </div>
      ))}
            <button onClick={addStateSpecificPolicies} style={{ margin: '20px 0' }}>Add State Specific Policies</button>
      <button onClick={onClose} style={{ marginTop: '20px' }}>Close</button>
    </div>
  );
};

export default PackageEditor;


