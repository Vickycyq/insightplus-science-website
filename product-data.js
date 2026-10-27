/* Product catalog content. Edit images, descriptions and specifications here. */
const productCatalog = [
  {
    id: 'disposable-petri-dish',
    type: 'product',
    name: 'Disposable Petri Dish',
    category: 'Microbiology Labware',
    shortDescription: 'Sterile PS petri dishes for microbiology, cell culture, CRO labs & high-throughput screening. Vented lid, divided & grid options available, OEM bulk supply.',
    description: 'Sterile PS petri dishes for microbiology, cell culture, CRO labs & high-throughput screening. Vented lid, divided & grid options available, OEM bulk supply.',
    image: 'assets/disposable-petri-dish.png',
    specGroups: [
      {
        title: 'Round Petri Dishes',
        headers: ['Configuration', 'Size', 'Overall Height', 'Base Height', 'Base Diameter', 'Lid Diameter', 'Packing'],
        footer: ['Material: Polystyrene (PS)', 'Sterilization Method: Ethylene Oxide (EO) Sterilization'],
        rows: [
          ['Undivided', '35 × 12 mm', '12 mm', '10.5 mm', '35.7 mm', '39 mm', '10 pcs/bag, 200 pcs/ctn'],
          ['Undivided', '60 × 13.8 mm', '13.8 mm', '12.8 mm', '56.4 mm', '59.2 mm', '10 pcs/bag, 1,000 pcs/ctn'],
          ['Undivided', '90 × 15 mm', '15 mm', '13.1 mm', '86.4 mm', '88.4 mm', '10 pcs/bag, 500 pcs/ctn'],
          ['Undivided', '100 × 16.8 mm', '16.8 mm', '15.4 mm', '94 mm', '98.3 mm', '10 pcs/bag, 500 pcs/ctn'],
          ['Undivided', '120 × 20.9 mm', '20.9 mm', '19.4 mm', '115 mm', '119 mm', '10 pcs/bag, 500 pcs/ctn'],
          ['Undivided', '150 × 16 mm', '16 mm', '14.3 mm', '143 mm', '147 mm', '10 pcs/bag, 500 pcs/ctn'],
          ['2 compartments', '90 × 15 mm', '15 mm', '13 mm', '86 mm', '88.9 mm', '10 pcs/bag, 500 pcs/ctn'],
          ['3 compartments', '90 × 15 mm', '15 mm', '12.8 mm', '86.3 mm', '88.6 mm', '10 pcs/bag, 500 pcs/ctn'],
          ['4 compartments', '90 × 15 mm', '15 mm', '13 mm', '85.8 mm', '88.9 mm', '10 pcs/bag, 500 pcs/ctn']
        ]
      },
      {
        title: 'Square Petri Dishes',
        headers: ['Grid Pattern', 'Size', 'Overall Height', 'Base Height', 'Base Dimensions', 'Lid Dimensions', 'Packing'],
        footer: ['Material: Polystyrene (PS)', 'Sterilization Method: Ethylene Oxide (EO) Sterilization', 'All dimensions are manually measured and may have slight deviations.'],
        rows: [
          ['No grid lines', '10 × 10 cm', '15 mm', '13 mm', '100 × 100 mm', '103 × 103 mm', '10 pcs/bag, 500 pcs/ctn'],
          ['With grid lines', '10 × 10 cm', '15 mm', '13 mm', '100 × 100 mm', '103 × 103 mm', '10 pcs/bag, 500 pcs/ctn'],
          ['No grid lines', '13 × 13 cm', '16 mm', '15 mm', '125 × 125 mm', '130 × 130 mm', '10 pcs/bag, 300 pcs/ctn'],
          ['No grid lines', '25 × 25 cm', '10 mm', '17 mm', '230 × 230 mm', '240 × 240 mm', '1 pc/bag, 40 pcs/ctn']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'disposable-sterile-plastic-inoculating-loops',
    type: 'product',
    name: 'Disposable Sterile Plastic Inoculating Loops',
    category: 'Microbiology Labware',
    shortDescription: 'Inoculating loops are widely used laboratory consumables in life science research, commonly utilized for microbiological testing, cellular microbiology, molecular biology and a range of other laboratory applications.',
    description: 'Inoculating loops are widely used laboratory consumables in life science research, commonly utilized for microbiological testing, cellular microbiology, molecular biology and a range of other laboratory applications.',
    image: 'assets/disposable-inoculating-loops.png',
    specGroups: [
      {
        title: 'Nickel-Chromium Alloy Inoculating Loops',
        headers: ['Size'],
        rows: [['1 mm'], ['2 mm'], ['3 mm'], ['4 mm'], ['5 mm']]
      },
      {
        title: 'Polystyrene Inoculating Loops',
        headers: ['Volume', 'Packing', 'Carton Quantity'],
        rows: [
          ['1 μL', '100 pcs/bag', '5,000 pcs/ctn'],
          ['10 μL', '100 pcs/bag', '5,000 pcs/ctn']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'disposable-sterile-cell-spreader',
    type: 'product',
    name: 'Disposable Sterile Cell Spreader / Plate Spreader',
    category: 'Microbiology Labware',
    shortDescription: 'Sterile plastic plate spreaders for spreading bacterial suspension on agar plates, ideal for food safety, water testing and CRO microbiology laboratories, no flaming required.',
    description: 'Sterile plastic plate spreaders for spreading bacterial suspension on agar plates, ideal for food safety, water testing and CRO microbiology laboratories, no flaming required.',
    image: 'assets/disposable-cell-spreader.png',
    specGroups: [
      {
        title: 'Product Specifications',
        headers: ['Product Type', 'Material', 'Shape', 'Handle Length', 'Spreading Edge Length', 'Overall Length', 'Packaging'],
        footer: ['Dimensions are manually measured and for reference only; slight measurement deviations may occur.'],
        rows: [
          ['Cell Spreader', 'Plastic', 'L-shaped', '140 mm', '30 mm', 'Not specified', '100 pcs/bag (individually wrapped)'],
          ['Cell Spreader', 'Glass', 'L-shaped', '190 mm', '44 mm', 'Not specified', 'Not specified'],
          ['Cell Spreader', 'Glass', 'Triangular', '163 mm', '36 mm', '188 mm', 'Not specified'],
          ['Cell Spreader', 'Stainless steel', 'Triangular', '205 mm', '31 mm', '220 mm', 'Not specified']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'stomacher-bag',
    type: 'product',
    name: 'Stomacher Bag',
    category: 'Microbiology Labware',
    shortDescription: 'Sterile homogenizing stomacher bags 80ml / 400ml / 3500ml, filter blender bags separate solid residues automatically, ideal for food safety testing, CRO microbiology lab.',
    description: 'Sterile homogenizing stomacher bags 80ml / 400ml / 3500ml, filter blender bags separate solid residues automatically, ideal for food safety testing, CRO microbiology lab.',
    image: 'assets/stomacher-bag.png',
    specGroups: [
      {
        title: 'Product Specifications',
        headers: ['Size', 'Bag Type', 'Sterilization', 'Maximum Liquid Capacity', 'Packing'],
        footer: ['Dimensions are manually measured and for reference only; slight measurement deviations may occur.'],
        rows: [
          ['12 × 11 cm', 'With press-seal strip', 'Ethylene Oxide (EO)', '100 mL', '100 pcs/bag (individually packed)'],
          ['12 × 18 cm', 'With press-seal strip', 'Ethylene Oxide (EO)', '200 mL', '100 pcs/bag'],
          ['40 × 50 cm', 'With press-seal strip', 'Ethylene Oxide (EO)', '9 L', '50 pcs/bag'],
          ['50 × 40 cm', 'With press-seal strip', 'Ethylene Oxide (EO)', '9 L', '50 pcs/bag'],
          ['45 × 55 cm', 'With press-seal strip', 'Ethylene Oxide (EO)', '12 L', '50 pcs/bag'],
          ['20 × 22 cm', 'Stand-up bag with press-seal strip', 'Ethylene Oxide (EO)', '1 L', '100 pcs/bag'],
          ['20 × 27 cm', 'Stand-up bag with press-seal strip', 'Ethylene Oxide (EO)', '1.5 L', '100 pcs/bag'],
          ['20 × 32 cm', 'Stand-up bag with press-seal strip', 'Ethylene Oxide (EO)', '2 L', '100 pcs/bag'],
          ['25 × 32 cm', 'Stand-up bag with press-seal strip', 'Ethylene Oxide (EO)', '2.5 L', '50 pcs/bag'],
          ['25 × 40 cm', 'Stand-up bag with press-seal strip', 'Ethylene Oxide (EO)', '4 L', '50 pcs/bag'],
          ['30 × 40 cm', 'Stand-up bag with press-seal strip', 'Ethylene Oxide (EO)', '5.5 L', '50 pcs/bag'],
          ['35 × 40 cm', 'Stand-up bag with press-seal strip', 'Ethylene Oxide (EO)', '6.5 L', '50 pcs/bag']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'conical-tubes',
    type: 'product',
    name: 'Conical Tubes',
    category: 'Microbiology Labware',
    shortDescription: 'Sterile PP centrifuge tubes, 1.5ml,15ml,50ml, screw cap & snap cap, RNase DNase free for microbiology testing, molecular biology and CRO laboratories.',
    description: 'Sterile PP centrifuge tubes, 1.5ml,15ml,50ml, screw cap & snap cap, RNase DNase free for microbiology testing, molecular biology and CRO laboratories.',
    image: 'assets/conical-tubes.png',
    specGroups: [
      {
        title: 'Product Specifications',
        headers: ['Cap Type', 'Capacity', 'Packing', 'Tube Color', 'Material'],
        rows: [
          ['Snap cap', '0.5 mL', '500 pcs/bag', 'Transparent', 'Polypropylene (PP)'],
          ['Snap cap', '1.5 mL', '500 pcs/bag', 'Transparent', 'Polypropylene (PP)'],
          ['Snap cap', '2 mL', '500 pcs/bag', 'Transparent', 'Polypropylene (PP)'],
          ['Snap cap', '5 mL', '100 pcs/bag', 'Transparent', 'Polypropylene (PP)'],
          ['Screw cap', '5 mL', '50 pcs/bag', 'Transparent', 'Polypropylene (PP)'],
          ['Screw cap', '10 mL', '50 pcs/bag', 'Transparent', 'Polypropylene (PP)'],
          ['Screw cap', '15 mL', '50 pcs/bag', 'Transparent', 'Polypropylene (PP)'],
          ['Screw cap', '50 mL', '25 pcs/bag', 'Transparent', 'Polypropylene (PP)'],
          ['Screw cap', '15 mL', '50 pcs/bag', 'Amber', 'Polypropylene (PP)'],
          ['Screw cap', '50 mL', '25 pcs/bag', 'Amber', 'Polypropylene (PP)']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'serological-pipette',
    type: 'product',
    name: 'Serological Pipette',
    category: 'Microbiology Labware',
    shortDescription: 'Disposable polystyrene serological pipettes with cotton plug & color code, RNase DNase free, ideal for cell culture, media preparation and CRO laboratory liquid handling.',
    description: 'Disposable polystyrene serological pipettes with cotton plug & color code, RNase DNase free, ideal for cell culture, media preparation and CRO laboratory liquid handling.',
    image: 'assets/serological-pipette.png',
    specGroups: [
      {
        title: 'Product Specifications',
        headers: ['Capacity', 'Length', 'Upper-End Outer Diameter', 'Tip Outer Diameter', 'Graduation', 'Body Diameter', 'Material', 'Packing', 'Carton Quantity'],
        footer: ['Dimensions are manually measured and for reference only; slight measurement deviations may occur.'],
        rows: [
          ['1 mL', '277 mm', '5.2 mm', '2.4 mm', '0.01 mL', '5.1 mm', 'Polystyrene (PS)', '50 pcs/bag', '1,000 pcs/ctn'],
          ['2 mL', '277 mm', '5.2 mm', '2.4 mm', '0.01 mL', '5.2 mm', 'Polystyrene (PS)', '50 pcs/bag', '1,000 pcs/ctn'],
          ['5 mL', '341 mm', '8 mm', '3.1 mm', '0.1 mL', '8 mm', 'Polystyrene (PS)', '50 pcs/bag', '500 pcs/ctn'],
          ['10 mL', '345 mm', '7.8 mm', '3.5 mm', '0.1 mL', '9.7 mm', 'Polystyrene (PS)', '50 pcs/bag', '500 pcs/ctn'],
          ['25 mL', '345 mm', '7.8 mm', '3.4 mm', '0.1 mL', '14 mm', 'Polystyrene (PS)', '25 pcs/bag', '250 pcs/ctn'],
          ['50 mL', '341 mm', '8.3 mm', '5.4 mm', '0.5 mL', '18 mm', 'Polystyrene (PS)', '25 pcs/bag', '200 pcs/ctn'],
          ['100 mL', '350 mm', '8.3 mm', '5.4 mm', '1 mL', '24.5 mm', 'Polystyrene (PS)', '10 pcs/bag', '100 pcs/ctn']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'transfer-pipette',
    type: 'product',
    name: 'Transfer Pipette',
    category: 'Microbiology Labware',
    shortDescription: 'Sterile plastic transfer pipettes with integrated bulb, graduated optional, easy liquid transfer for food testing, CRO, microbiology and cell culture labs.',
    description: 'Sterile plastic transfer pipettes with integrated bulb, graduated optional, easy liquid transfer for food testing, CRO, microbiology and cell culture labs.',
    image: 'assets/transfer-pipette.png',
    specGroups: [
      {
        title: 'Product Specifications',
        headers: ['Capacity', 'Material'],
        rows: [
          ['0.1 mL', 'Low-Density Polyethylene (LDPE)'],
          ['0.2 mL', 'Low-Density Polyethylene (LDPE)'],
          ['0.3 mL', 'Low-Density Polyethylene (LDPE)'],
          ['0.5 mL', 'Low-Density Polyethylene (LDPE)'],
          ['1 mL', 'Low-Density Polyethylene (LDPE)'],
          ['2 mL', 'Low-Density Polyethylene (LDPE)'],
          ['3 mL', 'Low-Density Polyethylene (LDPE)'],
          ['5 mL', 'Low-Density Polyethylene (LDPE)'],
          ['10 mL', 'Low-Density Polyethylene (LDPE)']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'plastic-test-tubes',
    type: 'product',
    name: 'Plastic Test Tubes',
    category: 'Microbiology Labware',
    shortDescription: 'Sterile round bottom plastic test tubes 12×75mm,13×100mm,16×100mm, ideal for microbial culture, biochemical test and CRO laboratories.',
    description: 'Sterile round bottom plastic test tubes 12×75mm,13×100mm,16×100mm, ideal for microbial culture, biochemical test and CRO laboratories.',
    image: 'assets/plastic-test-tubes.png',
    specGroups: [
      {
        title: 'Product Specifications',
        headers: ['Size', 'Packing', 'Material'],
        rows: [
          ['10 × 75 mm', '500 pcs/box', 'Polyethylene (PE)'],
          ['10 × 100 mm', '500 pcs/box', 'Polyethylene (PE)'],
          ['12 × 75 mm', '500 pcs/box', 'Polyethylene (PE)'],
          ['12 × 100 mm', '500 pcs/box', 'Polyethylene (PE)'],
          ['15 × 100 mm', '300 pcs/box', 'Polyethylene (PE)']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'mixed-cellulose-esters-cn-ca',
    type: 'product',
    name: 'Mixed Cellulose Esters, CN-CA',
    category: 'Microbiology Labware',
    shortDescription: 'Sterile gridded MCE membrane filters 0.22 μm and 0.45 μm, reusable autoclavable plastic filter funnels for membrane filtration, water quality and beverage microbial testing.',
    description: 'Sterile gridded MCE membrane filters 0.22 μm and 0.45 μm, reusable autoclavable plastic filter funnels for membrane filtration, water quality and beverage microbial testing.',
    image: 'assets/mce-membrane-filters.png',
    specGroups: [
      {
        title: 'Product Specifications',
        headers: ['Diameter', 'Pore Size'],
        rows: [
          ['50 mm', '0.22 μm'],
          ['50 mm', '0.45 μm'],
          ['60 mm', '0.22 μm'],
          ['60 mm', '0.45 μm']
        ]
      }
    ],
    specs: []
  },
  {
    id: '96well-384well-pcr-qpcr-plate',
    type: 'product',
    name: '96well/384well PCR/QPCR Plate',
    category: 'Molecular Biology Labware',
    shortDescription: 'RNase DNase free polypropylene PCR plates, clear & white options, compatible with thermal cyclers, ideal for molecular biology, CRO and AIDD high-throughput screening.',
    description: 'RNase DNase free polypropylene PCR plates, clear & white options, compatible with thermal cyclers, ideal for molecular biology, CRO and AIDD high-throughput screening.',
    image: 'assets/pcr-plate-96-well.png',
    gallery: ['assets/pcr-plate-96-well.png', 'assets/pcr-plate-384-well.png'],
    specGroups: [
      {
        title: 'PCR Plates',
        headers: ['Well Format', 'Volume', 'Skirt Style', 'Color', 'Packing', 'Carton Quantity'],
        footer: ['Material: Polypropylene (PP)'],
        rows: [
          ['96-well', '0.1 mL', 'Non-skirted', 'Clear / White', '15 pcs/box', '150 pcs/ctn'],
          ['96-well', '0.1 mL', 'Semi-skirted', 'Clear / White', '15 pcs/box', '150 pcs/ctn'],
          ['96-well', '0.1 mL', 'Full-skirted', 'Clear / White', '15 pcs/box', '150 pcs/ctn'],
          ['96-well', '0.2 mL', 'Non-skirted', 'Clear / White', '15 pcs/box', '150 pcs/ctn'],
          ['96-well', '0.2 mL', 'Semi-skirted', 'Clear / White', '15 pcs/box', '150 pcs/ctn'],
          ['96-well', '0.2 mL', 'Full-skirted', 'Clear / White', '15 pcs/box', '150 pcs/ctn'],
          ['384-well', '25 μL', 'Full-skirted', 'Clear / White', '150 pcs/box', '50 pcs/ctn']
        ]
      },
      {
        title: 'QPCR Plates',
        headers: ['Well Format', 'Volume', 'Skirt Style', 'Color', 'Packing', 'Carton Quantity'],
        footer: ['Material: Polypropylene (PP)'],
        rows: [
          ['96-well', '0.1 mL', 'Semi-skirted', 'Clear / White', '15 pcs/box', '150 pcs/ctn'],
          ['96-well', '0.2 mL', 'Semi-skirted', 'Clear / White', '10 pcs/box', '100 pcs/ctn']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'microbiology-labware',
    type: 'category',
    name: 'Microbiology Labware',
    category: 'Microbiology Labware',
    shortDescription: 'Essential consumables for microbial culture, isolation, identification, and routine testing.',
    description: 'Essential consumables for microbial culture, isolation, identification, and routine testing. Product options can be selected to suit your laboratory workflow.',
    image: 'assets/microbiology-labware.png',
    specs: [['Product Category','Microbiology Labware'],['Key Workflows','Microbial culture, isolation and identification'],['Applications','Routine testing and related procedures'],['Product Options','Varies by item and workflow'],['Specifications','Available by selected product'],['Packaging','Varies by product']]
  },
  {
    id: '8-strip-pcr-tubes',
    type: 'product',
    name: '8-Strip PCR Tubes',
    category: 'Molecular Biology Labware',
    shortDescription: 'RNase DNase free 8 tube PCR strips, clear & white available, compatible with thermal cyclers, ideal for molecular lab and CRO qPCR testing.',
    description: 'RNase DNase free 8 tube PCR strips, clear & white available, compatible with thermal cyclers, ideal for molecular lab and CRO qPCR testing.',
    image: 'assets/pcr-tube-strips-clear.png',
    gallery: ['assets/pcr-tube-strips-clear.png', 'assets/pcr-tube-strips-white.png'],
    specGroups: [
      {
        title: 'Product Specifications',
        headers: ['Capacity', 'Color'],
        footer: ['Material: Polypropylene (PP)'],
        rows: [
          ['0.1 mL', 'Clear'],
          ['0.1 mL', 'White'],
          ['0.2 mL', 'Clear'],
          ['0.2 mL', 'White']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'cryovial-cryogenic-vial-cryo-tube',
    type: 'product',
    name: 'Cryovial / Cryogenic Vial / Cryo Tube',
    category: 'Molecular Biology Labware',
    shortDescription: 'RNase DNase free PP cryo tubes with silicone gasket, self-standing option, ideal for cell preservation, strain banking, CRO and biobank sample storage.',
    description: 'RNase DNase free PP cryo tubes with silicone gasket, self-standing option, ideal for cell preservation, strain banking, CRO and biobank sample storage.',
    image: 'assets/cryovial-main.png',
    gallery: ['assets/cryovial-main.png', 'assets/cryovial-1.png', 'assets/cryovial-replacement.jpg', 'assets/cryovial-4.png'],
    specGroups: [
      {
        title: 'Short-Cap Cryovials',
        headers: ['Item Number', 'Capacity', 'Lid Type', 'Bottom Shape', 'Scale', 'Packaging Specifications'],
        footer: ['Material: Polypropylene (PP)'],
        rows: [
          ['FT-05-01', '0.5 mL', 'Short cap', 'Pointed bottom; self-standing', 'None', '500 pcs/pack; 20 packs/box'],
          ['FT-05-02', '0.5 mL', 'Short cap with continuous cap strip', 'Pointed bottom; self-standing', 'None', '500 pcs/pack; 20 packs/box'],
          ['FT-10-01', '1.0 mL', 'Short cap', 'Conical base; self-standing', 'None', '500 pcs/pack; 20 packs/box'],
          ['FT-15-01', '1.5 mL', 'Short cap', 'Pointed bottom', 'None', '500 pcs/pack; 20 packs/box'],
          ['FT-15-02', '1.5 mL', 'Short cap with continuous cap strip', 'Pointed bottom', 'None', '500 pcs/pack; 20 packs/box'],
          ['FT-15-03', '1.5 mL', 'Short cap', 'Pointed bottom; self-standing', 'None', '500 pcs/pack; 20 packs/box'],
          ['FT-15-04', '1.5 mL', 'Short cap with continuous cap strip', 'Pointed bottom; self-standing', 'None', '500 pcs/pack; 20 packs/box'],
          ['FT-20-12', '2.0 mL', 'Short cap', 'Conical base', 'None', '500 pcs/pack; 20 packs/box'],
          ['FT-20-13', '2.0 mL', 'Short cap with continuous cap strip', 'Conical base', 'None', '500 pcs/pack; 20 packs/box'],
          ['FT-20-02', '2.0 mL', 'Short cap', 'Conical base; self-standing', 'None', '500 pcs/pack; 20 packs/box'],
          ['FT-20-03', '2.0 mL', 'Short cap with continuous cap strip', 'Conical base; self-standing', 'None', '500 pcs/pack; 20 packs/box'],
          ['FT-20-02-P', '2.0 mL', 'Short cap', 'Conical base; self-standing', 'Printed scale', '500 pcs/pack; 20 packs/box'],
          ['FT-20-02-M', '2.0 mL', 'Short cap', 'Conical base; self-standing', 'Molded scale', '500 pcs/pack; 20 packs/box']
        ]
      },
      {
        title: 'Outer-Rotating Cap Cryovials',
        headers: ['Item Number', 'Capacity', 'Lid Type', 'Bottom Shape', 'Sealing Ring', 'Scale', 'Packaging Specifications'],
        footer: ['Material: Polypropylene (PP)'],
        rows: [
          ['FT-20-01', '2 mL', 'Outer-rotating cap', 'Conical base; self-standing', 'Present', 'Printed scale', '500 pcs/pack; 20 packs/box'],
          ['FT-50-09', '5 mL', 'Outer-rotating cap', 'Pointed bottom', 'None', 'Molded scale', '200 pcs/pack; 20 packs/box'],
          ['FT-50-01', '5 mL', 'Outer-rotating cap', 'Conical base; self-standing', 'Present', 'Molded scale', '200 pcs/pack; 20 packs/box'],
          ['FT-70-01', '7 mL', 'Outer-rotating cap', 'Pointed bottom; self-standing', 'Present', 'None', '200 pcs/pack; 20 packs/box'],
          ['FT-100-01', '10 mL', 'Outer-rotating cap', 'Conical base; self-standing', 'Present', 'Molded scale', '100 pcs/pack; 20 packs/box']
        ]
      },
      {
        title: 'High-Cap Cryovials',
        headers: ['Item Number', 'Capacity', 'Lid Type', 'Bottom Shape', 'Scale', 'Color', 'Packaging Specifications'],
        footer: ['Material: Polypropylene (PP)'],
        rows: [
          ['FT-05-31', '0.5 mL', 'High cap', 'Conical base; self-standing', 'Printed scale', 'Transparent', '500 pcs/pack; 20 packs/box'],
          ['FT-15-31', '1.5 mL', 'High cap', 'Conical base; self-standing', 'Printed scale', 'Transparent', '500 pcs/pack; 20 packs/box'],
          ['FT-10-03', '1.0 mL', 'High cap', 'Conical base', 'None', 'Transparent', '500 pcs/pack; 20 packs/box'],
          ['FT-10-04', '1.0 mL', 'High cap', 'Conical base; self-standing', 'None', 'Transparent', '500 pcs/pack; 20 packs/box'],
          ['FT-15-07', '1.5 mL', 'High cap', 'Pointed bottom; self-standing', 'None', 'Transparent', '500 pcs/pack; 20 packs/box'],
          ['FT-15-08', '1.5 mL', 'High cap', 'Pointed bottom', 'None', 'Transparent', '500 pcs/pack; 20 packs/box'],
          ['FT-20-04', '2.0 mL', 'High cap', 'Conical base; self-standing', 'None', 'Transparent', '500 pcs/pack; 20 packs/box'],
          ['FT-20-05', '2.0 mL', 'High cap', 'Conical base; self-standing', 'None', 'Transparent', '500 pcs/pack; 20 packs/box'],
          ['FT-20-06', '2.0 mL', 'High cap', 'Conical base; self-standing', 'Printed scale', 'Transparent', '500 pcs/pack; 20 packs/box'],
          ['FT-20-05-Z', '2.0 mL', 'High cap', 'Conical base; self-standing', 'None', 'Brown', '500 pcs/pack; 20 packs/box']
        ]
      },
      {
        title: 'External- and Internal-Rotation Cryovials',
        headers: ['Item Number', 'Capacity', 'Lid Type', 'Bottom Shape', 'Scale', 'Packaging Specifications'],
        footer: ['Material: Polypropylene (PP)'],
        rows: [
          ['FT-10-07', '1 mL', 'External-rotation cap', 'Conical base; self-standing', 'Printed scale', '100 pcs/pack; 20 packs/box'],
          ['FT-10-08', '1 mL', 'Internal-rotation cap', 'Conical base; self-standing', 'Printed scale', '100 pcs/pack; 20 packs/box'],
          ['FT-20-07', '2 mL', 'External-rotation cap', 'Round bottom; self-standing', 'Printed scale', '100 pcs/pack; 20 packs/box'],
          ['FT-20-08', '2 mL', 'Internal-rotation cap', 'Round bottom; self-standing', 'Printed scale', '100 pcs/pack; 20 packs/box'],
          ['FT-30-07', '3 mL', 'External-rotation cap', 'Round bottom; self-standing', 'Printed scale', '100 pcs/pack; 20 packs/box'],
          ['FT-30-08', '3 mL', 'Internal-rotation cap', 'Round bottom; self-standing', 'Printed scale', '100 pcs/pack; 20 packs/box'],
          ['FT-40-07', '4 mL', 'External-rotation cap', 'Round bottom; self-standing', 'Printed scale', '100 pcs/pack; 20 packs/box'],
          ['FT-40-08', '4 mL', 'Internal-rotation cap', 'Round bottom; self-standing', 'Printed scale', '100 pcs/pack; 20 packs/box'],
          ['FT-50-07', '5 mL', 'External-rotation cap', 'Round bottom; self-standing', 'Printed scale', '100 pcs/pack; 20 packs/box'],
          ['FT-50-08', '5 mL', 'Internal-rotation cap', 'Round bottom; self-standing', 'Printed scale', '100 pcs/pack; 20 packs/box']
        ]
      },
      {
        title: 'Stand-Up Round-Bottom Cryovials',
        headers: ['Item Number', 'Capacity', 'Lid Type', 'Bottom Shape', 'Scale', 'Packaging Specifications'],
        footer: ['Material: Polypropylene (PP)'],
        rows: [
          ['FT-20-0709', '2 mL', 'Outer-rotating cap', 'Round bottom; self-standing', 'Printed scale', '100 pcs/pack; 20 packs/box'],
          ['FT-50-0709', '5 mL', 'Outer-rotating cap', 'Round bottom; self-standing', 'Printed scale', '50 pcs/pack; 20 packs/box']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'cover-glass-microscope-slide',
    type: 'product',
    name: 'Cover Glass & Microscope Slide',
    category: 'Molecular Biology Labware',
    shortDescription: 'Optical glass microscope slides and coverslips, pre-cleaned, frosted & positively charged options, ideal for microbial staining, IHC, fluorescence microscopy and CRO labs.',
    description: 'Optical glass microscope slides and coverslips, pre-cleaned, frosted & positively charged options, ideal for microbial staining, IHC, fluorescence microscopy and CRO labs.',
    image: 'assets/cover-glass-square.png',
    gallery: ['assets/cover-glass-square.png', 'assets/cover-glass-rectangular.png', 'assets/microscope-slides.png'],
    specGroups: [
      {
        title: 'Square Cover Glass',
        headers: ['Size'],
        rows: [['18 × 18 mm'], ['20 × 20 mm'], ['22 × 22 mm'], ['24 × 24 mm']]
      },
      {
        title: 'Rectangular Cover Glass',
        headers: ['Size'],
        rows: [['24 × 32 mm'], ['24 × 40 mm'], ['24 × 46 mm'], ['24 × 50 mm'], ['24 × 60 mm']]
      },
      {
        title: 'Microscope Slides',
        headers: ['Surface Finish', 'Dimensions', 'Thickness', 'Packing'],
        rows: [
          ['Clear (plain)', '25.4 × 76.2 mm', '1.0–1.2 mm', '50 pcs/box'],
          ['Frosted', '25.4 × 76.2 mm', '1.0–1.2 mm', '50 pcs/box']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'multifunctional-tube-rack',
    type: 'product',
    name: 'Multifunctional Tube Rack',
    category: 'Molecular Biology Labware',
    shortDescription: 'Autoclavable PS multifunctional tube rack, compatible with PCR strips, microtubes, cryovials, 15ml & 50ml conical tubes, ideal for microbiology and molecular CRO labs.',
    description: 'Autoclavable PS multifunctional tube rack, compatible with PCR strips, microtubes, cryovials, 15ml & 50ml conical tubes, ideal for microbiology and molecular CRO labs.',
    image: 'assets/multifunctional-tube-rack.png',
    specGroups: [
      {
        title: 'Product Specifications',
        headers: ['Feature', 'Specification'],
        rows: [
          ['Dimensions (L × W × H)', '250 × 130 × 50 mm'],
          ['Available Colors', 'Orange, blue, green, purple, and pink'],
          ['Hole Count', '50'],
          ['Compatible Tube Diameter', '18–22 mm'],
          ['Material', 'Polystyrene (PS)'],
          ['Autoclavable', 'Yes']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'universal-pipette-tips-filtered-non-filtered',
    type: 'product',
    name: 'Universal Pipette Tips, Filtered / Non-Filtered',
    category: 'Molecular Biology Labware',
    shortDescription: 'PP universal pipette tips, aerosol filter barrier option, bulk & rack packed, ideal for PCR, nucleic acid assay, CRO and high-throughput screening.',
    description: 'PP universal pipette tips, aerosol filter barrier option, bulk & rack packed, ideal for PCR, nucleic acid assay, CRO and high-throughput screening.',
    image: 'assets/universal-pipette-tips.png',
    specGroups: [
      {
        title: 'Non-Filtered Pipette Tips',
        headers: ['Capacity', 'Sterility', 'Packaging Options'],
        footer: ['Tip material: Polypropylene (PP)'],
        rows: [
          ['10 μL', 'Non-sterile', '200 pcs/bag; 1,000 pcs/bag'],
          ['200 μL', 'Non-sterile', '200 pcs/bag; 1,000 pcs/bag'],
          ['300 μL', 'Non-sterile', '200 pcs/bag; 1,000 pcs/bag'],
          ['1,000 μL (1 mL)', 'Non-sterile', '100 pcs/bag; 500 pcs/bag'],
          ['5 mL', 'Non-sterile', '20 pcs/bag; 300 pcs/bag'],
          ['10 mL', 'Non-sterile', '5 pcs/bag; 100 pcs/bag'],
          ['1 mL', 'Sterile', '96 pcs/box; 1,000 pcs/bag'],
          ['5 mL', 'Sterile', '24 pcs/box; 100 pcs/bag'],
          ['10 mL', 'Sterile', '24 pcs/box; 100 pcs/bag']
        ]
      },
      {
        title: 'Filtered Pipette Tips',
        headers: ['Capacity', 'Style', 'Sterility', 'Packaging Options'],
        footer: ['Tip material: Polypropylene (PP)', 'Filter material: Polyethylene (PE)'],
        rows: [
          ['10 μL', 'Standard', 'Non-sterile', '96 pcs/box; 1,000 pcs/bag'],
          ['200 μL', 'Standard', 'Non-sterile', '96 pcs/box; 1,000 pcs/bag'],
          ['1 mL', 'Standard', 'Non-sterile', '100 pcs/box; 500 pcs/bag'],
          ['5 mL', 'Standard', 'Non-sterile', '28 pcs/box; 150 pcs/bag'],
          ['10 μL', 'Extended-length', 'Non-sterile', '96 pcs/box; 1,000 pcs/bag'],
          ['200 μL', 'Extended-length', 'Non-sterile', '96 pcs/box; 1,000 pcs/bag'],
          ['1 mL', 'Extended-length', 'Non-sterile', '96 pcs/box; 500 pcs/bag'],
          ['10 μL', 'Standard', 'Sterile', '96 pcs/box; 1,000 pcs/bag'],
          ['200 μL', 'Standard', 'Sterile', '96 pcs/box; 1,000 pcs/bag'],
          ['300 μL', 'Standard', 'Sterile', '96 pcs/box; 1,000 pcs/bag'],
          ['1 mL', 'Standard', 'Sterile', '96 pcs/box; 1,000 pcs/bag'],
          ['5 mL', 'Standard', 'Sterile', '24 pcs/box; 100 pcs/bag'],
          ['10 mL', 'Standard', 'Sterile', '24 pcs/box; 100 pcs/bag']
        ]
      },
      {
        title: 'Tip Dimensions',
        headers: ['Tip Type', 'Capacity', 'Orifice Diameter', 'Length'],
        rows: [
          ['Non-filtered', '10 μL', '3.3 mm', '3.5 mm'],
          ['Non-filtered', '200 μL', '5.5 mm', '50 mm'],
          ['Non-filtered', '300 μL', '5.3 mm', '52 mm'],
          ['Non-filtered', '1,000 μL (1 mL)', '7.5 mm', '71 mm'],
          ['Non-filtered', '5 mL', '13 mm', '146 mm'],
          ['Non-filtered', '10 mL', '14.5 mm', '160 mm'],
          ['Filtered', '10 μL', '5 mm', '32 mm'],
          ['Filtered, extended-length', '10 μL', '5 mm', '49 mm'],
          ['Filtered', '200 μL', '5.5 mm', '50 mm'],
          ['Filtered, extended-length', '200 μL', '6 mm', '90 mm'],
          ['Filtered', '1 mL', '8 mm', '71 mm'],
          ['Filtered, extended-length', '1 mL', '8 mm', '101 mm'],
          ['Filtered', '5 mL', '13 mm', '145 mm']
        ]
      },
      {
        title: 'Pipette Compatibility',
        headers: ['Compatible Pipette Brands'],
        rows: [['Eppendorf, Thermo Fisher, BRAND, Gilson, Sartorius Biohit, Thermo Fisher Finnpipette, and DragonLab']]
      }
    ],
    specs: []
  },
  {
    id: 'cryo-box-cryogenic-storage-box',
    type: 'product',
    name: 'Cryo Box / Cryogenic Storage Box',
    category: 'Molecular Biology Labware',
    shortDescription: 'Reusable PP & PC cryo storage boxes with alphanumeric grid, autoclavable, compatible with 2ml cryovials, ideal for biobank, cell preservation and CRO sample archiving.',
    description: 'Reusable PP & PC cryo storage boxes with alphanumeric grid, autoclavable, compatible with 2ml cryovials, ideal for biobank, cell preservation and CRO sample archiving.',
    image: 'assets/cryo-box-overview.png',
    gallery: [
      'assets/cryo-box-overview.png',
      'assets/cryo-box-pp-1.png',
      'assets/cryo-box-pp-2.png',
      'assets/cryo-box-pp-3.png',
      'assets/cryo-box-pc-1.png',
      'assets/cryo-box-pc-2.png',
      'assets/cryo-box-pc-4.png'
    ],
    specGroups: [
      {
        title: 'PP Cryogenic Storage Boxes',
        headers: ['Grid Capacity', 'Compatible Vial Capacity', 'Style', 'Dimensions (L × W × H)'],
        footer: ['Material: Polypropylene (PP)', 'Autoclavable'],
        rows: [
          ['81 places', '2 mL', 'Standard', '131 × 131 × 52 mm'],
          ['100 places', 'Not specified', 'Column-style', '133 × 133 × 53 mm'],
          ['100 places', 'Not specified', 'Standard', '143 × 143 × 53 mm']
        ]
      },
      {
        title: 'PC Cryogenic Storage Boxes',
        headers: ['Grid Capacity', 'Compatible Vial Capacity', 'Available Colors', 'Dimensions (L × W × H)', 'Well Diameter'],
        footer: ['Material: Polycarbonate (PC)', 'Autoclavable'],
        rows: [
          ['25 places', '2 mL', 'Red, yellow, blue, and green', '75.5 × 75.5 × 52.7 mm', '12.3 mm'],
          ['81 places', '2 mL', 'Red, yellow, blue, and green', '133 × 133 × 53 mm', 'Not specified'],
          ['100 places', '2 mL', 'Red, yellow, blue, and green', '133 × 133 × 53 mm', 'Not specified'],
          ['81 places', '5 mL', 'Red, yellow, blue, and green', '133 × 133 × 93 mm', 'Not specified']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'deep-well-plate',
    type: 'product',
    name: 'Deep Well Plate',
    category: 'Molecular Biology Labware',
    shortDescription: 'RNase DNase free PP deep well plates, square & round well options, compatible with automated liquid handlers, ideal for nucleic acid extraction, CRO and AIDD high-throughput screening.',
    description: 'RNase DNase free PP deep well plates, square & round well options, compatible with automated liquid handlers, ideal for nucleic acid extraction, CRO and AIDD high-throughput screening.',
    image: 'assets/deep-well-plate-overview.png',
    gallery: [
      'assets/deep-well-plate-overview.png',
      'assets/deep-well-plate-1.png',
      'assets/deep-well-plate-2.png',
      'assets/deep-well-plate-3.png',
      'assets/deep-well-plate-4.png',
      'assets/deep-well-plate-5.png',
      'assets/deep-well-plate-6.png',
      'assets/deep-well-plate-7.png',
      'assets/deep-well-plate-8.png',
      'assets/deep-well-plate-9.png',
      'assets/deep-well-plate-10.png',
      'assets/deep-well-plate-11.png',
      'assets/deep-well-plate-12.png',
      'assets/deep-well-plate-13.png',
      'assets/deep-well-plate-14.png',
      'assets/deep-well-plate-15.png',
      'assets/deep-well-plate-17.png',
      'assets/deep-well-plate-18.png'
    ],
    specGroups: [
      {
        title: '24-Well Deep Well Plates',
        headers: ['Well Shape', 'Bottom Shape', 'Well Opening Diameter'],
        footer: ['Material: Polypropylene (PP)'],
        rows: [
          ['Square', 'Conical', '16.7 mm'],
          ['Square', 'Round', '16.7 mm']
        ]
      },
      {
        title: '48-Well Deep Well Plate',
        headers: ['Well Shape', 'Bottom Shape', 'Well Opening Dimensions'],
        footer: ['Material: Polypropylene (PP)'],
        rows: [['Rectangular', 'U-bottom', '8 × 17 mm']]
      },
      {
        title: '96-Well Deep Well Plates',
        headers: ['Capacity', 'Well Shape', 'Bottom Shape'],
        footer: ['Material: Polypropylene (PP)'],
        rows: [
          ['0.4 mL', 'Square', 'Round'],
          ['0.5 mL', 'Square', 'Conical'],
          ['1.0 mL', 'Square', 'Conical'],
          ['1.2 mL', 'Square', 'Round'],
          ['1.6 mL', 'Square', 'Round'],
          ['1.3 mL', 'Round', 'Round'],
          ['2.0 mL', 'Round', 'Round'],
          ['2.2 mL', 'Round', 'Round'],
          ['2.2 mL', 'Square', 'Round']
        ]
      },
      {
        title: '384-Well Deep Well Plates',
        headers: ['Capacity', 'Well Shape', 'Bottom Shape'],
        footer: ['Material: Polypropylene (PP)'],
        rows: [
          ['120 μL', 'Round', 'Conical'],
          ['240 μL', 'Round', 'Conical']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'molecular-biology-labware',
    type: 'category',
    name: 'Molecular Biology Labware',
    category: 'Molecular Biology Labware',
    shortDescription: 'Reliable supplies for sample preparation, nucleic acid extraction, PCR, and molecular analysis.',
    description: 'Reliable supplies for sample preparation, nucleic acid extraction, PCR, and molecular analysis. Product options can be matched to your protocols and laboratory workflow.',
    image: 'assets/molecular-biology-labware.png',
    specs: [['Product Category','Molecular Biology Labware'],['Key Workflows','Sample preparation and nucleic acid extraction'],['Applications','PCR and molecular analysis'],['Product Options','Varies by item and workflow'],['Specifications','Available by selected product'],['Packaging','Varies by product']]
  },
  {
    id: 'erlenmeyer-shake-flask',
    type: 'product',
    name: 'Erlenmeyer Shake Flask',
    category: 'Cell Culture Labware',
    shortDescription: 'Polycarbonate Erlenmeyer shake flasks available in 125 mL and 250 mL capacities.',
    description: 'Polycarbonate Erlenmeyer shake flasks available in 125 mL and 250 mL capacities.',
    image: 'assets/erlenmeyer-shake-flask.png',
    gallery: ['assets/erlenmeyer-shake-flask.png', 'assets/erlenmeyer-shake-flask-2.png'],
    specGroups: [
      {
        title: 'Product Specifications',
        headers: ['Capacity', 'Material'],
        rows: [
          ['125 mL', 'Polycarbonate (PC)'],
          ['250 mL', 'Polycarbonate (PC)']
        ]
      }
    ],
    specs: []
  },
  {
    id: 't-flask',
    type: 'product',
    name: 'T-Flask',
    category: 'Cell Culture Labware',
    shortDescription: 'Polystyrene T-flasks with plasma TC surface, 0.22μm vent filter cap available, endotoxin-free, ideal for adherent cell scale-up, CRO and drug discovery.',
    description: 'Polystyrene T-flasks with plasma TC surface, 0.22μm vent filter cap available, endotoxin-free, ideal for adherent cell scale-up, CRO and drug discovery.',
    image: 'assets/t-flask.png',
    specGroups: [
      {
        title: 'Product Specifications',
        headers: ['Flask Size', 'Cap Type', 'Surface Treatment', 'Sterilization', 'Packing per Bag', 'Bags per Carton'],
        footer: [
          'Material: Polystyrene (PS)',
          'Sterile, RNase-free, DNase-free, and pyrogen-free',
          'Graduated flask body',
          'Individually packed in sterile resealable bags'
        ],
        rows: [
          ['T25', 'Vent cap (0.22 μm filter option)', 'TC-treated', 'Sterile', '10 pcs', '20'],
          ['T75', 'Vent cap (0.22 μm filter option)', 'TC-treated', 'Sterile', '5 pcs', '20'],
          ['T175', 'Vent cap (0.22 μm filter option)', 'TC-treated', 'Sterile', '5 pcs', '8'],
          ['T225', 'Vent cap (0.22 μm filter option)', 'TC-treated', 'Sterile', '5 pcs', '5'],
          ['T25', 'Sealed cap', 'TC-treated', 'Sterile', '10 pcs', '20'],
          ['T75', 'Sealed cap', 'TC-treated', 'Sterile', '5 pcs', '20']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'tc-treated-cell-culture-plate',
    type: 'product',
    name: 'TC-Treated Cell Culture Plate',
    category: 'Cell Culture Labware',
    shortDescription: 'Plasma TC-treated polystyrene cell culture plates, gamma sterile, endotoxin free, ideal for adherent cell culture, cytotoxicity assay, CRO and AIDD drug screening.',
    description: 'Plasma TC-treated polystyrene cell culture plates, gamma sterile, endotoxin free, ideal for adherent cell culture, cytotoxicity assay, CRO and AIDD drug screening.',
    image: 'assets/tc-treated-cell-culture-plate.png',
    specGroups: [
      {
        title: 'Product Specifications',
        headers: ['Well Format', 'Material', 'Surface Treatment', 'Sterilization', 'Packaging'],
        rows: [
          ['6-well', 'Polystyrene (PS)', 'Plasma TC-treated', 'Gamma sterilized', 'Individually sterile packed'],
          ['12-well', 'Polystyrene (PS)', 'Plasma TC-treated', 'Gamma sterilized', 'Individually sterile packed'],
          ['24-well', 'Polystyrene (PS)', 'Plasma TC-treated', 'Gamma sterilized', 'Individually sterile packed'],
          ['48-well', 'Polystyrene (PS)', 'Plasma TC-treated', 'Gamma sterilized', 'Individually sterile packed'],
          ['96-well', 'Polystyrene (PS)', 'Plasma TC-treated', 'Gamma sterilized', 'Individually sterile packed']
        ]
      }
    ],
    specs: []
  },
  {
    id: 'cell-culture-labware',
    type: 'category',
    name: 'Cell Culture Labware',
    category: 'Cell Culture Labware',
    shortDescription: 'Products for aseptic cell culture, maintenance, passaging, and related workflows.',
    description: 'Products for aseptic cell culture, maintenance, passaging, and related workflows. Available product formats and options vary by item.',
    image: 'assets/cell-culture-labware.png',
    specs: [['Product Category','Cell Culture Labware'],['Key Workflows','Aseptic cell culture and maintenance'],['Applications','Passaging and related workflows'],['Product Options','Varies by item and workflow'],['Specifications','Available by selected product'],['Packaging','Varies by product']]
  },
  {
    id: 'analytical-labware',
    type: 'category',
    name: 'Analytical Labware',
    category: 'Analytical Labware',
    shortDescription: 'Consumables for environmental monitoring, chemical and mineral analysis, and food testing.',
    description: 'Consumables for environmental monitoring, chemical and mineral analysis, and food testing. Product selection can be tailored to the test and sample requirements.',
    image: 'assets/analytical-labware.jpg',
    specs: [['Product Category','Analytical Labware'],['Key Workflows','Environmental monitoring and analysis'],['Applications','Chemical, mineral and food testing'],['Product Options','Varies by item and method'],['Specifications','Available by selected product'],['Packaging','Varies by product']]
  },
  {
    id: 'disposable-plastic-tissue-embedding-cassette',
    type: 'product',
    name: 'Disposable Plastic Tissue Embedding Cassette',
    category: 'Histology & Pathology Labware',
    shortDescription: 'Chemical resistant POM embedding cassettes, slanted labeling face, strip hole / micro mesh biopsy type, compatible with tissue processors, ideal for histopathology, IHC and CRO histology assay.',
    description: 'Chemical resistant POM embedding cassettes, slanted labeling face, strip hole / micro mesh biopsy type, compatible with tissue processors, ideal for histopathology, IHC and CRO histology assay.',
    image: 'assets/disposable-plastic-tissue-embedding-cassette.png',
    specs: []
  },
  {
    id: 'histology-pathology-labware',
    type: 'category',
    name: 'Histology & Pathology Labware',
    category: 'Histology & Pathology Labware',
    shortDescription: 'Supplies for specimen preparation, tissue processing, sectioning, staining, and examination.',
    description: 'Supplies for specimen preparation, tissue processing, sectioning, staining, and examination. Product types and specifications vary by selected item.',
    image: 'assets/histology-pathology-labware.png',
    specs: [['Product Category','Histology & Pathology Labware'],['Key Workflows','Specimen preparation and tissue processing'],['Applications','Sectioning, staining and examination'],['Product Options','Varies by item and procedure'],['Specifications','Available by selected product'],['Packaging','Varies by product']]
  },
  {
    id: 'food-agricultural-labware',
    type: 'category',
    name: 'Food & Agricultural Labware',
    category: 'Food & Agricultural Labware',
    shortDescription: 'Consumables for food quality, safety, composition, and agricultural product testing.',
    description: 'Consumables for food quality, safety, composition, and agricultural product testing. Product options vary according to sample type and testing workflow.',
    image: 'assets/food-agricultural-labware.jpg',
    specs: [['Product Category','Food & Agricultural Labware'],['Key Workflows','Food quality and safety testing'],['Applications','Composition and agricultural product testing'],['Product Options','Varies by item and method'],['Specifications','Available by selected product'],['Packaging','Varies by product']]
  }
];
