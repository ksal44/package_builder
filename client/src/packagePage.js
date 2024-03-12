import React, { useState } from 'react';
import { buildBronzePackage, buildSilverPackage, buildGoldPackage, buildDiamondPackage, selectBestPackage } from './functions';
import PackageEditor from './packageEditor';

const PackagePage = () => {
    const [state, setState] = useState('');
    const [age, setAge] = useState('');
    const [relationshipStatus, setRelationshipStatus] = useState('');
    const [packageResults, setPackageResults] = useState([]);
    const [bestPackageResult, setBestPackageResult] = useState(null);
    const [budget, setBudget] = useState('');
    const [showEditor, setShowEditor] = useState(false); // Assuming you have a way to set budget

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        
        // Define package functions with names for easy reference
        const packageFunctions = [
          { func: buildBronzePackage, name: 'Bronze' },
          { func: buildSilverPackage, name: 'Silver' },
          { func: buildGoldPackage, name: 'Gold' },
          { func: buildDiamondPackage, name: 'Diamond' }
        ];

        const results = packageFunctions.map(({ func, name }) => {
          const result = func(state, parseInt(age, 10), relationshipStatus);
          return {
            name: name,
            ...result
          };
        });

        // Update the state with all package results
        setPackageResults(results);

        // Select the best package within the budget
        const bestPackage = selectBestPackage(state, parseInt(age, 10), relationshipStatus, parseInt(budget, 10));
        setBestPackageResult(bestPackage); // Update the state with the best package result
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value.toUpperCase())}
                    placeholder="State (e.g., TX)"
                />
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                />
                <select value={relationshipStatus} onChange={(e) => setRelationshipStatus(e.target.value)}>
                    <option value="" disabled>Select Relationship Status</option>
                    <option value="Individual">Individual</option>
                    <option value="IndividualAndSpouse">Individual And Spouse</option>
                    <option value="OneParent">One Parent</option>
                    <option value="Family">Family</option>
                </select>
                <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Budget"
                />
                <button type="submit">Build Packages</button>
            </form>
            {packageResults.length > 0 && (
                <div>
                    {packageResults.map((result, index) => (
                        <div key={index}>
                            <h2>{result.name} Package</h2>
                            <div>Coverage Level: ${result.coverageLevel}</div>
                            <div>Total Cost: ${result.totalCost}</div>
                            <ul>
                                {result.policies.map((policy, idx) => (
                                    <li key={idx}>{policy.policy}: Base Price - ${policy.basePrice}, Price - ${policy.price}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
            {bestPackageResult && (
                <div>
                    <h2>Best Package: {bestPackageResult.name}</h2>
                    <div>Coverage Level: ${bestPackageResult.coverageLevel}</div>
                    <div>Total Cost: ${bestPackageResult.totalCost}</div>
                    <ul>
                        {bestPackageResult.policies.map((policy, idx) => (
                            <li key={idx}>{policy.policy}: Base Price - ${policy.basePrice}, Price - ${policy.price}</li>
                        ))}
                    </ul>
                    <button onClick={() => setShowEditor(true)}>Edit Package</button>
                </div>
            )}

            {showEditor && <PackageEditor packageDetails={bestPackageResult} onClose={() => setShowEditor(false)} state={state} relationshipStatus={relationshipStatus} age={age} />}
        </div>
    );
};

export default PackagePage;
