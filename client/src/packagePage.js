
import React, { useState, useCallback } from 'react';
import './packagePage.css';
import { buildBronzePackage, buildSilverPackage, buildGoldPackage, buildDiamondPackage, selectBestPackage } from './functions';
import { cancerBasePolicyPricing, cancerRecurrenceRiderPricing, heartStrokeBasePolicyPricing, heartStrokeRestorationRiderPricing, cancerLSP1Pricing, cancerLSP2Pricing, accidentWithWellness1Pricing, accidentWithWellness2Pricing } from './pricingTables';

const PackagePage = () => {
    const [age, setAge] = useState('');
    const [relationshipStatus, setRelationshipStatus] = useState('');
    const [budget, setBudget] = useState('');
    const [bronzeResult, setBronzeResult] = useState(null);
    const [silverResult, setSilverResult] = useState(null);
    const [goldResult, setGoldResult] = useState(null);
    const [diamondResult, setDiamondResult] = useState(null);
    const [optimumResult, setOptimumResult] = useState(null);

    const handlePackageBuild = () => {
        const pricingTables = [cancerBasePolicyPricing, cancerRecurrenceRiderPricing, heartStrokeBasePolicyPricing, heartStrokeRestorationRiderPricing, cancerLSP1Pricing, cancerLSP2Pricing, accidentWithWellness1Pricing, accidentWithWellness2Pricing];
        const ageParsed = parseInt(age);
        const budgetParsed = parseFloat(budget);

        const bestPackageResult = selectBestPackage(ageParsed, relationshipStatus, budgetParsed, pricingTables);
        setOptimumResult(bestPackageResult);

        // Update the results for each package type
        setBronzeResult(buildBronzePackage(ageParsed, relationshipStatus, budgetParsed, ...pricingTables));
        setSilverResult(buildSilverPackage(ageParsed, relationshipStatus, budgetParsed, ...pricingTables));
        setGoldResult(buildGoldPackage(ageParsed, relationshipStatus, budgetParsed, ...pricingTables));
        setDiamondResult(buildDiamondPackage(ageParsed, relationshipStatus, budgetParsed, ...pricingTables));
    };

    const incrementPolicyPrice = useCallback((policyName) => {
        // Create a new object to avoid direct state mutation
        const updatedOptimumResult = { ...optimumResult };

        // Map through policies to find the one to update
        updatedOptimumResult.policies = updatedOptimumResult.policies.map(policy => {
            if (policy.name === policyName && policyName !== "Accident 2") {
                return { ...policy, finalPrice: policy.finalPrice + policy.basePrice };
            }
            return policy;
        });

        // Update the totalCost
        updatedOptimumResult.totalCost = updatedOptimumResult.policies.reduce((acc, policy) => acc + policy.finalPrice, 0);

        // Update the state with the modified object
        setOptimumResult(updatedOptimumResult);
    }, [optimumResult]);

    const decrementPolicyPrice = useCallback((policyName) => {
        const updatedOptimumResult = { ...optimumResult };

        updatedOptimumResult.policies = updatedOptimumResult.policies.map(policy => {
            if ((policy.name === "Cancer Base Policy" || policy.name === "Heart & Stroke Base Policy") && policy.name === policyName) {
                // Ensure not decreasing below basePrice
                const newFinalPrice = policy.finalPrice - policy.basePrice;
                return { ...policy, finalPrice: newFinalPrice >= policy.basePrice ? newFinalPrice : policy.finalPrice };
            }
            return policy;
        });

        updatedOptimumResult.totalCost = updatedOptimumResult.policies.reduce((acc, policy) => acc + policy.finalPrice, 0);

        setOptimumResult(updatedOptimumResult);
    }, [optimumResult]);


    return (
        <div>

            <header>
                <h1>Empower Insurance Group</h1>
            </header>
            <nav>
                <ul className="navbar">
                    <li>Home</li>
                    <li>Agent Production</li>
                    <li>Package Builder</li>
                </ul>
            </nav>
            <h2>Package Builder</h2>
            <div className='main'>
                <div className='static'>
                <div className="input-form">
                    <div className="form-field">
                        <label className='form-label'>Age:</label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className='form-label'>Relationship Status:</label>
                        <select value={relationshipStatus} onChange={(e) => setRelationshipStatus(e.target.value)}>
                            <option value="">Relationship Status</option>
                            <option value="Individual">Individual</option>
                            <option value="IndividualAndSpouse">Individual And Spouse</option>
                            <option value="OneParent">One Parent</option>
                            <option value="Family">Family</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label className='form-label'>Budget:</label>
                        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
                    </div>
                    <button onClick={handlePackageBuild}>Build Package</button>
                </div>
                <div className="pricing-guide">
                    <p className='bronze'>Bronze Coverage = $10,000</p>
                    <p className='silver'>Silver Coverage = $25,000</p>
                    <p className='gold'>Gold Coverage = $50,000</p>
                    <p className='diamond'>Diamond Coverage = $75,000</p>
                </div>
                </div>
                <div className="package-results">
                    {renderPackageResult(bronzeResult, 'Bronze')}
                    {renderPackageResult(silverResult, 'Silver')}
                    {renderPackageResult(goldResult, 'Gold')}
                    {renderPackageResult(diamondResult, 'Diamond')}
                </div>
                <div>
                    {optimumResult && (
                        <div className="optimum-result">
                            <h2>Optimum Package: {optimumResult.selectedPackage}</h2>
                            <p>Total Cost: ${optimumResult.totalCost.toFixed(2)}</p>
                            <ul>
                                {optimumResult.policies.map((policy, index) => (
                                    <li key={`optimum-${index}`} className="policy-item">
                                        <div className="policy-header">
                                            {policy.name}
                                            {policy.name !== "Accident 2" && (
                                                <span className='buttons'>
                                                    <button className='button' onClick={() => decrementPolicyPrice(policy.name)}> - </button>
                                                    <button className='button' onClick={() => incrementPolicyPrice(policy.name)}> + </button>

                                                </span>
                                            )}
                                        </div>
                                        <ul className="policy-details">
                                            <li>Base Price: ${policy.basePrice.toFixed(2)}</li>
                                            <li>Final Price: ${policy.finalPrice.toFixed(2)}</li>
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    function renderPackageResult(result, packageName) {
        if (!result) return null;
        return (
            <div className={`package-result ${packageName.toLowerCase()}`}>
                <h2>{packageName} Package</h2>
                <p>Total Cost: ${result.totalCost ? result.totalCost.toFixed(2) : '0.00'}</p>
                <ul>
                    {result.policies.map((policy, index) => (
                        <li key={`${packageName}-${index}`}>{policy.policy}: ${policy.price ? policy.price.toFixed(2) : '0.00'}</li>
                    ))}
                </ul>
            </div>

        );
    }
};

export default PackagePage;