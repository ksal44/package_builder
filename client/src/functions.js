import { stateBasedPricing } from "./pricingTables";


export function getPricingForSelectedState(state) {
  const pricing = stateBasedPricing[state];
  if (!pricing) {
    console.error('Pricing information for the selected state is not available.');
    return null;
  }
  return pricing;
}


export function getPolicyPrice(state, age, relationshipStatus, policyName) {
  const pricingForState = getPricingForSelectedState(state);
  if (!pricingForState) {
    console.error('Pricing information for the selected state is not available.');
    return null;
  }
  const policyPricing = pricingForState[policyName];

  if (!policyPricing) {
    console.error('Policy information for the selected policy is not available.');
    return null;
  }

  const ageRange = Object.keys(policyPricing).find(range => {
    const [minAge, maxAge] = range.split('-').map(Number);
    return age >= minAge && age <= maxAge;
  });

  if (!ageRange) {
    console.error('Age range for the selected policy is not available.');
    return null;
  }

  const price = policyPricing[ageRange][relationshipStatus];
  if (price === undefined) {
    console.error('Price for the selected relationship status is not available.');
    return null;
  }

  return price;
}


export function buildBronzePackage(state, age, relationshipStatus) {
  let totalCost = 0;
  let policyPackage = [];
  const overallCoverageLevel = 10000; // Overall package coverage level
  const policyTables = ['cancerPackagePricing', 'heartStrokePackagePricing', 'accidentWithWellness2Pricing'];

  policyTables.forEach(policyName => {
    if (!stateBasedPricing[state] || !stateBasedPricing[state][policyName]) {
      console.error(`Policy information for ${policyName} in ${state} is not available.`);
      return;
    }

    const basePrice = getPolicyPrice(state, age, relationshipStatus, policyName);
    if (basePrice === null) {
      console.error(`Base price for ${policyName} could not be calculated.`);
      return;
    }

    let finalPrice = parseFloat((basePrice * (policyName === 'cancerPackagePricing' || policyName === 'heartStrokePackagePricing' ? 2 : 1)).toFixed(2));
    totalCost += finalPrice;

    const policyDetail = {
      policy: stateBasedPricing[state][policyName].name,
      basePrice: parseFloat(basePrice.toFixed(2)),
      price: finalPrice,
    };

    // Adding coverageLevel of 100 to cancer and heart/stroke policies
    if (policyName === 'cancerPackagePricing' || policyName === 'heartStrokePackagePricing') {
      policyDetail.coverageLevel = 10000;
    }

    policyPackage.push(policyDetail);
  });

  totalCost = parseFloat(totalCost.toFixed(2));

  return {
    totalCost: totalCost,
    policies: policyPackage,
    coverageLevel: overallCoverageLevel // Including overall package coverage level
  };
};


export function buildSilverPackage(state, age, relationshipStatus) {
  let totalCost = 0;
  let policyPackage = [];
  const overallCoverageLevel = 25000; // Overall package coverage level
  const policyTables = ['cancerPackagePricing', 'heartStrokePackagePricing', 'accidentWithWellness2Pricing'];

  policyTables.forEach(policyName => {
    if (!stateBasedPricing[state] || !stateBasedPricing[state][policyName]) {
      console.error(`Policy information for ${policyName} in ${state} is not available.`);
      return;
    }

    const basePrice = getPolicyPrice(state, age, relationshipStatus, policyName);
    if (basePrice === null) {
      console.error(`Base price for ${policyName} could not be calculated.`);
      return;
    }

    let finalPrice = parseFloat((basePrice * (policyName === 'cancerPackagePricing' || policyName === 'heartStrokePackagePricing' ? 5 : 1)).toFixed(2));
    totalCost += finalPrice;

    const policyDetail = {
      policy: stateBasedPricing[state][policyName].name,
      basePrice: parseFloat(basePrice.toFixed(2)),
      price: finalPrice,
    };

    if (policyName === 'cancerPackagePricing' || policyName === 'heartStrokePackagePricing') {
      policyDetail.coverageLevel = 25000;
    }

    policyPackage.push(policyDetail);
  });

  totalCost = parseFloat(totalCost.toFixed(2));

  return {
    totalCost: totalCost,
    policies: policyPackage,
    coverageLevel: overallCoverageLevel // Including overall package coverage level
  };
};

export function buildGoldPackage(state, age, relationshipStatus) {
  let totalCost = 0;
  let policyPackage = [];
  const overallCoverageLevel = 50000; // Overall package coverage level
  const policyTables = ['cancerPackagePricing', 'heartStrokePackagePricing', 'accidentWithWellness2Pricing'];

  policyTables.forEach(policyName => {
    if (!stateBasedPricing[state] || !stateBasedPricing[state][policyName]) {
      console.error(`Policy information for ${policyName} in ${state} is not available.`);
      return;
    }

    const basePrice = getPolicyPrice(state, age, relationshipStatus, policyName);
    if (basePrice === null) {
      console.error(`Base price for ${policyName} could not be calculated.`);
      return;
    }

    let finalPrice = parseFloat((basePrice * (policyName === 'cancerPackagePricing' || policyName === 'heartStrokePackagePricing' ? 10 : 1)).toFixed(2));
    totalCost += finalPrice;

    const policyDetail = {
      policy: stateBasedPricing[state][policyName].name,
      basePrice: parseFloat(basePrice.toFixed(2)),
      price: finalPrice,
    };

    if (policyName === 'cancerPackagePricing' || policyName === 'heartStrokePackagePricing') {
      policyDetail.coverageLevel = 50000;
    }

    policyPackage.push(policyDetail);
  });

  totalCost = parseFloat(totalCost.toFixed(2));

  return {
    totalCost: totalCost,
    policies: policyPackage,
    coverageLevel: overallCoverageLevel // Including overall package coverage level
  };
};

export function buildDiamondPackage(state, age, relationshipStatus) {
  let totalCost = 0;
  let policyPackage = [];
  const overallCoverageLevel = 75000; // Overall package coverage level
  const policyTables = ['cancerPackagePricing', 'heartStrokePackagePricing', 'accidentWithWellness2Pricing'];

  policyTables.forEach(policyName => {
    if (!stateBasedPricing[state] || !stateBasedPricing[state][policyName]) {
      console.error(`Policy information for ${policyName} in ${state} is not available.`);
      return;
    }

    const basePrice = getPolicyPrice(state, age, relationshipStatus, policyName);
    if (basePrice === null) {
      console.error(`Base price for ${policyName} could not be calculated.`);
      return;
    }

    let finalPrice = parseFloat((basePrice * (policyName === 'cancerPackagePricing' || policyName === 'heartStrokePackagePricing' ? 15 : 1)).toFixed(2));
    totalCost += finalPrice;

    const policyDetail = {
      policy: stateBasedPricing[state][policyName].name,
      basePrice: parseFloat(basePrice.toFixed(2)),
      price: finalPrice,
    };

    if (policyName === 'cancerPackagePricing' || policyName === 'heartStrokePackagePricing') {
      policyDetail.coverageLevel = 50000;
    }

    policyPackage.push(policyDetail);
  });

  totalCost = parseFloat(totalCost.toFixed(2));

  return {
    totalCost: totalCost,
    policies: policyPackage,
    coverageLevel: overallCoverageLevel // Including overall package coverage level
  };
};


export function selectBestPackage(state, age, relationshipStatus, budget) {
  // Define an array of your package-building functions and their names for easy iteration and selection
  const packageFunctions = [
    { name: 'Bronze', func: buildBronzePackage },
    { name: 'Silver', func: buildSilverPackage },
    { name: 'Gold', func: buildGoldPackage },
    { name: 'Diamond', func: buildDiamondPackage }
  ];

  let selectedPackage = null;
  let maxCostUnderBudget = 0;

  packageFunctions.forEach(({ name, func }) => {
    const packageResult = func(state, age, relationshipStatus);
    if (packageResult.totalCost <= budget && packageResult.totalCost > maxCostUnderBudget) {
      maxCostUnderBudget = packageResult.totalCost;
      selectedPackage = { ...packageResult, name }; // Add the package name for reference
    }
  });

  return selectedPackage; 
}

export function buildStateSpecificPackage(state, age, relationshipStatus) {
  let totalCost = 0;
  let policyPackage = [];
  const excludedPolicies = ['cancerPackagePricing', 'heartStrokePackagePricing', 'accidentWithWellness2Pricing'];

  Object.keys(stateBasedPricing[state]).forEach(policyKey => {
    if (!excludedPolicies.includes(policyKey)) {
      const basePrice = getPolicyPrice(state, age, relationshipStatus, policyKey);
      const finalPrice = parseFloat(basePrice.toFixed(2));
      const policyDetail = {
        policy: stateBasedPricing[state][policyKey].name,
        basePrice: finalPrice,
        price: finalPrice,
      };

      policyPackage.push(policyDetail);
    }
  });

  totalCost = policyPackage.reduce((acc, policy) => acc + policy.price, 0);
  totalCost = parseFloat(totalCost.toFixed(2));

  return {
    totalCost: totalCost,
    policies: policyPackage,
    coverageLevel: undefined // Adjust or calculate as necessary
  };
}
