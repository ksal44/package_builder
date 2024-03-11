import {
  cancerBasePolicyPricing,
  cancerRecurrenceRiderPricing,
  cancerPackagePricing,
  heartStrokeBasePolicyPricing,
  heartStrokeRestorationRiderPricing,
  heartStrokePackagePricing,
  cancerLSP1Pricing,
  cancerLSP2Pricing,
  accidentWithWellness1Pricing,
  accidentWithWellness2Pricing
} from './pricingTables'


cancerBasePolicyPricing.name = 'Cancer Policy';
cancerRecurrenceRiderPricing.name = 'Cancer Recurrence Rider';
cancerPackagePricing.name = 'Cancer Package';
heartStrokeBasePolicyPricing.name = 'Heart & Stroke Policy';
heartStrokeRestorationRiderPricing.name = 'Heart & Stroke Restoration Rider';
heartStrokePackagePricing.name = 'Heart & Stroke Package';
cancerLSP1Pricing.name = 'Cancer LSP1';
cancerLSP2Pricing.name = 'Cancer LSP2';
accidentWithWellness1Pricing.name = 'Accident 1';
accidentWithWellness2Pricing.name = 'Accident 2';

function getPriceForPolicy(age, relationshipStatus, pricingTable) {
  const ageRange = Object.keys(pricingTable).find(range => {
    const [minAge, maxAge] = range.split('-').map(Number); // Convert string to number
    return age >= minAge && age <= maxAge;
  });

  if (!ageRange) return 0;

  const formattedRelationshipStatus = relationshipStatus.replace(/\s*&\s*/, 'And'); // Remove extra whitespaces and replace '&' with 'And'
  const prices = pricingTable[ageRange];
  const price = prices[formattedRelationshipStatus];

  if (price === undefined) throw new Error('Invalid relationship status');

  return price;
}

// Define the function that takes age, relationship status, budget, and a spread of pricing tables
function buildCustomPackage(age, relationshipStatus, budget, ...pricingTables) {
  let totalCost = 0;
  let policyPackage = [];

  for (const pricingTable of pricingTables) {
    const price = getPriceForPolicy(age, relationshipStatus, pricingTable);

    if (price > 0 && (totalCost + price) <= budget) {
      policyPackage.push({
        policy: pricingTable.name,
        price: price
      });
      totalCost += price;
    }
  }

  return {
    totalCost: totalCost,
    policies: policyPackage
  };
}


function buildBronzePackage(age, relationshipStatus, ...pricingTables) {
  let policyPackage = [];
  let totalCost = 0;

  const filteredPricingTables = pricingTables.filter(table =>
    table.name === 'Cancer Package' ||
    table.name === 'Accident 2' ||
    table.name === 'Heart & Stroke Package');

  filteredPricingTables.forEach(table => {
    const basePrice = getPriceForPolicy(age, relationshipStatus, table);
    const finalPrice = (table.name === 'Accident 2') ? basePrice : basePrice * 2; // Apply doubling only for specific policies

    policyPackage.push({
      policy: table.name,
      basePrice: basePrice,
      price: finalPrice
    });

    totalCost += finalPrice;
  });

  return {
    totalCost: totalCost,
    policies: policyPackage
  };
}

function buildSilverPackage(age, relationshipStatus, ...pricingTables) {
  let policyPackage = [];
  let totalCost = 0;

  const filteredPricingTables = pricingTables.filter(table =>
    table.name === 'Cancer Package' ||
    table.name === 'Accident 2' ||
    table.name === 'Heart & Stroke Package');

  filteredPricingTables.forEach(table => {
    const basePrice = getPriceForPolicy(age, relationshipStatus, table);
    const finalPrice = (table.name === 'Accident 2') ? basePrice : basePrice * 5;

    policyPackage.push({
      policy: table.name,
      basePrice: basePrice,
      price: finalPrice,
    });

    totalCost += finalPrice;
  });

  return {
    totalCost: totalCost,
    policies: policyPackage
  };
}



function buildGoldPackage(age, relationshipStatus, ...pricingTables) {
  let policyPackage = [];
  let totalCost = 0;

  const filteredPricingTables = pricingTables.filter(table =>
    table.name === 'Cancer Package' ||
    table.name === 'Accident 2' ||
    table.name === 'Heart & Stroke Package');

  filteredPricingTables.forEach(table => {
    const basePrice = getPriceForPolicy(age, relationshipStatus, table);
    const finalPrice = (table.name === 'Accident 2') ? basePrice : basePrice * 10;

    policyPackage.push({
      policy: table.name,
      basePrice: basePrice,
      price: finalPrice,
    });

    totalCost += finalPrice;
  });

  return {
    totalCost: totalCost,
    policies: policyPackage
  };
}


function buildDiamondPackage(age, relationshipStatus, ...pricingTables) {
  let policyPackage = [];
  let totalCost = 0;

  const filteredPricingTables = pricingTables.filter(table =>
    table.name === 'Cancer Package' ||
    table.name === 'Accident 2' ||
    table.name === 'Heart & Stroke Package');

  filteredPricingTables.forEach(table => {
    const basePrice = getPriceForPolicy(age, relationshipStatus, table);
    const finalPrice = (table.name === 'Accident 2') ? basePrice : basePrice * 15;

    policyPackage.push({
      policy: table.name,
      basePrice: basePrice,
      price: finalPrice,
    });

    totalCost += finalPrice;
  });

  return {
    totalCost: totalCost,
    policies: policyPackage
  };
}


function selectBestPackage(age, relationshipStatus, budget, pricingTables) {
  
  // Define initial coverage levels for each package
  const coverageLevels = {
    Bronze: 10000,
    Silver: 25000,
    Gold: 50000,
    Diamond: 75000,
  };

  // Define the packages with their build functions
  const packages = [
    { name: "Bronze", package: buildBronzePackage(age, relationshipStatus, ...pricingTables) },
    { name: "Silver", package: buildSilverPackage(age, relationshipStatus, ...pricingTables) },
    { name: "Gold", package: buildGoldPackage(age, relationshipStatus, ...pricingTables) },
    { name: "Diamond", package: buildDiamondPackage(age, relationshipStatus, ...pricingTables) }
  ];

  // Filter packages that fit within the budget
  const affordablePackages = packages.filter(pkg => pkg.package.totalCost <= budget);
  affordablePackages.sort((a, b) => b.package.totalCost - a.package.totalCost);
  const selectedPackage = affordablePackages[0];

  if (!selectedPackage) {
    return { message: "No package fits within the budget." };
  } else {
    // Include details of each policy within the selected package, adding the initial coverage level
    const policyDetails = selectedPackage.package.policies.map(policy => {
      const initialCoverage = coverageLevels[selectedPackage.name];
      
      return {
        name: policy.policy,
        basePrice: policy.basePrice,
        finalPrice: policy.price,
        coverageLevel: initialCoverage // Here is where the initial coverage level is set
      };
    });

    return {
      message: `${selectedPackage.name} Package is the best fit within your budget.`,
      selectedPackage: selectedPackage.name,
      totalCost: selectedPackage.package.totalCost, // This should reflect the total cost directly from the selected package
      policies: policyDetails
    };
  }
}



export {
  getPriceForPolicy,
  buildCustomPackage,
  buildBronzePackage,
  buildSilverPackage,
  buildGoldPackage,
  buildDiamondPackage,
  selectBestPackage
};