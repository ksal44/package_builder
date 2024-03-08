import {
  cancerBasePolicyPricing,
  cancerRecurrenceRiderPricing,
  heartStrokeBasePolicyPricing,
  heartStrokeRestorationRiderPricing,
  cancerLSP1Pricing,
  cancerLSP2Pricing,
  accidentWithWellness1Pricing,
  accidentWithWellness2Pricing
} from './pricingTables'


cancerBasePolicyPricing.name = 'Cancer Base Policy';
cancerRecurrenceRiderPricing.name = 'Cancer Recurrence Rider';
heartStrokeBasePolicyPricing.name = 'Heart & Stroke Base Policy';
heartStrokeRestorationRiderPricing.name = 'Heart & Stroke Restoration Rider';
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

  // Filter the pricingTables array to include only the specified policies
  const filteredPricingTables = pricingTables.filter(table =>
    table.name === 'Cancer Base Policy' ||
    table.name === 'Accident 2' || 
    table.name === 'Heart & Stroke Base Policy');

  // Iterate over the filtered pricing tables
  filteredPricingTables.forEach(table => {
    const price = getPriceForPolicy(age, relationshipStatus, table);
    if (price > 0) {
      const finalPrice = (table.name === 'Accident 2') ? price : price * 2;
      policyPackage.push({
        policy: table.name,
        price: finalPrice
      });
      totalCost += finalPrice;
    }
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
    table.name === 'Cancer Base Policy' ||
    table.name === 'Accident 2' || 
    table.name === 'Heart & Stroke Base Policy');

  filteredPricingTables.forEach(table => {
    const price = getPriceForPolicy(age, relationshipStatus, table);
    if (price > 0) {
      const finalPrice = (table.name === 'Accident 2') ? price : price * 5;
      policyPackage.push({
        policy: table.name,
        price: finalPrice
      });
      totalCost += finalPrice;
    }
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
    table.name === 'Cancer Base Policy' ||
    table.name === 'Accident 2' || 
    table.name === 'Heart & Stroke Base Policy');

  filteredPricingTables.forEach(table => {
    const price = getPriceForPolicy(age, relationshipStatus, table);
    if (price > 0) {
      const finalPrice = (table.name === 'Accident 2') ? price : price * 10;
      policyPackage.push({
        policy: table.name,
        price: finalPrice
      });
      totalCost += finalPrice;
    }
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
    table.name === 'Cancer Base Policy' ||
    table.name === 'Accident 2' || 
    table.name === 'Heart & Stroke Base Policy');

  filteredPricingTables.forEach(table => {
    const price = getPriceForPolicy(age, relationshipStatus, table);
    if (price > 0) {
      const finalPrice = (table.name === 'Accident 2') ? price : price * 15;
      policyPackage.push({
        policy: table.name,
        price: finalPrice
      });
      totalCost += finalPrice;
    }
  });

  return {
    totalCost: totalCost,
    policies: policyPackage
  };
}


export {
  getPriceForPolicy,
  buildCustomPackage,
  buildBronzePackage,
  buildSilverPackage,
  buildGoldPackage,
  buildDiamondPackage
};