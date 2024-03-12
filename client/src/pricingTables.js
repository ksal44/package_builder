// heartStrokeBasePolicyPricing = {
//   "20-24": { "Individual": 3.75, "IndividualAndSpouse": 6.25, "OneParent": 4.25, "Family": 7.00 },
//   "25-29": { "Individual": 4.50, "IndividualAndSpouse": 7.50, "OneParent": 5.00, "Family": 8.25 },
//   "30-34": { "Individual": 5.50, "IndividualAndSpouse": 9.25, "OneParent": 6.00, "Family": 10.00 },
//   "35-39": { "Individual": 6.75, "IndividualAndSpouse": 11.25, "OneParent": 7.50, "Family": 12.00 },
//   "40-44": { "Individual": 8.00, "IndividualAndSpouse": 13.25, "OneParent": 8.75, "Family": 14.00 },
//   "45-49": { "Individual": 8.75, "IndividualAndSpouse": 14.50, "OneParent": 9.50, "Family": 15.25 },
//   "50-54": { "Individual": 10.75, "IndividualAndSpouse": 18.00, "OneParent": 11.25, "Family": 18.75 },
//   "55-59": { "Individual": 13.00, "IndividualAndSpouse": 21.75, "OneParent": 13.50, "Family": 22.25 },
//   "60-64": { "Individual": 15.50, "IndividualAndSpouse": 25.75, "OneParent": 15.75, "Family": 26.00 },
//   "65-69": { "Individual": 18.75, "IndividualAndSpouse": 31.25, "OneParent": 19.00, "Family": 31.50 },
//   "70-74": { "Individual": 22.50, "IndividualAndSpouse": 37.00, "OneParent": 22.50, "Family": 37.25 },
//   "75-79": { "Individual": 26.50, "IndividualAndSpouse": 44.25, "OneParent": 26.75, "Family": 44.50 },
//   "80-84": { "Individual": 30.25, "IndividualAndSpouse": 50.50, "OneParent": 30.50, "Family": 50.75 }
// };

// heartStrokeRestorationRiderPricing = {
//   "20-24": { "Individual": 0.40, "IndividualAndSpouse": 0.65, "OneParent": 0.45, "Family": 0.70 },
//   "25-29": { "Individual": 0.45, "IndividualAndSpouse": 0.75, "OneParent": 0.50, "Family": 0.85 },
//   "30-34": { "Individual": 0.55, "IndividualAndSpouse": 0.95, "OneParent": 0.60, "Family": 1.00 },
//   "35-39": { "Individual": 0.70, "IndividualAndSpouse": 1.15, "OneParent": 0.75, "Family": 1.20 },
//   "40-44": { "Individual": 0.80, "IndividualAndSpouse": 1.35, "OneParent": 0.90, "Family": 1.40 },
//   "45-49": { "Individual": 0.90, "IndividualAndSpouse": 1.45, "OneParent": 0.95, "Family": 1.55 },
//   "50-54": { "Individual": 1.10, "IndividualAndSpouse": 1.80, "OneParent": 1.15, "Family": 1.90 }
// };



// cancerLSP1Pricing = {
//   "18-29": { "Individual": 12.54, "IndividualAndSpouse": 27.36, "OneParent": 14.83, "Family": 27.36 },
//   "30-39": { "Individual": 21.99, "IndividualAndSpouse": 46.28, "OneParent": 24.28, "Family": 46.28 },
//   "40-49": { "Individual": 40.95, "IndividualAndSpouse": 84.19, "OneParent": 43.23, "Family": 84.19 },
//   "50-54": { "Individual": 68.31, "IndividualAndSpouse": 138.90, "OneParent": 70.59, "Family": 138.90 },
//   "55-69": { "Individual": 82.76, "IndividualAndSpouse": 167.83, "OneParent": 85.06, "Family": 167.83 },
// };

// cancerLSP2Pricing = {
//   "18-29": { "Individual": 11, "IndividualAndSpouse": 24.08, "OneParent": 13.08, "Family": 24.08 },
//   "30-39": { "Individual": 19.51, "IndividualAndSpouse": 41.10, "OneParent": 21.58, "Family": 41.10 },
//   "40-49": { "Individual": 36.42, "IndividualAndSpouse": 74.93, "OneParent": 38.50, "Family": 74.93 },
//   "50-54": { "Individual": 61.11, "IndividualAndSpouse": 124.31, "OneParent": 63.19, "Family": 124.31 },
//   "55-69": { "Individual": 74.95, "IndividualAndSpouse": 151.96, "OneParent": 77.02, "Family": 151.96 },
// };

// accidentWithWellness1Pricing = {
//   "18-69": { "Individual": 12.75, "IndividualAndSpouse": 25, "OneParent": 25.75, "Family": 39.80 },
// };

const packagePolicies = ['cancerBasePolicyPricing', 'heartStrokePackagePricing', 'accidentWithWellness2Pricing']


  const stateBasedPricing = {
    FL: {
      // cancerBasePolicyPricing: {
      //   name: 'Cancer Policy',
      //   "20-24": { "Individual": 3.75, "IndividualAndSpouse": 6.25, "OneParent": 4.25, "Family": 7 },
      //   "25-29": { "Individual": 4, "IndividualAndSpouse": 7, "OneParent": 4.75, "Family": 7.75 },
      //   "30-34": { "Individual": 5, "IndividualAndSpouse": 8.25, "OneParent": 5.5, "Family": 9 },
      //   "35-39": { "Individual": 5.75, "IndividualAndSpouse": 9.5, "OneParent": 6.5, "Family": 10.25 },
      //   "40-44": { "Individual": 6.75, "IndividualAndSpouse": 11.25, "OneParent": 7.5, "Family": 12 },
      //   "45-49": { "Individual": 7.75, "IndividualAndSpouse": 13, "OneParent": 8.5, "Family": 13.75 },
      //   "50-54": { "Individual": 9, "IndividualAndSpouse": 15, "OneParent": 9.5, "Family": 15.75 },
      //   "55-59": { "Individual": 10.25, "IndividualAndSpouse": 17, "OneParent": 10.75, "Family": 17.5 },
      //   "60-64": { "Individual": 11.5, "IndividualAndSpouse": 19.25, "OneParent": 11.75, "Family": 19.5 },
      //   "65-69": { "Individual": 12.75, "IndividualAndSpouse": 21.25, "OneParent": 13, "Family": 21.5 },
      //   "70-74": { "Individual": 13.75, "IndividualAndSpouse": 23, "OneParent": 14, "Family": 23.25 },
      //   "75-79": { "Individual": 14.5, "IndividualAndSpouse": 24.25, "OneParent": 14.75, "Family": 24.75 },
      //   "80-84": { "Individual": 14.75, "IndividualAndSpouse": 24.5, "OneParent": 15, "Family": 24.75 }
      // },
      // cancerRecurrenceRiderPricing: {
      //   name: 'Cancer Recurrence Rider',
      //   "20-24": { "Individual": 0.40, "IndividualAndSpouse": 0.65, "OneParent": 0.45, "Family": 0.70 },
      //   "25-29": { "Individual": 0.45, "IndividualAndSpouse": 0.70, "OneParent": 0.50, "Family": 0.80 },
      //   "30-34": { "Individual": 0.5, "IndividualAndSpouse": 0.85, "OneParent": 0.55, "Family": 0.90 },
      //   "35-39": { "Individual": 0.60, "IndividualAndSpouse": 0.95, "OneParent": 0.65, "Family": 1.05 },
      //   "40-44": { "Individual": 0.70, "IndividualAndSpouse": 1.15, "OneParent": 0.75, "Family": 1.20 },
      //   "45-49": { "Individual": 0.80, "IndividualAndSpouse": 1.30, "OneParent": 0.85, "Family": 1.40 },
      //   "50-54": { "Individual": 0.90, "IndividualAndSpouse": 1.50, "OneParent": 0.95, "Family": 1.60 },
      // },
      cancerPackagePricing: {
        name: "Cancer Package",
        "20-24": { "Individual": 4.15, "IndividualAndSpouse": 6.9, "OneParent": 4.7, "Family": 7.7 },
        "25-29": { "Individual": 4.45, "IndividualAndSpouse": 7.7, "OneParent": 5.25, "Family": 8.55 },
        "30-34": { "Individual": 5.5, "IndividualAndSpouse": 9.1, "OneParent": 6.05, "Family": 9.9 },
        "35-39": { "Individual": 6.35, "IndividualAndSpouse": 10.45, "OneParent": 7.15, "Family": 11.3 },
        "40-44": { "Individual": 7.45, "IndividualAndSpouse": 12.4, "OneParent": 8.25, "Family": 13.2 },
        "45-49": { "Individual": 8.55, "IndividualAndSpouse": 14.3, "OneParent": 9.35, "Family": 15.15 },
        "50-54": { "Individual": 9.9, "IndividualAndSpouse": 16.5, "OneParent": 10.45, "Family": 17.35 },
        "55-59": { "Individual": 10.25, "IndividualAndSpouse": 17, "OneParent": 10.75, "Family": 17.5 },
        "60-64": { "Individual": 11.5, "IndividualAndSpouse": 19.25, "OneParent": 11.75, "Family": 19.5 },
        "65-69": { "Individual": 12.75, "IndividualAndSpouse": 21.25, "OneParent": 13, "Family": 21.5 },
        "70-74": { "Individual": 13.75, "IndividualAndSpouse": 23, "OneParent": 14, "Family": 23.25 },
        "75-79": { "Individual": 14.5, "IndividualAndSpouse": 24.25, "OneParent": 14.75, "Family": 24.75 },
        "80-84": { "Individual": 14.75, "IndividualAndSpouse": 24.5, "OneParent": 15, "Family": 24.75 }
      },
      heartStrokePackagePricing: {
        name: 'Heart & Stroke Package',
        '20-24': {'Individual': 4.15, 'IndividualAndSpouse': 6.9, 'OneParent': 4.7, 'Family': 7.7},
        '25-29': {'Individual': 4.95, 'IndividualAndSpouse': 8.25, 'OneParent': 5.5, 'Family': 9.1},
        '30-34': {'Individual': 6.05, 'IndividualAndSpouse': 10.2, 'OneParent': 6.6, 'Family': 11.0},
        '35-39': {'Individual': 7.45, 'IndividualAndSpouse': 12.4, 'OneParent': 8.25, 'Family': 13.2},
        '40-44': {'Individual': 8.8, 'IndividualAndSpouse': 14.6, 'OneParent': 9.65, 'Family': 15.4},
        '45-49': {'Individual': 9.65, 'IndividualAndSpouse': 15.95, 'OneParent': 10.45, 'Family': 16.8},
        '50-54': {'Individual': 11.85, 'IndividualAndSpouse': 19.8, 'OneParent': 12.4, 'Family': 20.65},
        '55-59': {'Individual': 13.0, 'IndividualAndSpouse': 21.75, 'OneParent': 13.5, 'Family': 22.25},
        '60-64': {'Individual': 15.5, 'IndividualAndSpouse': 25.75, 'OneParent': 15.75, 'Family': 26.0},
        '65-69': {'Individual': 18.75, 'IndividualAndSpouse': 31.25, 'OneParent': 19.0, 'Family': 31.5},
        '70-74': {'Individual': 22.5, 'IndividualAndSpouse': 37.0, 'OneParent': 22.5, 'Family': 37.25},
        '75-79': {'Individual': 26.5, 'IndividualAndSpouse': 44.25, 'OneParent': 26.75, 'Family': 44.5},
        '80-84': {'Individual': 30.25, 'IndividualAndSpouse': 50.5, 'OneParent': 30.5, 'Family': 50.75}
      },
      accidentWithWellness2Pricing: {
        name: 'Accident 2',
        "18-69": { "Individual": 17.95, "IndividualAndSpouse": 35, "OneParent": 35.25, "Family": 54.80 }
      },
      cancerPlus1: {
        name: 'Cancer Plus 1',
        "18-29": { "Individual": 12.54, "IndividualAndSpouse": 27.36, "OneParent": 14.83, "Family": 27.36 },
        "30-39": { "Individual": 21.99, "IndividualAndSpouse": 46.28, "OneParent": 24.28, "Family": 46.28 },
        "40-49": { "Individual": 40.95, "IndividualAndSpouse": 84.19, "OneParent": 43.23, "Family": 84.19 },
        "50-54": { "Individual": 68.31, "IndividualAndSpouse": 138.90, "OneParent": 70.59, "Family": 138.90 },
        "55-69": { "Individual": 82.76, "IndividualAndSpouse": 167.83, "OneParent": 85.06, "Family": 167.83 },
      }
    },
    TX: {
      cancerPackagePricing: {
        name: 'Cancer Package',
        "20-24": { "Individual":1, "IndividualAndSpouse": 1, "OneParent": 4.25, "Family": 1 },
        "25-29": { "Individual": 1, "IndividualAndSpouse": 1, "OneParent": 1, "Family": 1 },
        "30-34": { "Individual": 5, "IndividualAndSpouse": 8.25, "OneParent": 5.5, "Family": 9 },
        "35-39": { "Individual": 5.75, "IndividualAndSpouse": 9.5, "OneParent": 6.5, "Family": 10.25 },
        "40-44": { "Individual": 6.75, "IndividualAndSpouse": 11.25, "OneParent": 7.5, "Family": 12 },
        "45-49": { "Individual": 7.75, "IndividualAndSpouse": 13, "OneParent": 8.5, "Family": 1 },
        "50-54": { "Individual": 9, "IndividualAndSpouse": 15, "OneParent": 9.5, "Family": 15.75 },
        "55-59": { "Individual": 10.25, "IndividualAndSpouse": 17, "OneParent": 10.75, "Family": 17.5 },
        "60-64": { "Individual": 11.5, "IndividualAndSpouse": 19.25, "OneParent": 11.75, "Family": 19.5 },
        "65-69": { "Individual": 12.75, "IndividualAndSpouse": 21.25, "OneParent": 13, "Family": 21.5 },
        "70-74": { "Individual": 1, "IndividualAndSpouse": 23, "OneParent": 14, "Family": 23.25 },
        "75-79": { "Individual": 14.5, "IndividualAndSpouse": 24.25, "OneParent": 14.75, "Family": 24.75 },
        "80-84": { "Individual": 14.75, "IndividualAndSpouse": 24.5, "OneParent": 15, "Family": 24.75 }
      },
      heartStrokePackagePricing: {
        name: 'Heart & Stroke Package',
        "20-24": { "Individual":1, "IndividualAndSpouse": 1, "OneParent": 4.25, "Family": 1 },
        "25-29": { "Individual": 1, "IndividualAndSpouse": 1, "OneParent": 1, "Family": 1 },
        "30-34": { "Individual": 1, "IndividualAndSpouse": 8.25, "OneParent": 5.5, "Family": 9 },
        "35-39": { "Individual": 5.75, "IndividualAndSpouse": 9.5, "OneParent": 6.5, "Family": 10.25 },
        "40-44": { "Individual": 6.75, "IndividualAndSpouse": 11.25, "OneParent": 7.5, "Family": 12 },
        "45-49": { "Individual": 7.75, "IndividualAndSpouse": 13, "OneParent": 8.5, "Family": 1 },
        "50-54": { "Individual": 9, "IndividualAndSpouse": 15, "OneParent": 9.5, "Family": 15.75 },
        "55-59": { "Individual": 10.25, "IndividualAndSpouse": 17, "OneParent": 10.75, "Family": 17.5 },
        "60-64": { "Individual": 11.5, "IndividualAndSpouse": 19.25, "OneParent": 11.75, "Family": 19.5 },
        "65-69": { "Individual": 12.75, "IndividualAndSpouse": 21.25, "OneParent": 13, "Family": 21.5 },
        "70-74": { "Individual": 1, "IndividualAndSpouse": 23, "OneParent": 14, "Family": 23.25 },
        "75-79": { "Individual": 14.5, "IndividualAndSpouse": 24.25, "OneParent": 14.75, "Family": 24.75 },
        "80-84": { "Individual": 14.75, "IndividualAndSpouse": 24.5, "OneParent": 15, "Family": 24.75 }
      },
      accidentWithWellness2Pricing: {
        name: 'Accident 2',
        "18-69": { "Individual": 1, "IndividualAndSpouse": 35, "OneParent": 35.25, "Family": 54.80 }

      },
    }
  };

export {
  packagePolicies,
  stateBasedPricing
}