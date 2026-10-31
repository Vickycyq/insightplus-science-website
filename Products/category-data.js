const categoryPages = [
  {
    id: 'general-plasticware', title: 'General Plasticware', image: '../assets/general-plasticware.png',
    subtitle: 'Everyday laboratory plasticware for sample handling, storage, culture, and routine workflows.',
    products: [
      ['Bags', 'Ideal for transporting and storing solids, semi-solids, and liquids.'],
      ['Carboys', 'Available in plastic or shatter-resistant glass, including opaque and low-profile options. Highly resistant to chemicals.'],
      ['Plastic Bottles', 'Impact-resistant and compatible with a wide range of substances.'],
      ['Cell Culture Flasks', 'Available with vented, plug-seal, or phenolic resin caps for a secure closure.'],
      ['Centrifuge Tubes', 'One-piece tubes with conical bottoms or self-standing designs, easy-to-read surfaces, and smooth interiors.'],
      ['Tube Racks', 'Reinforced racks keep tubes supported, accessible, and organized.'],
      ['Cuvettes and Cells', 'Scratch-resistant options in quartz, plastic, polycarbonate, or glass, available in a range of sizes.'],
      ['Sealing Mats and Films', 'Quality seals and mats help protect laboratory products from contamination and minimize evaporation.'],
      ['Weighing Boats', 'Ideal for general weighing, evaporation, dispensing, and storage applications.'],
      ['Transfer Pipettes', 'Manual and automated designs support the safe transfer of liquids in a range of volumes.'],
      ['Petri Dishes', 'A wide selection of high-quality plates with translucent surfaces for high-resolution microscopic studies.'],
      ['Deep Well Plates', 'Designed for assays and storage, with multiple volumes and well shapes in SBS formats for automation.'],
      ['Cryovials', 'Cryogenic vials in a range of sizes and thread styles for secure storage of sensitive samples.'],
      ['Serological Pipettes', 'Reusable glass or disposable polystyrene pipettes aspirate and dispense milliliter volumes using the blow-out method.']
    ]
  },
  {
    id: 'glassware', title: 'Glassware', image: '../assets/glassware.jpg',
    subtitle: 'Precision glassware for measurement, preparation, transfer, heating, and routine laboratory work.',
    products: [
      ['Culture Tubes', 'Available with graduations, caps, or a permanent marking area for easy identification.'],
      ['Test Tubes', 'Durable borosilicate glass construction supports a wide working temperature range.'],
      ['Vials', 'Available in a variety of capacities and colors for collection, storage, and analysis.'],
      ['Bottles', 'A broad selection of quality glass bottles in a range of shapes and sizes.'],
      ['Flasks', 'A wide range of flask designs to meet laboratory needs.'],
      ['Volumetric Flasks', 'Multiple options for precise measurement in solution preparation and dilution.'],
      ['Graduated Cylinders', 'Borosilicate glass with durable graduations for long service in laboratory environments.'],
      ['Beakers', 'Graduated and non-graduated beakers for safely mixing, analyzing, and transferring contents.'],
      ['Serological Pipettes', 'Reusable glass or disposable polystyrene pipettes aspirate and dispense milliliter volumes using the blow-out method.'],
      ['Pasteur Pipettes', 'All-in-one devices that are inert to most fluids and provide flexible handling.'],
      ['Wide-Mouth Jars', 'Available in a range of sizes and shapes to suit different samples and workflows.'],
      ['Evaporating Dishes and Basins', 'Remove excess mixed solvents and concentrate substances for quantitative analysis.'],
      ['Crystallizing Dishes', 'Withstand the heat and solutions used to dissolve solids in common supersaturation processes.'],
      ['Funnels', 'A range of heavy-duty filtration funnels for collecting solid compounds from liquids.'],
      ['Glass Burettes', 'Dispense solutions in variable volumes for precise measurement.'],
      ['Distillation Glassware', 'Designed to withstand routine purification processes without breakage.'],
      ['Desiccators', 'Create and maintain a dry environment to help ensure sample stability.']
    ]
  },
  {
    id: 'anatomy-pathology-clinical-supplies', title: 'Anatomy, Pathology & Clinical Supplies', image: '../assets/histology-pathology-labware.png',
    subtitle: 'Specialized products for diagnostic, pathology, and clinical laboratory environments.',
    products: [
      ['Microscope Slides', 'A range of glass slides for cytology, histology, and general microbiology applications.'],
      ['Cover Glass and Slides', 'Disposable and reusable options in a variety of thicknesses, sizes, and pack formats.'],
      ['Hemocytometers', 'Multiple options for cell counting.'],
      ['Syringes and Needles', 'A broad selection of hypodermic needles and syringes.'],
      ['Medical Syringes', 'Made with medical-grade plastics, including polypropylene barrels and polyethylene plungers.'],
      ['Clinical Swabs', 'Absorbent applicators support reliable specimen collection and accurate diagnosis.'],
      ['Tongue Depressors', 'Designed to depress the tongue during oral and throat examinations for a clear view.'],
      ['Blood Lancets', 'Convenient, ready-to-use fingerstick lancets with ergonomic grips.'],
      ['Scalpel Blades', 'Sharp edges made from ground high-carbon or stainless steel for lasting sharpness and wear resistance.'],
      ['Specimen Collection Containers', 'Safe, high-quality containers for collecting, transporting, and examining specimens.'],
      ['Staining Jars', 'A range of options with trays and lids to help prevent evaporation.'],
      ['Staining Racks', 'Hold multiple microscope slides at once for efficient staining workflows.']
    ]
  },
  {
    id: 'filtration-consumables', title: 'Filtration Consumables', image: '../assets/filtration-consumables.jpg',
    subtitle: 'Filtration products and accessories for sample preparation, sterile filtration, and analysis.',
    products: [
      ['Filtration Manifolds', 'Designed to accommodate a range of filter holders and funnels.'],
      ['Filter Funnels', 'Heavy-duty options for collecting solid compounds from liquids.'],
      ['Bottle-Top Filters', 'Reliable and durable filters, ideal for cell culture and serum-containing media.'],
      ['Filter Capsules', 'A range of options designed for rapid processing and final filtration of aqueous samples.'],
      ['Syringe Filters', 'Available in a range of sizes to remove particles from samples before analysis.'],
      ['Vent Filters', 'Help prevent water and aerosols from entering sensitive equipment and protect the laboratory from airborne contaminants.'],
      ['Dialysis Tubing', 'Suitable for desalting, buffer exchange, removal of labeling reagents, cell growth, and other applications.'],
      ['Cartridge Filters', 'Durable synthetic housings help prevent particle adhesion to cartridge walls for more accurate analysis.'],
      ['Membrane Filters', 'Nearly inert to many chemical and biological reagents, supporting stable filtration of concentrated acids, bases, and oxidants.'],
      ['Tangential Flow Devices', 'A range of devices for concentrating and desalting sample solutions, with rapid biomolecule separation and purification.'],
      ['Tangential Flow Cassettes', 'Membranes are compatible with a range of chemicals and remain stable across a broad pH range.'],
      ['Filter Plates', 'Available with different filter media to suit a range of array applications.'],
      ['Filter Discs', 'A range of options for fast, efficient purification of liquids and gases.'],
      ['Filter Paper', 'Available in different grades for a variety of laboratory applications and routine work.'],
      ['Centrifugal Devices', 'Convenient, reliable devices for concentration, purification, and diafiltration of biological samples.']
    ]
  },
  {
    id: 'crucibles-metal-consumables', title: 'Crucibles & Metal Consumables', image: '../assets/crucibles-metal-consumables.jpg',
    subtitle: 'Durable tools and consumables for high-temperature work, sample handling, and material analysis.',
    products: [
      ['Crucibles', 'High-quality containers made from porcelain, glass, metal, and other materials, in tall or low forms with or without lids.'],
      ['Weighing Dishes', 'Available in flat-bottom round, hexagonal, and diamond shapes for organized weighing.'],
      ['Scalpels', 'High-quality reusable instruments or economical disposable cutting tools.'],
      ['Forceps', 'A range of options for safely transferring corrosive or extremely hot or cold samples.'],
      ['Tweezers', 'A selection of tweezers for general-purpose laboratory use.'],
      ['Scissors', 'High-quality stainless steel scissors for general cutting, suture removal, and dissection.'],
      ['Aluminum Seals and Caps', 'A broad selection to protect samples from external contamination and help contain hazardous bottle waste.'],
      ['Support Stands', 'Sets include stainless steel rods and bases, with plastic or cast-iron options.'],
      ['Sieves', 'Durable sieves are available with different mesh sizes to meet specific requirements.'],
      ['Magnetic Stir Bars', 'A range of options for efficient magnetic stirring of samples.']
    ]
  },
  {
    id: 'liquid-handling-consumables', title: 'Liquid Handling Consumables', image: '../assets/liquid-handling-consumables.jpg',
    subtitle: 'Products for precise, repeatable liquid transfer across manual and automated workflows.',
    products: [
      ['Manual Pipette Tips', 'Reliable, ergonomic tips support precise liquid transfer in laboratory experiments.'],
      ['Automated Pipette Tips', 'Precision-engineered tips for high-throughput screening and automated liquid handling platforms.'],
      ['Reservoirs', 'Reagent reservoirs for automated and manual applications support convenient refilling and consistent liquid levels.'],
      ['Bottle-Top Dispensers', 'Reliable, precise dispensers with broad chemical compatibility for confident liquid dispensing.'],
      ['Burettes', 'Provide precise liquid dispensing and titration control with high chemical resistance.'],
      ['Mechanical Pipettes', 'A broad range of easy-to-use pipettes designed for accurate, repeatable liquid handling.'],
      ['Transfer Pipettes', 'One-piece transfer pipettes help reduce contact with infectious materials and are available in reusable and disposable options.'],
      ['Automated Liquid Handling Platforms', 'Reliable workstations support fast, precise liquid transfer and more productive high-throughput workflows.'],
      ['Step Pipettes and Repeating Dispensers', 'Designed for fast, precise repetitive pipetting, including long dispensing sequences and volatile, dense, viscous, or foaming liquids.'],
      ['Pipette Controllers and Fillers', 'Adjustable aspiration and dispensing speeds support precise liquid handling across applications.'],
      ['Electronic Pipettes', 'Intuitive programming and ergonomic design support multiple dispensing modes and fast volume setting for high-throughput work.']
    ]
  },
  {
    id: 'electrochemistry-supplies', title: 'Electrochemistry Supplies', image: '../assets/electrochemistry-supplies.jpg',
    subtitle: 'Meters, probes, and accessories for measuring key chemical parameters in laboratory workflows.',
    products: [
      ['pH Electrodes', 'A broad range of pH electrodes for different applications.'],
      ['Ion-Selective Electrodes', 'Options include glass membrane, solid-state, gas-sensing, enzyme, and ion-exchange electrodes.'],
      ['Conductivity Electrodes', 'Electrodes for a range of environmental, industrial, and pharmaceutical applications.'],
      ['Dissolved Oxygen Electrodes', 'Measure dissolved oxygen in river water or determine biochemical oxygen demand (BOD) in wastewater samples.'],
      ['ORP Electrodes', 'Used in water treatment, food production, and pharmaceutical applications to monitor oxidation-reduction reactions.']
    ]
  }
];
