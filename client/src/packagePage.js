
import React, { useState } from 'react';
import './packagePage.css';
import { buildBronzePackage, buildSilverPackage, buildGoldPackage, buildDiamondPackage } from './functions';
import { cancerBasePolicyPricing, cancerRecurrenceRiderPricing, heartStrokeBasePolicyPricing, heartStrokeRestorationRiderPricing, cancerLSP1Pricing, cancerLSP2Pricing, accidentWithWellness1Pricing, accidentWithWellness2Pricing } from './pricingTables';

const PackagePage = () => {
    const [age, setAge] = useState('');
    const [relationshipStatus, setRelationshipStatus] = useState('');
    const [budget, setBudget] = useState('');
    const [bronzeResult, setBronzeResult] = useState(null);
    const [silverResult, setSilverResult] = useState(null);
    const [goldResult, setGoldResult] = useState(null);
    const [diamondResult, setDiamondResult] = useState(null);

    const handlePackageBuild = () => {
        const pricingTables = [cancerBasePolicyPricing, cancerRecurrenceRiderPricing, heartStrokeBasePolicyPricing, heartStrokeRestorationRiderPricing, cancerLSP1Pricing, cancerLSP2Pricing, accidentWithWellness1Pricing, accidentWithWellness2Pricing];
        const ageParsed = parseInt(age);
        const budgetParsed = parseFloat(budget);

        // Update the results for each package type
        setBronzeResult(buildBronzePackage(ageParsed, relationshipStatus, budgetParsed, ...pricingTables));
        setSilverResult(buildSilverPackage(ageParsed, relationshipStatus, budgetParsed, ...pricingTables));
        setGoldResult(buildGoldPackage(ageParsed, relationshipStatus, budgetParsed, ...pricingTables));
        setDiamondResult(buildDiamondPackage(ageParsed, relationshipStatus, budgetParsed, ...pricingTables));
    };

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
                
                <div className="input-form">
                    <div className="form-field">
                        <label className='form-label'>Age:</label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label className='form-label'>Relationship Status:</label>
                        <select value={relationshipStatus} onChange={(e) => setRelationshipStatus(e.target.value)}>
                            <option value="">Select Relationship Status</option>
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
                <div className="package-results">
                    {renderPackageResult(bronzeResult, 'Bronze')}
                    {renderPackageResult(silverResult, 'Silver')}
                    {renderPackageResult(goldResult, 'Gold')}
                    {renderPackageResult(diamondResult, 'Diamond')}
                </div>
            </div>
        </div>
    );

    function renderPackageResult(result, packageName) {
        if (!result) return null;
        return (
            <div className={`package-result ${packageName.toLowerCase()}`}>
                <h2>{packageName} Package</h2>
                <p>Total Cost: ${result.totalCost.toFixed(2)}</p>
                <ul>
                    {result.policies.map((policy, index) => (
                        <li key={`${packageName}-${index}`}>{policy.policy}: ${policy.price.toFixed(2)}</li>
                    ))}
                </ul>
            </div>

        );
    }
};

export default PackagePage;